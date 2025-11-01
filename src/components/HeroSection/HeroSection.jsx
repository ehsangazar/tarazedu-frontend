import Button from "../Button/Button";
import { PiArrowCircleUpLeftFill } from "react-icons/pi";

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
        <p className="text-gray-600 text-xl md:text-2xl mb-10 leading-relaxed max-w-2xl mx-auto">
          Ready to start your educational adventure?
        </p>
        <div className="transform transition-transform hover:scale-105">
          <Button
            href="https://survey.porsline.ir/s/A84W7tMx"
            icon={PiArrowCircleUpLeftFill}
          >
            Register for Classes
          </Button>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
