import React, { useState } from 'react';
import { FILM_ACTS } from '../data/filmData';
import { BookOpen, Languages, Volume2, Sparkles, Download, Copy, Check } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

export const ScreenplayReader: React.FC = () => {
  const [lang, setLang] = useState<'en' | 'uz'>('en');
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyScript = () => {
    let scriptText = "DAHSHAT (THE TERROR) - HISTORICAL CINEMATIC SCREENPLAY\n\n";
    FILM_ACTS.forEach((act) => {
      scriptText += `=== ACT ${act.actNumber}: ${act.title.toUpperCase()} ===\n`;
      scriptText += `LOCATION: ${act.setting}\nTIME: ${act.timeOfDay}\n\n`;
      act.screenplayLines.forEach((line) => {
        if (line.isDirection) {
          scriptText += `[SCENE DIRECTION]: ${lang === 'en' ? line.textEn : line.textUz}\n\n`;
        } else {
          scriptText += `${line.character}:\n"${lang === 'en' ? line.textEn : line.textUz}"\n\n`;
        }
      });
      scriptText += "\n";
    });

    navigator.clipboard.writeText(scriptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-stone-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-serif mb-2">
            <span>Dramatic Screenplay</span>
            <span>·</span>
            <span>Three Movements</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-100 tracking-tight">
            Original Theatrical Script
          </h2>
          <p className="mt-2 text-stone-400 text-sm">
            Adapted from Abdulla Qahhor's historical drama with cinematic direction and pacing.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {/* Language Toggle */}
          <div className="flex items-center gap-1 bg-stone-900 border border-stone-800 p-1 rounded-md text-xs">
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded transition-colors ${
                lang === 'en' ? 'bg-amber-400 text-stone-950 font-semibold' : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang('uz')}
              className={`px-3 py-1 rounded transition-colors ${
                lang === 'uz' ? 'bg-amber-400 text-stone-950 font-semibold' : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              O'zbekcha
            </button>
          </div>

          <button
            onClick={handleCopyScript}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-300 text-xs rounded-md transition-colors"
            title="Copy screenplay to clipboard"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy Script'}</span>
          </button>
        </div>
      </div>

      {/* Screenplay Document Container */}
      <div className="bg-stone-950/80 border border-stone-800/90 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-12 font-mono">
        {FILM_ACTS.map((act) => (
          <div key={act.id} className="space-y-6">
            {/* Act Heading */}
            <div className="border-b border-stone-800 pb-3">
              <span className="text-xs text-amber-400 tracking-widest uppercase">
                ACT 0{act.actNumber} · {act.timeOfDay}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-100 uppercase tracking-wider mt-1">
                {lang === 'en' ? act.title : act.uzTitle}
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                SCENE SETTING: {act.setting.toUpperCase()}
              </p>
            </div>

            {/* Screenplay Lines */}
            <div className="space-y-6 text-xs sm:text-sm">
              {act.screenplayLines.map((line, idx) => (
                <div key={idx} className="space-y-2">
                  {line.isDirection ? (
                    <div className="text-stone-400 leading-relaxed font-sans italic bg-stone-900/30 p-3.5 rounded-lg border-l-2 border-stone-700">
                      {lang === 'en' ? line.textEn : line.textUz}
                    </div>
                  ) : (
                    <div className="pt-2 pl-4 sm:pl-16 max-w-2xl">
                      <div className="text-amber-400 font-bold uppercase tracking-widest mb-1 text-xs">
                        {line.character}
                      </div>
                      <p className="text-stone-200 font-serif text-base sm:text-lg leading-relaxed">
                        "{lang === 'en' ? line.textEn : line.textUz}"
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Closing Title Card Note */}
        <div className="text-center pt-8 border-t border-stone-800">
          <p className="text-xs uppercase tracking-widest text-stone-500 font-sans">
            FADE TO BLACK · END OF DRAMATIC ARC
          </p>
          <p className="font-serif italic text-sm text-stone-400 mt-2">
            "Dahshat" (1936) by Abdulla Qahhor
          </p>
        </div>
      </div>
    </section>
  );
};
