import * as AmplitudeJS from 'amplitude-js';
import Analytics from './Analytics';
import EventModel from './EventModel';

export default class Amplitude extends Analytics {
  static setup(trackingId: string): void {
    this.instance = this.instance || new Amplitude(trackingId);
  }

  private constructor(apiKey: string) {
    super();
    AmplitudeJS.init(apiKey);
  }

  trackEvent = (event: EventModel): void => {
    AmplitudeJS.logEvent(event.category, event);
  };
}
