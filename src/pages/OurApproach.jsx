import Container from "../components/Container/Container";

const OurApproach = () => {
  return (
    <Container>
      <div className="py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            A Holistic Approach to Education
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#739C14] to-[#8BB825] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="text-gray-900 text-lg leading-relaxed">
              Our journey at Taraz has been one of continuous growth, learning,
              and improvement. We believe that education goes beyond academic
              knowledge. Our mission is to empower students with both practical
              and soft skills that equip them to face everyday challenges, build
              meaningful relationships, and achieve personal and professional
              success.
            </p>

            <p className="text-gray-900 text-lg leading-relaxed">
              Alongside core subjects, we emphasize the importance of critical
              thinking, problem-solving, effective communication, and stress
              management.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#DBEFF2] to-white rounded-3xl p-8 shadow-lg mt-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Preparing for Life, Not Just Exams
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              By integrating both technical and soft skills into our curriculum,
              we take a holistic approach to education, preparing students not
              just for exams, but for life. This fosters confidence, resilience,
              and adaptability, qualities that will serve them well throughout
              their futures.
            </p>
          </div>

          <div className="space-y-4 mt-12">
            <h2 className="text-3xl font-bold text-gray-900">
              The Role of AI in Education
            </h2>
            <p className="text-gray-900 text-lg leading-relaxed">
              With the rapid advancement of AI in education, our focus must
              shift beyond simply teaching theoretical concepts. Critical
              thinking has become even more essential in a world where AI can
              generate answers for us. But as humans, we find meaning in
              thinking deeply, solving problems, and tackling challenges
              ourselves. True, lasting satisfaction doesn&apos;t come when
              something else does the thinking for us.
            </p>

            <p className="text-gray-900 text-lg leading-relaxed">
              At Taraz, we aim to integrate AI in a way that supplements
              learning, not replaces it. We encourage students to engage in
              critical thinking, both through peer collaboration and thoughtful
              interaction with AI. These tools can introduce diverse
              perspectives and even anticipate students&apos; next questions,
              making them powerful companions in the learning process.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OurApproach;
