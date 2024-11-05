const HeroSection = () => {
  return (
    <main className="flex flex-col items-center text-center mt-16">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
        آموزش برای همه <br /> بدون مرز و محدودیت
      </h1>
      <p className="text-gray-600 text-lg mb-8">
        برای شروع به ماجراجویی آموزشی آماده‌ای؟
      </p>
      <button className="bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-2 px-6 rounded-lg">
        ثبت‌نام در کلاس‌ها
      </button>
    </main>
  );
};

export default HeroSection;
