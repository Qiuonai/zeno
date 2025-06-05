import { useState } from 'react';
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Zeno and how does it help doctors?",
    answer:
      "Zeno is an AI medical scribe that automates patient documentation so doctors can spend more time on care, not typing.",
  },
  {
    question: "Is Zeno HIPAA-compliant?",
    answer:
      "Yes. Zeno follows industry best practices for privacy and security, including HIPAA compliance for handling patient data.",
  },
  {
    question: "How does the pre-order plan work?",
    answer:
      "Pre-ordering gives you early access to the Pro plan at a discounted rate. You'll be notified when the platform is live.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. There are no long-term contracts — cancel or switch plans anytime from your dashboard.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-4 cursor-pointer hover:bg-gray-50 transition"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-lg">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === index && (
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
