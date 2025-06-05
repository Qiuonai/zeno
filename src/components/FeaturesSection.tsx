//import React from "react";
import { CheckCircle } from "lucide-react";

// ✅ Move this array above the component
const features = [
  {
    title: "AI-Powered Scribe",
    description:
      "Automatically transcribes patient conversations into accurate medical notes within seconds.",
  },
  {
    title: "Real-Time Note Generation",
    description:
      "Notes are generated as you speak — no more end-of-day backlog.",
  },
  {
    title: "Seamless EHR Integration",
    description:
      "Effortlessly connect with your current EHR system with no friction.",
  },
  {
    title: "Multi-Specialty Support",
    description:
      "Whether you're in pediatrics, surgery, or psychiatry — Zeno is tuned to your needs.",
  },
  {
    title: "Data Privacy & Compliance",
    description:
      "Fully HIPAA and GDPR compliant. Your patient data is encrypted and secure.",
  },
  {
    title: "Doctor-Centered Design",
    description:
      "Zeno is built for ease-of-use — intuitive, fast, and designed with real doctors.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Doctors Choose Zeno
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 hover:bg-white rounded-2xl shadow-md transition-transform transform hover:-translate-y-1"
            >
              <CheckCircle className="text-blue-600 w-6 h-6 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

