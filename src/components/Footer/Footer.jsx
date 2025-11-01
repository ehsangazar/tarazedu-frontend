import tarazLogo from "/logo_white.svg";
import telegramSvg from "/telegram.svg";
import instagramSvg from "/instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-[#172B35]">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-0">
        <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-center">
          <p className="text-white text-lg text-center md:text-left">
            © 2024 Taraz. All rights reserved.
          </p>

          <div className="flex justify-center py-12">
            <img src={tarazLogo} alt="Logo" className="w-14 h-14" />
          </div>

          <div className="flex justify-center items-center">
            <a
              href="https://t.me/tarazedu"
              className="w-16 flex justify-center"
              target="_blank"
            >
              <img src={telegramSvg} alt="Telegram" />
            </a>
            <a
              href="https://www.instagram.com/tarazedu"
              className="w-16 flex justify-center"
              target="_blank"
            >
              <img src={instagramSvg} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
