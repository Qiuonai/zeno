import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-[#FAFAFA] py-12">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        {/* Logo + Description */}
        <div className="max-w-sm text-center md:text-left">
          <h3 className="font-['DM_Sans'] text-2xl font-bold text-[#FAFAFA] mb-3">Zeno</h3> 
          <p className="font-['Inter'] text-[#E0F2F1]">
            Your smart virtual assistant for clinics. Simplifying admin, so you can focus on patients.
          </p>
          <p className="font-['Inter'] mt-4 text-sm text-[#9E9E9E]">
            © {new Date().getFullYear()} Zeno. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-12">
          <div>
            <h4 className="font-['DM_Sans'] text-[#FAFAFA] font-semibold mb-3">Product</h4>
            <ul className="font-['Inter'] space-y-2 text-[#E0F2F1]">
              <li><a href="#features" className="hover:text-[#009688] transition">Features</a></li>
              <li><a href="#pricing" className="hover:text-[#009688] transition">Pricing</a></li>
              <li><a href="#how-it-works" className="hover:text-[#009688] transition">How It Works</a></li>
              <li><a href="#faq" className="hover:text-[#009688] transition">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-['DM_Sans'] text-[#FAFAFA] font-semibold mb-3">Company</h4>
            <ul className="font-['Inter'] space-y-2 text-[#E0F2F1]">
              <li><a href="#about" className="hover:text-[#009688] transition">About</a></li>
              <li><a href="#contact" className="hover:text-[#009688] transition">Contact</a></li>
              <li><a href="mailto:sommhonpsychiatry@gmail.com" className="hover:text-[#009688] transition">Message</a></li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-['DM_Sans'] text-[#FAFAFA] font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4">
            {/* Each icon wrapped in a circular div */}
            <a 
              href="https://facebook.com/zeno" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook" 
              className="w-10 h-10 rounded-full bg-[#FAFAFA] flex items-center justify-center text-[#333333] hover:bg-[#009688] hover:text-[#FAFAFA] transition-colors duration-200"
            >
              <FaFacebookF size={20} />
            </a>
            <a 
              href="https://twitter.com/zeno" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Twitter" 
              className="w-10 h-10 rounded-full bg-[#FAFAFA] flex items-center justify-center text-[#333333] hover:bg-[#009688] hover:text-[#FAFAFA] transition-colors duration-200"
            >
              <FaTwitter size={20} />
            </a>
            <a 
              href="https://linkedin.com/company/zeno" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn" 
              className="w-10 h-10 rounded-full bg-[#FAFAFA] flex items-center justify-center text-[#333333] hover:bg-[#009688] hover:text-[#FAFAFA] transition-colors duration-200"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a 
              href="https://instagram.com/zeno" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram" 
              className="w-10 h-10 rounded-full bg-[#FAFAFA] flex items-center justify-center text-[#333333] hover:bg-[#009688] hover:text-[#FAFAFA] transition-colors duration-200"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
