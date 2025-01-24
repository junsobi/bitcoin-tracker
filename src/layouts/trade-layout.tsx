export default function TradeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Select a trading pair</h1>
      <p>Choose a market to start trading.</p>

      {children}
    </div>
  );
}
