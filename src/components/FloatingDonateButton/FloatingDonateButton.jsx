import { FaHeart } from "react-icons/fa";

const FloatingDonateButton = () => {
  return (
    <a
      href="https://buymeacoffee.com/tarazedu"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-gradient-to-r from-[#739C14] to-[#8BB825] hover:from-[#577714] hover:to-[#739C14] text-white px-5 py-3 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 group"
      aria-label="Support Taraz"
    >
      <FaHeart className="text-lg group-hover:scale-110 transition-transform duration-300" />
      <span className="font-semibold text-sm md:text-base hidden sm:inline">
        Support Us
      </span>
    </a>
  );
};

export default FloatingDonateButton;
