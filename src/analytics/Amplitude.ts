import {init, logEvent} from 'amplitude-js';
import Analytics from './Analytics';
import EventModel from './EventModel';

export default abstract class Amplitude extends Analytics {
  static setup(apiKey: string): void {
    init(apiKey);
  }

  static track = (event: EventModel): void => {
    logEvent(event.category, event);
  };
}
