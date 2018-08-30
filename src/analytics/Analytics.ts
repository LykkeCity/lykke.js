import EventModel from './EventModel';

export default abstract class Analytics {
  static getInstance(): Analytics {
    return this.instance;
  }

  protected static instance: Analytics;

  abstract trackEvent(event: EventModel): void;
}
