import { useState } from 'react';
import {
  Terminal,
  Cloud,
  FileCode,
  ArrowRight,
  ShieldCheck,
  Code2,
  LayoutGrid,
  Trash2,
  Share2,
  ArrowLeftCircle
} from 'lucide-react';
import Footer from '../components/Footer';

interface CaseStudyProps {
  onBack: () => void;
}

const S3DataframeCaseStudy = ({ onBack }: CaseStudyProps) => {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('after');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-sky-500/30 pb-20">
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 text-sky-400 font-mono text-sm font-bold tracking-wider">
            <Terminal size={18} />
            <span>ENGINEERING_CASE_STUDY</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-medium text-slate-400">
              Staff Engineer
            </span>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-sky-500/40 bg-sky-500/10 text-sky-200 text-xs font-semibold hover:border-sky-400 hover:bg-sky-500/20 transition-colors"
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
            {['Platform Engineering', 'Ruby Mixins', 'AWS S3', 'Developer Experience', 'Polars'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-100 leading-tight">
            Democratizing Data I/O: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              The S3-Aware DataFrame
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            Refactored scattered S3 upload scripts into a unified DataFrameMixin that standardizes serialization, key naming, and client
            handling across the analytics stack.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-red-500/30 transition-colors group">
            <div className="mb-4 p-3 bg-red-500/10 w-fit rounded-lg text-red-400 group-hover:text-red-300">
              <Trash2 size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Boilerplate Fatigue</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              10+ jobs reimplemented the same CSV → tempfile → S3 dance. Each variant was another place bugs could creep in.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-orange-500/30 transition-colors group">
            <div className="mb-4 p-3 bg-orange-500/10 w-fit rounded-lg text-orange-400 group-hover:text-orange-300">
              <LayoutGrid size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Inconsistent Storage</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Hard-coded folders and random keys turned the data lake into a swamp. No contract for naming or structure.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-yellow-500/30 transition-colors group">
            <div className="mb-4 p-3 bg-yellow-500/10 w-fit rounded-lg text-yellow-400 group-hover:text-yellow-300">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Untestable IO</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Hard-coded <code>Aws::S3::Client.new</code> calls made mocking impossible, forcing flaky tests to hit real network endpoints.
            </p>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-100">Architecture: Encapsulating Complexity</h2>
            <span className="text-xs font-mono text-sky-500 bg-sky-500/10 px-2 py-1 rounded">Native Extension Pattern</span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />

            <div className="relative z-10 flex flex-col items-center gap-8">
              <div className="w-full flex justify-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="bg-slate-950 p-4 rounded border border-slate-700 text-center text-xs">Job A<br />(Manual IO)</div>
                <div className="bg-slate-950 p-4 rounded border border-slate-700 text-center text-xs">Job B<br />(Manual IO)</div>
                <div className="bg-slate-950 p-4 rounded border border-slate-700 text-center text-xs">Job C<br />(Manual IO)</div>
              </div>

              <div className="h-8 w-[1px] bg-gradient-to-b from-slate-700 to-sky-500" />

              <div className="w-full max-w-2xl bg-slate-950 border border-sky-500/30 rounded-xl p-6 relative shadow-2xl shadow-sky-900/20">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-900 text-sky-200 text-[10px] font-bold px-3 py-1 rounded-full border border-sky-500/50">
                  Polars::DataFrameMixin
                </div>

                <div className="flex justify-around items-center mt-2">
                  <div className="flex flex-col items-center gap-2">
                    <FileCode size={24} className="text-slate-400" />
                    <span className="text-xs font-mono text-slate-300">to_csv</span>
                  </div>
                  <ArrowRight size={16} className="text-slate-600" />
                  <div className="flex flex-col items-center gap-2">
                    <Share2 size={24} className="text-sky-400" />
                    <span className="text-xs font-mono text-sky-300">upload_to_s3</span>
                  </div>
                  <ArrowRight size={16} className="text-slate-600" />
                  <div className="flex flex-col items-center gap-2">
                    <Cloud size={24} className="text-blue-400" />
                    <span className="text-xs font-mono text-blue-300">AWS S3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-100">Implementation: The API Shift</h2>
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
                    ? 'bg-sky-500/20 text-sky-400 shadow-sm'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                After (Native Extension)
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
              <span className="text-slate-500 text-xs">app/jobs/analytics_export_job.rb</span>
            </div>

            <div className="p-6 overflow-x-auto">
              {activeTab === 'before' ? (
                <code className="block text-slate-300 whitespace-pre">
{`def perform(data)
  df = Polars::DataFrame.new(data)
  
  # PLUMBING HELL:
  csv_data = df.to_csv
  file = Tempfile.new(['export', '.csv'])
  file.write(csv_data)
  file.rewind
  
  s3 = Aws::S3::Resource.new(region: 'us-east-1')
  obj = s3.bucket('my-bucket').object("uploads/#{Date.today}.csv")
  obj.put(body: file)
  file.close
  file.unlink
end`}
                </code>
              ) : (
                <code className="block text-slate-300 whitespace-pre">
{`def perform(data)
  df = Polars::DataFrame.new(data)
  
  key = df.upload_to_s3(
    'my-bucket', 
    "uploads/#{Date.today}"
  )
end`}
                </code>
              )}
            </div>
          </div>
        </section>

        <section className="bg-slate-900/30 rounded-2xl p-8 border border-slate-800">
          <h2 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-3">
            <Code2 size={24} className="text-sky-400" />
            Senior Engineering Analysis
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-sky-400 font-mono font-bold text-sm uppercase tracking-wider">Developer Experience</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                By patching <code>upload_to_s3</code> onto the DataFrame, the pit of success is the default path. Boilerplate is gone.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-blue-400 font-mono font-bold text-sm uppercase tracking-wider">Testability</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                The mixin accepts an injected <code>s3_client</code> so unit tests can mock S3 calls without hitting the network.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-indigo-400 font-mono font-bold text-sm uppercase tracking-wider">Standardization</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                One module now governs naming, compression, and storage class; updates propagate to every job instantly.
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'LOC Removed', val: '~200', sub: 'Deleted Boilerplate' },
            { label: 'Test Speed', val: '10x', sub: 'Mock injection' },
            { label: 'Consistency', val: '100%', sub: 'Single IO Path' },
            { label: 'Pattern', val: 'Mixin', sub: 'Language Extension' }
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 p-6 rounded-xl text-center group hover:border-sky-500/30 transition-colors"
            >
              <div className="text-3xl font-bold text-slate-100 mb-1 group-hover:text-sky-400 transition-colors">{stat.val}</div>
              <div className="text-sm font-medium text-sky-500/80 mb-2">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.sub}</div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default S3DataframeCaseStudy;
