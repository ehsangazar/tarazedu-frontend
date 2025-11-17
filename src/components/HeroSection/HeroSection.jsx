import {
  FaTelegram,
  FaGraduationCap,
  FaGlobe,
  FaRocket,
  FaHeart,
} from "react-icons/fa";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#DBEFF2] via-[#E8F5F7] to-white -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(115,156,20,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,184,37,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div
        className="absolute top-20 left-10 md:left-20 w-20 h-20 opacity-10 animate-pulse"
        style={{ animationDelay: "0s" }}
      >
        <FaGraduationCap className="w-full h-full text-[#739C14]" />
      </div>
      <div
        className="absolute top-40 right-10 md:right-20 w-16 h-16 opacity-10 animate-pulse"
        style={{ animationDelay: "0.3s" }}
      >
        <FaGlobe className="w-full h-full text-[#8BB825]" />
      </div>
      <div
        className="absolute bottom-20 left-1/4 w-12 h-12 opacity-10 animate-pulse"
        style={{ animationDelay: "0.5s" }}
      >
        <FaRocket className="w-full h-full text-[#739C14]" />
      </div>

      <div
        className={`max-w-5xl mx-auto w-full transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md mb-8 border border-[#739C14]/20">
          <span className="w-2 h-2 bg-[#8BB825] rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-gray-700">
            Free Online Education Platform
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight">
          <span className="block mb-2">Where Potential</span>
          <span className="block bg-gradient-to-r from-[#739C14] via-[#8BB825] to-[#739C14] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            Isn&apos;t Confined
          </span>
          <span className="block text-gray-800 mt-2">by Circumstance</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-700 text-xl md:text-2xl lg:text-3xl mb-4 leading-relaxed max-w-3xl mx-auto font-medium">
          Connecting students with teachers, volunteers, and resources
        </p>
        <p className="text-gray-600 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
          Join a growing community of{" "}
          <strong className="text-[#739C14]">Farsi-speaking</strong> learners,
          passionate teachers, dedicated volunteers, and generous donors who share the same belief in free, equal, and accessible education for all. Together, we turn possibility into reality.
        </p>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://t.me/+q-sakNStMHE3ODNh"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#739C14] to-[#8BB825] hover:from-[#577714] hover:to-[#739C14] text-white text-lg font-semibold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            <FaTelegram className="text-2xl group-hover:rotate-12 transition-transform duration-300" />
            <span>Join Us on Telegram</span>
          </a>
          <a
            href="https://buymeacoffee.com/tarazedu"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-[#739C14] text-lg font-semibold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border-2 border-[#739C14]"
          >
            <FaHeart className="text-xl group-hover:scale-110 transition-transform duration-300" />
            <span>Support Us</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
