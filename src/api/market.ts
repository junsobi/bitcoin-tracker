import { TickerPriceResponse } from '@/types/market';

import binanceApi from './axios';

// BTC/USDT 가격 조회
export const getTickerPrice = async (
  symbol: string = 'BTCUSDT'
): Promise<TickerPriceResponse> => {
  try {
    const response = await binanceApi.get<TickerPriceResponse>(
      '/api/v3/ticker/price',
      {
        params: { symbol },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch ticker price');
  }
};
