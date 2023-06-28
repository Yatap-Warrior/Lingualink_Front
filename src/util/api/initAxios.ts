import axios, { InternalAxiosRequestConfig } from 'axios';

const initAxios = axios.create({
  // 요청할 백엔드 endpoint 주소
  baseURL: 'http://localhost:8080',
});

initAxios.interceptors.request.use(
  // 인터셉트 default
  (config: InternalAxiosRequestConfig<unknown>) => config,
);

initAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response &&
      error.response.status === 401 &&
      error.response.request.responseURL !== '예외 주소'
    ) {
      console.log('오류났을 때 상태코드 or url로 인터셉트하여 처리');
    }
    return Promise.reject(error);
  },
);

export default initAxios;
