import Button from "../Button/Button";
import { PiArrowCircleUpLeftFill } from "react-icons/pi";

const HeroSection = () => {
  return (
    <main className="flex flex-col items-center text-center mt-16">
      <h1 className="text-[32px] md:text-[48px] font-bold text-gray-800 mb-4">
        آموزش برای همه <br /> بدون مرز و محدودیت
      </h1>
      <p className="text-gray-600 text-lg mb-8 leading-relaxed">
        برای شروع به ماجراجویی آموزشی آماده‌ای؟
      </p>
      <Button
        href="https://survey.porsline.ir/s/gy1vVKYr"
        icon={PiArrowCircleUpLeftFill}
      >
        ثبت‌نام در کلاس‌ها
      </Button>
    </main>
  );
};

export default HeroSection;
