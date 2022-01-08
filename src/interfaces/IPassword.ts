import { StringifyOptions } from "querystring";

export interface IPassword {
  _id: string;
  title: string;
  password: string;
  tag: string;
  userID: string;
  createdAt?: string;
}
