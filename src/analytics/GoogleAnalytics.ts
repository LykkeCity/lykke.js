import ReactGA, {InitializeOptions} from 'react-ga';
import Analytics from './Analytics';
import EventModel from './EventModel';

export default class GoogleAnalytics extends Analytics {
  static setup(trackingId: string, options?: InitializeOptions): void {
    this.instance = this.instance || new GoogleAnalytics(trackingId, options);
  }

  private constructor(trackingId: string, options?: InitializeOptions) {
    super();
    ReactGA.initialize(trackingId, options);
  }

  trackEvent = (event: EventModel): void => {
    ReactGA.event(event);
  };
}
