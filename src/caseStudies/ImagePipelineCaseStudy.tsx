import { useState } from 'react';
import {
  Terminal,
  Layers,
  Box,
  Cpu,
  ArrowRight,
  Settings,
  CheckCircle2,
  MemoryStick,
  Container,
  ArrowLeftCircle
} from 'lucide-react';
import Footer from '../components/Footer';

interface CaseStudyProps {
  onBack: () => void;
}

const ImagePipelineCaseStudy = ({ onBack }: CaseStudyProps) => {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('after');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-amber-500/30 pb-20">
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 text-amber-400 font-mono text-sm font-bold tracking-wider">
            <Terminal size={18} />
            <span>ENGINEERING_CASE_STUDY</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-medium text-slate-400">
              Staff Engineer
            </span>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-amber-500/40 bg-amber-500/10 text-amber-200 text-xs font-semibold hover:border-amber-400 hover:bg-amber-500/20 transition-colors"
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
            {['Infrastructure', 'libvips', 'Memory Optimization', 'Docker', 'jemalloc'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-100 leading-tight">
            Modernizing the Image Pipeline: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Full-Stack Determinism
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            Migrating from MiniMagick to libvips across the entire stack—from Docker system libraries to Active Storage configuration—
            while introducing memory-aware allocation.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-red-500/30 transition-colors group">
            <div className="mb-4 p-3 bg-red-500/10 w-fit rounded-lg text-red-400 group-hover:text-red-300">
              <Container size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Implicit Dependencies</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              The Docker image lacked explicit native libraries (vips-dev). The app relied on whatever system packages were available,
              risking "Works locally, fails in Prod."
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-orange-500/30 transition-colors group">
            <div className="mb-4 p-3 bg-orange-500/10 w-fit rounded-lg text-orange-400 group-hover:text-orange-300">
              <MemoryStick size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Unmanaged Allocator</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Running image-heavy workloads on the default glibc allocator led to fragmentation and bloated container footprints.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-yellow-500/30 transition-colors group">
            <div className="mb-4 p-3 bg-yellow-500/10 w-fit rounded-lg text-yellow-400 group-hover:text-yellow-300">
              <Layers size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Engine Mismatch</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Configuration was coupled to MiniMagick at multiple layers. Switching engines required a risky "Big Bang" change.
            </p>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-100">Architecture: Vertical Alignment</h2>
            <span className="text-xs font-mono text-amber-500 bg-amber-500/10 px-2 py-1 rounded">Explicit Contract</span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />

            <div className="relative z-10 grid md:grid-cols-3 gap-8 items-start">
              <div className="flex flex-col gap-4 group">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Layer 1: System (Docker)</div>
                <div className="bg-slate-950 border border-slate-700 p-5 rounded-xl shadow-lg group-hover:border-amber-500/50 transition-colors relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
                  <div className="flex items-center gap-3 mb-3">
                    <Container className="text-amber-400" size={20} />
                    <span className="font-bold text-slate-200">Alpine Linux</span>
                  </div>
                  <ul className="space-y-2 text-xs font-mono text-slate-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={12} className="text-emerald-500" /> apk add vips-dev
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={12} className="text-emerald-500" /> apk add gcompat
                    </li>
                    <li className="flex items-center gap-2 text-amber-300">
                      <CheckCircle2 size={12} className="text-amber-500" /> build jemalloc 5.2.1
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <ArrowRight className="text-slate-600 rotate-90 md:rotate-0" size={20} />
                </div>
              </div>

              <div className="flex flex-col gap-4 group">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Layer 2: Runtime (Ruby)</div>
                <div className="bg-slate-950 border border-slate-700 p-5 rounded-xl shadow-lg group-hover:border-amber-500/50 transition-colors relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-amber-500/60" />
                  <div className="flex items-center gap-3 mb-3">
                    <Box className="text-amber-400" size={20} />
                    <span className="font-bold text-slate-200">Gemfile</span>
                  </div>
                  <ul className="space-y-2 text-xs font-mono text-slate-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={12} className="text-emerald-500" /> gem 'image_processing'
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={12} className="text-emerald-500" /> gem 'ruby-vips'
                    </li>
                    <li className="opacity-50 line-through">gem 'mini_magick'</li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <ArrowRight className="text-slate-600 rotate-90 md:rotate-0" size={20} />
                </div>
              </div>

              <div className="flex flex-col gap-4 group">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Layer 3: Config (Rails)</div>
                <div className="bg-slate-950 border border-slate-700 p-5 rounded-xl shadow-lg group-hover:border-amber-500/50 transition-colors relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-amber-500/30" />
                  <div className="flex items-center gap-3 mb-3">
                    <Settings className="text-amber-400" size={20} />
                    <span className="font-bold text-slate-200">ActiveStorage</span>
                  </div>
                  <div className="bg-slate-900/50 p-2 rounded border border-slate-800">
                    <code className="text-[10px] text-amber-200 font-mono block">config.variant_processor = :vips</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-100">Implementation: The Engine Swap</h2>
            <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setActiveTab('before')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'before'
                    ? 'bg-slate-800 text-slate-200 shadow-sm'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                Before (MiniMagick)
              </button>
              <button
                onClick={() => setActiveTab('after')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'after'
                    ? 'bg-amber-500/20 text-amber-400 shadow-sm'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                After (libvips)
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
              <span className="text-slate-500 text-xs">app/models/background_template.rb</span>
            </div>

            <div className="p-6 overflow-x-auto">
              {activeTab === 'before' ? (
                <code className="block text-slate-300 whitespace-pre">
{`def compress_image(img, size_limit = 1.megabyte)
  return unless img.size > size_limit

  # LEGACY: Depends on external ImageMagick binary
  # Often slower and memory intensive for large files
  processed = ImageProcessing::MiniMagick
    .source(img.tempfile.path)
    .quality(75)
    .call

  image.attach(io: processed, filename: ...)
end`}
                </code>
              ) : (
                <code className="block text-slate-300 whitespace-pre">
{`def compress_image(img, size_limit = 1.megabyte)
  return unless img.size > size_limit

  # MODERN: Uses libvips native library via FFI
  # Lower memory footprint, faster pipeline
  processed = ImageProcessing::Vips
    .source(img.tempfile.path)
    .saver(quality: 75)
    .call

  image.attach(io: processed, filename: ...)
end`}
                </code>
              )}
            </div>
          </div>
        </section>

        <section className="bg-slate-900/30 rounded-2xl p-8 border border-slate-800">
          <h2 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-3">
            <Cpu size={24} className="text-amber-400" />
            Senior Engineering Analysis
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-amber-400 font-mono font-bold text-sm uppercase tracking-wider">Operational Maturity</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                By explicitly building jemalloc 5.2.1 in the Dockerfile, we introduce control over memory fragmentation—critical for
                long-lived Rails workers handling binary assets.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-orange-400 font-mono font-bold text-sm uppercase tracking-wider">Infrastructure Code</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Removed the implicit contract of the base image. The Dockerfile now documents vips-dev and gcompat, making the system
                reproducible across hosts.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-emerald-400 font-mono font-bold text-sm uppercase tracking-wider">Risk Mitigation</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Kept the public API (compress_image, thumbnail_path) identical while swapping the engine, minimizing regression risk
                for consumers.
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Dependencies', val: 'Explicit', sub: 'Dockerfile Defined' },
            { label: 'Allocator', val: 'jemalloc', sub: 'Memory Optimized' },
            { label: 'Engine', val: 'libvips', sub: 'Modern Standard' },
            { label: 'API Change', val: 'None', sub: 'Stable Interface' }
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 p-6 rounded-xl text-center group hover:border-amber-500/30 transition-colors"
            >
              <div className="text-3xl font-bold text-slate-100 mb-1 group-hover:text-amber-400 transition-colors">{stat.val}</div>
              <div className="text-sm font-medium text-amber-500/80 mb-2">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.sub}</div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ImagePipelineCaseStudy;
