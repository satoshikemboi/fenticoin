
import React from 'react';
import Navbar from './Navbar';

const BotCard = ({ title, schedule, description, risk, performance, status, buttonText, primaryAction }) => {
  const statusColors = {
    Active: 'bg-green-100 text-green-600',
    Inactive: 'bg-gray-100 text-gray-500',
    Configured: 'bg-blue-100 text-blue-600',
  };

  return (
    <div className="border-2 border-green-500/30 rounded-xl p-5 bg-white shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-lg text-slate-800">{title}</h3>
          <span className={`px-3 py-1 rounded text-xs font-semibold ${statusColors[status]}`}>
            {status}
          </span>
        </div>
        <p className="text-sm text-slate-500 mb-3">{schedule} • DCA</p>
        <p className="text-sm text-slate-600 mb-6">{description}</p>
      </div>

      <div>
        <div className="flex justify-between text-xs mb-4">
          <span className="text-slate-400">Risk: <span className={risk === 'Low' ? 'text-green-500' : 'text-orange-500'}>{risk}</span></span>
          <span className="text-slate-400">Performance: <span className="text-green-500 font-bold">{performance}</span></span>
        </div>
        <div className="flex gap-3">
          <button className="flex-1 py-2 border border-slate-200 rounded-lg font-semibold text-slate-700 hover:bg-slate-50 transition">
            Configure
          </button>
          <button className="flex-1 py-2 bg-emerald-400 text-white rounded-lg font-semibold hover:bg-emerald-500 transition">
            {primaryAction}
          </button>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <div className="max-w-7xl mx-auto flex gap-8">
        
        {/* Sidebar */}
        <aside className="w-64 space-y-8">
          <section>
            <h2 className="font-bold text-slate-800 mb-4">Bot Categories</h2>
            <div className="space-y-2">
              {['Dollar-Cost Averaging', 'Grid Trading', 'Arbitrage', 'Scalping', 'Signal-Based'].map((cat, i) => (
                <button 
                  key={cat}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition ${i === 0 ? 'bg-emerald-400 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </section>

          <section className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
            <h2 className="font-bold text-slate-800 mb-4 text-sm">Bot Performance</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1"><span>Best Performer</span><span className="text-green-500 font-bold">+10.2%</span></div>
                <div className="text-sm font-bold text-slate-700">News Sentiment Bot</div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1"><span>Most Active</span><span className="text-slate-800 font-bold">143 trades</span></div>
                <div className="text-sm font-bold text-slate-700">BTC Micro Scalper</div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1"><span>Recent Success</span><span className="text-green-500 font-bold">+3.8%</span></div>
                <div className="text-sm font-bold text-slate-700">ETH DCA Pro</div>
              </div>
            </div>
          </section>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-bold text-slate-900">Dollar-Cost Averaging Bots</h1>
            <button className="bg-emerald-400 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-emerald-500">
              Create DCA Bot
            </button>
          </div>
          <p className="text-slate-500 mb-8">Regular purchases of assets regardless of price</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <BotCard 
              title="Bitcoin Accumulation" 
              schedule="Weekly" 
              description="Dollar-cost averaging into Bitcoin on a weekly basis"
              risk="Low" performance="+2.4%" status="Active" primaryAction="View Bot"
            />
            <BotCard 
              title="ETH DCA Pro" 
              schedule="Daily" 
              description="Dynamic DCA based on RSI and volume indicators"
              risk="Medium" performance="+3.7%" status="Inactive" primaryAction="Configure & Run"
            />
            <BotCard 
              title="Multi-Coin DCA" 
              schedule="Monthly" 
              description="DCA into top 5 cryptocurrencies by market cap"
              risk="Medium" performance="+1.9%" status="Configured" primaryAction="Run Bot"
            />
            <BotCard 
              title="Cycle-Based Accumulation" 
              schedule="Weekly" 
              description="DCA more during market dips, less during highs"
              risk="Medium" performance="+4.5%" status="Inactive" primaryAction="Configure & Run"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;