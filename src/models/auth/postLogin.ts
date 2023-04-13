import axios from 'axios';
import { xmServiceBaseUrl } from '../../config';
import { ICredentials, ILoginSuccessData } from './useAuth';

export function postLogin(
  credentials: ICredentials
): Promise<ILoginSuccessData> {
  return axios
    .post(`${xmServiceBaseUrl}/login`, credentials)
    .then((res) => res.data);
}
