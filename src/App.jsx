import "./App.css";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import aboutSvg from "/about.svg";

function App() {
  return (
    <>
      <div className="persian bg-gray-50">
        <Header />
        <HeroSection />
        <Container>
          <div>
            <h2 className="text-2xl text-center text-gray-800 mt-16">
              درباره تاراز
            </h2>
            <p className="text-center text-gray-600 text-lg mt-4 px-4">
              هدف تاراز ارائه‌ی آموزش رایگان و همگانی است. ما با معیارهایی فراتر
              از آموزش سنتی رایج به دنبال آموزش اصول علمی در کنار مهارت‌های عملی
              هستیم و معتقدیم که هر دانش‌آموزی باید فرصت دنبال کردن علایقش را
              داشته باشد، خواه این به معنای گرفتن مدرکی دانشگاهی باشد یا کسب
              مهارتی که به آمادگی‌اش برای ورود به بازار کار کمک می‌کند.
            </p>
            <p className="text-center text-gray-600 text-lg mt-4 px-4">
              تاراز در کنار برنامه‌های آموزشی، بر رشد شخصی و توسعه‌ی فردی
              دانش‌آموزانش هم سرمایه‌گذاری می‌کند. ما در دوره‌هایی نظیر نویسندگی
              خلاق، فلسفه، طراحی گرافیک و جلسات پشتیبانی، دانش‌آموزان را به
              آن‌چه که برای درک بهتر خود و مقابله با چالش‌هاشان نیاز دارند، مجهز
              می‌کنیم. همچنین با تأکید بر اهمیت خودمراقبتی، به آن‌ها آموزش
              می‌دهیم که چطور مهارت‌های ارتباطی‌شان را تقویت کرده و با اطمینان
              خود را در محیط‌های مختلف حرفه‌ای و آموزشی نشان دهند.
            </p>
            <p className="text-center text-gray-600 text-lg mt-4 px-4">
              هدف تاراز ساختن یک محیط پرورشی است که دانش‌آموزان در آن احساس
              ارزشمندی و حمایت کنند. ما متعهدیم که نیازهای فردی دانش‌آموزان‌مان
              را برطرف کنیم و اطمینان حاصل کنیم که تمام‌شان تحصیلات عادلانه و
              برابری که شایسته‌اش هستند را دریافت می‌کنند.
            </p>
          </div>
          <img src={aboutSvg} alt="About" className="w-full mt-16" />
        </Container>
      </div>
    </>
  );
}

export default App;
