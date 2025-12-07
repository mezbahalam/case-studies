import { useState } from 'react';
import {
  Terminal,
  GitMerge,
  Database,
  FileJson,
  FileSpreadsheet,
  Globe,
  AlertOctagon,
  Code2,
  ArrowLeftCircle
} from 'lucide-react';
import Footer from '../components/Footer';

interface CaseStudyProps {
  onBack: () => void;
}

const AdapterPatternCaseStudy = ({ onBack }: CaseStudyProps) => {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('after');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30 pb-20">
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 text-cyan-400 font-mono text-sm font-bold tracking-wider">
            <Terminal size={18} />
            <span>ENGINEERING_CASE_STUDY</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-medium text-slate-400">
              Principal Engineer
            </span>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-cyan-500/40 bg-cyan-500/10 text-cyan-200 text-xs font-semibold hover:border-cyan-400 hover:bg-cyan-500/20 transition-colors"
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
            {['Refactoring', 'Adapter Pattern', 'SOLID Principles', 'Domain Driven Design'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-100 leading-tight">
            Decoupling Ingestion Logic: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              The Adapter Pattern
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            Refactoring a monolithic "Fat Model" into a polymorphic service architecture. Enabling CSV, JSON, and API sources to
            share a unified "Fetch → Map → Save" pipeline.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-red-500/30 transition-colors group">
            <div className="mb-4 p-3 bg-red-500/10 w-fit rounded-lg text-red-400 group-hover:text-red-300">
              <AlertOctagon size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">The "God Object"</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              <code>Inventory.rb</code> owned everything: CSV parsing, header validation, geocoding, and persistence. Changing one
              import type risked breaking them all.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-orange-500/30 transition-colors group">
            <div className="mb-4 p-3 bg-orange-500/10 w-fit rounded-lg text-orange-400 group-hover:text-orange-300">
              <GitMerge size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Leaky Abstractions</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Controllers and Background Jobs knew too much about model internals, calling <code>check_header</code> directly. High
              coupling, low cohesion.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-yellow-500/30 transition-colors group">
            <div className="mb-4 p-3 bg-yellow-500/10 w-fit rounded-lg text-yellow-400 group-hover:text-yellow-300">
              <Database size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Duplicated I/O</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              CSV imports and S3 JSON feeds had completely separate implementation paths, duplicating the "Upsert" and
              "Deactivation" logic.
            </p>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-100">Architecture Evolution</h2>
            <span className="text-xs font-mono text-cyan-500 bg-cyan-500/10 px-2 py-1 rounded">Polymorphic Design</span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />

            <div className="relative z-10 flex flex-col md:flex-row justify-between gap-12 items-center">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 bg-slate-950 border border-slate-800 p-3 rounded-lg shadow-lg w-48">
                  <FileSpreadsheet className="text-emerald-400" size={20} />
                  <span className="text-sm font-medium">Admin CSV</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-950 border border-slate-800 p-3 rounded-lg shadow-lg w-48">
                  <FileJson className="text-orange-400" size={20} />
                  <span className="text-sm font-medium">S3 JSON Feed</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-950 border border-slate-800 p-3 rounded-lg shadow-lg w-48">
                  <Globe className="text-blue-400" size={20} />
                  <span className="text-sm font-medium">Platform API</span>
                </div>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center relative h-64 border-l-2 border-r-2 border-slate-800 border-dashed px-8">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
                  <div className="text-xs text-slate-500 uppercase tracking-widest mb-2">Unified Interface</div>
                  <div className="bg-cyan-500/10 border border-cyan-500/50 p-4 rounded-xl text-cyan-300 font-mono font-bold">
                    InventoryImport::DataImporter
                  </div>
                  <div className="text-[10px] text-cyan-400/60 mt-2 font-mono">def fetch_data → map_row → save</div>
                </div>
                <div className="absolute top-8 left-0 w-8 h-[2px] bg-slate-700" />
                <div className="absolute top-1/2 left-0 w-8 h-[2px] bg-slate-700" />
                <div className="absolute bottom-8 left-0 w-8 h-[2px] bg-slate-700" />
                <div className="absolute top-1/2 right-0 w-8 h-[2px] bg-cyan-500" />
              </div>

              <div className="bg-slate-950 border border-slate-700 p-6 rounded-xl shadow-2xl flex flex-col items-center gap-3 w-48 border-t-4 border-t-cyan-500">
                <Database size={32} className="text-slate-300" />
                <span className="text-sm font-bold text-slate-200">PostgreSQL</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse delay-75" />
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse delay-150" />
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
                Before (Monolith)
              </button>
              <button
                onClick={() => setActiveTab('after')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'after'
                    ? 'bg-cyan-500/20 text-cyan-400 shadow-sm'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                After (Adapter)
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
                {activeTab === 'before' ? 'app/models/inventory.rb' : 'app/services/inventory_import/csv_service_adapter.rb'}
              </span>
            </div>

            <div className="p-6 overflow-x-auto">
              {activeTab === 'before' ? (
                <code className="block text-slate-300 whitespace-pre">
{`class Inventory < ApplicationRecord
  # PROBLEM: Model knows too much about file formats & validation
  def self.create_from_df(df, organization_id: nil)
    is_valid, missing = check_header(df.keys)
    
    if is_valid
      df.each_row do |row|
        # PROBLEM: N+1 Queries hardcoded inside the loop
        inv.location_type_id = LocationType.find_or_create_by(name: row[:loc]).id
        inv.publisher_id     = Publisher.find_or_create_by(name: row[:pub]).id
        
        inv.geocode
        inv.save
      end
    else
      { errors: "Invalid headers" }
    end
  end
end`}
                </code>
              ) : (
                <code className="block text-slate-300 whitespace-pre">
{`module InventoryImport
  # SOLUTION: Single Responsibility Principle
  class CSVServiceAdapter < DataImporter
    
    def initialize(df, organization_id: nil)
      @df = df
      # Preload dimensions ONCE (Performance)
      preload_common_lookups
    end

    # Implements the abstract 'map_row' method from DataImporter
    def build_inventory_from_row(row)
      # O(1) Memory Lookup
      location_type_id = @location_types[row[:location_type]] || 
                         LocationType.find_or_create_by(...).id
      
      {
        latitude: row[:latitude],
        location_type_id: location_type_id,
        # ... mapped attributes
      }
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
            <Code2 size={24} className="text-cyan-400" />
            Senior Engineering Analysis
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-cyan-400 font-mono font-bold text-sm uppercase tracking-wider">SOLID Alignment</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                <strong className="text-slate-200">Single Responsibility (SRP):</strong> The Model manages data; the Adapter
                manages import logic.
                <br />
                <strong className="text-slate-200">Open/Closed (OCP):</strong> We can add a <code>XMLServiceAdapter</code> tomorrow without touching the CSV logic.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-blue-400 font-mono font-bold text-sm uppercase tracking-wider">Maintainability</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Testing became trivial. Instead of mocking the entire Rails environment to test a CSV import, I can unit test the
                <code>CSVServiceAdapter</code> in isolation with a simple data frame.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-purple-400 font-mono font-bold text-sm uppercase tracking-wider">Memory vs Latency</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                By hoisting lookups to the <code>initialize</code> block, we traded a small upfront memory cost for massive latency
                reduction (removing DB roundtrips) during the loop execution.
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Adapters', val: '3', sub: 'Unified Interface' },
            { label: 'Preloaded Dims', val: '7', sub: 'Cached in Memory' },
            { label: 'Refactor', val: 'Zero', sub: 'Breaking Changes' },
            { label: 'Architecture', val: 'Clean', sub: 'Separation of Concerns' }
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 p-6 rounded-xl text-center group hover:border-cyan-500/30 transition-colors"
            >
              <div className="text-3xl font-bold text-slate-100 mb-1 group-hover:text-cyan-400 transition-colors">{stat.val}</div>
              <div className="text-sm font-medium text-cyan-500/80 mb-2">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.sub}</div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AdapterPatternCaseStudy;
