import React from "react";

// All homepage sections
import PreLaunchBanner from "../components/PreLaunchBanner";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import DoctorQuotesSection from "../components/DoctorQuotesSection";
import SolutionSection from "../components/SolutionSection";
import HowItWorksSection from "../components/HowItWorksSection";
import {PricingSection} from "../components/PricingSection";
//import TestimonialCarousel from "../components/TestimonialCarousel";
import FeaturesSection from "../components/FeaturesSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import FinalCTASection from "../components/FinalCTASection";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#1a1a1a] text-[#333] dark:text-white">
      <PreLaunchBanner />
      <Header />
      <main className="pt-20">
        <HeroSection />
        <DoctorQuotesSection />
        <SolutionSection />
        <HowItWorksSection />
        <PricingSection />
       
        <FeaturesSection />
        <FAQSection />
        <ContactSection />
        <FinalCTASection />
        <Footer />
      </main>
    </div>
  );
}


