import Footer from '@/components/sections/footer/footer';
import Header from '@/components/sections/header/header';
import TradePairList from '@/components/trade/trade-pair-list';

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <TradePairList />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
