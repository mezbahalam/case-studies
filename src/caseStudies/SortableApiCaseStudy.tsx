import { useState } from 'react';
import { Terminal, LayoutList, Database, Lock, ShieldCheck, Scale, ArrowLeftCircle } from 'lucide-react';
import Footer from '../components/Footer';

interface CaseStudyProps {
  onBack: () => void;
}

const SortableApiCaseStudy = ({ onBack }: CaseStudyProps) => {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('after');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-teal-500/30 pb-20">
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 text-teal-400 font-mono text-sm font-bold tracking-wider">
            <Terminal size={18} />
            <span>ENGINEERING_CASE_STUDY</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-medium text-slate-400">
              Staff Engineer
            </span>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-teal-500/40 bg-teal-500/10 text-teal-200 text-xs font-semibold hover:border-teal-400 hover:bg-teal-500/20 transition-colors"
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
            {['API Design', 'Security', 'Query Objects', 'Refactoring', 'DX'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-100 leading-tight">
            Standardizing API Sorting: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">
              A Contract-Based Approach
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            Replacing ad-hoc, brittle SQL ordering with a centralized SortableQuery interface. Enforcing strict allowlists, safe
            associations, and deterministic defaults across the V2 API layer.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-red-500/30 transition-colors group">
            <div className="mb-4 p-3 bg-red-500/10 w-fit rounded-lg text-red-400 group-hover:text-red-300">
              <LayoutList size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Implicit Ordering</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Lists relied on DB defaults, so UI ordering changed unexpectedly whenever schema or engine defaults shifted.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-orange-500/30 transition-colors group">
            <div className="mb-4 p-3 bg-orange-500/10 w-fit rounded-lg text-orange-400 group-hover:text-orange-300">
              <Database size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Brittle Associations</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Sorting by user.name failed because controllers didn’t know to join users before applying ORDER BY, leading to runtime
              errors.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-yellow-500/30 transition-colors group">
            <div className="mb-4 p-3 bg-yellow-500/10 w-fit rounded-lg text-yellow-400 group-hover:text-yellow-300">
              <Lock size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Injection Risk</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Passing raw params[:sort] to Active Record exposed internal column names. Without an allowlist, the public API leaked
              schema details.
            </p>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-100">Architecture: The Safety Valve</h2>
            <span className="text-xs font-mono text-teal-500 bg-teal-500/10 px-2 py-1 rounded">Declarative Contract</span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />

            <div className="relative z-10 flex flex-col md:flex-row justify-between gap-8 items-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-48 bg-slate-950 border border-slate-700 p-3 rounded-xl shadow-lg text-center">
                  <span className="text-xs text-slate-500 font-mono block mb-1">GET /campaigns</span>
                  <code className="text-sm font-bold text-teal-400">?sort=user.name</code>
                </div>
                <div className="text-xs text-slate-500">Public API Request</div>
              </div>

              <div className="flex-1 w-full max-w-2xl bg-slate-950/80 border border-teal-500/30 rounded-xl p-6 relative backdrop-blur-sm">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="text-teal-400" size={24} />
                      <span className="font-bold text-slate-200">SortableQuery</span>
                    </div>
                    <span className="text-[10px] font-mono text-teal-500/70 bg-teal-500/10 px-2 py-1 rounded">Concern</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                    <div className="bg-slate-900 p-3 rounded border border-slate-800">
                      <span className="text-slate-500 block mb-1">1. Check Allowlist</span>
                      <div className="text-emerald-400">
                        'user.name' ✅
                      </div>
                    </div>
                    <div className="bg-slate-900 p-3 rounded border border-slate-800">
                      <span className="text-slate-500 block mb-1">2. Inject Joins</span>
                      <div className="text-blue-400">joins(:user)</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 -left-4 w-4 h-[2px] bg-slate-700" />
                <div className="absolute top-1/2 -right-4 w-4 h-[2px] bg-slate-700" />
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-48 bg-slate-950 border border-slate-700 p-3 rounded-xl shadow-lg text-center">
                  <code className="text-[10px] text-slate-400 block mb-1">SELECT * FROM campaigns</code>
                  <span className="text-xs font-bold text-blue-400">INNER JOIN users...<br />ORDER BY users.name</span>
                </div>
                <div className="text-xs text-slate-500">Safe SQL Execution</div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-100">Implementation: The "Aha!" Moment</h2>
            <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setActiveTab('before')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'before'
                    ? 'bg-slate-800 text-slate-200 shadow-sm'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                Before (Ad-Hoc)
              </button>
              <button
                onClick={() => setActiveTab('after')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'after'
                    ? 'bg-teal-500/20 text-teal-400 shadow-sm'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                After (Standardized)
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
              <span className="text-slate-500 text-xs">app/queries/v2/campaign_query.rb</span>
            </div>

            <div className="p-6 overflow-x-auto">
              {activeTab === 'before' ? (
                <code className="block text-slate-300 whitespace-pre">
{`class V2::CampaignQuery
  def call(search_term: nil)
    scope = Campaign.all
    
    # PROBLEM: Sorting logic is missing, relies on controllers to order
    scope = scope.where(...) if search_term
    scope
  end
end`}
                </code>
              ) : (
                <code className="block text-slate-300 whitespace-pre">
{`class V2::CampaignQuery
  include SortableQuery

  def call(sort: nil, ...)
    scope = Campaign.includes(:user)
    # ... filtering logic
    apply_sort(scope, sort)
  end

  private

  def sort_field_mapping
    {
      'name' => 'campaigns.name',
      'user' => 'users.name'
    }
  end

  def joins_needed_for_sort(sort_by)
    [:user] if sort_by == 'user'
  end
end`}
                </code>
              )}
            </div>
          </div>
        </section>

        <section className="bg-slate-900/30 rounded-2xl p-8 border border-slate-800">
          <h2 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-3">
            <Scale size={24} className="text-teal-400" />
            Senior Engineering Analysis
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-teal-400 font-mono font-bold text-sm uppercase tracking-wider">API Governance</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                A strict allowlist prevents accidental exposure of internal columns. Sort keys map to safe SQL, with associations declared
                up front.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-emerald-400 font-mono font-bold text-sm uppercase tracking-wider">Correctness</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Sorting by associations is deterministic because required joins are injected before order clauses, eliminating fragile
                controller logic.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-blue-400 font-mono font-bold text-sm uppercase tracking-wider">DX Multiplier</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                The module was reused immediately for Creatives, Mockups, and Backgrounds, standardizing the V2 API surface without
                copy/paste.
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Endpoints', val: '4+', sub: 'Unified Contract' },
            { label: 'SQL Safety', val: '100%', sub: 'Allowlisted' },
            { label: 'Test Coverage', val: 'Full', sub: 'RSpec Specs' },
            { label: 'Logic', val: 'DRY', sub: 'Shared Module' }
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 p-6 rounded-xl text-center group hover:border-teal-500/30 transition-colors"
            >
              <div className="text-3xl font-bold text-slate-100 mb-1 group-hover:text-teal-400 transition-colors">{stat.val}</div>
              <div className="text-sm font-medium text-teal-500/80 mb-2">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.sub}</div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SortableApiCaseStudy;
