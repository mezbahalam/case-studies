import { useState } from 'react';
import {
  Terminal,
  Database,
  Zap,
  Minimize2,
  ArrowRight,
  Table,
  Cpu,
  RefreshCcw,
  ArrowLeftCircle
} from 'lucide-react';
import Footer from '../components/Footer';

interface CaseStudyProps {
  onBack: () => void;
}

const PolarsCaseStudy = ({ onBack }: CaseStudyProps) => {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('after');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-indigo-500/30 pb-20">
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 text-indigo-400 font-mono text-sm font-bold tracking-wider">
            <Terminal size={18} />
            <span>DATA_PIPELINE_CASE_STUDY</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-medium text-slate-400">
              Staff Engineer
            </span>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-indigo-500/40 bg-indigo-500/10 text-indigo-200 text-xs font-semibold hover:border-indigo-400 hover:bg-indigo-500/20 transition-colors"
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
            {['Performance', 'Type Safety', 'Rust/Polars', 'Data Unification', 'Platform'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-100 leading-tight">
            Data Pipeline Transformation: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500">
              From Rover to Polars
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            Migrated core CSV and analytics processing from the Ruby-based Rover library to the Rust-backed, parallel-processing Polars
            framework, establishing a high-performance, type-safe data backbone.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-red-500/30 transition-colors group">
            <div className="mb-4 p-3 bg-red-500/10 w-fit rounded-lg text-red-400 group-hover:text-red-300">
              <RefreshCcw size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Inconsistent Typing</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Ad-hoc CSV parsing meant numeric fields often landed as strings, forcing fragile, slow coercion at every call site.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-orange-500/30 transition-colors group">
            <div className="mb-4 p-3 bg-orange-500/10 w-fit rounded-lg text-orange-400 group-hover:text-orange-300">
              <Minimize2 size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Performance Ceiling</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Rover’s single-threaded path created linear bottlenecks—queue latency grew with input size and CI times ballooned.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-yellow-500/30 transition-colors group">
            <div className="mb-4 p-3 bg-yellow-500/10 w-fit rounded-lg text-yellow-400 group-hover:text-yellow-300">
              <Database size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Fragmentation</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Admin CSV, S3 sync, and Rake tasks each used different parsing APIs, preventing reuse of optimized data logic.
            </p>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-100">Architecture: The Polars Unification Layer</h2>
            <span className="text-xs font-mono text-indigo-500 bg-indigo-500/10 px-2 py-1 rounded">Parallel-First Data Layer</span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-full text-center mb-10">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Old State (Rover)</span>
                <div className="text-sm text-red-400 flex justify-center gap-10 mt-2">
                  <span>CSV Handler 1</span>
                  <ArrowRight size={16} className="text-slate-700 hidden sm:block" />
                  <span>S3 Fetcher</span>
                  <ArrowRight size={16} className="text-slate-700 hidden sm:block" />
                  <span>Analytics Service</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-10">
                <div className="h-[2px] w-12 bg-slate-700" />
                <Zap size={24} className="text-violet-400" />
                <div className="h-[2px] w-12 bg-slate-700" />
              </div>

              <div className="w-full text-center">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">New State (Polars)</span>
              </div>

              <div className="mt-4 grid md:grid-cols-3 gap-8 w-full max-w-4xl">
                <div className="flex flex-col items-center gap-3">
                  <div className="text-xs text-slate-500">Inputs</div>
                  <div className="w-40 h-20 bg-slate-950 border border-slate-700 p-3 rounded-xl shadow-lg text-center flex items-center justify-center flex-col">
                    <span className="text-sm font-bold text-slate-200">CSV, S3 JSON, API</span>
                    <span className="text-xs text-indigo-400 font-mono mt-1">Single Entry Point</span>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <div className="text-xs text-slate-500">Processing Core</div>
                  <div className="w-40 h-20 bg-violet-900 border border-violet-500/30 p-3 rounded-xl shadow-lg flex items-center justify-center flex-col">
                    <Table size={20} className="text-violet-300 mb-1" />
                    <span className="text-sm font-bold text-violet-200">Polars::DataFrame</span>
                    <span className="text-xs text-violet-400 font-mono mt-1">Rust & Parallel</span>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <div className="text-xs text-slate-500">Outputs</div>
                  <div className="w-40 h-20 bg-slate-950 border border-slate-700 p-3 rounded-xl shadow-lg text-center flex items-center justify-center flex-col">
                    <span className="text-sm font-bold text-slate-200">Analytics, DB Models</span>
                    <span className="text-xs text-indigo-400 font-mono mt-1">Unified Consumption</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-100">Implementation: The Vectorized Fix</h2>
            <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setActiveTab('before')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'before'
                    ? 'bg-slate-800 text-slate-200 shadow-sm'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                Before (Rover/Ruby)
              </button>
              <button
                onClick={() => setActiveTab('after')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'after'
                    ? 'bg-indigo-500/20 text-indigo-400 shadow-sm'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                After (Polars/Rust)
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
              <span className="text-slate-500 text-xs">app/services/data_import/inventory_processor.rb</span>
            </div>

            <div className="p-6 overflow-x-auto">
              {activeTab === 'before' ? (
                <code className="block text-slate-300 whitespace-pre">
{`# Legacy Rover Approach (Row-by-Row iteration)
def calculate_percentiles(rover_df)
  results = {}
  
  # Slow, Ruby-level loop over rows
  rover_df.vector_names.each do |col|
    values = rover_df[col].to_a.compact.map(&:to_f) # Fragile Type Coercion
    next if values.empty?
    
    # Custom, non-optimized math in Ruby
    p95 = calculate_95th_percentile(values) 
    results[col] = p95
  end
  results
end`}
                </code>
              ) : (
                <code className="block text-slate-300 whitespace-pre">
{`# Modern Polars Approach (Vectorized)
def calculate_percentiles(polars_df)
  # Efficient, single-line, Rust-level calculation:
  # Polars automatically handles type conversion and nulls
  polars_df
    .select(
      Polars.col.all.quantile(0.95).alias { |c| "#{c}_p95" }
    )
    .to_h
end

# RESULT: Orders of magnitude faster for large datasets.`}
                </code>
              )}
            </div>
          </div>
        </section>

        <section className="bg-slate-900/30 rounded-2xl p-8 border border-slate-800">
          <h2 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-3">
            <Cpu size={24} className="text-indigo-400" />
            Senior Engineering Analysis
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-indigo-400 font-mono font-bold text-sm uppercase tracking-wider">Performance Economics</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Polars’ multi-core, vectorized ops move the heavy lifting into Rust, slashing CPU time for every ingestion job.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-violet-400 font-mono font-bold text-sm uppercase tracking-wider">Type Enforcement</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Schema inference and typed columns removed dozens of string-to-float coercions, raising correctness and feature velocity.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-blue-400 font-mono font-bold text-sm uppercase tracking-wider">Platform Investment</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Standardizing on Polars::DataFrame gives one abstraction for all ingress/egress, paving the way for Lazy Execution and
                Arrow without another migration.
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Core Language', val: 'Rust', sub: 'Parallel Execution' },
            { label: 'Data Format', val: 'DataFrame', sub: 'Schema Enforced' },
            { label: 'Refactor Scope', val: 'Full Stack', sub: 'Importer to Analytics' },
            { label: 'Future Feature', val: 'Lazy API', sub: 'Query Optimization' }
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 p-6 rounded-xl text-center group hover:border-indigo-500/30 transition-colors"
            >
              <div className="text-3xl font-bold text-slate-100 mb-1 group-hover:text-indigo-400 transition-colors">{stat.val}</div>
              <div className="text-sm font-medium text-indigo-500/80 mb-2">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.sub}</div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PolarsCaseStudy;
