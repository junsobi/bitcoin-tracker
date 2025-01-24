import { createMetadata } from '@/lib/metadata';

const title = 'Trade';
const description = 'Trade cryptocurrencies and track live prices.';

export const metadata = createMetadata({
  title,
  description,
  openGraph: {
    url: '/trade',
    title,
    description,
  },
  twitter: {
    title,
    description,
  },
});

export default function TradeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
