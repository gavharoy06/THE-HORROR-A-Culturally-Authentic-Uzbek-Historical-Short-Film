import React, { useState } from 'react';
import { Volume2, VolumeX, Clapperboard, Menu, X, BookOpen } from 'lucide-react';

interface TopNavProps {
  activeTab: 'film' | 'breakdown' | 'culture' | 'screenplay' | 'story';
  onSelectTab: (tab: 'film' | 'breakdown' | 'culture' | 'screenplay' | 'story') => void;
  isCinemaMode: boolean;
  onToggleCinemaMode: () => void;
  isAudioMuted: boolean;
  onToggleAudio: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  activeTab,
  onSelectTab,
  isCinemaMode,
  onToggleCinemaMode,
  isAudioMuted,
  onToggleAudio,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: 'film' | 'breakdown' | 'culture' | 'screenplay' | 'story') => {
    onSelectTab(tab);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-stone-950/90 backdrop-blur-md border-b border-stone-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-4 sm:px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNavClick('film')}
          className="text-2xl font-serif tracking-widest text-amber-100 hover:text-amber-200 uppercase transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
        >
          DAHSHAT
        </button>

        {/* Zone 2: Single-line nav links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-400">
          <button
            onClick={() => handleNavClick('film')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-stone-100 cursor-pointer ${
              activeTab === 'film' ? 'text-amber-300 border-b-2 border-amber-400 font-semibold' : ''
            }`}
          >
            Cinematic Film
          </button>
          <button
            onClick={() => handleNavClick('breakdown')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-stone-100 cursor-pointer ${
              activeTab === 'breakdown' ? 'text-amber-300 border-b-2 border-amber-400 font-semibold' : ''
            }`}
          >
            Scene Breakdown
          </button>
          <button
            onClick={() => handleNavClick('culture')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-stone-100 cursor-pointer ${
              activeTab === 'culture' ? 'text-amber-300 border-b-2 border-amber-400 font-semibold' : ''
            }`}
          >
            Historical Artifacts
          </button>
          <button
            onClick={() => handleNavClick('screenplay')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-stone-100 cursor-pointer ${
              activeTab === 'screenplay' ? 'text-amber-300 border-b-2 border-amber-400 font-semibold' : ''
            }`}
          >
            Screenplay Reader
          </button>
          <button
            onClick={() => handleNavClick('story')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-stone-100 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'story' ? 'text-amber-300 border-b-2 border-amber-400 font-semibold' : ''
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Full Story</span>
          </button>
        </nav>

        {/* Zone 3: Primary action + sound toggle + mobile menu toggle */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onToggleAudio}
            aria-label={isAudioMuted ? 'Unmute Soundscape' : 'Mute Soundscape'}
            className="p-2 text-stone-400 hover:text-amber-200 bg-stone-900 border border-stone-800 rounded-md transition-colors cursor-pointer"
            title={isAudioMuted ? 'Turn Sound On' : 'Turn Sound Off'}
          >
            {isAudioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
          </button>

          <button
            onClick={onToggleCinemaMode}
            className="flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs font-semibold tracking-wide text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-md shadow-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Clapperboard className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isCinemaMode ? 'Exit Cinema' : 'Cinema Mode'}</span>
            <span className="sm:hidden">Cinema</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-stone-400 hover:text-stone-100 bg-stone-900 border border-stone-800 rounded-md"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-800 bg-stone-950 px-6 py-4 space-y-2">
          <button
            onClick={() => handleNavClick('film')}
            className={`w-full text-left py-2 px-3 rounded text-sm transition-colors ${
              activeTab === 'film' ? 'bg-amber-400/10 text-amber-300 font-semibold' : 'text-stone-300 hover:bg-stone-900'
            }`}
          >
            Cinematic Film
          </button>
          <button
            onClick={() => handleNavClick('breakdown')}
            className={`w-full text-left py-2 px-3 rounded text-sm transition-colors ${
              activeTab === 'breakdown' ? 'bg-amber-400/10 text-amber-300 font-semibold' : 'text-stone-300 hover:bg-stone-900'
            }`}
          >
            Scene Breakdown
          </button>
          <button
            onClick={() => handleNavClick('culture')}
            className={`w-full text-left py-2 px-3 rounded text-sm transition-colors ${
              activeTab === 'culture' ? 'bg-amber-400/10 text-amber-300 font-semibold' : 'text-stone-300 hover:bg-stone-900'
            }`}
          >
            Historical Artifacts
          </button>
          <button
            onClick={() => handleNavClick('screenplay')}
            className={`w-full text-left py-2 px-3 rounded text-sm transition-colors ${
              activeTab === 'screenplay' ? 'bg-amber-400/10 text-amber-300 font-semibold' : 'text-stone-300 hover:bg-stone-900'
            }`}
          >
            Screenplay Reader
          </button>
          <button
            onClick={() => handleNavClick('story')}
            className={`w-full text-left py-2 px-3 rounded text-sm transition-colors flex items-center justify-between ${
              activeTab === 'story' ? 'bg-amber-400/10 text-amber-300 font-semibold' : 'text-stone-300 hover:bg-stone-900'
            }`}
          >
            <span>Full Story (3 Languages)</span>
            <BookOpen className="w-4 h-4 text-amber-400" />
          </button>
        </div>
      )}
    </header>
  );
};
