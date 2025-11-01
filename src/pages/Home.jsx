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
import CourseTile from "../components/CourseTile/CourseTile";

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
                teachers={[ehsanSvg]}
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
        <div className="py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center mb-12">
              <PersonTile
                imgSrc={shadiSvg}
                title={"Shadi Mahjoom"}
                role={"Founder"}
              />
            </div>
            <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
              <p className="text-center">
                About a year ago, I was sitting in a university class listening
                to my classmates talk about their volunteer work experiences.
                Their conversations had brought my concerns to the forefront. I
                thought, what could I do that aligns with my heartfelt desires?
              </p>
              <p className="text-center">
                Since thoughts of Iran never leave my mind, I decided to start
                something connected to the land I&apos;ve been away from for
                years. I delved deeper into my thoughts and saw that I also had
                the tools to start this work: my passion for knowledge and a
                sense of responsibility to share the educational opportunities I
                had gained throughout my migration journey.
              </p>
              <p className="text-center">
                I left Iran at the age of 16, and during my migration journey, I
                became acquainted with a new world of opportunities,
                experiences, and people, and I learned. I learned from people
                who were not only guides in important life decisions but also
                always accompanied me in finding my purpose in life and reaching
                it. This is where the idea of creating a virtual educational
                institution came to my mind. A structure that geographical
                boundaries don&apos;t limit, and every student, regardless of
                their social and economic status, has the opportunity to use its
                opportunities.
              </p>
              <p className="text-center">
                A year has passed since Taraz began. We faced various
                challenges, the most important of which was the lack of complete
                connection between the classroom environment and practical
                skills. Skills that are connected to today&apos;s technology and
                can play a fundamental role in building a better world.
                Therefore, Taraz&apos;s next step is to gain sufficient
                understanding of students&apos; needs and offer diverse
                educational classes. Classes that give students the opportunity
                for ideation and cultivating a questioning mind, and introduce
                them to the world outside the classroom framework; in the hope
                that this enthusiasm will be a fresh force for moving toward
                their goals.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
