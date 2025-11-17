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
          <div className="space-y-6">
            <p className="text-gray-900 text-xl leading-relaxed">
              Three years ago, I was sitting in a classroom listening to my classmates talk about finding an activity or passion that redefined our purpose beyond the walls of our careers. It made me think about why I had chosen medicine in the first place: to have a tool that could alleviate people&apos;s pain, even if just for a moment. But as time went on, I realized that the ability to help others goes beyond medicine itself. What truly shapes our mission in life is not only our desire to help, but also the circumstances that make that desire possible. I recognized how much of my own journey was shaped by external factors that are beyond my control; being surrounded by a loving family, and access to quality education. This was the starting point for Taraz.
            </p>

            <p className="text-gray-900 text-xl leading-relaxed">
              I wanted to create a space for students who didn&apos;t have the same opportunities, where their potential wouldn&apos;t be confined by circumstance. My goal was to make their dreams more tangible, to connect them with people and resources that could help turn possibility into reality.
            </p>

            <p className="text-gray-900 text-xl leading-relaxed">
              As the founder of Taraz, my primary role has been to listen to students&apos; stories, their daily struggles, and, most importantly, their needs that go beyond traditional learning. At Taraz, we are dedicated to creating a free online platform where these voices can be heard, and where students are connected with teachers from diverse disciplines, passionate volunteers, and donors who share the same belief in free, equal, and accessible education for all.
            </p>

            <p className="text-gray-900 text-xl leading-relaxed">
              Through this journey, I&apos;ve had the privilege of meeting students who are truly inspirational. Their hard work and determination have shaped what Taraz is today—not just an educational platform, but a growing community that sees learning as a force for change. Many of these students now lead their own initiatives, teaching others, strengthening their communities, and continuing the cycle of education for the next generation of dreamers.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FounderVision;
