import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  SkipBack,
  SkipForward,
  Maximize2,
  Minimize2,
  Volume2,
  VolumeX,
  Languages,
  Film,
  Sparkles,
  Info
} from 'lucide-react';
import { FILM_ACTS, FilmAct, SubtitleCue } from '../data/filmData';
import { soundEngine } from '../utils/soundEngine';

interface CinematicPlayerProps {
  currentActIndex: number;
  onSelectAct: (index: number) => void;
  isCinemaMode: boolean;
  onToggleCinemaMode: () => void;
  isAudioMuted: boolean;
  onToggleAudio: () => void;
}

export const CinematicPlayer: React.FC<CinematicPlayerProps> = ({
  currentActIndex,
  onSelectAct,
  isCinemaMode,
  onToggleCinemaMode,
  isAudioMuted,
  onToggleAudio,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0); // 0 to 100
  const [aspectRatio, setAspectRatio] = useState<'scope' | '169'>('scope');
  const [showGrain, setShowGrain] = useState<boolean>(true);
  const [subtitleLang, setSubtitleLang] = useState<'en' | 'uz' | 'ru'>('en');
  const [currentSubtitle, setCurrentSubtitle] = useState<SubtitleCue | null>(null);
  const [isAudioPromptVisible, setIsAudioPromptVisible] = useState<boolean>(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const activeAct: FilmAct = FILM_ACTS[currentActIndex];

  // Sound Engine synchronization with act changes
  useEffect(() => {
    soundEngine.setActScene(currentActIndex);
    if (currentActIndex === 2 && isPlaying) {
      // Trigger shock audio stinger slightly into the climax
      const timer = window.setTimeout(() => {
        soundEngine.playShockStinger();
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [currentActIndex, isPlaying]);

  // Playback timer ticker
  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime = 100; // tick every 100ms
    const step = (intervalTime / (activeAct.durationSeconds * 1000)) * 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Advance to next act or loop
          if (currentActIndex < FILM_ACTS.length - 1) {
            onSelectAct(currentActIndex + 1);
            return 0;
          } else {
            setIsPlaying(false);
            return 100;
          }
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isPlaying, activeAct.durationSeconds, currentActIndex, onSelectAct]);

  // Find active subtitle based on progress
  useEffect(() => {
    const cue = activeAct.subtitles.find(
      (sub) => progress >= sub.startTime && progress <= sub.endTime
    );
    setCurrentSubtitle(cue || null);
  }, [progress, activeAct]);

  // Reset progress when act changes manually
  useEffect(() => {
    setProgress(0);
  }, [currentActIndex]);

  const togglePlay = useCallback(() => {
    if (!soundEngine.getIsRunning()) {
      soundEngine.start();
      setIsAudioPromptVisible(false);
    }
    setIsPlaying((prev) => !prev);
  }, []);

  const handleNextAct = () => {
    if (currentActIndex < FILM_ACTS.length - 1) {
      onSelectAct(currentActIndex + 1);
    } else {
      onSelectAct(0);
    }
    setProgress(0);
  };

  const handlePrevAct = () => {
    if (currentActIndex > 0) {
      onSelectAct(currentActIndex - 1);
    }
    setProgress(0);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
    setProgress(newProgress);
  };

  // Keyboard shortcut for spacebar play/pause
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      } else if (e.code === 'ArrowRight') {
        handleNextAct();
      } else if (e.code === 'ArrowLeft') {
        handlePrevAct();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePlay]);

  // Camera animation class based on act
  const kenBurnsClass =
    currentActIndex === 0
      ? 'animate-kenburns-1'
      : currentActIndex === 1
      ? 'animate-kenburns-2'
      : 'animate-kenburns-3';

  return (
    <div
      ref={containerRef}
      className={`relative w-full transition-all duration-500 ${
        isCinemaMode
          ? 'fixed inset-0 z-50 bg-black flex flex-col justify-center items-center p-0'
          : 'max-w-7xl mx-auto px-4 sm:px-6 py-6'
      }`}
    >
      {/* Audio initialization reminder banner if not yet started */}
      {isAudioPromptVisible && (
        <div className="mb-4 bg-amber-950/70 border border-amber-800/80 rounded-lg p-3 flex items-center justify-between gap-4 text-xs text-amber-200">
          <div className="flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Experience Sound:</strong> Click below to enable the authentic 19th-century atmospheric soundscape (autumn gale, burning reeds, brass kettle steam & Uzbek dutar motifs).
            </span>
          </div>
          <button
            onClick={() => {
              soundEngine.start();
              setIsAudioPromptVisible(false);
            }}
            className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded text-xs transition-colors shrink-0"
          >
            Enable Sound
          </button>
        </div>
      )}

      {/* Main Cinema Screen Frame */}
      <div
        className={`relative w-full overflow-hidden rounded-xl bg-stone-950 shadow-2xl border border-stone-800/80 group ${
          aspectRatio === 'scope' ? 'letterbox-scope' : 'letterbox-169'
        }`}
      >
        {/* Cinematic Film Image Layer with Ken Burns Motion */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            key={activeAct.imagePath}
            src={activeAct.imagePath}
            alt={activeAct.title}
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover origin-center transition-opacity duration-1000 ${kenBurnsClass}`}
          />
        </div>

        {/* 35mm Film Grain Overlay */}
        {showGrain && (
          <div className="absolute inset-0 pointer-events-none film-grain opacity-40 mix-blend-overlay" />
        )}

        {/* Dynamic Chiaroscuro & Vignette Overlays */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/85 via-black/20 to-black/45" />

        {/* Act 2 Firelight Glow effect */}
        {currentActIndex === 1 && (
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-amber-900/30 via-transparent to-transparent animate-fire-glow mix-blend-screen" />
        )}

        {/* Act 3 Storm Vignette effect */}
        {currentActIndex === 2 && (
          <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-red-950/30 shadow-[inset_0_0_120px_rgba(0,0,0,0.85)]" />
        )}

        {/* Top Floating Badge Bar */}
        <div className="absolute top-4 left-6 right-6 flex items-center justify-between text-xs text-stone-300 pointer-events-auto">
          <div className="flex items-center gap-3">
            <span className="font-serif italic tracking-wide text-amber-300 text-sm">
              Act {activeAct.actNumber} of 3
            </span>
            <span className="text-stone-500">·</span>
            <span className="font-medium text-stone-200">{activeAct.title}</span>
            <span className="text-stone-500 hidden sm:inline">·</span>
            <span className="text-stone-400 hidden sm:inline">{activeAct.timeOfDay}</span>
          </div>

          <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-stone-800/80">
            <span className="text-stone-400">19th-C. Uzbekistan</span>
            <span className="text-stone-600">|</span>
            <span className="text-amber-400/90 font-serif">Ramadan Night</span>
          </div>
        </div>

        {/* Center Play/Pause Large Click Target */}
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause film' : 'Play film'}
          className="absolute inset-0 flex items-center justify-center cursor-pointer focus:outline-none"
        >
          {!isPlaying && (
            <div className="w-16 h-16 rounded-full bg-amber-500/90 text-stone-950 flex items-center justify-center shadow-lg transition-transform hover:scale-105">
              <Play className="w-7 h-7 fill-current ml-1" />
            </div>
          )}
        </button>

        {/* Subtitles Overlay */}
        {currentSubtitle && (
          <div className="absolute bottom-20 left-6 right-6 flex flex-col items-center justify-center text-center pointer-events-none transition-all duration-300">
            {currentSubtitle.soundCue && (
              <span className="text-xs uppercase tracking-widest text-amber-300/80 mb-1 drop-shadow-md">
                {currentSubtitle.soundCue}
              </span>
            )}
            <div className="bg-black/75 backdrop-blur-sm px-5 py-2.5 rounded-lg border border-stone-800/80 max-w-2xl shadow-xl">
              <p className="text-xs tracking-wider uppercase text-amber-400/90 mb-0.5 font-medium">
                {currentSubtitle.speaker}
              </p>
              <p className="text-sm md:text-base font-serif text-stone-100 leading-snug drop-shadow">
                {subtitleLang === 'en' && currentSubtitle.en}
                {subtitleLang === 'uz' && currentSubtitle.uz}
                {subtitleLang === 'ru' && currentSubtitle.ru}
              </p>
            </div>
          </div>
        )}

        {/* Cinematic Control Bar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
          {/* Progress Timeline Scrubber */}
          <div
            onClick={handleSeek}
            className="w-full h-2 bg-stone-800/80 rounded cursor-pointer relative group/timeline mb-3 overflow-hidden"
          >
            <div
              className="h-full bg-amber-400 transition-all duration-100 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-amber-200 rounded-full shadow opacity-0 group-hover/timeline:opacity-100 transition-opacity" />
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 text-xs text-stone-300">
            {/* Playback Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrevAct}
                disabled={currentActIndex === 0}
                aria-label="Previous Act"
                className="p-1.5 hover:text-amber-300 disabled:opacity-40 transition-colors"
                title="Previous Scene (Left Arrow)"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              <button
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause' : 'Play'}
                className="p-2 bg-amber-400 hover:bg-amber-300 text-stone-950 rounded-full transition-colors font-medium shadow-sm"
                title="Play/Pause (Space)"
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
              </button>

              <button
                onClick={handleNextAct}
                aria-label="Next Act"
                className="p-1.5 hover:text-amber-300 transition-colors"
                title="Next Scene (Right Arrow)"
              >
                <SkipForward className="w-4 h-4" />
              </button>

              <button
                onClick={() => setProgress(0)}
                aria-label="Replay Scene"
                className="p-1.5 hover:text-amber-300 transition-colors text-stone-400"
                title="Replay Current Scene"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              {/* Time display */}
              <div className="text-stone-400 font-mono ml-2">
                {Math.floor((progress / 100) * activeAct.durationSeconds)}s / {activeAct.durationSeconds}s
              </div>
            </div>

            {/* Act Quick Jumper */}
            <div className="hidden lg:flex items-center gap-1.5 bg-stone-900/90 border border-stone-800 p-1 rounded-md">
              {FILM_ACTS.map((act, idx) => (
                <button
                  key={act.id}
                  onClick={() => onSelectAct(idx)}
                  className={`px-2.5 py-1 text-xs rounded transition-colors whitespace-nowrap ${
                    idx === currentActIndex
                      ? 'bg-amber-400 text-stone-950 font-semibold'
                      : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
                  }`}
                >
                  Act {act.actNumber}
                </button>
              ))}
            </div>

            {/* Display & Subtitle Preferences */}
            <div className="flex items-center gap-3">
              {/* Language Switch */}
              <div className="flex items-center gap-1 bg-stone-900/90 border border-stone-800 p-1 rounded-md">
                <Languages className="w-3.5 h-3.5 text-stone-400 ml-1" />
                <button
                  onClick={() => setSubtitleLang('en')}
                  className={`px-1.5 py-0.5 text-xs rounded transition-colors ${
                    subtitleLang === 'en' ? 'bg-amber-400 text-stone-950 font-semibold' : 'text-stone-400 hover:text-stone-200'
                  }`}
                  title="English Subtitles"
                >
                  EN
                </button>
                <button
                  onClick={() => setSubtitleLang('uz')}
                  className={`px-1.5 py-0.5 text-xs rounded transition-colors ${
                    subtitleLang === 'uz' ? 'bg-amber-400 text-stone-950 font-semibold' : 'text-stone-400 hover:text-stone-200'
                  }`}
                  title="O'zbekcha Subtitrlar"
                >
                  UZ
                </button>
                <button
                  onClick={() => setSubtitleLang('ru')}
                  className={`px-1.5 py-0.5 text-xs rounded transition-colors ${
                    subtitleLang === 'ru' ? 'bg-amber-400 text-stone-950 font-semibold' : 'text-stone-400 hover:text-stone-200'
                  }`}
                  title="Русские субтитры"
                >
                  RU
                </button>
              </div>

              {/* Sound Toggle */}
              <button
                onClick={onToggleAudio}
                aria-label={isAudioMuted ? 'Turn Sound On' : 'Turn Sound Off'}
                className="p-1.5 hover:text-amber-300 text-stone-400 transition-colors"
                title="Toggle Web Audio Soundscape"
              >
                {isAudioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
              </button>

              {/* Aspect Ratio Toggle (Scope 2.39:1 vs 16:9) */}
              <button
                onClick={() => setAspectRatio(aspectRatio === 'scope' ? '169' : 'scope')}
                className="p-1.5 hover:text-amber-300 text-stone-400 transition-colors"
                title={`Aspect Ratio: ${aspectRatio === 'scope' ? 'CinemaScope 2.39:1' : 'Widescreen 16:9'}`}
              >
                <Film className="w-4 h-4" />
              </button>

              {/* Film Grain Toggle */}
              <button
                onClick={() => setShowGrain((prev) => !prev)}
                className={`p-1.5 transition-colors ${showGrain ? 'text-amber-400' : 'text-stone-500 hover:text-stone-400'}`}
                title="Toggle 35mm Film Grain Simulation"
              >
                <Sparkles className="w-4 h-4" />
              </button>

              {/* Cinema Mode Toggle */}
              <button
                onClick={onToggleCinemaMode}
                className="p-1.5 hover:text-amber-300 text-stone-400 transition-colors"
                title={isCinemaMode ? 'Exit Cinema Mode' : 'Cinema Mode'}
              >
                {isCinemaMode ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Under-Player Metadata & Literary Context Card */}
      {!isCinemaMode && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-stone-300">
          <div className="md:col-span-2 bg-stone-900/60 border border-stone-800 p-6 rounded-xl">
            <div className="flex items-center gap-2 text-xs text-amber-400 uppercase tracking-widest font-serif mb-2">
              <span>Scene Synopsis</span>
              <span>·</span>
              <span>Act {activeAct.actNumber}</span>
            </div>
            <h2 className="text-2xl font-serif font-bold text-amber-100 mb-2">
              {activeAct.title}
            </h2>
            <p className="text-stone-300 text-sm leading-relaxed mb-4">
              {activeAct.synopsis}
            </p>

            <div className="border-t border-stone-800 pt-4 flex flex-wrap gap-y-2 gap-x-6 text-xs text-stone-400">
              <div>
                <span className="text-stone-500">Location:</span>{' '}
                <span className="text-stone-300 font-medium">{activeAct.setting}</span>
              </div>
              <div>
                <span className="text-stone-500">Time:</span>{' '}
                <span className="text-stone-300 font-medium">{activeAct.timeOfDay}</span>
              </div>
              <div>
                <span className="text-stone-500">Cinematography:</span>{' '}
                <span className="text-stone-300 font-medium">{activeAct.cinematography.shotType}</span>
              </div>
            </div>
          </div>

          <div className="bg-stone-900/60 border border-stone-800 p-6 rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-amber-400 uppercase tracking-widest font-serif mb-2">
                <Info className="w-3.5 h-3.5" />
                <span>Historical Authenticity</span>
              </div>
              <h3 className="text-base font-serif font-semibold text-stone-200 mb-2">
                No Supernatural Elements
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Abdulla Qahhor’s masterpiece "Dahshat" is renowned for its psychological realism. Unsin’s terror is real, born of social vulnerability and nighttime isolation. There are no ghosts, djinn, or monsters—only an escaping circus monkey from a traveling acrobat troupe, a collapsed pit, and human fear.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-800 text-xs text-stone-500 flex items-center justify-between">
              <span>Historical realism: 19th Century</span>
              <span className="text-amber-400">Ramadan Night</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
