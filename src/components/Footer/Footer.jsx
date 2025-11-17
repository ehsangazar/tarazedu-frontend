import tarazLogo from "/logo_white.svg";
import telegramSvg from "/telegram.svg";
import instagramSvg from "/instagram.svg";
import { FaEnvelope, FaGraduationCap, FaVideo, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/mission", label: "Mission" },
    { path: "/our-approach", label: "Our Approach" },
    { path: "/ai-integration", label: "AI Integration" },
    { path: "/founder-vision", label: "Founder's Vision" },
    { path: "/events", label: "Events" },
  ];

  return (
    <footer className="bg-[#172B35] text-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="inline-flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity duration-200"
            >
              <img src={tarazLogo} alt="Taraz Logo" className="w-12 h-12" />
              <span className="text-xl font-bold">Taraz</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Creating spaces where students&apos; potential isn&apos;t confined by circumstance. Connecting students with teachers, volunteers, and resources for free, equal, and accessible education.
            </p>
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://t.me/+q-sakNStMHE3ODNh"
                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-[#739C14] rounded-full transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join us on Telegram"
              >
                <img src={telegramSvg} alt="Telegram" className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/tarazedu"
                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-[#739C14] rounded-full transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                <img src={instagramSvg} alt="Instagram" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-white transition-colors duration-200 text-sm inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Platforms</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="http://lms.tarazedu.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-200 text-sm group"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full group-hover:bg-[#739C14] transition-colors duration-200">
                    <FaGraduationCap className="text-xs" />
                  </div>
                  <span>LMS (Moodle)</span>
                </a>
              </li>
              <li>
                <a
                  href="http://meet.tarazedu.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-200 text-sm group"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full group-hover:bg-[#739C14] transition-colors duration-200">
                    <FaVideo className="text-xs" />
                  </div>
                  <span>Virtual Meetings</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:onlineclass@tarazedu.com"
                  className="inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-200 text-sm group"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full group-hover:bg-[#739C14] transition-colors duration-200">
                    <FaEnvelope className="text-xs" />
                  </div>
                  <span>onlineclass@tarazedu.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/+q-sakNStMHE3ODNh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-200 text-sm group"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full group-hover:bg-[#739C14] transition-colors duration-200">
                    <img src={telegramSvg} alt="Telegram" className="w-4 h-4" />
                  </div>
                  <span>Join our Telegram</span>
                </a>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">About</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Taraz is a free online platform connecting students with teachers from diverse disciplines, passionate volunteers, and donors who share the same belief in free, equal, and accessible education for all.
            </p>
            <a
              href="https://buymeacoffee.com/tarazedu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#739C14] to-[#8BB825] hover:from-[#577714] hover:to-[#739C14] text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 mb-4"
            >
              <FaHeart className="text-xs" />
              <span>Support Us</span>
            </a>
            <div className="pt-4 border-t border-white/10">
              <p className="text-white/60 text-xs">
                Turning possibility into reality
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Taraz. All rights reserved.
            </p>
            <p className="text-white/60 text-sm text-center md:text-left">
              Made with ❤️ for education
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
