import { useState } from 'react';
import {
  Terminal,
  Database,
  ArrowRight,
  ArrowLeftCircle,
  ShieldAlert,
  Cpu,
  Zap,
  Server
} from 'lucide-react';
import Footer from '../components/Footer';

interface CaseStudyProps {
  onBack: () => void;
}

const BatchIngestionCaseStudy = ({ onBack }: CaseStudyProps) => {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('after');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30 pb-20">
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 text-blue-400 font-mono text-sm font-bold tracking-wider">
            <Terminal size={18} />
            <span>ENGINEERING_CASE_STUDY</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-medium text-slate-400">
              Staff Engineer
            </span>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-blue-500/40 bg-blue-500/10 text-blue-100 text-xs font-semibold hover:border-blue-400 hover:bg-blue-500/20 transition-colors"
            >
              <ArrowLeftCircle size={16} />
              Back to all studies
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-24">
        <section className="space-y-6 animate-fade-in max-w-4xl">
          <div className="flex flex-wrap gap-2 mb-6">
            {['Database Performance', 'Batch Processing', 'ACID Transactions', 'Geospatial Optimization'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-100 leading-tight">
            Scaling Write Throughput: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Transactional Batch Ingestion
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            Refactored row-by-row imports into a batch pipeline. Cut DB round-trips by orders of magnitude while keeping data consistent
            with atomic transactions.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-red-500/30 transition-colors group">
            <div className="mb-4 p-3 bg-red-500/10 w-fit rounded-lg text-red-400 group-hover:text-red-300">
              <Database size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Write Amplification</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              50k rows triggered 50k INSERTs plus 200k+ lookups, flooding WAL and locking tables.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-orange-500/30 transition-colors group">
            <div className="mb-4 p-3 bg-orange-500/10 w-fit rounded-lg text-orange-400 group-hover:text-orange-300">
              <ShieldAlert size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Partial Failure Risk</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              No transaction boundary meant a mid-run failure left orphaned records and inconsistent foreign keys.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-yellow-500/30 transition-colors group">
            <div className="mb-4 p-3 bg-yellow-500/10 w-fit rounded-lg text-yellow-400 group-hover:text-yellow-300">
              <Cpu size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Object Bloat</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Geocoding fetched full ActiveRecord objects per row just to grab IDs, blowing up memory under load.
            </p>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-100">Architecture: The Throughput Funnel</h2>
            <span className="text-xs font-mono text-blue-500 bg-blue-500/10 px-2 py-1 rounded">Bulk Operations</span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />

            <div className="relative z-10 flex flex-col md:flex-row justify-between gap-12 items-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-24 bg-slate-950 border border-slate-700 p-2 rounded-xl shadow-lg flex flex-col gap-1 justify-center items-center opacity-80">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="w-12 h-1 bg-slate-600 rounded-full" />
                  ))}
                </div>
                <div className="text-xs text-slate-500 font-mono">CSV Stream</div>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center relative h-48 border-l-2 border-r-2 border-slate-800 border-dashed px-8">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
                  <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-xl text-center relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Transaction Boundary
                    </div>
                    <div className="flex justify-center gap-2 mb-3">
                      <div className="w-8 h-8 bg-blue-500/20 rounded flex items-center justify-center border border-blue-500/50">5k</div>
                      <div className="w-8 h-8 bg-blue-500/20 rounded flex items-center justify-center border border-blue-500/50">5k</div>
                      <div className="w-8 h-8 bg-blue-500/20 rounded flex items-center justify-center border border-blue-500/50">5k</div>
                    </div>
                    <div className="text-xs text-blue-300 font-mono">ActiveRecord::Base.transaction</div>
                  </div>
                </div>

                <ArrowRight className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-600" />
                <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-600" />
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-32 h-32 bg-slate-950 border border-slate-700 rounded-full flex items-center justify-center shadow-2xl relative">
                  <div className="absolute inset-0 rounded-full border-4 border-blue-500/20 border-t-blue-500 animate-spin duration-[3000ms]" />
                  <Server className="text-slate-200" size={40} />
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold text-slate-200">PostgreSQL</div>
                  <div className="text-xs text-blue-400 font-mono">Bulk Insert</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-100">Implementation: The Loop Optimization</h2>
            <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setActiveTab('before')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'before'
                    ? 'bg-slate-800 text-slate-200 shadow-sm'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                Before (N+1)
              </button>
              <button
                onClick={() => setActiveTab('after')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'after'
                    ? 'bg-blue-500/20 text-blue-400 shadow-sm'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                After (Batched)
              </button>
            </div>
          </div>

          <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden font-mono text-sm shadow-2xl">
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              </div>
              <span className="text-slate-500 text-xs">app/queries/v2/import_inventory_query.rb</span>
            </div>

            <div className="p-6 overflow-x-auto">
              {activeTab === 'before' ? (
                <code className="block text-slate-300 whitespace-pre">
{`# PROBLEM: Row-by-row processing
inventories = build_inventories_from_rows

inventories.each do |inv|
  inv.save!
  inv.city_inventories.create!(...)
end`}
                </code>
              ) : (
                <code className="block text-slate-300 whitespace-pre">
{`# SOLUTION: Batching & Transactions
ActiveRecord::Base.transaction do
  inventories.each_slice(5000) do |slice|
    result = Inventory.insert_all!(slice.map { |i| i.except(:city_data) })
    CityInventory.insert_all!(build_city_mappings(slice, result.rows))
  end
end`}
                </code>
              )}
            </div>
          </div>
        </section>

        <section className="bg-slate-900/30 rounded-2xl p-8 border border-slate-800">
          <h2 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-3">
            <Zap size={24} className="text-blue-400" />
            Senior Engineering Analysis
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-blue-400 font-mono font-bold text-sm uppercase tracking-wider">Throughput Engineering</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                The bottleneck was DB I/O. Batching amortized round-trip cost over 5k rows instead of paying it per row.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-cyan-400 font-mono font-bold text-sm uppercase tracking-wider">Data Consistency</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Wrapping the entire flow in a transaction kept inventories and their city mappings atomic—no orphaned rows.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-indigo-400 font-mono font-bold text-sm uppercase tracking-wider">Resource Management</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Memoized lookups for common dimensions (e.g., 1920x1080) dropped repeated reads to near zero.
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Query Reduction', val: '99.9%', sub: 'Via Batching' },
            { label: 'Consistency', val: 'Atomic', sub: 'Transactional' },
            { label: 'Batch Size', val: '5,000', sub: 'Tunable Slice' },
            { label: 'Lookups', val: 'O(1)', sub: 'Memoized' }
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 p-6 rounded-xl text-center group hover:border-blue-500/30 transition-colors"
            >
              <div className="text-3xl font-bold text-slate-100 mb-1 group-hover:text-blue-400 transition-colors">{stat.val}</div>
              <div className="text-sm font-medium text-blue-500/80 mb-2">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.sub}</div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BatchIngestionCaseStudy;
