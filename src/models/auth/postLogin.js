import axios from 'axios';
import { xmServiceBaseUrl } from '../../config';

export function postLogin (credentials) {
  return axios
  .post(`${xmServiceBaseUrl}/login`, credentials)
  .then((res) => res.data)
}