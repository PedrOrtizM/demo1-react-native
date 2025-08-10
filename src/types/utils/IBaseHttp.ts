export interface IBaseHttp<T> {
  status: number;
  statusMsg: string;
  data: T;
}
