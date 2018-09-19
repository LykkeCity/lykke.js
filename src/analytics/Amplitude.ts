import * as AmlitudeAnalytics from 'amplitude-js';
import Analytics from './Analytics';
import EventModel from './models/EventModel';

export default abstract class Amplitude extends Analytics {
  static setup(apiKey: string): void {
    AmlitudeAnalytics.init(apiKey);
  }

  static track = (event: EventModel): void => {
    AmlitudeAnalytics.logEvent(event.title, event);
  };
}
