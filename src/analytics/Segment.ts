import Analytics from './Analytics';
import EventModel from './models/EventModel';

declare global {
  interface Window {
    analytics: any;
  }
}

export default abstract class Segment extends Analytics {
  static setup = (key: string): void => {
    Segment.loadCdn();
    window.analytics.load(key);
  };

  static track = (event: EventModel): void => {
    if (window && window.analytics && window.analytics.track) {
      window.analytics.track(event.title, event);
    }
  };

  static identify = (traits: any): void => {
    if (window && window.analytics && window.analytics.identify) {
      window.analytics.identify(traits);
    }
  };

  static loadCdn = (): void => {
    const analytics = (window.analytics = window.analytics || []);
    if (!analytics.initialize && !analytics.invoked) {
      analytics.invoked = true;
      analytics.load = (writeKey: string, options?: any) => {
        const script = document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        script.src =
          'https://cdn.segment.com/analytics.js/v1/' +
          writeKey +
          '/analytics.min.js';
        const firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode!.insertBefore(script, firstScript);
        analytics._loadOptions = options;
      };
    }
  };
}
