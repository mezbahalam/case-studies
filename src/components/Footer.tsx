import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/50 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Mezbah Alam. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/mezbahalam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-300 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/mezbahalam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://twitter.com/mezbahalam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-sky-400 transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
