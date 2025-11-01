import Container from "../components/Container/Container";
import PersonTile from "../components/PersonTile/PersonTile";
import shadiSvg from "/shadi.svg";

const FounderVision = () => {
  return (
    <Container>
      <div className="py-20">
        <div className="flex flex-col items-center mb-12">
          <PersonTile
            imgSrc={shadiSvg}
            title={"Shadi Mahjoom"}
            role={"Founder & Educational Lead"}
          />
        </div>

        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Founder&apos;s Vision
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#739C14] to-[#8BB825] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-gray-700 text-xl leading-relaxed text-center mb-12">
            As the founder and educational lead at Taraz, my mission is to
            design a curriculum that serves three key purposes:
          </p>

          <div className="space-y-6 mt-8">
            <div className="bg-gradient-to-br from-[#DBEFF2] to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                1. Foster Critical Thinking and Problem Solving
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Incorporate AI as a tool to enhance—not replace—students&apos;
                ability to think analytically and creatively.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#DBEFF2] to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                2. Support Personal Exploration and Growth
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Guide students on a journey of self-discovery by offering
                diverse, accessible courses across social sciences, literature,
                art, technology, career skills, and science.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#DBEFF2] to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                3. Bridge Education and Real-World Application
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Once students identify their interests, help them align these
                passions with real-world opportunities—so they can not only
                build meaningful careers but also contribute their unique skills
                to the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FounderVision;
