import ReactGA, {InitializeOptions} from 'react-ga';
import Analytics from './Analytics';
import {mapToGoogleEvent} from './mappers/mapToGoogleEvent';
import EventModel from './models/EventModel';

export default abstract class GoogleAnalytics extends Analytics {
  static setup(trackingId: string, options?: InitializeOptions): void {
    ReactGA.initialize(trackingId, options);
  }

  static pageview(path: string): void {
    ReactGA.pageview(path);
  }

  static track = (event: EventModel): void => {
    ReactGA.event(mapToGoogleEvent(event));
  };
}
