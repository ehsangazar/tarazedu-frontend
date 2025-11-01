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
            <p className="text-gray-800 text-xl leading-relaxed mb-6">
              At Taraz, we are dedicated to making education accessible to
              students in the age range{" "}
              <strong className="text-[#739C14]">13-18</strong> in{" "}
              <strong className="text-[#739C14]">Iran</strong>. Our mission is
              to break down barriers by offering online classes that only
              require internet access and a smartphone, connecting students from
              every corner of Iran.
            </p>

            <div className="border-l-4 border-[#739C14] pl-6 my-8">
              <p className="text-gray-700 text-lg leading-relaxed italic">
                &quot;Together, we can create an environment where education is
                a pathway to empowerment, and no one is left behind due to their
                circumstances.&quot;
              </p>
            </div>

            <p className="text-gray-800 text-xl leading-relaxed">
              However, our ability to fulfill this mission relies on the support
              of our community—volunteers, teachers, and generous donors.
              Together, we can create an environment where education is a
              pathway to empowerment, and no one is left behind due to their
              circumstances.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Mission;
