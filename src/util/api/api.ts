import { AxiosResponse } from 'axios';
import axios from './initAxios';

export const get = (path: string, headers: object): Promise<AxiosResponse> =>
  axios.get(path, headers);

export const post = (
  path: string,
  body: object,
  headers: object,
): Promise<AxiosResponse> => axios.post(path, body, headers);
