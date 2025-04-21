import axios from 'axios';
import environment from '@/config/environment';
import { getSession } from 'next-auth/react';
import { Session } from 'next-auth';

interface ISession extends Session {
  accessToken?: string;
}

const headers = {
  'Content-Type': 'application/json',
};

const instance = axios.create({
  baseURL: environment.API_URL,
  headers,
  timeout: 60 * 1000,
});

instance.interceptors.request.use(
  async (request) => {
    const session: ISession | null = await getSession();

    if (session && session.accessToken) {
      request.headers.Authorization = `Bearer ${session.accessToken}`;
    }

    return request;
  },
  (err) => Promise.reject(err)
);

instance.interceptors.response.use(
  (response) => response,
  (err) => Promise.reject(err)
);

export default instance;
