export interface IContactMessagePayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface IMessageResponse {
  _id: string;
}
