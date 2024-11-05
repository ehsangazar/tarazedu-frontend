import "./App.css";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import PersonTile from "./components/PersonTile/PersonTile";
import aboutSvg from "/about.svg";
import shadiSvg from "/shadi.svg";
import melikaSvg from "/melika.svg";
import reyhaneSvg from "/reyhane.svg";
import ehsanSvg from "/ehsan.svg";
import sajedeSvg from "/sajede.svg";
import shirinSvg from "/shirin.svg";
import fatemeSvg from "/fateme.svg";
import aisanSvg from "/aisan.svg";
import courseSvg from "/course.svg";
import hatSvg from "/hat.svg";
import CourseTile from "./components/CourseTile/CourseTile";
import { PiArrowCircleUpLeftFill } from "react-icons/pi";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <div className="persian bg-gray-50">
        <Header />
        <HeroSection />
        <Container>
          <div>
            <h2
              id="courses"
              className="text-2xl text-center font-semibold text-gray-800 mt-16 pt-16 mb-16"
            >
              دوره‌ها و کلاس‌ها
            </h2>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                <CourseTile
                  imgSrc={courseSvg}
                  title={"زبان انگلیسی"}
                  learning={"تمرین، اعتمادبه‌نفس، ارتباطات"}
                  description={
                    "این کلاس برای تقویت اعتمادبه‌نفس شما در مکالمات روزمره انگلیسی طراحی شده است. با روش‌های مختلف، مانند خواندن مقاله، تماشای فیلم و نوشتن، دانش خود را به کار می‌گیرید. در پایان ترم، با همسالان‌تان از سراسر جهان از طریق گوگل میت گفتگو می‌کنید و شبکه‌ی دوستی خود را گسترش می‌دهید."
                  }
                  teachers={[melikaSvg, sajedeSvg]}
                />

                <CourseTile
                  imgSrc={courseSvg}
                  title={"داستان‌نویسی"}
                  learning={"تمرین، اعتمادبه‌نفس، ارتباطات"}
                  description={
                    "این کلاس با تأکید بر تخیل و احساسات درونی، به دانش‌آموزان کمک می‌کند تا از طریق نویسندگی، خلاقیت، دقت، و اعتمادبه‌نفس خود را تقویت کنند. قصه‌گویی و نویسندگی را به‌عنوان فرآیندی خلاقانه، شبیه ساختن خانه‌ای از آجرها، یاد می‌گیرند و با کلمات، جهانی جدید می‌آفرینند."
                  }
                  teachers={[shirinSvg]}
                />

                <CourseTile
                  imgSrc={courseSvg}
                  title={"طراحی گرافیک"}
                  learning={"طراخی، خلاقیت، تصویرسازی"}
                  description={
                    "در کلاس طراحی گرافیک، با مفاهیم بصری و عناصر اصلی مثل نقطه، خط و سطح آشنا می‌شویم. از طبیعت الهام می‌گیریم، تاریخچه تصویرسازی را مرور کرده و رنگ‌سازی را تجربه می‌کنیم. با ابزارهایی چون گواش و آبرنگ، شخصیت‌هایی خلق می‌کنیم و آن‌ها را در فضا قرار داده و داستان‌هایشان را به تصویر می‌کشیم."
                  }
                  teachers={[reyhaneSvg]}
                />

                <CourseTile
                  imgSrc={courseSvg}
                  title={"برنامه‌نویسی"}
                  learning={"یادگیری، پروژه، شغل"}
                  description={
                    "کلاس برنامه‌نویسی ما با هدف آموزش تکنیک‌ها و استراتژی‌های پایه طراحی شده است. دانش‌آموزان در طول ترم با زبان‌های HTML، CSS و JavaScript آشنا می‌شوند و مهارت‌های لازم را برای پروژه‌های واقعی کسب می‌کنند. در پایان دوره، پروژه‌هایی را تکمیل می‌کنند که به رزومه و فرصت‌های شغلی آن‌ها ارزش می‌بخشد."
                  }
                  teachers={[ehsanSvg]}
                />

                <CourseTile
                  imgSrc={courseSvg}
                  title={"شاهنامه‌خوانی"}
                  learning={"شاهنامه، ماجراجویی، شناخت"}
                  description={
                    "در کارگاه شاهنامه‌خوانی، سفری ماجراجویانه به دوران کهن داریم. با داستان‌های شاهنامه فردوسی، دیدگاه‌های نیاکان‌مان را درباره‌ی جهان می‌کاویم. در کنار هم با شخصیت‌ها و موقعیت‌های شاهنامه آشنا می‌شویم و با فعالیت‌های خلاقانه در دل داستان‌ها غرق می‌شویم."
                  }
                  teachers={[ehsanSvg]}
                />

                <CourseTile
                  imgSrc={courseSvg}
                  title={"المپیاد ادبیات"}
                  learning={"متون کلاسیک، آمادگی، رقابت"}
                  description={
                    "کلاس المپیاد ادبیات فرصتی است برای تقویت توانایی دانش‌آموزان در شرکت در آزمون المپیاد ادبیات. اینجا متون کلاسیک همچون غزلیات حافظ، کلیات سعدی، شاهنامه و تاریخ بیهقی را با هم می‌خوانیم و به درک عمیق‌تری از ادبیات و آمادگی برای رقابت کشوری دست می‌یابیم. مدال المپیاد، بسته به رنگ و رشته‌ی دانشگاهی، ممکن است معافیت یا سهمیه‌ای در کنکور به همراه داشته باشد."
                  }
                  teachers={[aisanSvg]}
                />

                <CourseTile
                  imgSrc={courseSvg}
                  title={"ریاضی"}
                  learning={"تفکر، حل‌مسئله، پیشرفت"}
                  description={
                    "در کلاس ریاضی، پایه‌ی قوی در مفاهیم ریاضی را می‌سازیم و از آن در زمینه‌های کاربردی مثل برنامه‌نویسی استفاده می‌کنیم. کلاس‌ها در سطح‌های متوسط تا پیشرفته ارائه می‌شوند و استادان در حل مسائل چالش‌برانگیز و تقویت مهارت‌های حل‌مسئله و تفکر انتقادی، راهنمای دانش‌آموزان هستند."
                  }
                  teachers={[fatemeSvg]}
                />
              </div>
            </div>
          </div>
        </Container>
        <Container>
          <div>
            <h2
              id="about"
              className="text-2xl text-center font-semibold text-gray-800 mt-16 pt-16 mb-16"
            >
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
        <Container>
          <div>
            <h2
              id="teachers"
              className="text-2xl text-center font-semibold text-gray-800 mt-16 pt-16 mb-16"
            >
              معلم‌های تاراز
            </h2>
            <p className="text-center text-gray-600 text-lg mt-4 px-4">
              تیم آموزشی تاراز شامل معلمان متخصص از رشته‌های مختلف است که با
              اشتیاق و تجربه به رشد و یادگیری دانش‌آموزان کمک می‌کنند. از
              زبان‌آموزی و ریاضی تا ادبیات و هنر، هر معلم با رویکردهای نوین،
              دنیای جدیدی از یادگیری را برای دانش‌آموزان فراهم می‌آورد.
            </p>
            <div className="flex justify-center flex-wrap">
              <div className="px-14">
                <PersonTile
                  imgSrc={melikaSvg}
                  title={"ملیکا فرجی"}
                  role={"مدرس زبان انگلیسی"}
                />
              </div>
              <div className="px-14">
                <PersonTile
                  imgSrc={sajedeSvg}
                  title={"ساجده کاشانی"}
                  role={"مدرس زبان انگلیسی"}
                />
              </div>
              <div className="px-14">
                <PersonTile
                  imgSrc={shirinSvg}
                  title={"شیرین کاظمیان"}
                  role={"مدرس داستان‌نویسی"}
                />
              </div>
              <div className="px-14">
                <PersonTile
                  imgSrc={fatemeSvg}
                  title={"فاطمه رستمی"}
                  role={"مدرس ریاضی"}
                />
              </div>
              <div className="px-14">
                <PersonTile
                  imgSrc={ehsanSvg}
                  title={"احسان گازار"}
                  role={"مدرس برنامه‌نویسی"}
                />
              </div>
              <div className="px-14">
                <PersonTile
                  imgSrc={aisanSvg}
                  title={"آیسان رشید"}
                  role={"مدرس ادبیات"}
                />
              </div>
              <div className="px-14">
                <PersonTile
                  imgSrc={reyhaneSvg}
                  title={"ریحانه کفایتی"}
                  role={"مدرس تصویرسازی"}
                />
              </div>
            </div>
          </div>
        </Container>
        <Container>
          <div className="bg-sky-100 rounded-2xl flex p-4">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 p-4">
                ثبت نام ترم پاییز
              </h3>
              <p className="text-gray-600 text-lg mt-4 mb-12 p-4">
                کلاس‌های آموزشی ترم پاییز تاراز در حال ثبت نام هست و شما
                می‌توانید با پر کردن پرسشنامه زیر برای یک ماجراجویی آماده بشید!
              </p>
              <div className="w-fit">
                <Button href="#link" icon={PiArrowCircleUpLeftFill}>
                  ثبت‌نام در کلاس‌ها
                </Button>
              </div>
            </div>
            <img src={hatSvg} alt="Hat" className="w-80" />
          </div>
        </Container>
        <Container>
          <div>
            <PersonTile
              imgSrc={shadiSvg}
              title={"شادی مهجوم"}
              role={"بنیان‌گذار"}
            />
            <p className="text-center text-gray-600 text-lg mt-4 px-4">
              حدود یک سال پیش، سر کلاس دانشگاه نشسته بودم و به همکلاسی‌هایم از
              تجربه‌ی کمک‌های داوطلبانه‌شان می‌گفتند گوش می‌دادم. گفت‌وگوهاشان
              دغدغه‌هایم را در برابر چشمم مجسم کرده بود. فکر کردم من چه کاری
              می‌توانم انجام دهم که متناسب با خواسته‌های قلبی‌ام باشد؟ {" "}
            </p>
            <p className="text-center text-gray-600 text-lg mt-4 px-4">
              از آن‌جا که فکر ایران لحظه‌ای از ذهنم بیرون نمی‌رود، تصمیم گرفتم
              کاری را شروع کنم که مرتبط با سرزمینی باشد که سال‌هاست به‌ناچار از
              آن دورم. در افکارم عمیق‌تر شدم و دیدم برای شروع این کار ابزارهایی
              هم دارم: علاقه‌ام به دانش و حس مسئولیت برای به اشتراک گذاشتن
              فرصت‌های آموزشی که در تمام مسیر مهاجرتم کسب کرده بودم. {" "}
            </p>
            <p className="text-center text-gray-600 text-lg mt-4 px-4">
              من در سن ۱۶ سالگی ایران را ترک کردم و در مسیر مهاجرتم با دنیای
              جدیدی از فرصت‌ها، تجربه‌ها و انسان‌ها آشنا شدم و آموختم. از
              انسان‌هایی آموختم که نه تنها در تصمیم‌های مهم زندگی راهنمایم بودند
              بلکه همواره برای پیدا کردن هدفم در زندگی و رسیدن به آن همراهی‌ام
              کردند. این‌جا بود که ایده‌ی ساختن یک مجموعه‌ی آموزشی مجازی به ذهنم
              رسید. ساختاری که مرزهای جغرافیایی محدودش نمی‌کنند و هر دانش‌آموزی
              صرف‌نظر از موقعیت اجتماعی و اقتصادی‌اش، امکان استفاده از فرصت‌هایش
              را دارد.‌ {" "}
            </p>
            <p className="text-center text-gray-600 text-lg mt-4 px-4">
              یک سالی از شروع کار تاراز می‌گذرد. با چالش‌های متفاوتی روبه‌رو
              شدیم که مهم‌ترین‌شان، فقدان ارتباط کامل بین فضای کلاس درس و
              مهارت‌های کاربردی است. مهارت‌هایی که در پیوند با تکنولوژی دنیای
              امروز ما هستند و می‌توانند نقشی اساسی در ساختن دنیایی بهتر داشته
              باشند. بنابراین قدم بعدی تاراز، شناخت کافی از نیازهای دانش‌آموزان
              و ارائه کردن کلاس‌های آموزشی متنوع است. کلاس‌هایی که امکان
              ایده‌پردازی و پرورش ذهنی پرسشگر را به دانش‌آموزان می‌دهند و آن‌ها
              را با دنیای بیرون از چارچوب کلاس درس آشنا می‌کنند؛ به این امید که
              این شوق نیرویی تازه برای حرکت به سوی اهداف‌شان باشد.{" "}
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
