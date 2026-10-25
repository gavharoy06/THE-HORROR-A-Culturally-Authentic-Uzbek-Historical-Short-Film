import React, { useState, useEffect, useRef } from 'react';
import {
  FULL_STORY_DATA,
  CULTURAL_GLOSSARY,
  StoryChapter
} from '../data/fullStoryData';
import {
  BookOpen,
  Volume2,
  VolumeX,
  Languages,
  Bookmark,
  ChevronDown,
  ChevronUp,
  Sliders,
  Sparkles,
  HelpCircle,
  Copy,
  Check,
  AlignLeft,
  ArrowUp
} from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

interface FullStoryReaderProps {
  isAudioMuted: boolean;
  onToggleAudio: () => void;
}

export const FullStoryReader: React.FC<FullStoryReaderProps> = ({
  isAudioMuted,
  onToggleAudio,
}) => {
  const [lang, setLang] = useState<'uz' | 'en' | 'ja'>('uz');
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('md');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);
  const [showGlossary, setShowGlossary] = useState<boolean>(false);
  const [copiedChapter, setCopiedChapter] = useState<number | null>(null);

  const articleRef = useRef<HTMLDivElement>(null);

  // Track scroll progress and active chapter
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(currentProgress);
      }

      // Check which chapter is currently in view
      const chapterElements = FULL_STORY_DATA.chapters.map((ch) =>
        document.getElementById(ch.id)
      );
      const scrollPos = window.scrollY + 200;

      for (let i = chapterElements.length - 1; i >= 0; i--) {
        const el = chapterElements[i];
        if (el && el.offsetTop <= scrollPos) {
          setActiveChapterIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToChapter = (chapterId: string) => {
    const el = document.getElementById(chapterId);
    if (el) {
      const navOffset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyChapterText = (chapter: StoryChapter, idx: number) => {
    const title =
      lang === 'uz' ? chapter.titleUz : lang === 'en' ? chapter.titleEn : chapter.titleJa;
    const paragraphs =
      lang === 'uz'
        ? chapter.paragraphsUz
        : lang === 'en'
        ? chapter.paragraphsEn
        : chapter.paragraphsJa;

    const fullText = `${title}\n\n${paragraphs.join('\n\n')}`;
    navigator.clipboard.writeText(fullText);
    setCopiedChapter(idx);
    setTimeout(() => setCopiedChapter(null), 2000);
  };

  const currentTitle =
    lang === 'uz'
      ? FULL_STORY_DATA.titleUz
      : lang === 'en'
      ? FULL_STORY_DATA.titleEn
      : FULL_STORY_DATA.titleJa;

  const currentAuthor =
    lang === 'uz'
      ? FULL_STORY_DATA.authorUz
      : lang === 'en'
      ? FULL_STORY_DATA.authorEn
      : FULL_STORY_DATA.authorJa;

  const currentDesc =
    lang === 'uz'
      ? FULL_STORY_DATA.descriptionUz
      : lang === 'en'
      ? FULL_STORY_DATA.descriptionEn
      : FULL_STORY_DATA.descriptionJa;

  const currentHistory =
    lang === 'uz'
      ? FULL_STORY_DATA.historicalContextUz
      : lang === 'en'
      ? FULL_STORY_DATA.historicalContextEn
      : FULL_STORY_DATA.historicalContextJa;

  // Font size class mapping
  const fontClass =
    fontSize === 'sm'
      ? 'text-sm sm:text-base leading-relaxed'
      : fontSize === 'md'
      ? 'text-base sm:text-lg leading-relaxed'
      : fontSize === 'lg'
      ? 'text-lg sm:text-xl leading-relaxed sm:leading-loose'
      : 'text-xl sm:text-2xl leading-relaxed sm:leading-loose';

  const familyClass = lang === 'ja' ? 'font-japanese' : 'font-serif';

  return (
    <div className="relative min-h-screen bg-stone-950 text-stone-200">
      {/* Top Sticky Reading Progress Bar */}
      <div className="sticky top-[65px] z-40 bg-stone-950/95 backdrop-blur-md border-b border-stone-800">
        <div className="w-full h-1 bg-stone-900">
          <div
            className="h-full bg-amber-400 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Reader Utility Strip */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4 text-xs">
          {/* Active Chapter Indicator */}
          <div className="flex items-center gap-2 truncate">
            <Bookmark className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="text-stone-400 truncate">
              {lang === 'uz'
                ? FULL_STORY_DATA.chapters[activeChapterIndex].titleUz
                : lang === 'en'
                ? FULL_STORY_DATA.chapters[activeChapterIndex].titleEn
                : FULL_STORY_DATA.chapters[activeChapterIndex].titleJa}
            </span>
            <span className="text-stone-600 hidden sm:inline">·</span>
            <span className="text-stone-500 hidden sm:inline tabular-nums">
              {Math.round(scrollProgress)}% read
            </span>
          </div>

          {/* Reading Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Language Selector */}
            <div className="flex items-center bg-stone-900 border border-stone-800 rounded-md p-0.5">
              <button
                onClick={() => setLang('uz')}
                className={`px-2.5 py-1 rounded text-xs transition-colors flex items-center gap-1 ${
                  lang === 'uz'
                    ? 'bg-amber-400 text-stone-950 font-semibold'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
                title="O'zbek tilidagi to'liq matn"
              >
                <span>🇺🇿</span>
                <span className="hidden sm:inline">O‘zbekcha</span>
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded text-xs transition-colors flex items-center gap-1 ${
                  lang === 'en'
                    ? 'bg-amber-400 text-stone-950 font-semibold'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
                title="Complete English Translation"
              >
                <span>🇬🇧</span>
                <span className="hidden sm:inline">English</span>
              </button>
              <button
                onClick={() => setLang('ja')}
                className={`px-2.5 py-1 rounded text-xs transition-colors flex items-center gap-1 ${
                  lang === 'ja'
                    ? 'bg-amber-400 text-stone-950 font-semibold'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
                title="日本語文学的翻訳（全文）"
              >
                <span>🇯🇵</span>
                <span className="hidden sm:inline">日本語</span>
              </button>
            </div>

            {/* Font Size Adjuster */}
            <div className="hidden sm:flex items-center bg-stone-900 border border-stone-800 rounded-md p-0.5">
              <button
                onClick={() => setFontSize('sm')}
                className={`px-2 py-1 rounded text-xs ${
                  fontSize === 'sm' ? 'bg-stone-800 text-amber-300 font-bold' : 'text-stone-400'
                }`}
                title="Small text"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('md')}
                className={`px-2 py-1 rounded text-xs ${
                  fontSize === 'md' ? 'bg-stone-800 text-amber-300 font-bold' : 'text-stone-400'
                }`}
                title="Default text"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`px-2 py-1 rounded text-xs ${
                  fontSize === 'lg' ? 'bg-stone-800 text-amber-300 font-bold' : 'text-stone-400'
                }`}
                title="Large text"
              >
                A+
              </button>
            </div>

            {/* Cultural Glossary Toggle */}
            <button
              onClick={() => setShowGlossary((prev) => !prev)}
              className={`p-1.5 border rounded-md transition-colors flex items-center gap-1.5 ${
                showGlossary
                  ? 'bg-amber-400 text-stone-950 border-amber-400'
                  : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-amber-200'
              }`}
              title="Cultural Glossary & Terminology"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span className="hidden md:inline text-[11px]">Glossary</span>
            </button>

            {/* Audio Ambient Soundscape Toggle */}
            <button
              onClick={onToggleAudio}
              className="p-1.5 bg-stone-900 border border-stone-800 rounded-md text-stone-400 hover:text-amber-200 transition-colors"
              title={isAudioMuted ? 'Turn on background storm audio' : 'Mute audio'}
            >
              {isAudioMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-amber-400" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Reading Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12" ref={articleRef}>
        {/* Story Header Block */}
        <header className="text-center border-b border-stone-800 pb-10 mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-serif mb-3">
            <span>Classical Central Asian Masterpiece</span>
            <span>·</span>
            <span>{FULL_STORY_DATA.year}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-stone-100 tracking-tight mb-3">
            {currentTitle}
          </h1>

          <div className="text-lg sm:text-xl font-serif text-amber-200/90 italic mb-6">
            {currentAuthor}
          </div>

          <p className="max-w-2xl mx-auto text-stone-400 text-sm sm:text-base leading-relaxed mb-6">
            {currentDesc}
          </p>

          <div className="bg-stone-900/60 border border-stone-800/80 rounded-xl p-4 max-w-2xl mx-auto text-xs text-stone-400 leading-relaxed text-left">
            <span className="text-amber-400 font-semibold block mb-1">
              {lang === 'uz' ? 'Tarixiy Context:' : lang === 'en' ? 'Historical Context:' : '歴史的背景:'}
            </span>
            {currentHistory}
          </div>

          {/* Quick Chapter Navigation Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {FULL_STORY_DATA.chapters.map((ch, idx) => (
              <button
                key={ch.id}
                onClick={() => scrollToChapter(ch.id)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-serif transition-colors ${
                  activeChapterIndex === idx
                    ? 'bg-amber-400/10 text-amber-300 border-amber-400/50'
                    : 'bg-stone-900/60 text-stone-400 border-stone-800 hover:border-stone-700 hover:text-stone-200'
                }`}
              >
                {lang === 'uz' ? `Bob 0${ch.chapterNumber}` : lang === 'en' ? `Ch. 0${ch.chapterNumber}` : `第${ch.chapterNumber}章`}
              </button>
            ))}
          </div>
        </header>

        {/* Story Chapters Prose */}
        <article className="space-y-16">
          {FULL_STORY_DATA.chapters.map((chapter, chIdx) => {
            const paragraphs =
              lang === 'uz'
                ? chapter.paragraphsUz
                : lang === 'en'
                ? chapter.paragraphsEn
                : chapter.paragraphsJa;

            const title =
              lang === 'uz'
                ? chapter.titleUz
                : lang === 'en'
                ? chapter.titleEn
                : chapter.titleJa;

            return (
              <section
                key={chapter.id}
                id={chapter.id}
                className="scroll-mt-32 border-b border-stone-800/80 pb-16 last:border-b-0"
              >
                {/* Chapter Heading Bar */}
                <div className="flex items-center justify-between gap-4 mb-8">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-amber-400 font-serif block">
                      {lang === 'uz'
                        ? `Bob 0${chapter.chapterNumber}`
                        : lang === 'en'
                        ? `Chapter 0${chapter.chapterNumber}`
                        : `第${chapter.chapterNumber}章`}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-100 tracking-tight mt-1">
                      {title}
                    </h2>
                  </div>

                  <button
                    onClick={() => copyChapterText(chapter, chIdx)}
                    className="p-2 bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-400 hover:text-amber-200 rounded-md transition-colors text-xs flex items-center gap-1.5 shrink-0"
                    title="Copy chapter text"
                  >
                    {copiedChapter === chIdx ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Copy Chapter</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Paragraphs with Refined Editorial Typography */}
                <div className={`space-y-6 text-stone-300 ${fontClass} ${familyClass}`}>
                  {paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className={
                        pIdx === 0
                          ? 'first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-amber-400 first-letter:leading-none'
                          : ''
                      }
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            );
          })}
        </article>

        {/* Story Epilogue / Colophon */}
        <div className="mt-16 pt-10 border-t border-stone-800 text-center space-y-4">
          <div className="inline-block w-12 h-0.5 bg-amber-400/60 mb-2" />
          <p className="font-serif italic text-lg sm:text-xl text-amber-200">
            {lang === 'uz'
              ? 'Hikoya tamom bo‘ldi.'
              : lang === 'en'
              ? 'Thus concludes the story.'
              : '――了――'}
          </p>
          <p className="text-xs text-stone-500 font-sans uppercase tracking-widest">
            {FULL_STORY_DATA.authorUz} · 1936
          </p>

          <div className="pt-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-300 hover:text-amber-300 text-xs rounded-lg transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>
                {lang === 'uz' ? 'Tepaga qaytish' : lang === 'en' ? 'Back to Top' : 'ページの先頭へ戻る'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Cultural Glossary Floating Slide-Over Drawer */}
      {showGlossary && (
        <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-stone-900/95 backdrop-blur-xl border-l border-stone-800 shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-stone-800 pb-4 mb-6">
              <div className="flex items-center gap-2 text-amber-400 font-serif">
                <HelpCircle className="w-4 h-4" />
                <h3 className="font-bold text-base">
                  {lang === 'uz'
                    ? 'Tarixiy Atamalar Lug‘ati'
                    : lang === 'en'
                    ? 'Cultural Glossary'
                    : '伝統用語の解説'}
                </h3>
              </div>
              <button
                onClick={() => setShowGlossary(false)}
                className="text-stone-400 hover:text-stone-100 text-xs px-2 py-1 bg-stone-800 rounded"
              >
                ✕ Close
              </button>
            </div>

            <div className="space-y-5">
              {CULTURAL_GLOSSARY.map((item, idx) => (
                <div key={idx} className="bg-stone-950/60 border border-stone-800/80 rounded-xl p-3.5 text-xs">
                  <div className="font-serif font-bold text-amber-300 text-sm mb-1">
                    {item.term}
                  </div>
                  <p className="text-stone-300 leading-relaxed font-sans">
                    {lang === 'uz'
                      ? item.definitionUz
                      : lang === 'en'
                      ? item.definitionEn
                      : item.definitionJa}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-stone-800 text-stone-500 text-[11px] text-center">
            {lang === 'uz'
              ? 'XIX asr O‘zbek madaniy va ijtimoiy merosi'
              : lang === 'en'
              ? '19th-Century Central Asian Historical Realism'
              : '19世紀ウズベキスタンの歴史的・文化的事実に基づく'}
          </div>
        </div>
      )}
    </div>
  );
};
