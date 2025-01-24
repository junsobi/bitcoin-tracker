import axios from 'axios';

const binanceApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BINANCE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터
binanceApi.interceptors.request.use(
  (config) => {
    // console.log(config.url,"config.url");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
binanceApi.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Binance API Error:', error);
    return Promise.reject(error);
  }
);

export default binanceApi;
