import Container from "../components/Container/Container";

const Mission = () => {
  return (
    <Container>
      <div className="py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Taraz Mission
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#739C14] to-[#8BB825] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-gradient-to-br from-[#DBEFF2] to-white rounded-3xl p-8 md:p-12 shadow-lg">
            <p className="text-gray-900 text-xl leading-relaxed mb-6">
              At Taraz, we are dedicated to creating a space for{" "}
              <strong className="text-[#739C14]">Farsi-speaking</strong>{" "}
              students in the age range{" "}
              <strong className="text-[#739C14]">13-18</strong> in{" "}
              <strong className="text-[#739C14]">Iran</strong> where their potential isn&apos;t confined by circumstance. Our mission is to connect students with teachers from diverse disciplines, passionate volunteers, and donors who share the same belief in free, equal, and accessible education for all.
            </p>

            <div className="border-l-4 border-[#739C14] pl-6 my-8">
              <p className="text-gray-800 text-lg leading-relaxed italic">
                &quot;I wanted to create a space for students who didn&apos;t have the same opportunities, where their potential wouldn&apos;t be confined by circumstance. My goal was to make their dreams more tangible, to connect them with people and resources that could help turn possibility into reality.&quot;
              </p>
            </div>

            <p className="text-gray-900 text-xl leading-relaxed mb-6">
              We listen to students&apos; stories, their daily struggles, and, most importantly, their needs that go beyond traditional learning. Through our free online platform, we offer classes that only require internet access and a smartphone, connecting{" "}
              <strong className="text-[#739C14]">Farsi-speaking</strong>{" "}
              students from every corner of Iran with the resources and support they need to turn possibility into reality. Our ability to fulfill this mission relies on the support of our community—volunteers, teachers, and generous donors who share our vision of free, equal, and accessible education for all.
            </p>

            {/* Donation CTA */}
            <div className="text-center mt-8 pt-8 border-t border-[#739C14]/20">
              <p className="text-gray-800 text-lg mb-4">
                Help us continue this mission by supporting our work
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
                <span>Support Taraz</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Mission;
