"use client";
import { achievementsData } from "@/../utils/Data/achievements";
import { Award } from "lucide-react";
import SectionReveal from "../SectionReveal";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function Achievements() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Only animate cards that will scroll into view
    gsap.utils.toArray(".achievement-card").forEach((card: any) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <div id="achievements" className="relative z-50 py-24 lg:py-48 overflow-hidden">
      {/* Decorative Background Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 lg:mb-24">
          <SectionReveal direction="down">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3 text-red-500">
                <span className="w-8 h-[1px] bg-red-500/50"></span>
                <span className="text-xs font-bold uppercase tracking-[0.5em]">
                  Milestones
                </span>
                <span className="w-8 h-[1px] bg-red-500/50"></span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter text-center">
                Achievements &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                  Milestones
                </span>
              </h2>
            </div>
          </SectionReveal>
        </div>

        {/* Achievements Grid */}
        <div className="achievements-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {achievementsData && achievementsData.length > 0 ? (
            achievementsData.map((achievement) => (
              <SectionReveal key={achievement.id} direction="up" delay={achievement.id * 0.05}>
                <a
                  href={achievement.proofLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="achievement-card group relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl hover:border-red-500/50 hover:bg-white/[0.05] transition-all duration-500 shadow-xl cursor-pointer block h-full opacity-100"
                >
                {/* Icon */}
                <div className="text-5xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">
                  {achievement.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors">
                      {achievement.title}
                    </h3>
                    <span className="text-sm font-bold text-red-500 bg-red-500/10 px-3 py-1 rounded-full">
                      {achievement.year}
                    </span>
                  </div>

                  <p className="text-slate-400 text-base leading-relaxed group-hover:text-slate-300 transition-colors">
                    {achievement.description}
                  </p>
                </div>

                {/* Proof Link Indicator */}
                <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-2 text-red-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Proof
                </div>

                {/* Decorative Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-600/10 via-transparent to-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </a>
            </SectionReveal>
            ))
          ) : (
            <div className="text-center text-slate-400">Loading achievements...</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Achievements;
