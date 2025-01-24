import { getTickerPrice } from '@/api/market';
import { createMetadata } from '@/lib/metadata';
import { formatPrice } from '@/lib/utils';
import { formatSymbol } from '@/lib/utils';
import { TickerPriceResponse } from '@/types/market';

export async function generateMetadata(props: {
  params: Promise<{ symbol: string }>;
}) {
  const params = await props.params;
  const { symbol } = params;
  const formattedSymbol = formatSymbol(symbol);
  const title = `Trade ${formattedSymbol} | Live Prices & Charts`;
  const description = `Get real-time updates on ${formattedSymbol} trading with charts, market data, and price analysis.`;

  return createMetadata({
    title,
    description,
    openGraph: {
      url: `/trade/${symbol}`,
      title,
      description,
    },
    twitter: {
      title,
      description,
    },
  });
}

interface TradePageProps {
  params: Promise<{ symbol: string }>;
}

export default async function TradePage({ params }: TradePageProps) {
  const { symbol } = await params;

  const formattedSymbol = symbol.replace('_', '');
  const priceData: TickerPriceResponse = await getTickerPrice(formattedSymbol);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Trading {symbol.replace('_', '/')}</h1>
      <p>Current Price: ${formatPrice(priceData.price)}</p>
    </div>
  );
}
