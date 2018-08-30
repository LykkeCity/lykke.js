import Analytics from './Analytics';
import EventModel from './EventModel';

export function track(event: EventModel, ...services: Analytics[]): any {
  return (
    target: object,
    key: string,
    descriptor: TypedPropertyDescriptor<any>
  ): any => {
    const originalMethod = descriptor.value;
    descriptor.value = (...args: any[]): any => {
      const result = originalMethod.apply(target, args);
      services.forEach(
        (Service: Analytics): void => {
          Service.track(event);
        }
      );
      return result;
    };
    return descriptor;
  };
}
