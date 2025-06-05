// src/components/PricingSection.tsx
//import React from "react";

const pricingPlans = [
  {
    title: "Solo Practitioner",
    price: "$100/month",
    description: "For independent doctors",
    features: [
      "Smart scheduling",
      "Digital prescriptions",
      "Patient records",
      "Simple dashboard",
    ],
    cta: "Pre-order Now",
  },
  {
    title: "Clinic Plan",
    price: "$250/month",
    description: "For multi-doctor clinics",
    features: [
      "Multi-practitioner support",
      "Team dashboard",
      "Analytics & earnings",
      "All Solo features",
    ],
    cta: "Pre-order Now",
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "For hospitals & enterprise clinics",
    features: [
      "Custom integrations",
      "Staff training & onboarding",
      "Priority support",
    ],
    cta: "Contact Sales",
  },
];

export const PricingSection = () => {
  return (
    // Updated background for Pricing Section to a very light, cool tone
    <section className="py-20 bg-[#EFF5F9] text-[#333333]" id="pricing"> {/* Changed text color to dark gray */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#333333]">Simple, Transparent Pricing</h2> {/* Ensure heading is dark */}
        <p className="text-lg text-[#666666] mb-12"> {/* Ensure sub-text is secondary dark gray */}
          Choose a plan that fits your clinic. No hidden fees, cancel anytime.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              // Card background adjusted for light section background
              className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-md backdrop-blur-sm
                         hover:border-[#009688] transition-all relative overflow-hidden"
            >
              <div
                // Sleek border overlay now uses Primary Teal
                className="absolute inset-0 border-2 border-transparent group-hover:border-[#009688] rounded-2xl pointer-events-none transition-all duration-300"
              />

              <h3 className="text-2xl font-semibold text-[#333333]">{plan.title}</h3> {/* Card titles are dark */}
              {/* Price text uses Primary Teal */}
              <p className="text-xl font-bold text-[#009688] mt-2">{plan.price}</p>
              <p className="text-sm text-[#666666] mt-1">{plan.description}</p> {/* Card descriptions are secondary dark gray */}

              <ul className="mt-6 text-left space-y-2 text-[#666666]"> {/* List items use secondary dark gray */}
                {plan.features.map((feature, i) => (
                  <li key={i} className="before:content-['✓'] before:text-[#FF6B6B] before:mr-2"> {/* Checkmark uses Accent Coral */}
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-8 px-6 py-2 bg-[#009688] text-white font-medium rounded-full hover:bg-[#00796B] transition"> {/* Button uses Primary Teal */}
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
