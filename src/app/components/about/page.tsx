"use client";
import { personalData } from "@/../utils/Data/PersonalData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/dist/SplitText";
import { User, Sparkles, Download } from "lucide-react";

function About() {
  useGSAP(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    const split = new SplitText(".about-description", {
      type: "lines,words",
      linesClass: "overflow-hidden",
    });

    gsap.from(split.words, {
      opacity: 0,
      y: 30,
      rotateX: -45,
      stagger: 0.015,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-description",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div id="about" className="relative py-24 lg:py-48 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-red-500 mb-2">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                <User className="w-5 h-5 shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
              </div>
              <span className="text-sm font-bold uppercase tracking-[0.3em]">
                Get to know me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                Anil Kumar
              </span>
            </h2>
          </div>

          {/* Content Card */}
          <div className="relative group p-8 lg:p-12 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl overflow-hidden shadow-2xl max-w-4xl">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
              <Sparkles className="w-24 h-24 text-red-500" />
            </div>

            <div className="about-description text-slate-300 text-lg lg:text-xl leading-relaxed text-justify space-y-4 font-medium">
              {personalData.description}
            </div>

            {/* Decorative Accent */}
            <div className="absolute w-1 h-20 bg-gradient-to-b from-red-600 to-transparent left-0 top-10 rounded-full" />
          </div>

          {/* Stats and Resume Button */}
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
            <div className="flex flex-wrap gap-8 items-center">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">2+</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                  Years Experience
                </span>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">20+</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                  Projects Completed
                </span>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">10+</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                  Tech Skills
                </span>
              </div>
            </div>

            {/* Resume Download Button */}
            <a
              href={personalData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl border-2 border-red-500 bg-red-500/10 hover:bg-red-500/20 text-red-500 font-bold uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] ml-auto"
            >
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
