import React from 'react';
import { Scroll, Film } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: 'film' | 'breakdown' | 'culture' | 'screenplay') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="border-t border-stone-800 bg-stone-950 py-12 px-6 text-stone-500 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-serif text-lg tracking-widest text-amber-200">
            DAHSHAT (THE TERROR)
          </span>
          <p className="text-stone-400">
            A 19th-Century Uzbek Historical Drama based on the classic story by Abdulla Qahhor.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6 text-stone-400">
          <button
            onClick={() => onSelectTab('film')}
            className="hover:text-amber-300 transition-colors whitespace-nowrap"
          >
            Cinematic Experience
          </button>
          <button
            onClick={() => onSelectTab('breakdown')}
            className="hover:text-amber-300 transition-colors whitespace-nowrap"
          >
            Scene Breakdown
          </button>
          <button
            onClick={() => onSelectTab('culture')}
            className="hover:text-amber-300 transition-colors whitespace-nowrap"
          >
            Material Culture
          </button>
          <button
            onClick={() => onSelectTab('screenplay')}
            className="hover:text-amber-300 transition-colors whitespace-nowrap"
          >
            Theatrical Screenplay
          </button>
        </nav>

        <div className="text-center md:text-right text-stone-500">
          <p>© 19th-Century Historical Archive & Film Project</p>
          <p className="mt-0.5">Strict Historical Realism · No Modern or Supernatural Objects</p>
        </div>
      </div>
    </footer>
  );
};
