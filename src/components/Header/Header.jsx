import Container from "../Container/Container";
import tarazLogo from "/taraz.svg";

const Header = () => {
  const smoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href");
    const target = document.querySelector(targetId);
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <header className="w-full grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-center px-6 py-4">
        <div className="flex justify-center md:justify-start mt-4 md:mt-0 mb-16 md:mb-0">
          <img src={tarazLogo} alt="Logo" className="w-14 h-14" />
        </div>

        <nav className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-4 text-gray-700 text-lg">
          <a
            href="#courses"
            onClick={(e) => smoothScroll(e)}
            className="hover:text-green-500 text-center"
          >
            دوره‌ها و کلاس‌ها
          </a>
          <a
            href="#about"
            onClick={(e) => smoothScroll(e)}
            className="hover:text-green-500 text-center"
          >
            درباره ما
          </a>
          <a
            href="#teachers"
            onClick={(e) => smoothScroll(e)}
            className="hover:text-green-500 text-center"
          >
            معلم‌های تاراز
          </a>
        </nav>

        <div className="flex justify-center md:justify-end space-x-4">
          {/* <img
                                                src="/path/to/usa-flag.png"
                                                alt="USA Flag"
                                                className="w-6 h-6"
                                        />
                                        <img
                                                src="/path/to/iran-flag.png"
                                                alt="Iran Flag"
                                                className="w-6 h-6"
                                        /> */}
        </div>
      </header>
    </Container>
  );
};

export default Header;
