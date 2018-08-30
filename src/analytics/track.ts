import Analytics from './Analytics';
import EventModel from './EventModel';

export function track(analyticsService: Analytics, event: EventModel) {
  function decorator(target: any, key: string, descriptor: any) {
    if (descriptor === undefined) {
      descriptor = Object.getOwnPropertyDescriptor(target, key);
    }
    const originalMethod = descriptor.value;

    descriptor.value = function() {
      const result = originalMethod.apply(this, arguments);
      analyticsService.trackEvent(event);
      return result;
    };
    return descriptor;
  }
  return decorator;
}
