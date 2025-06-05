import { Button } from "@/components/ui/button";

export default function FinalCTASection() {
  return (
    <section className="py-24 bg-[#E0F2F1] text-[#333333] text-center">
      <div className="container mx-auto px-6 max-w-4xl flex flex-col items-center">
        <h2 className="font-['DM_Sans'] text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
          Pre-order Zeno to get one month free or sign up for early access!
        </h2>
        <p className="font-['Inter'] text-lg md:text-xl mb-12 text-[#666666] max-w-2xl leading-relaxed">
          Choose the path that best suits your clinic. Get ready to simplify your workflow and focus on your patients.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mb-8 w-full justify-center">
          {/* Primary CTA: Pre-order Now */}
          <Button
            size="lg"
            className="w-full sm:w-auto px-10 py-4 rounded-lg bg-[#FF6B6B] text-white hover:bg-[#E65C5C] font-bold text-xl uppercase tracking-wide transition-all duration-300 ease-out transform hover:scale-105 shadow-xl"
          >
            Pre-order Now 🙂
          </Button>

          {/* Secondary CTA: Signup for Beta */}
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto px-10 py-4 rounded-lg border-2 border-[#009688] text-[#009688] hover:bg-[#009688]/10 font-semibold text-xl uppercase tracking-wide transition-all duration-300 ease-out transform hover:scale-105"
          >
            Sign Up for Beta 
          </Button>
        </div>
      </div>
    </section>
  );
}