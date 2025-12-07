import { useState } from 'react';
import {
  Terminal,
  Waves,
  Database,
  ArrowRight,
  Cpu,
  HardDrive,
  Minimize2,
  Box,
  Repeat,
  Code2,
  ArrowLeftCircle
} from 'lucide-react';
import Footer from '../components/Footer';

interface CaseStudyProps {
  onBack: () => void;
}

const StreamingCaseStudy = ({ onBack }: CaseStudyProps) => {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('after');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-violet-500/30 pb-20">
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 text-violet-400 font-mono text-sm font-bold tracking-wider">
            <Terminal size={18} />
            <span>ENGINEERING_CASE_STUDY</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-medium text-slate-400">
              Staff Engineer
            </span>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-violet-500/40 bg-violet-500/10 text-violet-200 text-xs font-semibold hover:border-violet-400 hover:bg-violet-500/20 transition-colors"
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
            {['Streaming I/O', 'Memory Optimization', 'Batch Processing', 'ETL'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-100 leading-tight">
            From Monolith to Stream: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              Constant-Memory Ingestion
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            Refactoring a memory-bound S3 import job into a constant-memory streaming pipeline. Processing 300MB+ feeds line-by-line
            with controlled database backpressure.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-red-500/30 transition-colors group">
            <div className="mb-4 p-3 bg-red-500/10 w-fit rounded-lg text-red-400 group-hover:text-red-300">
              <HardDrive size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Memory Spike Risk</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              <code>Oj.load(entire_file)</code> materialized 300MB+ JSON into Ruby hashes instantly. A 2x file size increase would
              trigger OOM (Out of Memory) kills.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-orange-500/30 transition-colors group">
            <div className="mb-4 p-3 bg-orange-500/10 w-fit rounded-lg text-orange-400 group-hover:text-orange-300">
              <Box size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Coupled Orchestration</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              The Sidekiq Job understood JSON parsing, S3 fetching, and DB writing. Logic was untestable outside the job harness.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-yellow-500/30 transition-colors group">
            <div className="mb-4 p-3 bg-yellow-500/10 w-fit rounded-lg text-yellow-400 group-hover:text-yellow-300">
              <Minimize2 size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Implicit Contracts</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Deactivation relied on passing full entity hashes. The service re-derived IDs silently, creating a brittle dependency on
              upstream payload shape.
            </p>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-100">Architecture: The Streaming Pipeline</h2>
            <span className="text-xs font-mono text-violet-500 bg-violet-500/10 px-2 py-1 rounded">Constant Memory O(1)</span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />

            <div className="relative z-10 flex flex-col md:flex-row justify-between gap-8 items-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-slate-950 border border-slate-700 rounded-xl flex items-center justify-center shadow-lg relative">
                  <Waves className="text-blue-400 animate-pulse" size={32} />
                  <div className="absolute -top-2 -right-2 bg-blue-500 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    S3
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold text-slate-200">Data Stream</div>
                  <div className="text-xs text-slate-500 font-mono">IO::readable</div>
                </div>
              </div>

              <div className="flex-1 w-full max-w-2xl bg-slate-950/50 border border-slate-800 rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-800 -translate-y-1/2" />
                <div className="absolute top-1/2 left-0 w-4 h-4 bg-violet-500 rounded-full blur-[2px] animate-[ping_3s_linear_infinite]" />

                <div className="relative z-10 flex justify-between items-center">
                  <div className="bg-slate-900 border border-violet-500/30 p-4 rounded-lg flex flex-col items-center gap-2 w-32 text-center">
                    <Code2 size={20} className="text-violet-400" />
                    <span className="text-xs font-bold text-violet-200">.each_line</span>
                    <span className="text-[10px] text-slate-500">Iterator</span>
                  </div>

                  <ArrowRight className="text-slate-600" size={20} />

                  <div className="bg-slate-900 border border-fuchsia-500/30 p-4 rounded-lg flex flex-col items-center gap-2 w-32 text-center relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-fuchsia-500/20 text-fuchsia-300 text-[9px] px-2 py-0.5 rounded-full border border-fuchsia-500/30">
                      Buffer: 3000
                    </div>
                    <Box size={20} className="text-fuchsia-400" />
                    <span className="text-xs font-bold text-fuchsia-200">Accumulator</span>
                    <span className="text-[10px] text-slate-500">In-Memory Array</span>
                  </div>

                  <ArrowRight className="text-slate-600" size={20} />

                  <div className="bg-slate-900 border border-emerald-500/30 p-4 rounded-lg flex flex-col items-center gap-2 w-32 text-center">
                    <Repeat size={20} className="text-emerald-400" />
                    <span className="text-xs font-bold text-emerald-200">upsert_all</span>
                    <span className="text-[10px] text-slate-500">Batch Write</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-slate-950 border border-slate-700 rounded-xl flex items-center justify-center shadow-lg border-b-4 border-b-violet-500">
                  <Database className="text-slate-200" size={32} />
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold text-slate-200">PostgreSQL</div>
                  <div className="text-xs text-slate-500 font-mono">Persisted</div>
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
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'before'
                    ? 'bg-slate-800 text-slate-200 shadow-sm'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                Before (Memory Hog)
              </button>
              <button
                onClick={() => setActiveTab('after')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'after'
                    ? 'bg-violet-500/20 text-violet-400 shadow-sm'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                After (Streaming)
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
              <span className="text-slate-500 text-xs">
                {activeTab === 'before' ? 'app/jobs/vistar_update_job.rb' : 'app/services/inventory_import/vistar_service_adapter.rb'}
              </span>
            </div>

            <div className="p-6 overflow-x-auto">
              {activeTab === 'before' ? (
                <code className="block text-slate-300 whitespace-pre">
{`def perform(s3 = nil)
  resp = s3.get_object(bucket: BUCKET, key: file_key)

  # PROBLEM: Materializes 100% of file into RAM
  # 500MB file -> 1GB+ Ruby Object overhead
  data = resp[:body].map do |line|
    Oj.load(line)
  end

  # Blocks until parsing is fully complete
  VistarService.update_from_json(data)
end`}
                </code>
              ) : (
                <code className="block text-slate-300 whitespace-pre">
{`def fetch_and_insert
  data_batch = []
  
  # SOLUTION: Stream line-by-line from IO object
  @data_stream.each_line do |line|
    data_batch << Oj.load(line)
    
    # Flush when buffer fills (Constant Memory)
    if data_batch.size >= BATCH_SIZE
      map_and_save(data_batch)
      data_batch.clear
    end
  end
  
  # Flush remaining
  map_and_save(data_batch) unless data_batch.empty?
end`}
                </code>
              )}
            </div>
          </div>
        </section>

        <section className="bg-slate-900/30 rounded-2xl p-8 border border-slate-800">
          <h2 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-3">
            <Cpu size={24} className="text-violet-400" />
            Senior Engineering Analysis
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-violet-400 font-mono font-bold text-sm uppercase tracking-wider">Scalability</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Changed the memory complexity from <strong className="text-slate-200">O(N)</strong> to <strong className="text-slate-200">O(1)</strong>.
                <br />
                The worker node now consumes the same amount of RAM whether the import file is 10MB or 10GB.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-fuchsia-400 font-mono font-bold text-sm uppercase tracking-wider">Flow Control</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Implemented backpressure via <strong className="text-slate-200">Batch Slicing</strong>.
                <br />
                Instead of hammering the DB with 50k inserts at once (or one-by-one), we maintain a steady flow of 3,000 records per
                transaction.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-emerald-400 font-mono font-bold text-sm uppercase tracking-wider">System Stability</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                The "Thin Job" pattern means the Sidekiq worker is now just a trigger. The business logic is isolated in the Adapter,
                making it testable without spinning up a full Redis/Job environment.
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Batch Size', val: '3k', sub: 'Controlled Writes' },
            { label: 'Import Time', val: '-75%', sub: '10 min vs 40 min' },
            { label: 'Memory', val: 'Flat', sub: 'No OOM Spikes' },
            { label: 'Pattern', val: 'Stream', sub: 'Line-by-Line IO' }
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 p-6 rounded-xl text-center group hover:border-violet-500/30 transition-colors"
            >
              <div className="text-3xl font-bold text-slate-100 mb-1 group-hover:text-violet-400 transition-colors">{stat.val}</div>
              <div className="text-sm font-medium text-violet-500/80 mb-2">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.sub}</div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StreamingCaseStudy;
