import Container from "../components/Container/Container";

const AIIntegration = () => {
  return (
    <Container>
      <div className="py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Integration in Learning
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#739C14] to-[#8BB825] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="text-gray-900 text-xl leading-relaxed">
              With the rapid advancement of AI in education, our focus must
              shift beyond simply teaching theoretical concepts. Critical
              thinking has become even more essential in a world where AI can
              generate answers for us.
            </p>

            <div className="bg-gradient-to-br from-[#DBEFF2] to-white rounded-2xl p-8 my-8 border-l-4 border-[#739C14] shadow-lg">
              <p className="text-gray-900 text-xl italic leading-relaxed">
                &quot;But as humans, we find meaning in thinking deeply, solving
                problems, and tackling challenges ourselves. True, lasting
                satisfaction doesn&apos;t come when something else does the
                thinking for us.&quot;
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Approach to AI
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              At Taraz, we aim to integrate AI in a way that supplements
              learning, not replaces it. We encourage{" "}
              <strong className="text-[#739C14]">Farsi-speaking</strong>{" "}
              students to engage in critical thinking, both through peer
              collaboration and thoughtful interaction with AI.
            </p>

            <p className="text-gray-800 text-lg leading-relaxed">
              These tools can introduce diverse perspectives and even anticipate
              students&apos; next questions, making them powerful companions in
              the learning process.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#DBEFF2] to-white rounded-3xl p-8 mt-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Key Principles
            </h3>
            <ul className="space-y-4 text-gray-800">
              <li className="flex items-start">
                <span className="text-[#739C14] mr-3 text-xl">•</span>
                <span className="text-lg">
                  AI as a supplement, not a replacement for human thinking
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#739C14] mr-3 text-xl">•</span>
                <span className="text-lg">
                  Emphasis on critical thinking and problem-solving skills
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#739C14] mr-3 text-xl">•</span>
                <span className="text-lg">
                  Encouraging peer collaboration alongside AI interaction
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#739C14] mr-3 text-xl">•</span>
                <span className="text-lg">
                  Using AI to introduce diverse perspectives and anticipate
                  questions
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AIIntegration;
