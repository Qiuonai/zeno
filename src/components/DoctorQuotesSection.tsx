

const quotes = [
  {
    name: "Dr. Shekhar",
    quote: "I used to manage appointments via WhatsApp — it was chaos.",
  },
  {
    name: "Dr. Aisha",
    quote: "Paper records meant I lost patient history multiple times.",
  },
  {
    name: "Clinic Owner, Dhaka",
    quote: "We couldn't afford an custom IT system — we needed something simple.",
  },
  {
    name: "Dr. Rahman",
    quote: "I was writing prescriptions by hand after every session.",
  },
];

export default function DoctorQuotesSection() {
  return (
    // **** NEW BACKGROUND FOR PROBLEM SECTION ****
    // A very light, subtle blue-gray tint for the healthcare feel
    <section className="w-full py-20 bg-[#F5F8F9] dark:bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 dark:text-white">
          What Doctors Told Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {quotes.map((item, index) => (
            <div
              key={index}
              // Cards background (Option 2: Warmer Off-White) remains for contrast within this section
              className="rounded-2xl bg-[#FFFBF7] dark:bg-slate-800 p-6 shadow-md border border-gray-200 dark:border-white/10 transition hover:shadow-lg"
            >
              <p className="text-lg text-gray-800 dark:text-gray-200 italic mb-4">
                “{item.quote}”
              </p>
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                — {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
