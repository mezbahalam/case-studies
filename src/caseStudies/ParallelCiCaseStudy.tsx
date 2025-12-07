import { useState } from 'react';
import {
  Terminal,
  GitPullRequest,
  ShieldAlert,
  CheckCircle,
  Cpu,
  Database,
  Layers,
  AlertTriangle,
  Server,
  Filter,
  ArrowLeftCircle
} from 'lucide-react';
import Footer from '../components/Footer';

interface CaseStudyProps {
  onBack: () => void;
}

const ParallelCiCaseStudy = ({ onBack }: CaseStudyProps) => {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('after');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-emerald-500/30 pb-20">
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 text-emerald-400 font-mono text-sm font-bold tracking-wider">
            <Terminal size={18} />
            <span>ENGINEERING_CASE_STUDY</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-medium text-slate-400">
              Senior Backend Engineer
            </span>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-emerald-500/40 bg-emerald-500/10 text-emerald-200 text-xs font-semibold hover:border-emerald-400 hover:bg-emerald-500/20 transition-colors"
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
            {['Ruby on Rails', 'RSpec', 'turbo_tests', 'parallel_tests', 'CI/CD'].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 leading-tight">
            From Linear RSpec to CPU-Bound CI <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              With Deterministic Exit Codes
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            Before, the v2 suite ran single-core in both dev and GitHub CI at ~18–20 minutes, so nobody ran it locally. After introducing TurboTests for parallel runs, CI could still go green while individual workers failed because only the last worker's status was respected. Wiring TurboTests::Runner.run(opts) into exit(success ? 0 : 1) and sharding planning_api_test&lt;n&gt; per worker via TEST_ENV_NUMBER brought dev runs down to roughly 2 minutes on an 8-core machine and CI under 10 minutes on 2 cores, with zero false greens.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 relative overflow-hidden group hover:border-red-500/30 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <AlertTriangle size={120} className="text-red-500" />
            </div>
            <div className="relative z-10">
              <h2 className="flex items-center gap-3 text-xl font-bold text-slate-100 mb-4">
                <ShieldAlert className="text-red-400" size={24} />
                What Was Broken
              </h2>
              <ul className="space-y-4 text-slate-400">
                <li className="flex gap-3 items-start">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                  <span>
                    <strong className="text-slate-200">Single-process v2 suite:</strong>
                    Single-process v2 suite: one CI core stuck at 18–20 minutes; throwing more CPU at it didn't help.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                  <span>
                    <strong className="text-slate-200">Global test DB:</strong>
                    All workers pointed at <code>planning_api_test</code>, causing state bleed and race conditions across runs.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                  <span>
                    <strong className="text-slate-200">Ignored TurboTests result:</strong>
                    TurboTests boolean was dropped; the parent exited 0 while failing workers exited 1, letting false greens merge.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                  <span>
                    <strong className="text-slate-200">Flaky scope mix:</strong>
                    <code>onsite:</code> and legacy v1 specs diluted signal-to-noise, so failures were mistrusted.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cpu size={120} className="text-emerald-500" />
            </div>
            <div className="relative z-10">
              <h2 className="flex items-center gap-3 text-xl font-bold text-slate-100 mb-4">
                <CheckCircle className="text-emerald-400" size={24} />
                The Interventions
              </h2>
              <ul className="space-y-4 text-slate-400">
                <li className="flex gap-3 items-start">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>
                    <strong className="text-slate-200">TurboTests + deterministic exit:</strong>
                    Parent now calls <code>exit(success ? 0 : 1)</code>, wiring worker outcomes into the gate and eliminating false greens.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>
                    <strong className="text-slate-200">Per-worker DB prep:</strong>
                    <code>parallel_tests</code> creates/migrates <code>planning_api_test&lt;n&gt;</code> keyed by <code>TEST_ENV_NUMBER</code> to enforce schema isolation.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>
                    <strong className="text-slate-200">Partitioned spec set:</strong>
                    Legacy specs are isolated to a separate tier; v2 excludes <code>spec/**/v1/*</code> and any file containing <code>onsite:</code> while also passing <code>~onsite</code> tags.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>
                    <strong className="text-slate-200">Docker workflow wiring:</strong>
                    CI runs <code>parallel:create</code> / <code>parallel:migrate</code> before <code>rake test:parallel:v2</code>, ensuring DBs exist before the test command receives traffic for deterministic starts.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-100">Architecture: Isolated Parallel CI</h2>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 md:p-12 overflow-x-auto">
            <div className="min-w-[1000px] flex justify-between items-center relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -z-0 -translate-y-1/2" />

              <div className="relative z-10 flex flex-col items-center gap-4 text-center group">
                <div className="w-16 h-16 rounded-xl bg-slate-800 border-2 border-slate-700 flex items-center justify-center shadow-lg group-hover:border-emerald-500 group-hover:shadow-emerald-500/20 transition-all bg-slate-900">
                  <GitPullRequest size={32} className="text-slate-400 group-hover:text-emerald-400" />
                </div>
                <div className="bg-slate-950 border border-slate-800 px-3 py-2 rounded text-sm text-slate-300 w-32">
                  Commit Pushed
                </div>
              </div>

              <div className="relative z-10 flex flex-col items-center gap-4 text-center group">
                <div className="w-16 h-16 rounded-xl bg-slate-800 border-2 border-slate-700 flex items-center justify-center shadow-lg group-hover:border-blue-500 group-hover:shadow-blue-500/20 transition-all bg-slate-900">
                  <Database size={32} className="text-slate-400 group-hover:text-blue-400" />
                </div>
                <div className="bg-slate-950 border border-slate-800 px-3 py-2 rounded text-sm text-slate-300 w-44">
                  parallel:create/migrate <br />
                  <span className="text-xs text-slate-500">Build DB_1, DB_2…</span>
                </div>
              </div>

              <div className="relative z-10 flex flex-col items-center gap-4 text-center group">
                <div className="w-16 h-16 rounded-xl bg-slate-800 border-2 border-slate-700 flex items-center justify-center shadow-lg group-hover:border-yellow-500 group-hover:shadow-yellow-500/20 transition-all bg-slate-900">
                  <Filter size={32} className="text-slate-400 group-hover:text-yellow-400" />
                </div>
                <div className="bg-slate-950 border border-slate-800 px-3 py-2 rounded text-sm text-slate-300 w-44">
                  Spec Selection <br />
                  <span className="text-xs text-slate-500">Drop v1 + files containing 'onsite:'</span>
                </div>
              </div>

              <div className="relative z-10 flex flex-col items-center gap-4 text-center group">
                <div className="w-16 h-16 rounded-xl bg-slate-800 border-2 border-slate-700 flex items-center justify-center shadow-lg group-hover:border-purple-500 group-hover:shadow-purple-500/20 transition-all bg-slate-900">
                  <Layers size={32} className="text-slate-400 group-hover:text-purple-400" />
                </div>
                <div className="bg-slate-950 border border-slate-800 px-3 py-2 rounded text-sm text-slate-300 w-44">
                  TurboTests Fan Out <br />
                  <span className="text-xs text-slate-500">Seed-aware workers</span>
                </div>
              </div>

              <div className="relative z-10 flex flex-col items-center gap-4 text-center group">
                <div className="w-16 h-16 rounded-xl bg-slate-800 border-2 border-slate-700 flex items-center justify-center shadow-lg group-hover:border-emerald-500 group-hover:shadow-emerald-500/20 transition-all bg-slate-900">
                  <CheckCircle size={32} className="text-slate-400 group-hover:text-emerald-400" />
                </div>
                <div className="bg-slate-950 border border-slate-800 px-3 py-2 rounded text-sm text-slate-300 w-44">
                  Exit-Code Gate <br />
                  <span className="text-xs text-slate-500">TurboTests success ⇒ exit 0</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-100">Implementation Evidence</h2>
            <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setActiveTab('before')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === 'before' ? 'bg-slate-800 text-slate-200 shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
              >
                Before
              </button>
              <button
                onClick={() => setActiveTab('after')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === 'after' ? 'bg-emerald-500/20 text-emerald-400 shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
              >
                After (Refactored)
              </button>
            </div>
          </div>

          <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden font-mono text-sm shadow-2xl">
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
              <span className="ml-2 text-slate-500 text-xs">lib/tasks/test.rake</span>
            </div>

            <div className="p-6 overflow-x-auto">
              {activeTab === 'before' ? (
                <code className="block text-slate-300 whitespace-pre">
{`namespace :test do
  # PROBLEM: v2 stayed single-process and ignored TurboTests failures.
  task :v2 => :environment do
    Rake::Task['v2_spec'].invoke
  end

  namespace :parallel do
    task :v2 => :environment do
      TurboTests::Runner.run(files: Dir['spec/v2/**/*_spec.rb']) # return value ignored
      # CI could exit 0 even if a worker failed
    end
  end
end`}
                </code>
              ) : (
                <code className="block text-slate-300 whitespace-pre">
{`namespace :test do
  namespace :parallel do
    desc "Run RSpec in parallel turbo_tests with explicit exclusions"
    task :v2, [:pattern] => :environment do |_task, args|
      require 'turbo_tests'

      exclude_pattern = args[:pattern] || 'spec/**/v1/*_spec.rb'
      all_specs       = Dir['spec/**/**/*_spec.rb']

      exclude_tags   = \`grep -rl 'onsite:' spec/\`.split("\n").map { |f| f.gsub(%r{/+}, '/') }
      filtered_specs = all_specs.reject { |f| File.fnmatch?(exclude_pattern, f) || exclude_tags.include?(f) }

      opts = {
        files:      filtered_specs,
        seed:       ENV['RSPEC_SEED'],
        formatters: [{ name: 'progress', outputs: ['-'] }],
        tags:       ['~onsite']
      }

      success = TurboTests::Runner.run(opts)
      exit(success ? 0 : 1)
    end
  end
end`}
                </code>
              )}
            </div>
          </div>
        </section>

        <section className="bg-slate-900/30 rounded-2xl p-8 border border-slate-800">
          <h2 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-3">
            <Server size={24} className="text-slate-400" />
            Senior Engineering Analysis
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-emerald-400 font-mono font-bold text-sm uppercase tracking-wider">Business Risk</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                With a shared test DB and a parent process that only respected the last worker, CI could exit 0 while earlier TurboTests workers on <code>planning_api_test</code> had already failed, so broken branches still hit main. After wiring TurboTests' boolean into <code>exit(success ? 0 : 1)</code>, isolating <code>planning_api_test&lt;n&gt;</code> per worker, and pushing flaky v1 "onsite" specs into their own suite, CI now acts as an honest gate instead of a suggestion.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-blue-400 font-mono font-bold text-sm uppercase tracking-wider">Complexity Analysis</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Startup scanning is O(files) and negligible. Wall-clock is now CPU-core bound (<strong className="text-slate-200">O(N/C)</strong>): on 1 core the suite was ~18-20 minutes; on 2 CI cores it lands under 10 minutes; on an 8-core dev machine it finishes in roughly 2 minutes. Staying under the 10-minute context-switch threshold keeps engineers in flow instead of alt-tabbing away for half an hour.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-purple-400 font-mono font-bold text-sm uppercase tracking-wider">Trade-offs</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Accepted higher CI CPU/RAM burn and multiple test DBs plus a small Rake maintenance surface. The payoff is a parallel suite that is faster, reproducible via <code>RSPEC_SEED</code>, and deterministic.
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Runtime', val: '18–20m → <10m (CPU-Bound)', sub: '2m on 8-core dev' },
            { label: 'False Greens', val: 'Zero False Negatives', sub: 'exit(success ? 0 : 1)' },
            { label: 'DB Isolation', val: 'Strict Isolation', sub: 'planning_api_test<n> + TEST_ENV_NUMBER' },
            { label: 'Flaky Scope', val: 'V1 Partitioned', sub: 'onsite specs isolated' }
          ].map((stat, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-xl text-center flex flex-col items-center justify-center gap-2">
              <div className="text-2xl md:text-3xl font-bold text-slate-100 leading-tight">{stat.val}</div>
              <div className="text-xs md:text-sm font-medium text-emerald-400">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.sub}</div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ParallelCiCaseStudy;
