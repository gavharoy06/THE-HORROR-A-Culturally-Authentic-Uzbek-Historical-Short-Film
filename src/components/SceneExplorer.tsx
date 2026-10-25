import React, { useState } from 'react';
import { FILM_ACTS, FilmAct } from '../data/filmData';
import { Clapperboard, Eye, Camera, Music, Sparkles, BookOpen } from 'lucide-react';

interface SceneExplorerProps {
  onSelectActForPlayback: (actIndex: number) => void;
}

export const SceneExplorer: React.FC<SceneExplorerProps> = ({ onSelectActForPlayback }) => {
  const [selectedActIndex, setSelectedActIndex] = useState<number>(0);
  const act: FilmAct = FILM_ACTS[selectedActIndex];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-serif mb-2">
          <span>Director's Cut</span>
          <span>·</span>
          <span>Archival Breakdown</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-100 tracking-tight">
          Three Acts of Fear & Fortitude
        </h2>
        <p className="mt-2 text-stone-400 max-w-2xl text-sm leading-relaxed">
          Explore the exact cinematography, authentic Islamic cultural atmosphere, and psychological anatomy of Abdulla Qahhor's 19th-century Uzbek dramatic narrative.
        </p>
      </div>

      {/* Act Selection Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {FILM_ACTS.map((item, index) => {
          const isSelected = index === selectedActIndex;
          return (
            <button
              key={item.id}
              onClick={() => setSelectedActIndex(index)}
              className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden ${
                isSelected
                  ? 'bg-stone-900 border-amber-400/80 shadow-md ring-1 ring-amber-400/50'
                  : 'bg-stone-900/40 border-stone-800 hover:border-stone-700 hover:bg-stone-900/60'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-2">
                <span className={`font-serif tracking-wider ${isSelected ? 'text-amber-300 font-semibold' : 'text-stone-500'}`}>
                  ACT 0{item.actNumber}
                </span>
                <span className="text-stone-500">{item.timeOfDay.split(',')[0]}</span>
              </div>
              <h3 className="text-base font-serif font-bold text-stone-100 line-clamp-1 mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-amber-300/80 font-serif italic mb-2">
                {item.uzTitle}
              </p>
              <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed">
                {item.synopsis}
              </p>
            </button>
          );
        })}
      </div>

      {/* Deep Scene Inspection Showcase */}
      <div className="bg-stone-900/70 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl">
        {/* Visual Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-stone-800">
          {/* Large Image Still */}
          <div className="lg:col-span-7 relative aspect-video bg-black overflow-hidden group">
            <img
              src={act.imagePath}
              alt={act.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="text-xs font-mono text-stone-300 bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-stone-800">
                19th Century Uzbek Mise-en-scène
              </span>
              <button
                onClick={() => onSelectActForPlayback(selectedActIndex)}
                className="flex items-center gap-2 px-3.5 py-1.5 bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-semibold rounded-md shadow-lg transition-colors"
              >
                <Clapperboard className="w-3.5 h-3.5" />
                <span>Play Scene in Cinema</span>
              </button>
            </div>
          </div>

          {/* Act Technical & Aesthetic Breakdown */}
          <div className="lg:col-span-5 p-6 lg:p-8 flex flex-col justify-between bg-stone-950/40">
            <div>
              <div className="text-xs font-serif uppercase tracking-widest text-amber-400 mb-2">
                Act 0{act.actNumber} · Director's Ledger
              </div>
              <h3 className="text-2xl font-serif font-bold text-amber-100 mb-2">
                {act.title}
              </h3>
              <p className="text-xs font-serif italic text-amber-300/80 mb-4">
                {act.uzTitle} — {act.ruTitle}
              </p>
              <p className="text-stone-300 text-sm leading-relaxed mb-6">
                {act.synopsis}
              </p>
            </div>

            <div className="space-y-3 border-t border-stone-800/80 pt-4 text-xs">
              <div className="flex items-start gap-2">
                <Camera className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-stone-400 font-medium">Shot Type: </span>
                  <span className="text-stone-200">{act.cinematography.shotType}</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-stone-400 font-medium">Lighting: </span>
                  <span className="text-stone-200">{act.cinematography.lighting}</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Music className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-stone-400 font-medium">Soundscape: </span>
                  <span className="text-stone-200">{act.cinematography.soundDesign}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed 2-Column Split: Historical Notes vs Screenplay Excerpt */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8">
          {/* Historical Realism Column */}
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400 font-serif mb-4">
              <BookOpen className="w-4 h-4" />
              <span>Historical Realism & Islamic Cultural Notes</span>
            </div>
            <ul className="space-y-3">
              {act.historicalNotes.map((note, idx) => (
                <li
                  key={idx}
                  className="bg-stone-950/50 border border-stone-800/80 rounded-lg p-3.5 text-xs text-stone-300 leading-relaxed"
                >
                  <span className="font-semibold text-amber-300 mr-1.5">0{idx + 1}.</span>
                  {note}
                </li>
              ))}
            </ul>
          </div>

          {/* Screenplay Excerpt Column */}
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400 font-serif mb-4">
              <Eye className="w-4 h-4" />
              <span>Original Screenplay Dialogue & Directions</span>
            </div>
            <div className="bg-stone-950/70 border border-stone-800 rounded-lg p-4 space-y-4 max-h-80 overflow-y-auto">
              {act.screenplayLines.map((line, idx) => (
                <div key={idx} className="text-xs">
                  {line.isDirection ? (
                    <p className="text-stone-400 italic font-serif leading-relaxed border-l-2 border-stone-700 pl-3">
                      {line.textEn}
                    </p>
                  ) : (
                    <div>
                      <p className="text-amber-400 font-bold uppercase tracking-wider mb-1">
                        {line.character}
                      </p>
                      <p className="text-stone-200 font-serif text-sm leading-snug mb-1">
                        "{line.textEn}"
                      </p>
                      <p className="text-stone-400 font-serif italic text-xs">
                        "{line.textUz}"
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
