import React, { useState } from 'react';
import { 
  Play, 
  PlayCircle, 
  Video, 
  Clock, 
  BookOpen, 
  GraduationCap, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  ArrowRight, 
  FileText, 
  Volume2, 
  Maximize2, 
  X, 
  Tv, 
  MonitorPlay,
  SlidersHorizontal,
  ChevronRight,
  Download,
  Share2,
  Info
} from 'lucide-react';
import { 
  FREE_CLASSES_DATA, 
  FREE_CLASS_AREAS, 
  FreeClassArea, 
  FreeClassItem, 
  FreeClassLesson 
} from '../data/freeClassesData';

interface FreeClassesSectionProps {
  viewMode: 'blueprint' | 'live' | 'production';
  onNavigate?: (path: string) => void;
}

export const FreeClassesSection: React.FC<FreeClassesSectionProps> = ({
  viewMode: initialViewMode,
  onNavigate
}) => {
  const [selectedArea, setSelectedArea] = useState<FreeClassArea>('All Areas');
  const [activeClass, setActiveClass] = useState<FreeClassItem | null>(null);
  const [activeLessonIndex, setActiveLessonIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [classCompleted, setClassCompleted] = useState<boolean>(false);
  const [localBlueprintOverride, setLocalBlueprintOverride] = useState<boolean | null>(null);

  const effectiveBlueprintMode = localBlueprintOverride !== null 
    ? localBlueprintOverride 
    : initialViewMode === 'blueprint';

  // Filtered classes by area
  const filteredClasses = FREE_CLASSES_DATA.filter((item) => {
    if (selectedArea === 'All Areas') return true;
    return item.areaCategory === selectedArea;
  });

  const handleStartClass = (item: FreeClassItem) => {
    setActiveClass(item);
    setActiveLessonIndex(0);
    setIsPlaying(true);
    setClassCompleted(false);
  };

  return (
    <section 
      id="section-free-classes" 
      aria-labelledby="free-classes-heading" 
      className="space-y-8 pt-4 pb-2"
    >
      {/* ========================================================================= */}
      {/* 1. SECTION HEADER: Eyebrow + Title + HTC Note                             */}
      {/* ========================================================================= */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#D8D2D4] pb-5">
        <div className="space-y-2">
          {/* Requested Eyebrow: LEARN SOMETHING USEFUL */}
          <div className="flex items-center space-x-2.5">
            <span className="inline-flex items-center space-x-1.5 text-[11px] font-mono font-bold uppercase tracking-widest text-[#FE7311] bg-[#FE7311]/10 px-2.5 py-1 rounded-md border border-[#FE7311]/25">
              <PlayCircle className="w-3.5 h-3.5 text-[#FE7311]" />
              <span>LEARN SOMETHING USEFUL</span>
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-mono font-medium text-[#0D9BA3] uppercase tracking-wider">
              SECTION 6 — FREE CLASSES
            </span>
          </div>

          {/* Requested Title: Free Classes for Florida Realtors */}
          <h2 
            id="free-classes-heading" 
            className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-extrabold text-[#3A2E29] tracking-tight"
          >
            Free Classes for Florida Realtors
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-2xl leading-relaxed">
            Practical on-demand masterclasses and mini-courses designed to protect your contracts, eliminate transaction breaches, and optimize agent operating systems.
          </p>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. AREA CURRICULUM NAVIGATION PILLS                                       */}
      {/* Areas: Condo, Co-op, HOA, Bulletproof, Operations, Systems, Mini-Courses  */}
      {/* ========================================================================= */}
      <div className="flex items-center justify-between gap-3 overflow-x-auto pb-1 scrollbar-thin">
        <div className="flex items-center space-x-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mr-1 hidden lg:inline">
            CURRICULUM AREA:
          </span>
          {FREE_CLASS_AREAS.map((area) => {
            const isSelected = selectedArea === area;
            const count = area === 'All Areas' 
              ? FREE_CLASSES_DATA.length 
              : FREE_CLASSES_DATA.filter(c => c.areaCategory === area).length;

            return (
              <button
                key={area}
                type="button"
                onClick={() => setSelectedArea(area)}
                className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition cursor-pointer whitespace-nowrap border ${
                  isSelected
                    ? 'bg-[#3A2E29] text-white border-[#3A2E29] shadow-2xs'
                    : 'bg-white text-slate-600 border-[#D8D2D4] hover:border-slate-400 hover:text-[#3A2E29]'
                }`}
              >
                <span>{area}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Visual Indicator: This is something you WATCH, not a PDF */}
      <div className="bg-[#FAF8F5] border border-[#D8D2D4] rounded-xl p-3 sm:p-4 flex items-center justify-between gap-4 text-xs">
        <div className="flex items-center space-x-3 text-slate-700">
          <div className="p-2 bg-[#0D9BA3]/10 text-[#0D9BA3] rounded-lg">
            <MonitorPlay className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-[#3A2E29] font-montserrat">Interactive Video Learning Environment: </span>
            <span className="text-slate-600">All classes stream instantly in-browser with chapter navigation, downloadable slide decks, and Florida statutory checklists. Zero downloads required to begin.</span>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-2 text-[11px] font-mono text-slate-500 shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>ON-DEMAND ACCESS</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. CLASS CARDS GRID (Distinct Visual Treatment for Video Learning)        */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClasses.map((classItem) => {
          return (
            <article
              key={classItem.id}
              className="bg-white rounded-2xl border border-[#D8D2D4] hover:border-[#FE7311]/60 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between group"
            >
              {/* --- TOP: CINEMATIC VIDEO VIEWPORT / THUMBNAIL FRAME --- */}
              <div 
                onClick={() => handleStartClass(classItem)}
                className="relative aspect-video w-full bg-[#1F1916] overflow-hidden cursor-pointer group/thumb flex items-center justify-center select-none"
              >
                {/* Subtle cinematic gradient backdrop */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1916] via-[#1F1916]/75 to-transparent z-10" />
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#FE7311_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Top Badges in Viewport */}
                <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold tracking-wider text-white bg-black/60 backdrop-blur-xs px-2 py-1 rounded border border-white/10 uppercase">
                    {classItem.catalogId}
                  </span>
                  <span className="font-mono text-[10px] font-bold tracking-wider text-white bg-[#FE7311] px-2 py-0.5 rounded shadow-xs uppercase">
                    {classItem.badge}
                  </span>
                </div>

                {/* Centered Play Button with Glowing Ring on Hover */}
                <div className="z-20 relative flex flex-col items-center justify-center space-y-2 group-hover/thumb:scale-105 transition-transform duration-200">
                  <div className="w-14 h-14 rounded-full bg-white/95 text-[#FE7311] group-hover/thumb:bg-[#FE7311] group-hover/thumb:text-white flex items-center justify-center shadow-lg transition-colors duration-200">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-white/90 uppercase drop-shadow">
                    WATCH CLASS
                  </span>
                </div>

                {/* Bottom Video Metadata Overlay */}
                <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between text-white text-[11px] font-mono">
                  <div className="flex items-center space-x-1.5 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded border border-white/10">
                    <Clock className="w-3 h-3 text-[#FE7311]" />
                    <span>{classItem.durationMinutes} MIN</span>
                  </div>
                  <div className="flex items-center space-x-1.5 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded border border-white/10">
                    <Layers className="w-3 h-3 text-[#0D9BA3]" />
                    <span>{classItem.lessonsCount} LESSONS</span>
                  </div>
                </div>
              </div>

              {/* --- MIDDLE: CONTENT & PLACEHOLDERS --- */}
              <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  {/* Topic Tag & Format Duration Eyebrow */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[10px] font-bold text-[#0D9BA3] bg-[#0D9BA3]/10 px-2 py-0.5 rounded uppercase">
                      {classItem.areaTag}
                    </span>
                    <span className="text-slate-300">•</span>
                    {/* [FORMAT / DURATION] Placeholder Support */}
                    <span className="font-mono text-[10px] text-slate-500 font-medium">
                      {effectiveBlueprintMode ? classItem.placeholderFormatDuration : classItem.formatDuration}
                    </span>
                  </div>

                  {/* [CLASS TITLE] Placeholder Support */}
                  <h3 
                    onClick={() => handleStartClass(classItem)}
                    className="font-montserrat font-extrabold text-base sm:text-lg text-[#3A2E29] leading-snug group-hover:text-[#FE7311] transition-colors cursor-pointer"
                  >
                    {effectiveBlueprintMode ? classItem.placeholderTitle : classItem.title}
                  </h3>

                  {/* [SHORT DESCRIPTION] Placeholder Support */}
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {effectiveBlueprintMode ? classItem.placeholderDescription : classItem.shortDescription}
                  </p>

                  {/* Module Chapters Preview */}
                  <div className="pt-2 border-t border-[#D8D2D4]/70 space-y-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                      LESSON CHAPTERS:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {classItem.lessons.slice(0, 2).map((lesson) => (
                        <li key={lesson.lessonNumber} className="flex items-center space-x-2 text-[11px] truncate">
                          <PlayCircle className="w-3 h-3 text-[#FE7311] shrink-0" />
                          <span className="truncate">
                            <strong className="font-semibold text-slate-700">L{lesson.lessonNumber}:</strong> {lesson.title}
                          </span>
                        </li>
                      ))}
                      {classItem.lessons.length > 2 && (
                        <li className="text-[10px] font-mono text-slate-400 pl-5">
                          + {classItem.lessons.length - 2} more lessons & materials included
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* --- BOTTOM: EXACT CTA AS REQUESTED: START THE CLASS → --- */}
                <div className="pt-4 mt-4 border-t border-[#D8D2D4]">
                  <button
                    type="button"
                    onClick={() => handleStartClass(classItem)}
                    className="w-full bg-[#FE7311] hover:bg-[#e05f03] text-white py-3 px-4 rounded-xl text-xs font-mono font-bold tracking-wider transition-all duration-150 cursor-pointer shadow-sm hover:shadow-md flex items-center justify-center space-x-2 group/btn"
                  >
                    <span>
                      {effectiveBlueprintMode ? classItem.placeholderActionLabel : classItem.actionLabel}
                    </span>
                  </button>
                </div>
              </div>
            </article>
          );
        })}

        </div>

      {/* ========================================================================= */}
      {/* 4. INTERACTIVE CLASS LEARNING PORTAL & VIDEO PLAYER MODAL                  */}
      {/* ========================================================================= */}
      {activeClass && (
        <div 
          className="fixed inset-0 bg-[#3A2E29]/80 z-50 flex items-center justify-center p-3 sm:p-5 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
          aria-labelledby="class-player-title"
        >
          <div className="bg-white border border-[#D8D2D4] rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl relative my-auto">
            
            {/* Modal Header Bar */}
            <div className="bg-[#1F1916] text-white px-5 py-3.5 flex items-center justify-between border-b border-white/10 shrink-0">
              <div className="flex items-center space-x-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#FE7311]">
                  HTC CLASSROOM • ON-DEMAND STREAM
                </span>
                <span className="text-white/30">•</span>
                <span className="font-mono text-[11px] text-white/70">
                  {activeClass.catalogId}
                </span>
              </div>

              <button
                type="button"
                onClick={() => {
                  setActiveClass(null);
                  setIsPlaying(false);
                }}
                className="text-white/70 hover:text-white p-1 rounded-md hover:bg-white/10 transition cursor-pointer"
                title="Close Classroom"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Scroll Area */}
            <div className="overflow-y-auto flex-1 p-5 sm:p-6 space-y-6">
              
              {/* Simulated Video Player Stage (Unmistakably a video environment) */}
              <div className="rounded-xl overflow-hidden bg-black aspect-video relative flex flex-col justify-between border border-black/40 shadow-inner">
                
                {/* Video Top Bar Overlay */}
                <div className="p-3 sm:p-4 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent z-10 text-white">
                  <div className="space-y-0.5">
                    <span className="font-mono text-[10px] text-[#FE7311] font-bold tracking-wider uppercase">
                      LESSON {activeLessonIndex + 1} OF {activeClass.lessons.length}:
                    </span>
                    <p className="text-xs sm:text-sm font-semibold truncate max-w-md drop-shadow">
                      {activeClass.lessons[activeLessonIndex]?.title}
                    </p>
                  </div>
                  <span className="bg-black/60 border border-white/20 text-[10px] font-mono px-2 py-0.5 rounded text-white/80">
                    1080p HD
                  </span>
                </div>

                {/* Video Center Stage / Player Visuals */}
                <div className="my-auto text-center px-4 z-10">
                  <div className="relative inline-block mb-3">
                    <button
                      type="button"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-16 h-16 rounded-full bg-[#FE7311] hover:bg-[#e05f03] text-white flex items-center justify-center shadow-2xl transition cursor-pointer"
                    >
                      {isPlaying ? (
                        <div className="flex space-x-1.5 items-center justify-center">
                          <span className="w-2 h-6 bg-white rounded-xs" />
                          <span className="w-2 h-6 bg-white rounded-xs" />
                        </div>
                      ) : (
                        <Play className="w-7 h-7 fill-current ml-1" />
                      )}
                    </button>
                  </div>
                  <p className="text-white text-xs font-mono drop-shadow">
                    {isPlaying ? 'STREAMING CLASS (LIVE DEMO)' : 'CLICK TO RESUME LESSON'}
                  </p>
                  <p className="text-white/60 text-[11px] font-mono mt-1">
                    {activeClass.instructorRole}
                  </p>
                </div>

                {/* Video Controls Bottom Bar */}
                <div className="p-3 sm:p-4 bg-gradient-to-t from-black/90 to-transparent z-10 text-white space-y-2">
                  {/* Scrubber Bar */}
                  <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden cursor-pointer">
                    <div className="bg-[#FE7311] h-full w-2/5 relative" />
                  </div>
                  {/* Action buttons */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center space-x-3 text-white/80">
                      <button 
                        type="button" 
                        onClick={() => setIsPlaying(!isPlaying)} 
                        className="hover:text-white cursor-pointer"
                      >
                        {isPlaying ? 'PAUSE' : 'PLAY'}
                      </button>
                      <span>04:15 / {activeClass.lessons[activeLessonIndex]?.duration}</span>
                    </div>

                    <div className="flex items-center space-x-3 text-white/80">
                      <Volume2 className="w-4 h-4 cursor-pointer hover:text-white" />
                      <Maximize2 className="w-4 h-4 cursor-pointer hover:text-white" />
                    </div>
                  </div>
                </div>

              </div>

              {/* Class Header & Curriculum Navigation */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Left Column: Title, Description, Takeaways (2 Cols) */}
                <div className="lg:col-span-2 space-y-5">
                  <div className="space-y-1.5">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-[10px] font-bold text-[#0D9BA3] bg-[#0D9BA3]/10 px-2 py-0.5 rounded">
                        {activeClass.areaTag}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="font-mono text-xs text-slate-500 font-medium">
                        {activeClass.formatDuration}
                      </span>
                    </div>
                    <h2 id="class-player-title" className="text-xl sm:text-2xl font-montserrat font-extrabold text-[#3A2E29]">
                      {activeClass.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {activeClass.shortDescription}
                    </p>
                  </div>

                  {/* Key Takeaways */}
                  <div className="bg-[#FAF8F5] border border-[#D8D2D4] rounded-xl p-4 sm:p-5 space-y-3">
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#3A2E29] flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0D9BA3]" />
                      <span>KEY OPERATIONAL TAKEAWAYS:</span>
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {activeClass.keyTakeaways.map((takeaway, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-[#0D9BA3] font-bold mt-0.5">•</span>
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Included Materials Downloads */}
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      COURSE ATTACHMENTS & WORKBOOKS:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeClass.materialsIncluded.map((mat, i) => (
                        <div 
                          key={i}
                          className="bg-white border border-[#D8D2D4] rounded-lg p-2.5 flex items-center justify-between text-xs text-slate-700 hover:border-[#0D9BA3] transition cursor-pointer"
                          onClick={() => alert(`Downloading course attachment: ${mat}`)}
                        >
                          <div className="flex items-center space-x-2 truncate">
                            <FileText className="w-3.5 h-3.5 text-[#0D9BA3] shrink-0" />
                            <span className="truncate font-medium">{mat}</span>
                          </div>
                          <Download className="w-3.5 h-3.5 text-slate-400 hover:text-[#0D9BA3] shrink-0" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Lesson Chapters Syllabus */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3A2E29]">
                      LESSONS SYLLABUS
                    </span>
                    <span className="font-mono text-[11px] text-slate-500">
                      {activeClass.lessons.length} Modules
                    </span>
                  </div>

                  <div className="space-y-2">
                    {activeClass.lessons.map((lesson, idx) => {
                      const isActive = activeLessonIndex === idx;
                      return (
                        <button
                          key={lesson.lessonNumber}
                          type="button"
                          onClick={() => {
                            setActiveLessonIndex(idx);
                            setIsPlaying(true);
                          }}
                          className={`w-full text-left p-3 rounded-xl border transition cursor-pointer flex items-start space-x-3 ${
                            isActive
                              ? 'bg-[#0D9BA3]/10 border-[#0D9BA3] text-[#0D9BA3]'
                              : 'bg-white border-[#D8D2D4] hover:border-slate-400 text-slate-700'
                          }`}
                        >
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 ${
                            isActive ? 'bg-[#0D9BA3] text-white' : 'bg-slate-100 text-slate-500'
                          }`}>
                            {lesson.lessonNumber}
                          </div>
                          <div className="space-y-1 flex-1 min-w-0">
                            <p className="text-xs font-semibold leading-snug line-clamp-2">
                              {lesson.title}
                            </p>
                            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                              <span>{lesson.duration}</span>
                              {isActive && <span className="text-[#0D9BA3] font-bold">NOW PLAYING</span>}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Mark Class as Completed Action */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setClassCompleted(true)}
                      className={`w-full py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition cursor-pointer border ${
                        classCompleted
                          ? 'bg-emerald-500 text-white border-emerald-500'
                          : 'bg-[#3A2E29] hover:bg-[#2B231F] text-white border-[#3A2E29]'
                      }`}
                    >
                      {classCompleted ? '✓ CLASS COMPLETED • CERTIFICATE SAVED' : 'MARK CLASS COMPLETED'}
                    </button>
                  </div>
                </div>

              </div>

            </div>

            {/* Modal Footer Bar */}
            <div className="bg-[#FAF8F5] px-5 py-3 border-t border-[#D8D2D4] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-4 h-4 text-[#FE7311]" />
                <span>Complimentary Florida Realtor Training by Hometown TC</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setActiveClass(null);
                  setIsPlaying(false);
                }}
                className="bg-white border border-[#D8D2D4] hover:border-slate-400 text-[#3A2E29] px-4 py-1.5 rounded-lg font-mono font-bold text-xs transition cursor-pointer"
              >
                Close Video Player
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
