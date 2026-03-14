"use client";
import { certificationsData } from "@/../utils/Data/certifications";
import { Trophy, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function CertificationsPage() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".cert-archive-card", {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".certifications-archive-grid",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Header with Back Button */}
      <div className="container mx-auto px-4 lg:px-8 py-12 relative z-10">
        <Link href="/#certifications" className="group inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors mb-8">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-4">
            All{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
              Certifications
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Complete collection of professional certifications and credentials
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-archive-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certificationsData.map((cert, index) => (
            <div
              key={cert.id}
              className="cert-archive-card group relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl hover:border-red-500/50 hover:bg-white/[0.05] transition-all duration-500 shadow-xl overflow-hidden"
              style={{
                animationDelay: `${index * 0.05}s`,
              }}
            >
              {/* Icon Header */}
              <div className="relative z-10 mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <Trophy className="text-red-500 w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-red-500 font-semibold mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-slate-500 bg-white/5 px-3 py-1 rounded-full whitespace-nowrap">
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
          ))}
        </div>

        {/* Total Count */}
        <div className="flex justify-center mt-16">
          <div className="text-center">
            <p className="text-slate-400 text-lg">
              Total Certifications:{" "}
              <span className="text-red-500 font-bold">{certificationsData.length}</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
