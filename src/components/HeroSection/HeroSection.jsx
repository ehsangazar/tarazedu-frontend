import { FaTelegram } from "react-icons/fa";

const HeroSection = () => {
  return (
    <main className="relative flex flex-col items-center text-center mt-12 mb-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-[#DBEFF2] via-[#E8F5F7] to-white opacity-50 -z-10"></div>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Education for All
          <br />
          <span className="bg-gradient-to-r from-[#739C14] to-[#8BB825] bg-clip-text text-transparent">
            Without Borders or Limitations
          </span>
        </h1>
        <p className="text-gray-700 text-xl md:text-2xl mb-10 leading-relaxed max-w-2xl mx-auto">
          Ready to start your educational adventure?
        </p>
        <div className="transform transition-transform hover:scale-105">
          <a
            href="https://t.me/+q-sakNStMHE3ODNh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#739C14] hover:bg-[#577714] text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-200"
          >
            <FaTelegram className="text-2xl" />
            <span>Join Us on Telegram</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
