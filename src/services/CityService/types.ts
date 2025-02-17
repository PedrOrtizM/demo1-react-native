export interface IBase<T> {
  status: number;
  statusMsg: string;
  data: T[];
}

export interface ICityResponse {
  _id: string;
  name: string;
  country: string;
  description: string;
  image: string;
  currency: string;
  language: string;
  averageRating: number;
  itineraries: string[];
}
