import React, { useState } from 'react';
import { CULTURAL_ITEMS, CulturalItem } from '../data/filmData';
import { Shield, Sparkles, Scroll, Landmark, Flame } from 'lucide-react';

export const HistoricalArchive: React.FC = () => {
  const [activeItem, setActiveItem] = useState<CulturalItem>(CULTURAL_ITEMS[0]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-serif mb-2">
          <span>Cultural & Material Ethnography</span>
          <span>·</span>
          <span>19th-Century Central Asia</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-100 tracking-tight">
          Historical Realism & Islamic Material Culture
        </h2>
        <p className="mt-2 text-stone-400 max-w-2xl text-sm leading-relaxed">
          Every costume, architectural detail, and ceremonial vessel depicted in this cinematic adaptation strictly mirrors the historical reality of 19th-century Uzbekistan. No modern objects, no Western garments, no gothic or supernatural anomalies.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Cultural Items Navigation Rail */}
        <div className="lg:col-span-5 space-y-3">
          {CULTURAL_ITEMS.map((item) => {
            const isSelected = item.id === activeItem.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`w-full p-4 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-stone-900 border-amber-400/80 shadow-md ring-1 ring-amber-400/50'
                    : 'bg-stone-900/40 border-stone-800 hover:border-stone-700 hover:bg-stone-900/60'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-stone-500 font-mono">{item.category}</span>
                  {isSelected && <span className="text-amber-400 text-xs font-serif">Selected</span>}
                </div>
                <h3 className="text-base font-serif font-bold text-stone-100">
                  {item.name}
                </h3>
                <p className="text-xs text-amber-300/80 font-serif italic mt-0.5">
                  {item.uzName}
                </p>
              </button>
            );
          })}

          {/* Abdulla Qahhor Literary Excerpt Highlight */}
          <div className="p-5 rounded-xl bg-amber-950/20 border border-amber-800/40 mt-6 text-xs text-stone-300">
            <div className="flex items-center gap-2 text-amber-400 font-serif uppercase tracking-wider mb-2">
              <Scroll className="w-4 h-4" />
              <span>Literary Origin</span>
            </div>
            <p className="font-serif italic text-sm text-stone-200 mb-2 leading-relaxed">
              "Qo'rquv odamni o'ldirmaydi, gumon o'ldiradi." (Fear does not kill a human; doubt and anticipation do.)
            </p>
            <p className="text-stone-400 leading-relaxed">
              Written by <strong>Abdulla Qahhor</strong> in 1936, <em>"Dahshat" (The Terror)</em> is hailed as one of the finest psychological short stories in World Literature, highlighting the tragic weight of patriarchal feudalism in Turkestan.
            </p>
          </div>
        </div>

        {/* Selected Item Detailed Ledger */}
        <div className="lg:col-span-7 bg-stone-900/70 border border-stone-800 rounded-2xl p-6 lg:p-8 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between border-b border-stone-800 pb-4 mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-400 font-serif">
                  {activeItem.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-amber-100 mt-1">
                  {activeItem.name}
                </h3>
                <p className="text-sm font-serif italic text-amber-300/80">
                  {activeItem.uzName}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                <Sparkles className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-6 text-sm">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-stone-400 font-medium mb-2">
                  Ethnographic Description
                </h4>
                <p className="text-stone-300 leading-relaxed font-serif text-base">
                  {activeItem.description}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800/80">
                <h4 className="text-xs uppercase tracking-wider text-amber-400 font-medium mb-2 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Cinematic & Dramatic Function</span>
                </h4>
                <p className="text-stone-300 text-xs leading-relaxed">
                  {activeItem.significance}
                </p>
              </div>
            </div>
          </div>

          {/* Historical Verifications Table */}
          <div className="mt-8 pt-6 border-t border-stone-800 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <span className="text-stone-500 block">Period</span>
              <span className="text-stone-200 font-medium">19th-Century (1860s–1880s)</span>
            </div>
            <div>
              <span className="text-stone-500 block">Region</span>
              <span className="text-stone-200 font-medium">Kokand & Tashkent Oasis</span>
            </div>
            <div>
              <span className="text-stone-500 block">Atmosphere</span>
              <span className="text-amber-300 font-medium">Autumn Ramadan Night</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
