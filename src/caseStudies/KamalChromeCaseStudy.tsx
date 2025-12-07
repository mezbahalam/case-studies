import { useState } from 'react';
import {
  Terminal,
  Server,
  Cloud,
  ShieldAlert,
  Cpu,
  Globe,
  Database,
  ArrowRight,
  Container,
  Box,
  Lock,
  Layers,
  RefreshCw,
  CreditCard,
  Key,
  ArrowLeftCircle
} from 'lucide-react';
import Footer from '../components/Footer';

interface CaseStudyProps {
  onBack: () => void;
}

const KamalChromeCaseStudy = ({ onBack }: CaseStudyProps) => {
  const [activeTab, setActiveTab] = useState<'diagram' | 'risks'>('diagram');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30 pb-20">
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-blue-400 font-mono text-sm font-bold tracking-wider">
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
            {['Rails 8', 'Kamal v2', 'Chrome Extension', 'Hetzner', 'WAL-G'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-100 leading-tight">
            Vertically Integrated Monolith: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Chrome Extension + Rails API
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            Single-server, Kamal-orchestrated stack pairing a browser client with a Rails 8 backend. Zero-downtime deploys, streaming
            backups, and minimal ops overhead.
          </p>
        </section>

        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-100">System Topology</h2>
            <span className="text-xs font-mono text-blue-500 bg-blue-500/10 px-2 py-1 rounded">Hetzner CCX23 (2 vCPU / 4GB)</span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />

            <div className="relative z-10 grid md:grid-cols-3 gap-8 items-start">
              <div className="flex flex-col gap-6">
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Client Layer</div>
                  <div className="bg-slate-950 border border-slate-700 p-4 rounded-xl shadow-lg relative group hover:border-blue-500/50 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <Globe className="text-blue-400" size={20} />
                      <span className="font-bold text-slate-200">Chrome Extension</span>
                    </div>
                    <p className="text-xs text-slate-500">Vanilla JS / React</p>
                    <div className="mt-3 flex gap-2">
                      <span className="text-[10px] bg-blue-500/10 text-blue-300 px-2 py-1 rounded">Auth: Google</span>
                      <span className="text-[10px] bg-blue-500/10 text-blue-300 px-2 py-1 rounded">API: REST</span>
                    </div>
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 hidden md:block text-slate-600">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">External Services</div>
                  <div className="bg-slate-950 border border-slate-700 p-4 rounded-xl shadow-lg opacity-90 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Key className="text-red-400" size={16} />
                        <span className="text-sm text-slate-300">Google OAuth</span>
                      </div>
                      <span className="text-[10px] text-slate-500">Identity</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CreditCard className="text-indigo-400" size={16} />
                        <span className="text-sm text-slate-300">Stripe API</span>
                      </div>
                      <span className="text-[10px] text-slate-500">Payments</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Cloud className="text-cyan-400" size={16} />
                        <span className="text-sm text-slate-300">Hetzner Object Storage</span>
                      </div>
                      <span className="text-[10px] text-slate-500">Backups</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Container className="text-slate-400" size={16} />
                        <span className="text-sm text-slate-300">GitHub CR</span>
                      </div>
                      <span className="text-[10px] text-slate-500">Images</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 bg-slate-950/50 border border-blue-500/30 rounded-2xl p-6 relative">
                <div className="absolute -top-3 left-6 bg-blue-900 text-blue-200 text-[10px] font-bold px-3 py-1 rounded-full border border-blue-500/50 flex items-center gap-2">
                  <Server size={12} /> Single Node (Docker Host)
                </div>

                <div className="grid gap-6 mt-4">
                  <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-sm flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <ShieldAlert className="text-green-400" size={20} />
                      <div>
                        <div className="font-bold text-slate-200 text-sm">Kamal Proxy (Caddy)</div>
                        <div className="text-xs text-slate-500">SSL Termination / Zero-Downtime Routing</div>
                      </div>
                    </div>
                    <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-sm group hover:border-blue-500/50 transition-colors relative">
                      <div className="flex items-center gap-3 mb-2">
                        <Container className="text-blue-400" size={20} />
                        <span className="font-bold text-slate-200 text-sm">Rails 8 API</span>
                      </div>
                      <p className="text-[10px] text-slate-500 font-mono">Puma Web Server</p>
                      <div className="mt-2 pt-2 border-t border-slate-800 flex gap-2">
                        <span className="text-[9px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400">pay gem</span>
                        <span className="text-[9px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400">omniauth</span>
                      </div>
                    </div>

                    <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-sm group hover:border-blue-500/50 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <Cpu className="text-blue-400" size={20} />
                        <span className="font-bold text-slate-200 text-sm">Sidekiq</span>
                      </div>
                      <p className="text-[10px] text-slate-500 font-mono">Job Processing</p>
                      <div className="mt-2 pt-2 border-t border-slate-800">
                        <span className="text-[9px] text-slate-400 block">Stripe Webhooks</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-sm group">
                      <div className="flex items-center gap-3 mb-2">
                        <Database className="text-amber-400" size={20} />
                        <span className="font-bold text-slate-200 text-sm">PostgreSQL 17</span>
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono border-t border-slate-800 pt-2 mt-2 flex justify-between">
                        <span>Vol: postgres_data</span>
                        <span className="text-amber-500 font-bold flex items-center gap-1">
                          <RefreshCw size={8} /> WAL-G
                        </span>
                      </div>
                    </div>

                    <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <Layers className="text-red-400" size={20} />
                        <span className="font-bold text-slate-200 text-sm">Redis 7</span>
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono border-t border-slate-800 pt-2 mt-2">
                        Vol: redis_data (Cache/Broker)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-900/30 rounded-2xl p-8 border border-slate-800">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3 text-blue-400 font-mono font-bold text-sm uppercase tracking-wider">
              <Box size={24} />
              <span>Operational Resilience</span>
            </div>
            <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs text-slate-400">
              <button
                onClick={() => setActiveTab('diagram')}
                className={`px-3 py-1 rounded ${activeTab === 'diagram' ? 'bg-slate-800 text-slate-100' : 'hover:text-slate-200'}`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('risks')}
                className={`px-3 py-1 rounded ${activeTab === 'risks' ? 'bg-slate-800 text-slate-100' : 'hover:text-slate-200'}`}
              >
                Risks
              </button>
            </div>
          </div>

          {activeTab === 'diagram' ? (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-blue-400 font-mono font-bold text-sm uppercase tracking-wider">Continuous Backup</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  WAL-G streams WAL to Hetzner Object Storage for PITR. RPO is near-zero; RTO is minutes with restore scripts.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-cyan-400 font-mono font-bold text-sm uppercase tracking-wider">Auth & Payments</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Google OAuth handles identity; Stripe manages subscriptions. Rails orchestrates verification and Sidekiq processes
                  async webhooks.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-orange-400 font-mono font-bold text-sm uppercase tracking-wider">Storage Strategy</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  State lives in Docker volumes (postgres_data, redis_data). Active Storage persists uploads locally in
                  chat_navigator_storage for durability across restarts.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4 text-red-400">
                  <ShieldAlert size={20} />
                  <h3 className="font-bold">Single Point of Failure</h3>
                </div>
                <p className="text-sm text-slate-400 mb-4">One Hetzner VM hosts everything. Hardware loss means downtime.</p>
                <div className="bg-slate-950 p-3 rounded border border-slate-700 text-xs text-slate-300">
                  <strong>Mitigation:</strong> Offsite WAL-G backups + runbooks to rebuild and restore in ~15 minutes.
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4 text-yellow-400">
                  <Lock size={20} />
                  <h3 className="font-bold">Manual Operations</h3>
                </div>
                <p className="text-sm text-slate-400 mb-4">Deploys and migrations run via CLI.</p>
                <div className="bg-slate-950 p-3 rounded border border-slate-700 text-xs text-slate-300">
                  <strong>Mitigation:</strong> Encrypted secrets in repo; future GitHub Actions for <code>kamal deploy</code> automation.
                </div>
              </div>
            </div>
          )}
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Orchestration', val: 'Kamal v2', sub: 'Zero-Downtime' },
            { label: 'Database', val: 'Postgres 17', sub: 'Containerized + WAL-G' },
            { label: 'Hosting', val: 'Hetzner', sub: 'Low Cost / High Perf' },
            { label: 'Frontend', val: 'Chrome Ext', sub: 'Distributed Client' }
          ].map((stat, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-xl text-center group hover:border-blue-500/30 transition-colors">
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

export default KamalChromeCaseStudy;
