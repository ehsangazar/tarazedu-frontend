import Container from "../components/Container/Container";

const History = () => {
  // Images organized by semester based on dates
  const firstSemesterImages = [
    "/history/Screen Shot 2024-02-07 at 9.44.20 AM.png",
  ];

  const secondSemesterImages = [
    "/history/Screen Shot 2025-02-17 at 11.36.27 AM.png",
    "/history/Screen Shot 2025-03-07 at 2.32.51 PM.png",
    "/history/Screen Shot 2025-03-07 at 2.41.55 PM.png",
    "/history/Screen Shot 2025-04-24 at 3.30.12 PM.png",
    "/history/Screen Shot 2025-05-12 at 10.33.35 AM.png",
    "/history/Screen Shot 2025-05-26 at 11.42.05 AM.png",
  ];

  const thirdSemesterImages = [
    "/history/Screen Shot 2025-07-26 at 1.54.47 PM.png",
    "/history/Screen Shot 2025-09-27 at 7.30.53 PM.png",
    "/history/Screen Shot 2025-10-05 at 8.21.49 PM.png",
    "/history/Screen Shot 2025-10-05 at 8.21.56 PM.png",
    "/history/Screen Shot 2025-10-19 at 6.15.20 PM.png",
  ];

  return (
    <Container>
      <div className="py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Previous Classes and Pictures
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#739C14] to-[#8BB825] mx-auto rounded-full"></div>
        </div>

        {/* Donor Impact Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-[#DBEFF2] to-white rounded-3xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Impact of Our Donors
            </h2>
            <p className="text-gray-900 text-lg md:text-xl leading-relaxed mb-6">
              With the generosity of our donors, we have been able to achieve
              significant milestones. Your contributions help us create a space where students&apos; potential isn&apos;t confined by circumstance, connecting them with the resources they need to turn possibility into reality. Here&apos;s how your contributions have
              made a difference:
            </p>
            <div className="space-y-3">
              <p className="text-gray-800 text-lg leading-relaxed">
                Purchasing essential educational resources, including:
              </p>
              <ul className="list-none space-y-2 text-gray-800 text-lg ml-6">
                <li className="flex items-start">
                  <span className="text-[#739C14] mr-3">○</span>
                  <span>Computers for students who lack access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#739C14] mr-3">○</span>
                  <span>
                    Internet access to ensure uninterrupted connectivity
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#739C14] mr-3">○</span>
                  <span>
                    Art supplies to support creative expression - For graphic
                    design class
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#739C14] mr-3">○</span>
                  <span>
                    Books and learning materials to enrich the curriculum
                  </span>
                </li>
              </ul>
            </div>

            {/* Donation CTA */}
            <div className="text-center mt-8 pt-8 border-t border-[#739C14]/20">
              <p className="text-gray-800 text-lg mb-4">
                Your contributions make a real difference. Support our mission
                to provide free, equal, and accessible education for all, connecting students with teachers, volunteers, and resources that help turn possibility into reality.
              </p>
              <a
                href="https://buymeacoffee.com/tarazedu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#739C14] to-[#8BB825] hover:from-[#577714] hover:to-[#739C14] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
                <span>Donate Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* 1st Semester */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-[#739C14]/10">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                1st Taraz Semester — 3 Students
              </h2>
              <p className="text-lg text-gray-600 mb-2">2023 - 2024</p>
              <div className="w-24 h-1 bg-gradient-to-r from-[#739C14] to-[#8BB825] rounded-full"></div>
            </div>
            <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
              <p>
                We launched the first Taraz semester with the goal of creating a
                free, online educational platform for{" "}
                <strong className="text-[#739C14]">Farsi-speaking</strong>{" "}
                students who needed additional support in their core school
                subjects. We offered Math, English, and Arabic classes to help
                them strengthen their academic foundation and improve their
                grades.
              </p>
              <p>
                These <strong className="text-[#739C14]">Farsi-speaking</strong>{" "}
                students&apos; dedication and consistency set the tone for what
                Taraz would become. They attended every class, regardless of
                time or circumstance, driven by curiosity and resilience. Their
                commitment reminded us why education should always remain
                accessible no matter one&apos;s background or challenges. These students showed us that when given the opportunity, their potential isn&apos;t confined by circumstance.
              </p>
            </div>
            {firstSemesterImages.length > 0 && (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {firstSemesterImages.map((img, index) => (
                  <div
                    key={index}
                    className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <img
                      src={img}
                      alt={`1st Semester - Image ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 2nd Semester */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-[#739C14]/10">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                2nd Taraz Semester — 16 Students
              </h2>
              <p className="text-lg text-gray-600 mb-2">2024 - 2025</p>
              <div className="w-24 h-1 bg-gradient-to-r from-[#739C14] to-[#8BB825] rounded-full"></div>
            </div>
            <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
              <p>
                After the first semester, it became clear that our{" "}
                <strong className="text-[#739C14]">Farsi-speaking</strong>{" "}
                students&apos; needs extended beyond core academic subjects.
                They wanted to gain real-world skills and explore new fields of
                knowledge that traditional classrooms fail to offer.
              </p>
              <p>
                We expanded our curriculum to include courses including
                literature, critical writing, programming, and other
                interdisciplinary courses. Our main goal was to help{" "}
                <strong className="text-[#739C14]">Farsi-speaking</strong>{" "}
                students develop both hard and soft skills, discover their
                personal interests, and learn how to apply their knowledge
                through projects and creative presentations.
              </p>
              <p>
                This semester marked a turning point—Taraz began to evolve from
                a tutoring platform into a transformative learning community for
                the <strong className="text-[#739C14]">Farsi-speaking</strong>{" "}
                community. We saw students connecting with teachers, volunteers, and resources, turning possibility into reality. This growing community began to see learning as a force for change.
              </p>
            </div>
            {secondSemesterImages.length > 0 && (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {secondSemesterImages.map((img, index) => (
                  <div
                    key={index}
                    className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <img
                      src={img}
                      alt={`2nd Semester - Image ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 3rd Semester */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-[#739C14]/10">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                3rd Taraz Term — 34 Students
              </h2>
              <p className="text-lg text-gray-600 mb-2">2025 - 2026</p>
              <div className="w-24 h-1 bg-gradient-to-r from-[#739C14] to-[#8BB825] rounded-full"></div>
            </div>
            <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
              <p>
                As we entered the third phase of Taraz, we recognized the
                growing influence of artificial intelligence on education. On
                one hand, AI made information more accessible and learning more
                efficient; on the other, it challenged traditional habits of
                deep learning; reading books, struggling through difficult
                problems, or expressing creative ideas on a piece of paper.
              </p>
              <p>
                In this new era of &quot;one-click learning,&quot; we wanted to
                emphasize the value of process—the patience to think critically,
                the courage to fail, and the curiosity to explore without
                shortcuts.
              </p>
              <p>To meet these needs we:</p>
              <ul className="list-none space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="text-[#739C14] mr-3">•</span>
                  <span>
                    Introduced workshops focusing on the journey of learning,
                    encouraging persistence, embracing failure, and even
                    learning to sit with boredom as an essential part of growth.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#739C14] mr-3">•</span>
                  <span>
                    Began offering one-on-one academic consultations with
                    experts in education to help students personalize their
                    learning trajectories.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#739C14] mr-3">•</span>
                  <span>
                    Started well-being and mentorship sessions to help students
                    navigate challenges and build a safe, supportive community.
                  </span>
                </li>
              </ul>
              <p>
                This term reflects our ongoing shift toward a holistic model of
                education, one that nurtures the skills and mindset essential
                for learning in the age of abundance and information. Through this journey, we&apos;ve had the privilege of meeting students who are truly inspirational. Their hard work and determination have shaped what Taraz is today—not just an educational platform, but a growing community that sees learning as a force for change. Many of these students now lead their own initiatives, teaching others, strengthening their communities, and continuing the cycle of education for the next generation of dreamers.
              </p>
            </div>
            {thirdSemesterImages.length > 0 && (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {thirdSemesterImages.map((img, index) => (
                  <div
                    key={index}
                    className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <img
                      src={img}
                      alt={`3rd Semester - Image ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default History;
