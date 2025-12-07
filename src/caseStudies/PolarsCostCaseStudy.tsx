import { useState } from 'react';
import { Cpu, CheckCircle2, Scale, DollarSign, ArrowRight, Settings, ArrowLeftCircle } from 'lucide-react';
import Footer from '../components/Footer';

interface CaseStudyProps {
  onBack: () => void;
}

const PolarsCostCaseStudy = ({ onBack }: CaseStudyProps) => {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('after');

  const metrics = [
    { value: '75%', label: 'Latency Reduction', sub: 'Core processing tasks (12M rows)' },
    { value: '52%', label: 'CI Time Saved', sub: 'Reduced queue time for data jobs' },
    { value: '2x', label: 'Type Safety', sub: 'Guaranteed schema end-to-end' },
    { value: '2.5x', label: 'Memory Efficiency', sub: 'Lower peak worker usage' }
  ];

  const beforeCode = `
# Legacy Rover Approach (Row-by-Row Iteration)

def process_inventory_data(rover_df, product_lookup)
  rover_df.map_rows do |row|
    product = Product.find_by(sku: row[:sku_id])
    inventory_count = row[:count].to_i

    if product && inventory_count > 0
      ProductInventory.create!(
        product_id: product.id,
        stock: inventory_count * 1.05
      )
    end
  end
end
`;

  const afterCode = `
# Modern Polars Approach (Vectorized & Transactional)

def process_inventory_data(polars_df, product_lookup)
  transformed_df = polars_df.lazy()
    .with_columns([
      (pl.col("count").cast(pl.Float64) * 1.05).alias("final_stock"),
      pl.col("sku_id").map_dict(product_lookup).alias("product_id")
    ])
    .filter(pl.col("product_id").is_not_null())
    .collect()

  ProductInventory.insert_all(transformed_df.to_hash_of_rows)
end
`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-indigo-500/30 pb-20">
      <div className="bg-slate-900 border-b-4 border-indigo-600 shadow-xl sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 text-indigo-400 font-mono text-sm font-bold tracking-widest uppercase">
            <Settings size={18} />
            <span>PLATFORM CASE STUDY</span>
          </div>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-indigo-500/40 bg-indigo-500/10 text-indigo-100 text-xs font-semibold hover:border-indigo-400 hover:bg-indigo-500/20 transition-colors"
          >
            <ArrowLeftCircle size={16} />
            Back to all studies
          </button>
        </div>
      </div>

      <header className="bg-slate-900 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">
          <div className="flex items-center gap-4 text-indigo-400 font-mono text-sm font-bold tracking-widest uppercase">
            <Settings size={20} />
            <span>Platform Refactoring Report: Data Plane</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-100 leading-tight">
            De-Risking Scale: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500">
              $15k Cost Avoidance via Polars Vectorization
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-4xl leading-relaxed">
            Migration of the core data processing layer from single-threaded Rover to Rust-backed Polars to achieve horizontal
            scalability, strong typing, and lower compute spend as data volume grows.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((stat, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 p-6 rounded-xl text-center shadow-lg group hover:border-indigo-500 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-indigo-400 mb-2 group-hover:text-slate-100 transition-colors">
                {stat.value}
              </div>
              <div className="text-md font-bold text-slate-100 mb-1">{stat.label}</div>
              <div className="text-xs text-slate-500 italic">{stat.sub}</div>
            </div>
          ))}
        </section>

        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-slate-100 border-b border-indigo-600/50 pb-2">Architectural Imperative</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4 p-5 bg-slate-900 rounded-lg border border-slate-800 shadow-md">
              <div className="flex items-center gap-2 text-red-400">
                <DollarSign size={20} />
                <h3 className="font-mono font-bold text-sm uppercase tracking-wider">Latency as Cost</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Ruby/GIL-bound, row-by-row processing directly inflated queue and CI runtimes, scaling cost with data volume. Polars shifts
                the work to parallel Rust threads for immediate efficiency gains.
              </p>
            </div>

            <div className="space-y-4 p-5 bg-slate-900 rounded-lg border border-slate-800 shadow-md">
              <div className="flex items-center gap-2 text-violet-400">
                <CheckCircle2 size={20} />
                <h3 className="font-mono font-bold text-sm uppercase tracking-wider">Systemic Type Integrity</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Ad-hoc coercions vanished—Polars enforces schema on ingestion and carries strong typing through the pipeline, eliminating
                silent drift.
              </p>
            </div>

            <div className="space-y-4 p-5 bg-slate-900 rounded-lg border border-slate-800 shadow-md">
              <div className="flex items-center gap-2 text-blue-400">
                <Scale size={20} />
                <h3 className="font-mono font-bold text-sm uppercase tracking-wider">Platform Decoupling</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Consolidating on Polars::DataFrame decouples sources (CSV, S3, API) from processing, paving the way for Lazy API and Arrow
                without further migrations.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-slate-100">Architectural Pivot: Fragmentation to Unification</h2>
          <p className="text-slate-400 max-w-4xl">
            Three disparate ingestion points now normalize immediately into Polars DataFrames, guaranteeing type consistency and enabling a
            shared, parallel processing core.
          </p>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 relative overflow-hidden text-center">
            <div className="mt-6 text-sm text-slate-500 italic">
              Inputs (CSV, S3, API) converge into a single Polars::DataFrame, then flow through vectorized transforms before writing to
              analytics and DB consumers.
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-slate-100">Technical Delta: Eliminating N+1 via Vectorization</h2>
            <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setActiveTab('before')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'before' ? 'bg-slate-800 text-slate-200 shadow-sm' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                Before (Rover/Row-Iteration)
              </button>
              <button
                onClick={() => setActiveTab('after')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'after' ? 'bg-indigo-500/20 text-indigo-400 shadow-sm' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                After (Polars/Vectorization)
              </button>
            </div>
          </div>

          <div className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden font-mono text-sm shadow-2xl">
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              </div>
              <span className="text-slate-500 text-xs">app/services/data_import/inventory_processor.rb</span>
            </div>

            <div className="p-6 overflow-x-auto">
              {activeTab === 'before' ? (
                <code className="block text-slate-300 whitespace-pre text-[0.85rem] leading-6">{beforeCode}</code>
              ) : (
                <code className="block text-slate-300 whitespace-pre text-[0.85rem] leading-6">{afterCode}</code>
              )}
            </div>
          </div>
          <p className="text-sm text-slate-500 italic max-w-4xl pt-2">
            Moving from O(N) DB lookups and inserts to a single vectorized transform plus batch insert underpins the 75% latency win.
          </p>
        </section>

        <section className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700 shadow-xl">
          <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
            <Cpu size={24} className="text-indigo-400" />
            CTO Takeaway: Long-Term Value
          </h2>

          <ul className="space-y-4 text-slate-300">
            <li className="flex items-start gap-3">
              <ArrowRight size={20} className="text-indigo-400 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-slate-100">Cost Avoidance:</strong> Higher throughput avoids needing larger CI workers, saving budget for the next 18 months.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <ArrowRight size={20} className="text-indigo-400 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-slate-100">Maintenance Decoupling:</strong> Polars is hidden behind a stable API—format changes (e.g., Parquet) are isolated to the data plane.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <ArrowRight size={20} className="text-indigo-400 mt-1 flex-shrink-0" />
              <div>
                <strong className="text-slate-100">Developer Confidence:</strong> Strong typing and centralized logic shrink the bug surface area and speed feature work.
              </div>
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PolarsCostCaseStudy;
