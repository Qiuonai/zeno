import {
  CalendarCheck,
  FileText,
  FolderKanban,
  ReceiptText,
  LineChart,
} from "lucide-react";
import { motion } from "framer-motion";
import { CgWebsite } from "react-icons/cg";


// ✅ Make sure this is above the component
const features = [
  {
    icon: <CgWebsite className="h-6 w-6 text-[#009688]" />,
    title: "Get a landing page in 30s",
    description: "Choose a theme, Upload your data, and get a customized page",
  },
  {
    icon: <CalendarCheck className="h-6 w-6 text-[#009688]" />,
    title: "Simple Appointment Scheduling",
    description: "Booking through your clinic's landing page — synced automatically.",
  },
  {
    icon: <ReceiptText className="h-6 w-6 text-[#009688]" />,
    title: "Auto Billing & Invoicing",
    description: "Automated invoice generation & payment tracking built in.",
  },
  {
    icon: <FileText className="h-6 w-6 text-[#009688]" />,
    title: "Digital Prescriptions",
    description: "Upload notes, type, or voice-to-text to generate prescriptions.",
  },
  {
    icon: <FolderKanban className="h-6 w-6 text-[#009688]" />,
    title: "Centralized Patient Records",
    description: "All your patient history and records — always accessible.",
  },
  {
    icon: <LineChart className="h-6 w-6 text-[#009688]" />,
    title: "View Earnings at a Glance",
    description: "Track income and trends directly from your dashboard.",
  },
];

export default function SolutionSection() {
  return (
    <section id="about" className="w-full py-20 bg-[#FAFAFA] dark:bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Say Goodbye to Chaos. Meet Zeno.
        </h2>
        <p className="text-lg text-[#666666] dark:text-[#666666] mb-12">
          All-in-one clinic management from your phone, tablet, or desktop — no training needed.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden
                         border border-gray-200 dark:border-slate-700
                         hover:border-transparent transform hover:-translate-y-1"
            >
              <div
                className="absolute inset-0 rounded-2xl border-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                aria-hidden="true"
              ></div>

              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#333333] dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-[#666666] dark:text-[#666666]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


  
  
