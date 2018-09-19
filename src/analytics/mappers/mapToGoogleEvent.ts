import ReactGA from 'react-ga';
import EventModel from '../models/EventModel';

export const mapToGoogleEvent = (event: EventModel): ReactGA.EventArgs => {
  return {
    action: event.title,
    category: event.details.location,
    label: event.details.info
  };
};
