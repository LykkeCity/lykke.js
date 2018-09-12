export interface EventDetailsModel {
  category: string;
  location: string;
  type: string;
  info?: any;
}

export interface EventModel {
  title: string;
  details: EventDetailsModel;
}
