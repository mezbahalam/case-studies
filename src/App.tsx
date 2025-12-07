import { useState, useEffect } from 'react';
import { Terminal, ArrowRight, Sparkles, BookOpenCheck } from 'lucide-react';
import ParallelCiCaseStudy from './caseStudies/ParallelCiCaseStudy';
import ScalingCsvCaseStudy from './caseStudies/ScalingCsvCaseStudy';
import AdapterPatternCaseStudy from './caseStudies/AdapterPatternCaseStudy';
import StreamingCaseStudy from './caseStudies/StreamingCaseStudy';
import ImagePipelineCaseStudy from './caseStudies/ImagePipelineCaseStudy';
import SortableApiCaseStudy from './caseStudies/SortableApiCaseStudy';
import PolarsCaseStudy from './caseStudies/PolarsCaseStudy';
import PolarsCostCaseStudy from './caseStudies/PolarsCostCaseStudy';
import S3DataframeCaseStudy from './caseStudies/S3DataframeCaseStudy';
import DbGuardCaseStudy from './caseStudies/DbGuardCaseStudy';
import BatchIngestionCaseStudy from './caseStudies/BatchIngestionCaseStudy';
import KamalMonolithCaseStudy from './caseStudies/KamalMonolithCaseStudy';
import KamalChromeCaseStudy from './caseStudies/KamalChromeCaseStudy';
import ProdCaseStudy from './caseStudies/ProdCaseStudy';

import Footer from './components/Footer';

type PageId =
  | 'ci'
  | 'csv'
  | 'adapter'
  | 'stream'
  | 'image'
  | 'sort'
  | 'polars'
  | 'polarsCost'
  | 's3'
  | 'db'
  | 'batch'
  | 'kamal'
  | 'kamalChrome'
  | 'prod';
type View = 'home' | PageId;

type StudyCard = {
  id: PageId;
  title: string;
  summary: string;
  tags: string[];
  accent: 'emerald' | 'indigo' | 'cyan' | 'violet' | 'amber' | 'teal' | 'slate' | 'blue';
};

const studies: StudyCard[] = [
  {
    id: 'ci',
    title: 'Parallel CI: Honest, CPU-Bound RSpec',
    summary: 'Sharded test DBs per worker, curated spec set, and wired TurboTests exit codes for trustworthy, sub-10m runs.',
    tags: ['Rails', 'TurboTests', 'CI/CD'],
    accent: 'emerald'
  },
  {
    id: 'csv',
    title: 'Scaling CSV Ingestion to O(1) Lookups',
    summary: 'Preloaded caches, fail-fast contracts, and deterministic bulk inserts that turned a noisy N+1 importer into a safe pipeline.',
    tags: ['Ruby', 'ETL', 'Performance'],
    accent: 'indigo'
  },
  {
    id: 'adapter',
    title: 'Adapter Pattern: Unified Ingestion Interfaces',
    summary: 'Refactored a fat model into polymorphic adapters so CSV, JSON, and API sources share one fetch-map-save pipeline.',
    tags: ['Adapter Pattern', 'SOLID', 'Refactoring'],
    accent: 'cyan'
  },
  {
    id: 'stream',
    title: 'Streaming Ingestion: Constant-Memory Pipeline',
    summary: 'Turned a memory-bound S3 import into a line-by-line streamer with buffered upserts and backpressure.',
    tags: ['Streaming I/O', 'Batching', 'ETL'],
    accent: 'violet'
  },
  {
    id: 'image',
    title: 'Image Pipeline: libvips + jemalloc',
    summary: 'Swapped MiniMagick for libvips across Docker, Ruby, and Rails config while taming memory via jemalloc.',
    tags: ['libvips', 'Docker', 'Memory'],
    accent: 'amber'
  },
  {
    id: 'polars',
    title: 'Polars Data Layer: Rust-Backed Parallelism',
    summary: 'Migrated Rover CSV/analytics paths to Polars to gain vectorized, multi-core processing with type-safe data frames.',
    tags: ['Polars', 'Performance', 'Type Safety'],
    accent: 'indigo'
  },
  {
    id: 'polarsCost',
    title: 'Polars Vectorization: $15k Cost Avoidance',
    summary: 'Parallel Polars pipeline replacing Rover row-iteration to cut latency, memory, and future compute spend.',
    tags: ['Polars', 'Cost', 'Performance'],
    accent: 'indigo'
  },
  {
    id: 's3',
    title: 'S3-Aware DataFrame Mixin',
    summary: 'Unified Polars DataFrame I/O to S3 with consistent naming, mockable clients, and zero boilerplate across jobs.',
    tags: ['S3', 'DX', 'Polars'],
    accent: 'teal'
  },
  {
    id: 'batch',
    title: 'Batch Ingestion: Transactional Throughput',
    summary: 'Turned 50k row imports into batched, transactional inserts to cut DB round-trips and prevent partial writes.',
    tags: ['PostgreSQL', 'Batching', 'Transactions'],
    accent: 'blue'
  },
  {
    id: 'db',
    title: 'DB Guardrails: Unique Constraints + TZ Safety',
    summary: 'Shifted dedupe and timestamp correctness into Postgres with composite uniques and Time.zone.now in bulk inserts.',
    tags: ['PostgreSQL', 'Data Integrity', 'Concurrency'],
    accent: 'slate'
  },
  {
    id: 'kamal',
    title: 'Kamal Monolith: Vertical Integration on Hetzner',
    summary: 'Single-node, Kamal-orchestrated Docker stack with Rails, Sidekiq, Postgres, and Redis for cost-efficient iteration.',
    tags: ['Kamal', 'Hetzner', 'Docker'],
    accent: 'blue'
  },
  {
    id: 'kamalChrome',
    title: 'Chrome Ext + Rails API: One-Node Kamal Stack',
    summary: 'Rails 8 API with Chrome extension client, Kamal deploys, WAL-G backups, and low-touch ops on a single Hetzner VM.',
    tags: ['Kamal', 'Rails 8', 'Chrome Extension'],
    accent: 'blue'
  },
  {
    id: 'prod',
    title: 'Prod: ECS + Aurora + Federated Auth',
    summary: 'Rails monolith on ECS (EC2) with ALB, PostGIS Aurora, Sidekiq/Redis, S3, and Auth0/Cognito federated auth.',
    tags: ['ECS', 'PostGIS', 'Sidekiq', 'Auth0'],
    accent: 'indigo'
  },
  {
    id: 'sort',
    title: 'Sortable APIs: Contract-First Ordering',
    summary: 'Centralized allowlisted sorting with injected joins for safe, deterministic ordering across V2 endpoints.',
    tags: ['API', 'Security', 'Rails'],
    accent: 'teal'
  }
];

const getViewFromPath = (): View => {
  const path = window.location.pathname;
  const caseStudyId = path.split('/')[1];
  if (studies.find(s => s.id === caseStudyId)) {
    return caseStudyId as PageId;
  }
  return 'home';
};

const App = () => {
  const [view, setView] = useState<View>(getViewFromPath());

  useEffect(() => {
    const handlePopState = () => {
      setView(getViewFromPath());
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [view]);

  const navigate = (newView: View) => {
    const path = newView === 'home' ? '/' : newView === 'chatNavigator' ? '/extensions/chat-navigator' : `/${newView}`;
    window.history.pushState({ view: newView }, '', path);
    setView(newView);
  };

  if (view === 'ci') return <ParallelCiCaseStudy onBack={() => navigate('home')} />;
  if (view === 'csv') return <ScalingCsvCaseStudy onBack={() => navigate('home')} />;
  if (view === 'adapter') return <AdapterPatternCaseStudy onBack={() => navigate('home')} />;
  if (view === 'stream') return <StreamingCaseStudy onBack={() => navigate('home')} />;
  if (view === 'image') return <ImagePipelineCaseStudy onBack={() => navigate('home')} />;
  if (view === 'polars') return <PolarsCaseStudy onBack={() => navigate('home')} />;
  if (view === 'polarsCost') return <PolarsCostCaseStudy onBack={() => navigate('home')} />;
  if (view === 's3') return <S3DataframeCaseStudy onBack={() => navigate('home')} />;
  if (view === 'db') return <DbGuardCaseStudy onBack={() => navigate('home')} />;
  if (view === 'batch') return <BatchIngestionCaseStudy onBack={() => navigate('home')} />;
  if (view === 'kamal') return <KamalMonolithCaseStudy onBack={() => navigate('home')} />;
  if (view === 'kamalChrome') return <KamalChromeCaseStudy onBack={() => navigate('home')} />;
  if (view === 'prod') return <ProdCaseStudy onBack={() => navigate('home')} />;
  if (view === 'sort') return <SortableApiCaseStudy onBack={() => navigate('home')} />;

  const badgeThemes: Record<StudyCard['accent'], string> = {
    emerald: 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10',
    indigo: 'border-indigo-500/40 text-indigo-300 bg-indigo-500/10',
    cyan: 'border-cyan-500/40 text-cyan-300 bg-cyan-500/10',
    violet: 'border-violet-500/40 text-violet-300 bg-violet-500/10',
    amber: 'border-amber-500/40 text-amber-300 bg-amber-500/10',
    teal: 'border-teal-500/40 text-teal-300 bg-teal-500/10',
    slate: 'border-slate-500/40 text-slate-200 bg-slate-800/60',
    blue: 'border-blue-500/40 text-blue-300 bg-blue-500/10'
  };

  const arrowThemes: Record<StudyCard['accent'], string> = {
    emerald: 'text-emerald-300',
    indigo: 'text-indigo-300',
    cyan: 'text-cyan-300',
    violet: 'text-violet-300',
    amber: 'text-amber-300',
    teal: 'text-teal-300',
    slate: 'text-slate-200',
    blue: 'text-blue-300'
  };

  const cardHoverThemes: Record<StudyCard['accent'], string> = {
    emerald: 'hover:border-emerald-400/30',
    indigo: 'hover:border-indigo-400/30',
    cyan: 'hover:border-cyan-400/30',
    violet: 'hover:border-violet-400/30',
    amber: 'hover:border-amber-400/30',
    teal: 'hover:border-teal-400/30',
    slate: 'hover:border-slate-500/40',
    blue: 'hover:border-blue-400/30'
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-emerald-300 font-mono text-sm font-bold tracking-wider">
            <Terminal size={18} />
            <span>ENGINEERING_CASE_STUDIES</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Performance + Reliability narratives</span>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-14 space-y-12">
        <section className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 rounded-2xl p-10 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.25),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(79,70,229,0.25),transparent_30%)]" />
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <BookOpenCheck size={18} className="text-emerald-300" />
              <span>Selected IC-level rescues and refactors</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-100 leading-tight">
              Engineering Case Studies
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-indigo-300">
                Built for clarity, speed, and safety
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed">
              I'm <strong className="text-slate-200">Mezbah Alam</strong>, a senior Ruby on Rails engineer focused on performance, CI reliability, and Postgres-heavy legacy refactors.
            </p>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed mt-4">
              Explore battle-tested fixes: parallelizing flaky CI, hardening imports, and pushing critical paths to O(1) performance.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-slate-400">
              {['Ruby on Rails', 'Perf/ETL', 'CI/CD', 'Operational Safety'].map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/60 text-slate-300"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          {studies.map((study) => (
            <button
              key={study.id}
              onClick={() => navigate(study.id)}
              className={`group text-left bg-slate-900/50 border border-slate-800 rounded-xl p-8 transition duration-200 hover:-translate-y-1 ${cardHoverThemes[study.accent]}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${badgeThemes[study.accent]}`}
                >
                  Case Study
                </span>
                <ArrowRight
                  size={18}
                  className={`${arrowThemes[study.accent]} group-hover:translate-x-1 transition-transform`}
                />
              </div>
              <h3 className="text-2xl font-semibold text-slate-100 mb-3 leading-snug">{study.title}</h3>
              <p className="text-sm text-slate-400 mb-5 leading-relaxed">{study.summary}</p>
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md border border-slate-700 text-xs font-medium text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
