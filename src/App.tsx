/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TopNav } from './components/TopNav';
import { CinematicPlayer } from './components/CinematicPlayer';
import { SceneExplorer } from './components/SceneExplorer';
import { HistoricalArchive } from './components/HistoricalArchive';
import { ScreenplayReader } from './components/ScreenplayReader';
import { FullStoryReader } from './components/FullStoryReader';
import { Footer } from './components/Footer';
import { FILM_ACTS } from './data/filmData';
import { soundEngine } from './utils/soundEngine';
import { BookOpen, Clapperboard, Compass, Scroll, UserCheck } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'film' | 'breakdown' | 'culture' | 'screenplay' | 'story'>('film');
  const [currentActIndex, setCurrentActIndex] = useState<number>(0);
  const [isCinemaMode, setIsCinemaMode] = useState<boolean>(false);
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);

  const handleToggleCinemaMode = () => {
    setIsCinemaMode((prev) => {
      const next = !prev;
      if (next && activeTab !== 'film') {
        setActiveTab('film');
      }
      return next;
    });
  };

  const handleToggleAudio = () => {
    if (!soundEngine.getIsRunning()) {
      soundEngine.start();
      setIsAudioMuted(false);
      return;
    }
    const muted = soundEngine.toggleMute();
    setIsAudioMuted(muted);
  };

  const handleSelectActForPlayback = (index: number) => {
    setCurrentActIndex(index);
    setActiveTab('film');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Exit Cinema Mode on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCinemaMode) {
        setIsCinemaMode(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCinemaMode]);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-amber-800 selection:text-amber-100">
      {/* Top Bar Contract (hidden in Cinema Fullscreen mode) */}
      {!isCinemaMode && (
        <TopNav
          activeTab={activeTab}
          onSelectTab={setActiveTab}
          isCinemaMode={isCinemaMode}
          onToggleCinemaMode={handleToggleCinemaMode}
          isAudioMuted={isAudioMuted}
          onToggleAudio={handleToggleAudio}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Cinema Player Section (always rendered when active or in Cinema Mode) */}
        <section className={activeTab === 'film' || isCinemaMode ? 'block' : 'hidden'}>
          {/* Hero Editorial Header (Only when not in full cinema view) */}
          {!isCinemaMode && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-4">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-serif mb-2">
                  <span>19th-Century Historical Film</span>
                  <span>·</span>
                  <span>Ramadan After Tarawih</span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100 tracking-tight leading-tight">
                  Dahshat: The Night of the Cemetery Wager
                </h1>
                <p className="mt-3 text-stone-400 text-sm sm:text-base leading-relaxed">
                  Inside a traditional Uzbek courtyard house, young Unsin faces the cruel challenge of elderly Olimbek Dodkho: venture alone into the howling midnight cemetery, boil tea beside an ancient brick mausoleum, and earn her freedom.
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs">
                  <button
                    onClick={() => setActiveTab('story')}
                    className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-medium transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Read complete literary story in Uzbek, English or Japanese →</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Interactive Cinematic Player */}
          <CinematicPlayer
            currentActIndex={currentActIndex}
            onSelectAct={setCurrentActIndex}
            isCinemaMode={isCinemaMode}
            onToggleCinemaMode={handleToggleCinemaMode}
            isAudioMuted={isAudioMuted}
            onToggleAudio={handleToggleAudio}
          />

          {/* Three Acts Summary Cards */}
          {!isCinemaMode && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
              <div className="flex items-center justify-between border-b border-stone-800 pb-4 mb-6">
                <div>
                  <h2 className="text-xl font-serif font-bold text-stone-200">
                    The Complete Three-Act Progression
                  </h2>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Select any act to jump the cinematic timeline directly
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('breakdown')}
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore Shot Ledger</span>
                  <span>→</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {FILM_ACTS.map((act, idx) => (
                  <div
                    key={act.id}
                    onClick={() => setCurrentActIndex(idx)}
                    className={`cursor-pointer rounded-xl border p-4 transition-all group overflow-hidden ${
                      idx === currentActIndex
                        ? 'bg-stone-900 border-amber-400/80 ring-1 ring-amber-400/40'
                        : 'bg-stone-900/50 border-stone-800 hover:border-stone-700 hover:bg-stone-900/80'
                    }`}
                  >
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-3 bg-stone-950">
                      <img
                        src={act.imagePath}
                        alt={act.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded text-[11px] font-serif text-amber-300">
                        Act 0{act.actNumber}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                      <span>{act.timeOfDay.split(',')[0]}</span>
                      <span className="font-mono">{act.durationSeconds}s runtime</span>
                    </div>
                    <h3 className="text-base font-serif font-bold text-stone-100 group-hover:text-amber-200 transition-colors">
                      {act.title}
                    </h3>
                    <p className="text-xs text-amber-300/80 font-serif italic mb-2">
                      {act.uzTitle}
                    </p>
                    <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed">
                      {act.synopsis}
                    </p>
                  </div>
                ))}
              </div>

              {/* Read Full Story Promotional Invitation */}
              <div className="mt-12 bg-gradient-to-r from-amber-950/40 via-stone-900/60 to-stone-900/40 border border-amber-800/40 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-serif">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Unabridged Classical Literature</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-stone-100">
                    Read the Complete Story by Abdulla Qahhor
                  </h3>
                  <p className="text-stone-300 text-sm max-w-xl leading-relaxed">
                    Experience the original literary prose from the opening autumn storm to the heartbreaking climax in <strong>O‘zbekcha</strong>, <strong>English</strong>, or <strong>日本語</strong>.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setActiveTab('story');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-xs rounded-xl shadow-lg transition-colors whitespace-nowrap cursor-pointer shrink-0 flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Open Full Story Reader</span>
                </button>
              </div>

              {/* Character Dossiers Section */}
              <div className="mt-16 border-t border-stone-800 pt-10">
                <div className="text-xs uppercase tracking-widest text-amber-400 font-serif mb-2">
                  Dramatis Personae
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-100 mb-6">
                  Key Figures of the Narrative
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-stone-300">
                  {/* Unsin */}
                  <div className="p-5 rounded-xl bg-stone-900/60 border border-stone-800 space-y-2">
                    <span className="text-amber-400 font-serif text-base font-semibold block">
                      Unsin (Young Maiden)
                    </span>
                    <p className="text-stone-400">
                      <strong>Attire:</strong> Traditional long Uzbek patterned silk dress, loose trousers (<em>izor</em>), headscarf, grey-blue <em>paranji</em> cloak, and horsehair <em>chachvon</em> face veil.
                    </p>
                    <p className="text-stone-300 leading-relaxed">
                      Dignified, resilient, and fiercely brave. She undertakes the terrifying ordeal not out of recklessness, but to reclaim her fundamental human dignity and freedom from bonded service.
                    </p>
                  </div>

                  {/* Olimbek Dodkho */}
                  <div className="p-5 rounded-xl bg-stone-900/60 border border-stone-800 space-y-2">
                    <span className="text-amber-400 font-serif text-base font-semibold block">
                      Olimbek Dodkho (Feudal Master)
                    </span>
                    <p className="text-stone-400">
                      <strong>Attire:</strong> Voluminous white turban (<em>salla</em>), dark ornate embroidered velvet <em>chapan</em> robe, and black leather <em>mahsi</em> boots.
                    </p>
                    <p className="text-stone-300 leading-relaxed">
                      An elderly feudal patriarch comfortable in his absolute mastery. In an arrogant whim after Tarawih prayers, he sets an ordeal he believes will either break her spirit or expose her fear.
                    </p>
                  </div>

                  {/* The Escaped Macaque */}
                  <div className="p-5 rounded-xl bg-stone-900/60 border border-stone-800 space-y-2">
                    <span className="text-amber-400 font-serif text-base font-semibold block">
                      The Escaped Macaque (The "Terror")
                    </span>
                    <p className="text-stone-400">
                      <strong>Identity:</strong> A harmless performing monkey belonging to an itinerant <em>dorboz</em> (tightrope circus acrobat) camped near the shrine fair.
                    </p>
                    <p className="text-stone-300 leading-relaxed">
                      Shivering in the bitter autumn tempest, it sought shelter under the warm eaves of the brick mausoleum. Leaping onto Unsin's shoulder, it becomes the catalyst for her tragic shock.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Scene Explorer Tab */}
        {!isCinemaMode && activeTab === 'breakdown' && (
          <SceneExplorer onSelectActForPlayback={handleSelectActForPlayback} />
        )}

        {/* Historical Culture & Artifacts Tab */}
        {!isCinemaMode && activeTab === 'culture' && <HistoricalArchive />}

        {/* Screenplay Reader Tab */}
        {!isCinemaMode && activeTab === 'screenplay' && <ScreenplayReader />}

        {/* Full Story Unabridged Reader Tab */}
        {!isCinemaMode && activeTab === 'story' && (
          <FullStoryReader
            isAudioMuted={isAudioMuted}
            onToggleAudio={handleToggleAudio}
          />
        )}
      </main>

      {/* Editorial Footer (hidden in cinema mode) */}
      {!isCinemaMode && <Footer onSelectTab={setActiveTab} />}
    </div>
  );
}
