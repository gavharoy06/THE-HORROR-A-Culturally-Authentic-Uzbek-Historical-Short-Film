import React from 'react';
import { Volume2, VolumeX, Clapperboard } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

interface TopNavProps {
  activeTab: 'film' | 'breakdown' | 'culture' | 'screenplay';
  onSelectTab: (tab: 'film' | 'breakdown' | 'culture' | 'screenplay') => void;
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
  return (
    <header className="sticky top-0 z-50 bg-stone-950/90 backdrop-blur-md border-b border-stone-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onSelectTab('film')}
          className="text-2xl font-serif tracking-widest text-amber-100 hover:text-amber-200 uppercase transition-colors whitespace-nowrap shrink-0 text-left"
        >
          DAHSHAT
        </button>

        {/* Zone 2: 4 single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-400">
          <button
            onClick={() => onSelectTab('film')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-stone-100 ${
              activeTab === 'film' ? 'text-amber-300 border-b-2 border-amber-400 font-semibold' : ''
            }`}
          >
            Cinematic Film
          </button>
          <button
            onClick={() => onSelectTab('breakdown')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-stone-100 ${
              activeTab === 'breakdown' ? 'text-amber-300 border-b-2 border-amber-400 font-semibold' : ''
            }`}
          >
            Scene Breakdown
          </button>
          <button
            onClick={() => onSelectTab('culture')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-stone-100 ${
              activeTab === 'culture' ? 'text-amber-300 border-b-2 border-amber-400 font-semibold' : ''
            }`}
          >
            Historical Artifacts
          </button>
          <button
            onClick={() => onSelectTab('screenplay')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-stone-100 ${
              activeTab === 'screenplay' ? 'text-amber-300 border-b-2 border-amber-400 font-semibold' : ''
            }`}
          >
            Screenplay Reader
          </button>
        </nav>

        {/* Zone 3: Primary action + sound toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleAudio}
            aria-label={isAudioMuted ? 'Unmute Soundscape' : 'Mute Soundscape'}
            className="p-2 text-stone-400 hover:text-amber-200 bg-stone-900 border border-stone-800 rounded-md transition-colors"
            title={isAudioMuted ? 'Turn Sound On' : 'Turn Sound Off'}
          >
            {isAudioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
          </button>

          <button
            onClick={onToggleCinemaMode}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-md shadow-sm transition-colors whitespace-nowrap shrink-0"
          >
            <Clapperboard className="w-3.5 h-3.5" />
            <span>{isCinemaMode ? 'Exit Cinema' : 'Cinema Mode'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
