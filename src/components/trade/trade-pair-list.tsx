import Link from 'next/link';

import { TRADE_PAIRS } from '@/constants/tradePairs';

export default function TradePairList() {
  return (
    <ul className="space-y-3">
      {TRADE_PAIRS.map((pair) => (
        <li key={pair.symbol}>
          <Link href={pair.href} className="text-blue-500 hover:underline">
            {pair.displayName}
          </Link>
        </li>
      ))}
    </ul>
  );
}
