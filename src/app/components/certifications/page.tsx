"use client";
import { certificationsData } from "@/../utils/Data/certifications";
import { Trophy, ExternalLink } from "lucide-react";
import SectionReveal from "../SectionReveal";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function Certifications() {
  const displayedCertifications = certificationsData.slice(0, 4);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Only animate cards that will scroll into view
    (gsap.utils.toArray(".cert-card") as Element[]).forEach((card: Element) => {
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
    <div
      id="certifications"
      className="relative z-50 py-24 lg:py-48 overflow-hidden"
    >
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
                  Credentials
                </span>
                <span className="w-8 h-[1px] bg-red-500/50"></span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter text-center">
                Certifications &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                  Credentials
                </span>
              </h2>
            </div>
          </SectionReveal>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-container grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {displayedCertifications && displayedCertifications.length > 0 ? (
            displayedCertifications.map((cert) => (
              <SectionReveal
                key={cert.id}
                direction="up"
                delay={cert.id * 0.05}
              >
                <div className="cert-card group relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl hover:border-red-500/50 hover:bg-white/[0.05] transition-all duration-500 shadow-xl overflow-hidden opacity-100">
                  {/* Header */}
                  <div className="relative z-10 mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                          <Trophy className="text-red-500 w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-red-500 transition-colors">
                            {cert.title}
                          </h3>
                          <p className="text-sm text-red-500 font-semibold mt-1">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-slate-500 bg-white/5 px-3 py-1 rounded-full">
                        {cert.year}
                      </span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="relative z-10 mb-6">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-semibold text-red-500 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20 group-hover:border-red-500/50 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Credential Link */}
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 inline-flex items-center gap-2 text-red-500 font-semibold text-sm hover:text-red-400 transition-colors group/link"
                  >
                    View Credential
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>

                  {/* Decorative Glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-600/10 via-transparent to-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </SectionReveal>
            ))
          ) : (
            <div className="text-center text-slate-400 col-span-full">
              Loading certifications...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Certifications;
