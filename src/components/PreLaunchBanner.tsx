import { useState } from "react";
import { FaFire } from "react-icons/fa";
import { Link } from "react-scroll";

const PreLaunchBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;

  return (
    <div className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-sm sm:text-base shadow-lg backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-3 animate-fadeIn">
        <div className="flex items-center gap-3 text-white">
          <FaFire className="text-yellow-400 animate-bounce drop-shadow-lg" size={18} />
          <p className="font-medium animate-pulse">
            🔥 <strong>Pre-order Zeno now</strong> and save <span className="underline">30%</span> — limited time!
          </p>
        </div>
        <div className="flex items-center gap-4 mt-2 sm:mt-0">
          <Link
            to="pricing"
            smooth={true}
            duration={500}
            className="bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer shadow-md"
          >
            View Pricing
          </Link>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-red-200 hover:scale-110 transform transition duration-200"
            aria-label="Close banner"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreLaunchBanner;


