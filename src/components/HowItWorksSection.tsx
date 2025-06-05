import { motion } from "framer-motion";
import { FaCalendarCheck, FaStethoscope, FaFilePrescription, FaSms } from "react-icons/fa";

const steps = [
  {
    icon: <FaCalendarCheck className="text-blue-600 text-3xl mb-2" />,
    title: "1. Patient Books Appointment",
    description: "Clinic receives a booking via the custom Zeno page with time slot sync.",
  },
  {
    icon: <FaStethoscope className="text-blue-600 text-3xl mb-2" />,
    title: "2. Doctor Logs In & Consults",
    description: "Doctor accesses dashboard from mobile/PC and starts consultation.",
  },
  {
    icon: <FaFilePrescription className="text-blue-600 text-3xl mb-2" />,
    title: "3. Prescription & Invoice Created",
    description: "Digital prescription and invoice are auto-generated and saved.",
  },
  {
    icon: <FaSms className="text-blue-600 text-3xl mb-2" />,
    title: "4. Patient Gets Everything",
    description: "Patient receives SMS/email with prescription, invoice, and next steps.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          How Zeno Works
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          See how clinics and doctors use Zeno daily — no tech skills needed.
        </p>

        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100 dark:bg-slate-800 p-6 rounded-xl shadow hover:shadow-lg transition-all"
            >
              {step.icon}
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

