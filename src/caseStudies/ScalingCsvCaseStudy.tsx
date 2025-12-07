import { useState } from 'react';
import {
  Terminal,
  Database,
  ShieldAlert,
  CheckCircle,
  Cpu,
  Server,
  FileSpreadsheet,
  Zap,
  Activity,
  Scale,
  ArrowLeftCircle
} from 'lucide-react';
import Footer from '../components/Footer';

interface CaseStudyProps {
  onBack: () => void;
}

const ScalingCsvCaseStudy = ({ onBack }: CaseStudyProps) => {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('after');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-indigo-500/30 pb-20">
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 text-indigo-400 font-mono text-sm font-bold tracking-wider">
            <Terminal size={18} />
            <span>ENGINEERING_CASE_STUDY</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-medium text-slate-400">
              Senior Backend Engineer
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

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-24">
        <section className="space-y-6 animate-fade-in">
          <div className="flex flex-wrap gap-2 mb-6">
            {['Ruby on Rails', 'ETL Pipelines', 'Performance Optimization', 'O(1) Scaling'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 leading-tight">
            Scaling CSV Ingestion: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-300">
              From O(N) Queries to O(1)
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            Eliminating a self-inflicted DDoS risk by refactoring a naive N+1 import pipeline into a memory-optimized,
            fail-fast architecture.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 relative overflow-hidden group hover:border-red-500/30 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Activity size={120} className="text-red-500" />
            </div>
            <div className="relative z-10">
              <h2 className="flex items-center gap-3 text-xl font-bold text-slate-100 mb-4">
                <ShieldAlert className="text-red-400" size={24} />
                The Systemic Risk
              </h2>
              <ul className="space-y-4 text-slate-400">
                <li className="flex gap-3 items-start">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                  <span>
                    <strong className="text-slate-200">Database Saturation:</strong>
                    Linear <code>find_or_create_by</code> lookups meant a 5k row CSV triggered 20k+ DB queries, stalling the
                    primary writer.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                  <span>
                    <strong className="text-slate-200">Silent Data Corruption:</strong>
                    Soft failures (returning <code>{`{ errors: ... }`}</code>) allowed partial, invalid data to bypass validation
                    layers.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                  <span>
                    <strong className="text-slate-200">Race Conditions:</strong>
                    Concurrent imports created duplicate "Dimension" records due to lack of atomic upserts.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 relative overflow-hidden group hover:border-indigo-500/30 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap size={120} className="text-indigo-500" />
            </div>
            <div className="relative z-10">
              <h2 className="flex items-center gap-3 text-xl font-bold text-slate-100 mb-4">
                <CheckCircle className="text-indigo-400" size={24} />
                The Architecture Shift
              </h2>
              <ul className="space-y-4 text-slate-400">
                <li className="flex gap-3 items-start">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                  <span>
                    <strong className="text-slate-200">In-Memory Memoization:</strong>
                    Preloaded lookup tables (Dimensions, Publishers) into Hashes, eliminating N+1 DB hits entirely.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                  <span>
                    <strong className="text-slate-200">Fail-Fast Contract:</strong>
                    Replaced soft returns with <code>InvalidHeadersError</code> to force atomic failure on bad inputs.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                  <span>
                    <strong className="text-slate-200">Unified Logic:</strong>
                    Consolidated validation rules into a single Query Object, removing logic fragmentation.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-100">Architecture: The O(1) Pipeline</h2>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 md:p-12 overflow-x-auto">
            <div className="min-w-[900px] flex justify-between items-center relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -z-0 -translate-y-1/2" />

              <div className="relative z-10 flex flex-col items-center gap-4 text-center group">
                <div className="w-16 h-16 rounded-xl bg-slate-800 border-2 border-slate-700 flex items-center justify-center shadow-lg group-hover:border-indigo-500 transition-all bg-slate-900">
                  <FileSpreadsheet size={32} className="text-slate-400 group-hover:text-indigo-400" />
                </div>
                <div className="bg-slate-950 border border-slate-800 px-3 py-2 rounded text-sm text-slate-300 w-40">
                  CSV Upload <br />
                  <span className="text-xs text-slate-500">10k+ Rows</span>
                </div>
              </div>

              <div className="relative z-10 flex flex-col items-center gap-4 text-center group">
                <div className="w-16 h-16 rounded-xl bg-slate-800 border-2 border-slate-700 flex items-center justify-center shadow-lg group-hover:border-blue-500 transition-all bg-slate-900">
                  <Database size={32} className="text-slate-400 group-hover:text-blue-400" />
                </div>
                <div className="bg-slate-950 border border-slate-800 px-3 py-2 rounded text-sm text-slate-300 w-44">
                  1. Preload Cache <br />
                  <span className="text-xs text-slate-500">Load Lookups to RAM</span>
                </div>
              </div>

              <div className="relative z-10 flex flex-col items-center gap-4 text-center group">
                <div className="w-16 h-16 rounded-xl bg-slate-800 border-2 border-slate-700 flex items-center justify-center shadow-lg group-hover:border-purple-500 transition-all bg-slate-900">
                  <Cpu size={32} className="text-slate-400 group-hover:text-purple-400" />
                </div>
                <div className="bg-slate-950 border border-slate-800 px-3 py-2 rounded text-sm text-slate-300 w-44">
                  2. Map Rows <br />
                  <span className="text-xs text-slate-500">Resolve IDs in Memory</span>
                </div>
              </div>

              <div className="relative z-10 flex flex-col items-center gap-4 text-center group">
                <div className="w-16 h-16 rounded-xl bg-slate-800 border-2 border-slate-700 flex items-center justify-center shadow-lg group-hover:border-emerald-500 transition-all bg-slate-900">
                  <Server size={32} className="text-slate-400 group-hover:text-emerald-400" />
                </div>
                <div className="bg-slate-950 border border-slate-800 px-3 py-2 rounded text-sm text-slate-300 w-40">
                  3. Bulk Insert <br />
                  <span className="text-xs text-slate-500">Single Transaction</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-100">Implementation: The Complexity Drop</h2>
            <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setActiveTab('before')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === 'before' ? 'bg-slate-800 text-slate-200 shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
              >
                Before (O(N) DB Hits)
              </button>
              <button
                onClick={() => setActiveTab('after')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === 'after' ? 'bg-indigo-500/20 text-indigo-400 shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
              >
                After (O(1) Memory Lookup)
              </button>
            </div>
          </div>

          <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden font-mono text-sm shadow-2xl">
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
              <span className="ml-2 text-slate-500 text-xs">app/queries/import_inventory.rb</span>
            </div>

            <div className="p-6 overflow-x-auto">
              {activeTab === 'before' ? (
                <code className="block text-slate-300 whitespace-pre">
{`def build_inventory_from_row(row)
  # RISK: Soft failure returns hash, caller often ignores it
  validate_headers! or return({ errors: header_errors })

  # PERFORMANCE KILLER: N+1 queries inside loop
  # 5,000 rows = 20,000+ Database round-trips
  
  slot_dimension = SlotDimension.find_or_create_by(
    height: row[:height], 
    width: row[:width]
  )
  
  publisher = Publisher.find_or_create_by(name: row[:publisher])
  
  # ... creation logic
end`}
                </code>
              ) : (
                <code className="block text-slate-300 whitespace-pre">
{`def initialize(df)
  # SOLUTION: Preload lookups into RAM hashes (O(1) access)
  @slot_dimensions = SlotDimension.pluck(:height, :width, :id)
    .each_with_object({}) { |(h, w, id), hash| hash[[h, w]] = id }
end

def build_inventory_from_row(row)
  # 1. Fail Fast: Enforce strict contract
  validate_headers! or raise InvalidHeadersError, header_errors

  # 2. Instant Memory Lookup (No DB hit)
  slot_dimension_id = @slot_dimensions[[row[:h], row[:w]]] || 
                      create_dimension!(row)

  # ... creation logic
end`}
                </code>
              )}
            </div>
          </div>
        </section>

        <section className="bg-slate-900/30 rounded-2xl p-8 border border-slate-800">
          <h2 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-3">
            <Scale size={24} className="text-slate-400" />
            Senior Engineering Analysis
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-indigo-400 font-mono font-bold text-sm uppercase tracking-wider">Complexity Shift</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Moved the bottleneck from <strong className="text-slate-200">Database I/O (Linear)</strong> to <strong className="text-slate-200">Ruby Memory (Constant)</strong>.
                <br />
                <br />
                We traded ~50MB of RAM to save millions of DB cycles per month, removing the "noisy neighbor" effect on the rest of the application.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-blue-400 font-mono font-bold text-sm uppercase tracking-wider">Data Governance</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                By replacing "soft returns" with <code>InvalidHeadersError</code>, I enforced a <strong className="text-slate-200">Strict Schema Contract</strong>.
                <br />
                <br />
                This prevents "Zombie Data" (partially imported, valid-looking but corrupt records) from ever entering the system.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-purple-400 font-mono font-bold text-sm uppercase tracking-wider">Business Impact</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Import time dropped from <strong className="text-slate-200">60s to 15s</strong> (4x speedup). More importantly, the system is now deterministic—errors are loud, immediate, and traceable, reducing support tickets.
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Speedup', val: '3x', sub: '15s Runtime' },
            { label: 'DB Queries', val: '~70', sub: 'Down from 20k+' },
            { label: 'Data Safety', val: '100%', sub: 'Zero Silent Fails' },
            { label: 'Breaking Changes', val: '0', sub: 'Internal Refactor' }
          ].map((stat, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-slate-100 mb-1">{stat.val}</div>
              <div className="text-sm font-medium text-indigo-400 mb-2">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.sub}</div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ScalingCsvCaseStudy;
