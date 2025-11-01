import Container from "../components/Container/Container";
import HeroSection from "../components/HeroSection/HeroSection";
import PersonTile from "../components/PersonTile/PersonTile";
import shadiSvg from "/shadi.svg";
import melikaSvg from "/melika.svg";
import reyhaneSvg from "/reyhane.svg";
import ehsanSvg from "/ehsan.svg";
import sajedeSvg from "/sajede.svg";
import shirinSvg from "/shirin.svg";
import fatemeSvg from "/fateme.svg";
import fatemegSvg from "/fatemeg.svg";
import aisanSvg from "/aisan.svg";
import matinSvg from "/matin.svg";
import courseSvg from "/course.svg";
import sepidehImg from "/sepideh.png";
import arefImg from "/aref.jpg";
import aliEdrakiImg from "/ali_edraki.jpg";
import CourseTile from "../components/CourseTile/CourseTile";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Container>
        <div className="py-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Courses & Classes
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#739C14] to-[#8BB825] mx-auto rounded-full"></div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CourseTile
                imgSrc={courseSvg}
                title={"English Language"}
                learning={"Practice, Confidence, Communication"}
                description={
                  "This class is designed to boost your confidence in everyday English conversations. Through various methods such as reading articles, watching films, and writing, you'll apply your knowledge. At the end of the term, you'll engage in conversations with peers from around the world via Google Meet and expand your network of friends."
                }
                teachers={[melikaSvg, sajedeSvg]}
              />

              <CourseTile
                imgSrc={courseSvg}
                title={"Mathematics"}
                learning={"Thinking, Problem Solving, Progress"}
                description={
                  "In the mathematics class, we build a strong foundation in mathematical concepts and apply them in practical fields such as programming. Classes are offered at intermediate to advanced levels, and instructors guide students in solving challenging problems and strengthening problem-solving and critical thinking skills."
                }
                teachers={[fatemeSvg, fatemegSvg]}
              />

              <CourseTile
                imgSrc={courseSvg}
                title={"Graphic Design"}
                learning={"Design, Creativity, Illustration"}
                description={
                  "In the graphic design class, we become familiar with visual concepts and fundamental elements such as point, line, and surface. We draw inspiration from nature, review the history of illustration, and experience color work. With tools like gouache and watercolor, we create characters, place them in spaces, and bring their stories to life through images."
                }
                teachers={[reyhaneSvg]}
              />

              <CourseTile
                imgSrc={courseSvg}
                title={"Creative Writing"}
                learning={
                  "Enhancing Creativity, Inner Feelings, Storytelling World"
                }
                description={
                  "Creating and crafting with words and reaching stories expands the student's imagination in various aspects of their personal life, and this will be effective in attention and awareness, creativity, social communication, and increasing students' self-confidence. In this educational course, we aim to practice storytelling with an emphasis on the importance of inner feelings and their application in writing, creating a storytelling world for students."
                }
                teachers={[shirinSvg]}
              />

              <CourseTile
                imgSrc={courseSvg}
                title={"Programming"}
                learning={"Learning, Projects, Career"}
                description={
                  "Our programming class is designed to teach fundamental techniques and strategies. Throughout the term, students become familiar with HTML, CSS, and JavaScript and acquire the necessary skills for real-world projects. By the end of the course, they complete projects that add value to their resume and career opportunities."
                }
                teachers={[ehsanSvg, arefImg]}
              />

              <CourseTile
                imgSrc={courseSvg}
                title={"Shahnameh Reading"}
                learning={"Shahnameh, Adventure, Discovery"}
                description={
                  "In the Shahnameh reading workshop, we embark on an adventurous journey; a journey to the dawn of history. Together, we sit to watch stories that warmed the gatherings of our ancestors and see how they thought about the distant past and how they viewed the world. The guiding light of this journey is Ferdowsi's Shahnameh, and we read ancient Iranian stories together around its warm and eternal fire; we become familiar with the characters of Shahnameh and explore various activities in the stories and the situations of the characters."
                }
                teachers={[matinSvg]}
              />

              <CourseTile
                imgSrc={courseSvg}
                title={"Literature Olympiad"}
                learning={"Classical Texts, Preparation, Competition"}
                description={
                  "The Literature Olympiad class is an opportunity to strengthen students' ability to participate in the Literature Olympiad exam. Here we read classical texts together such as Hafez's Ghazals, Saadi's Complete Works, Shahnameh, and Beyhaqi's History, and gain a deeper understanding of literature and preparation for national competition. The Olympiad medal, depending on its color and field of study, may include exemption or quota in university entrance exams."
                }
                teachers={[aisanSvg]}
              />
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="py-20 relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#DBEFF2]/20 via-transparent to-[#E8F5F7]/20 rounded-3xl -z-10"></div>

          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Journey
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#739C14] to-[#8BB825] mx-auto rounded-full mb-6"></div>
              <p className="text-gray-800 text-lg max-w-3xl mx-auto leading-relaxed">
                From a small beginning with 3{" "}
                <strong className="text-[#739C14]">Farsi-speaking</strong>{" "}
                students to a thriving community of 34 learners, Taraz has grown
                through dedication and the support of our generous donors. We
                serve the{" "}
                <strong className="text-[#739C14]">Farsi-speaking</strong>{" "}
                community, providing accessible education to students across
                Iran.
              </p>
            </div>

            {/* Semester Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
              {/* 1st Semester */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#739C14]/10 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#739C14] to-[#8BB825] rounded-full text-white text-2xl font-bold mb-3">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    1st Semester
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">2023 - 2024</p>
                  <p className="text-3xl font-bold text-[#739C14] mb-2">
                    3 Students
                  </p>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Launched with Math, English, and Arabic classes, creating a
                  free online platform for core academic support.
                </p>
              </div>

              {/* 2nd Semester */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#739C14]/10 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#739C14] to-[#8BB825] rounded-full text-white text-2xl font-bold mb-3">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    2nd Semester
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">2024 - 2025</p>
                  <p className="text-3xl font-bold text-[#739C14] mb-2">
                    16 Students
                  </p>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Expanded to include literature, critical writing, programming,
                  and interdisciplinary courses, evolving into a transformative
                  learning community.
                </p>
              </div>

              {/* 3rd Semester */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#739C14]/10 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#739C14] to-[#8BB825] rounded-full text-white text-2xl font-bold mb-3">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    3rd Term
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">2025 - 2026</p>
                  <p className="text-3xl font-bold text-[#739C14] mb-2">
                    34 Students
                  </p>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Introduced workshops on learning journeys, one-on-one
                  consultations, and well-being sessions, embracing holistic
                  education in the AI era.
                </p>
              </div>
            </div>

            {/* Sample Images */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/history/Screen Shot 2024-02-07 at 9.44.20 AM.png"
                  alt="1st Semester"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/history/Screen Shot 2025-02-17 at 11.36.27 AM.png"
                  alt="2nd Semester"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/history/Screen Shot 2025-07-26 at 1.54.47 PM.png"
                  alt="3rd Semester"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/history/Screen Shot 2025-10-19 at 6.15.20 PM.png"
                  alt="3rd Semester"
                  className="w-full h-32 object-cover"
                />
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link
                to="/history"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#739C14] to-[#8BB825] text-white px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <span>View Full History</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Taraz Teachers
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#739C14] to-[#8BB825] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-800 text-lg max-w-3xl mx-auto leading-relaxed">
              Taraz&apos;s educational team consists of specialized teachers
              from various fields who, with passion and experience, help
              students grow and learn. From language learning and mathematics to
              literature and art, each teacher brings new approaches, opening a
              new world of learning for students.
            </p>
          </div>
          <div className="flex justify-center flex-wrap gap-8 md:gap-12">
            <div className="transform transition-transform hover:scale-105">
              <PersonTile
                imgSrc={melikaSvg}
                title={"Melika Faraji"}
                role={"English Language Instructor"}
              />
            </div>
            <div className="transform transition-transform hover:scale-105">
              <PersonTile
                imgSrc={sajedeSvg}
                title={"Sajedeh Kashani"}
                role={"English Language Instructor"}
              />
            </div>
            <div className="transform transition-transform hover:scale-105">
              <PersonTile
                imgSrc={shirinSvg}
                title={"Shirin Kazemian"}
                role={"Creative Writing Instructor"}
              />
            </div>
            <div className="transform transition-transform hover:scale-105">
              <PersonTile
                imgSrc={fatemeSvg}
                title={"Fatemeh Rastami"}
                role={"Mathematics Instructor"}
              />
            </div>
            <div className="transform transition-transform hover:scale-105">
              <PersonTile
                imgSrc={fatemegSvg}
                title={"Fatemeh Ghaheri"}
                role={"Mathematics Instructor"}
              />
            </div>
            <div className="transform transition-transform hover:scale-105">
              <PersonTile
                imgSrc={ehsanSvg}
                title={"Ehsan Gazar"}
                role={"Programming Instructor"}
              />
            </div>
            <div className="transform transition-transform hover:scale-105">
              <PersonTile
                imgSrc={arefImg}
                title={"Aref Mirhosseini"}
                role={"Programming Instructor"}
              />
            </div>
            <div className="transform transition-transform hover:scale-105">
              <PersonTile
                imgSrc={aisanSvg}
                title={"Aisan Rashid"}
                role={"Literature Instructor"}
              />
            </div>
            <div className="transform transition-transform hover:scale-105">
              <PersonTile
                imgSrc={reyhaneSvg}
                title={"Reyhaneh Kafaati"}
                role={"Illustration Instructor"}
              />
            </div>
            <div className="transform transition-transform hover:scale-105">
              <PersonTile
                imgSrc={matinSvg}
                title={"Matin Mehrani"}
                role={"Shahnameh Reading Instructor"}
              />
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="py-20 relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#DBEFF2]/20 via-transparent to-[#E8F5F7]/20 rounded-3xl -z-10"></div>

          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Taraz Core Team
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#739C14] to-[#8BB825] mx-auto rounded-full mb-6"></div>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                The dedicated team behind Taraz&apos;s vision, working together
                to make quality education accessible to all.
              </p>
            </div>

            {/* Core Team Members */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
              {/* Shadi Mahjoom */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-[#739C14]/10 p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#739C14] to-[#8BB825] rounded-full blur-xl opacity-30"></div>
                    <img
                      src={shadiSvg}
                      alt="Shadi Mahjoom"
                      className="relative w-32 h-32 rounded-full shadow-2xl border-4 border-white ring-4 ring-[#739C14]/20"
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Shadi Mahjoom
                  </h3>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#739C14] to-[#8BB825] text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                    <span>Founder & Visionary</span>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Building bridges through education, connecting hearts across
                    borders. Passionate about making quality education
                    accessible to everyone, regardless of geographical or
                    economic boundaries.
                  </p>
                </div>
              </div>

              {/* Ehsan Gazar */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-[#739C14]/10 p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#739C14] to-[#8BB825] rounded-full blur-xl opacity-30"></div>
                    <img
                      src={ehsanSvg}
                      alt="Ehsan Gazar"
                      className="relative w-32 h-32 rounded-full shadow-2xl border-4 border-white ring-4 ring-[#739C14]/20"
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Ehsan Gazar
                  </h3>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#739C14] to-[#8BB825] text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                    <span>Core Team Member</span>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Programming instructor and technical lead, dedicated to
                    empowering students with practical skills and real-world
                    project experience. Bridging technology and education to
                    shape the future.
                  </p>
                </div>
              </div>

              {/* Sepideh Kazemi */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-[#739C14]/10 p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#739C14] to-[#8BB825] rounded-full blur-xl opacity-30"></div>
                    <div
                      className="relative w-32 h-32 rounded-full shadow-2xl border-4 border-white ring-4 ring-[#739C14]/20 overflow-hidden"
                      style={{ backgroundColor: "#dbeff2" }}
                    >
                      <img
                        src={sepidehImg}
                        alt="Sepideh Kazemi"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Sepideh Kazemi
                  </h3>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#739C14] to-[#8BB825] text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                    <span>Organiser & Planner</span>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Organiser and planner ensuring smooth operations and
                    seamless coordination of educational programs. Dedicated to
                    creating exceptional learning experiences through meticulous
                    planning and organization.
                  </p>
                </div>
              </div>

              {/* Ali Edraki */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-[#739C14]/10 p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#739C14] to-[#8BB825] rounded-full blur-xl opacity-30"></div>
                    <div
                      className="relative w-32 h-32 rounded-full shadow-2xl border-4 border-white ring-4 ring-[#739C14]/20 overflow-hidden"
                      style={{ backgroundColor: "#dbeff2" }}
                    >
                      <img
                        src={aliEdrakiImg}
                        alt="Ali Edraki"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Ali Edraki
                  </h3>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#739C14] to-[#8BB825] text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                    <span>Director of Strategic Relationships</span>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Director of Strategic Relationships at MPM BioImpact,
                    bringing expertise in corporate strategy and innovation to
                    help Taraz build meaningful partnerships and expand its
                    educational impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="py-20 relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#DBEFF2]/30 via-transparent to-[#E8F5F7]/30 rounded-3xl -z-10"></div>

          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Founder&apos;s Story
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#739C14] to-[#8BB825] mx-auto rounded-full mb-6"></div>
            </div>

            {/* Founder Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-[#739C14]/10 p-8 md:p-12 mb-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
                {/* Founder Image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#739C14] to-[#8BB825] rounded-full blur-xl opacity-30"></div>
                    <img
                      src={shadiSvg}
                      alt="Shadi Mahjoom"
                      className="relative w-32 h-32 md:w-40 md:h-40 rounded-full shadow-2xl border-4 border-white ring-4 ring-[#739C14]/20"
                    />
                  </div>
                </div>

                {/* Founder Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    Shadi Mahjoom
                  </h3>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#739C14] to-[#8BB825] text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                    <span>Founder & Visionary</span>
                  </div>
                  <p className="text-gray-600 text-lg max-w-2xl">
                    Building bridges through education, connecting hearts across
                    borders
                  </p>
                </div>
              </div>

              {/* Highlighted Quote */}
              <div className="bg-gradient-to-r from-[#739C14]/10 via-[#8BB825]/10 to-[#739C14]/10 rounded-2xl p-6 md:p-8 mb-8 border-l-4 border-[#739C14]">
                <p className="text-xl md:text-2xl text-gray-800 font-medium italic leading-relaxed text-center">
                  &quot;A structure that geographical boundaries don&apos;t
                  limit, and every student, regardless of their social and
                  economic status, has the opportunity to use its
                  opportunities.&quot;
                </p>
              </div>
            </div>

            {/* Story Content */}
            <div className="space-y-8 text-gray-700 text-lg md:text-xl leading-relaxed">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md border border-[#739C14]/10">
                <p className="text-center md:text-left">
                  About a year ago, I was sitting in a university class
                  listening to my classmates talk about their volunteer work
                  experiences. Their conversations had brought my concerns to
                  the forefront. I thought, what could I do that aligns with my
                  heartfelt desires?
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md border border-[#739C14]/10">
                <p className="text-center md:text-left">
                  Since thoughts of Iran never leave my mind, I decided to start
                  something connected to the land I&apos;ve been away from for
                  years. I delved deeper into my thoughts and saw that I also
                  had the tools to start this work: my passion for knowledge and
                  a sense of responsibility to share the educational
                  opportunities I had gained throughout my migration journey.
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md border border-[#739C14]/10">
                <p className="text-center md:text-left">
                  I left Iran at the age of 16, and during my migration journey,
                  I became acquainted with a new world of opportunities,
                  experiences, and people, and I learned. I learned from people
                  who were not only guides in important life decisions but also
                  always accompanied me in finding my purpose in life and
                  reaching it. This is where the idea of creating a virtual
                  educational institution came to my mind. A structure that
                  geographical boundaries don&apos;t limit, and every student,
                  regardless of their social and economic status, has the
                  opportunity to use its opportunities.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#739C14]/5 to-[#8BB825]/5 rounded-2xl p-6 md:p-8 shadow-md border-2 border-[#739C14]/20">
                <p className="text-center md:text-left font-medium">
                  A year has passed since Taraz began. We faced various
                  challenges, the most important of which was the lack of
                  complete connection between the classroom environment and
                  practical skills. Skills that are connected to today&apos;s
                  technology and can play a fundamental role in building a
                  better world. Therefore, Taraz&apos;s next step is to gain
                  sufficient understanding of students&apos; needs and offer
                  diverse educational classes. Classes that give students the
                  opportunity for ideation and cultivating a questioning mind,
                  and introduce them to the world outside the classroom
                  framework; in the hope that this enthusiasm will be a fresh
                  force for moving toward their goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
