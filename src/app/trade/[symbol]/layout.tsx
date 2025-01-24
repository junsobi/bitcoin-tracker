// import { createMetadata } from '@/lib/metadata';
// import { formatSymbol } from '@/lib/utils';

// export function generateMetadata({ params }: { params: { symbol: string } }) {
//   const formattedSymbol = formatSymbol(params.symbol);
//   const title = `Trade ${formattedSymbol} | Live Prices & Charts`;
//   const description = `Get real-time updates on ${formattedSymbol} trading with charts, market data, and price analysis.`;

//   return createMetadata({
//     title,
//     description,
//     openGraph: {
//       url: `/trade/${params.symbol}`,
//       title,
//       description,
//     },
//     twitter: {
//       title,
//       description,
//     },
//   });
// }

export default function TradeSymbolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold text-center">Trade Market</h1>
      <p className="text-center text-gray-600">
        Get real-time data and analysis on various trading pairs.
      </p>
      <div>{children}</div>
    </div>
  );
}
