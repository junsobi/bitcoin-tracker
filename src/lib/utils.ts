import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//(BTC_USDT -> BTCUSDT)
export const formatSymbol = (symbol: string): string => {
  return symbol.replace('_', '');
};

// 금액: 소수점 두 자리까지 표시
export const formatPrice = (price: string): string => {
  return parseFloat(price).toFixed(2);
};
