import {EventModel} from './EventModel';

export default abstract class Analytics {
  abstract setup(key: string): void;

  abstract track(event: EventModel): void;
}
