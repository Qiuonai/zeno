import { Button } from "./ui/Buttons"; // Optional, depending on your button reuse setup
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 py-20 sm:py-32 max-w-6xl mx-auto overflow-hidden">
      
      {/* Dynamic Background Gradient */}
      <div
        className="absolute inset-0 z-[-2] opacity-70"
        style={{
          background: "linear-gradient(135deg, rgb(69, 131, 201) 0%, rgb(50, 40, 104) 100%)",
        }}
      ></div>

      {/* Glass Overlay */}
      <div className="absolute inset-0 z-[-1] backdrop-blur-xl bg-white/10 dark:bg-[#1a1a1a]/20 rounded-xl border border-white/30 dark:border-white/10 shadow-2xl transition-all duration-500 hover:shadow-cyan-500/50"></div>

      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#009688] leading-tight drop-shadow-md">
        Your Smart Virtual Assistant <br /> for Clinics
      </h1>

      {/* Subheadline */}
      <p className="mt-6 text-lg sm:text-xl text-gray-800 dark:text-gray-200 max-w-2xl drop-shadow-sm">
        Zeno handles appointments, prescriptions, billing, and patient records — so you can focus on what matters most: <strong className="text-[#FF6B6B]">your patients</strong>.
      </p>

      {/* CTAs */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 z-10">
        <button className="px-6 py-3 bg-[#009688] text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-teal-400/60 hover:bg-[#00796B] transition duration-300 hover:scale-105">
          Try Zeno for Free
        </button>
        <a
  href="#how-it-works"
  className="px-6 py-3 bg-transparent border-2 border-[#FF6B6B] text-[#FF6B6B] rounded-full text-lg font-semibold hover:bg-[#FF6B6B] hover:text-white transition duration-300 hover:scale-105 flex items-center gap-2"
>
  Learn How it Works <ArrowRight size={18} />
</a>
      </div>
    </section>
  );
}

