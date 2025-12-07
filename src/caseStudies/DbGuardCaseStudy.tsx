import { useState } from 'react';
import {
  Terminal,
  Database,
  Clock,
  AlertTriangle,
  FileDigit,
  Scale,
  ArrowLeftCircle
} from 'lucide-react';
import Footer from '../components/Footer';

interface CaseStudyProps {
  onBack: () => void;
}

const DbGuardCaseStudy = ({ onBack }: CaseStudyProps) => {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('after');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-slate-500/30 pb-20">
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 text-slate-100 font-mono text-sm font-bold tracking-wider">
            <Terminal size={18} />
            <span>ENGINEERING_CASE_STUDY</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-medium text-slate-400">
              Staff Engineer
            </span>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-500/50 bg-slate-800/60 text-slate-100 text-xs font-semibold hover:border-slate-400 hover:text-white transition-colors"
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
            {['Data Integrity', 'Concurrency', 'PostgreSQL', 'Race Conditions', 'Timezones'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-100 leading-tight">
            The End of Silent Duplicates: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-gray-200">
              Database-Level Enforcement
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            Moved critical validation from application code into the database: composite unique constraints and timezone-safe timestamps
            to eliminate race conditions on hot write paths.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-red-500/30 transition-colors group">
            <div className="mb-4 p-3 bg-red-500/10 w-fit rounded-lg text-red-400 group-hover:text-red-300">
              <AlertTriangle size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">The Race Condition</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              <code>validates_uniqueness_of</code> is not thread-safe. Concurrent requests could both pass validation and insert duplicate
              rows.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-orange-500/30 transition-colors group">
            <div className="mb-4 p-3 bg-orange-500/10 w-fit rounded-lg text-orange-400 group-hover:text-orange-300">
              <Clock size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Timezone Drift</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Bulk inserts used <code>Time.now</code> instead of <code>Time.zone.now</code>, skewing analytics when server clocks differed
              from the business timezone.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-yellow-500/30 transition-colors group">
            <div className="mb-4 p-3 bg-yellow-500/10 w-fit rounded-lg text-yellow-400 group-hover:text-yellow-300">
              <FileDigit size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Fragile Logic</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Each job owned its own dedupe checks. One missed guard meant thousands of bad records to clean up later.
            </p>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-100">Architecture: The Database Guardrail</h2>
            <span className="text-xs font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded">Composite Index</span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />

            <div className="relative z-10 flex flex-col md:flex-row justify-between gap-8 items-center">
              <div className="flex flex-col gap-4">
                <div className="bg-slate-950 border border-slate-700 p-4 rounded-xl shadow-lg w-48 opacity-80">
                  <span className="text-xs text-slate-500 uppercase font-bold">Request A</span>
                  <div className="text-sm text-slate-300 mt-1">INSERT "Nike"</div>
                </div>
                <div className="bg-slate-950 border border-slate-700 p-4 rounded-xl shadow-lg w-48 opacity-80">
                  <span className="text-xs text-slate-500 uppercase font-bold">Request B</span>
                  <div className="text-sm text-slate-300 mt-1">INSERT "Nike"</div>
                </div>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center relative h-48 px-8">
                <div className="w-full h-[2px] bg-slate-800 absolute top-1/2 -translate-y-1/2" />
                <div className="bg-red-500/20 border border-red-500/50 p-2 rounded-full z-10 animate-pulse">
                  <AlertTriangle className="text-red-500" size={24} />
                </div>
                <span className="text-xs text-red-400 mt-2 font-mono">Concurrent Write</span>
              </div>

              <div className="bg-slate-950 border border-slate-500 p-6 rounded-xl shadow-2xl flex flex-col items-center gap-3 w-56 border-l-4 border-l-emerald-500">
                <div className="flex items-center gap-2 mb-2 border-b border-slate-800 pb-2 w-full justify-center">
                  <Database size={20} className="text-emerald-400" />
                  <span className="text-sm font-bold text-slate-200">PostgreSQL</span>
                </div>
                <div className="text-xs text-slate-400 text-center">
                  Constraint Violation:
                  <code className="block mt-1 text-red-300 bg-red-900/20 p-1 rounded">Unique(name, org_id)</code>
                </div>
                <div className="mt-2 flex gap-2">
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">1 Accepted</span>
                  <span className="text-[10px] bg-red-500/20 text-red-400 px-2 py-1 rounded">1 Rejected</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-100">Implementation: Hardening the Bulk Insert</h2>
            <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setActiveTab('before')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'before'
                    ? 'bg-slate-800 text-slate-200 shadow-sm'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                Before (Fragile)
              </button>
              <button
                onClick={() => setActiveTab('after')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'after'
                    ? 'bg-slate-700 text-slate-100 shadow-sm'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                After (Robust)
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
              <span className="text-slate-500 text-xs">app/models/campaign_inventory.rb</span>
            </div>

            <div className="p-6 overflow-x-auto">
              {activeTab === 'before' ? (
                <code className="block text-slate-300 whitespace-pre">
{`def self.add_invs_to_line_item(inv_ids)
  records = []
  inv_ids.each do |inv_id|
    records << {
      inventory_id: inv_id,
      created_at: Time.now,
      updated_at: Time.now
    }
  end
  insert_all(records)
end`}
                </code>
              ) : (
                <code className="block text-slate-300 whitespace-pre">
{`def self.add_invs_to_line_item(inv_ids)
  records = []
  inv_ids.each do |inv_id|
    records << {
      inventory_id: inv_id,
      created_at: Time.zone.now,
      updated_at: Time.zone.now
    }
  end

  insert_all(records) unless records.empty?
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
              <h3 className="text-slate-200 font-mono font-bold text-sm uppercase tracking-wider">Source of Truth</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Shifted data integrity to the database layer—centralized, ACID, and auditable—instead of fragile app-level guards.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-slate-200 font-mono font-bold text-sm uppercase tracking-wider">Performance</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Composite unique index (name, org_id) enables fast index scans and prevents duplicates in a single atomic operation.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-slate-200 font-mono font-bold text-sm uppercase tracking-wider">Correctness</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Standardizing on <code>Time.zone.now</code> removes cross-timezone drift in analytics and scheduled jobs.
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Duplicates', val: '0', sub: 'DB Enforced' },
            { label: 'Read Speed', val: 'O(log N)', sub: 'Index Scans' },
            { label: 'Safety', val: '100%', sub: 'Atomic Constraints' },
            { label: 'Tech Debt', val: 'Down', sub: 'No manual checks' }
          ].map((stat, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-xl text-center group hover:border-slate-600 transition-colors">
              <div className="text-3xl font-bold text-slate-100 mb-1 group-hover:text-white transition-colors">{stat.val}</div>
              <div className="text-sm font-medium text-slate-400 mb-2">{stat.label}</div>
              <div className="text-xs text-slate-600">{stat.sub}</div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DbGuardCaseStudy;
