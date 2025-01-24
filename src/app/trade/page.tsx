import TradePairList from '@/components/trade/trade-pair-list';
import TradeLayout from '@/layouts/trade-layout';

export default function TradeHomePage() {
  return (
    <TradeLayout>
      <TradePairList />
    </TradeLayout>
  );
}
