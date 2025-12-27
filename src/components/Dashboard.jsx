
import React from 'react';

// Reusable Watchlist Item Component
const WatchlistItem = ({ name, symbol, price, change, isPositive, color }) => (
  <div className={`flex items-center justify-between p-3 mb-2 rounded-xl bg-white border-l-4 ${color}`}>
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-600">
        {symbol[0]}
      </div>
      <div>
        <div className="font-bold text-sm text-slate-800">{symbol}</div>
        <div className="text-xs text-slate-400">{name}</div>
      </div>
    </div>
    <div className="text-right">
      <div className="font-bold text-sm text-slate-800">${price}</div>
      <div className={`text-xs ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {isPositive ? '↑' : '↓'} {change}%
      </div>
    </div>
  </div>
);

// Reusable Crypto Portfolio Card Component
const PortfolioCard = ({ name, symbol, price, change, amount, value }) => (
  <div className="bg-white border border-green-50 rounded-2xl p-5 shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
          {symbol[0]}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">{symbol}</span>
            <span className="text-xs bg-green-100 text-green-600 px-1.5 py-0.5 rounded">+{change}%</span>
          </div>
          <div className="text-xs text-slate-400">{name}</div>
        </div>
      </div>
      <div className="text-right">
        <div className="font-bold text-slate-800">${price}</div>
        <div className="text-xs text-slate-400">Amount: {amount} {symbol}</div>
        <div className="font-bold text-sm text-slate-700">Value: ${value}</div>
      </div>
    </div>
    
    <div className="flex justify-between items-center mt-6">
      <button className="bg-emerald-400 text-white px-6 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-emerald-500 transition">
        <span>↗</span> Trade
      </button>
      <span className="text-[10px] text-slate-300 uppercase tracking-tighter">Last updated: 7:51:25 PM</span>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-slate-50 px-32 pt-6 gap-6">
      
      {/* Sidebar: Watchlist */}
      <div className="w-80 shrink-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-xl text-slate-800">Watchlist</h2>
          <button className="text-emerald-500 text-sm font-semibold hover:underline">See All &gt;</button>
        </div>
        
        <div className="space-y-1">
          <WatchlistItem symbol="BTC" name="Bitcoin" price="1.00" change="0.07" isPositive={false} color="border-red-500" />
          <WatchlistItem symbol="ETH" name="ZEC" price="1.00" change="0.07" isPositive={false} color="border-red-500" />
          <WatchlistItem symbol="ETH" name="Ethereum" price="2920.98" change="12.07" isPositive={true} color="border-green-500" />
          <WatchlistItem symbol="ZEC" name="ZEC" price="127.89" change="0.08" isPositive={true} color="border-green-500" />
          <WatchlistItem symbol="BNB" name="Binance" price="1.00" change="0.00" isPositive={true} color="border-green-500" />
          <WatchlistItem symbol="SOL" name="Solana" price="841.01" change="0.00" isPositive={true} color="border-green-500" />
        </div>
      </div>

      {/* Main Content: Portfolio */}
      <div className="flex-1">
        <h2 className="font-bold text-xl text-slate-800 mb-4">Your Crypto</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <PortfolioCard symbol="BTC" name="Bitcoin" price="87512.40" change="0.36" amount="1.5" value="798.2" />
          <PortfolioCard symbol="ETH" name="Ethereum" price="2920.48" change="0.66" amount="0.35" value="730.25" />
          <PortfolioCard symbol="ETH" name="Ethereum" price="840.00" change="1.86" amount="3" value="78.13" />
          <PortfolioCard symbol="BNB" name="Binance" price="120.87" change="1.36" amount="7.5" value="726.15" />
          <PortfolioCard symbol="DOT" name="Polkadot" price="1.81" change="1.30" amount="10.7" value="18.11" />
          <PortfolioCard symbol="SIL" name="Ripple" price="1.84" change="1.64" amount="11.5" value="107.75" />
        </div>
      </div>

    </div>
  );
};

export default Dashboard;