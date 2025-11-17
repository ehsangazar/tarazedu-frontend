import Container from "../components/Container/Container";
import { FaCalendarAlt, FaClock, FaUser, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import aliEdrakiImg from "/ali_edraki.jpg";

const Events = () => {
  // Event data
  const event = {
    title: "The Place of Artificial Intelligence in Learning",
    question: "What is the relationship between thinking and learning with Artificial Intelligence?",
    date: "Friday, November 28, 2025",
    time: "8:00 PM - 9:00 PM",
    timeZone: "Tehran Time",
    speaker: {
      name: "Dr. Ali Edraki",
      role: "Educational Expert",
      image: aliEdrakiImg,
    },
    description: "First series of Taraz educational workshops",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSd84XWvnYm5QpkRp46LydnefjUPPUEq9b7jz55gCty3ywJfbA/viewform?usp=header",
    registrationNote: "Attendance only with prior registration",
  };

  return (
    <>
      <Container>
        <div className="py-12 md:py-16">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Events & Workshops
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-[#739C14] to-[#8BB825] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join our educational workshops and events designed to empower{" "}
              <strong className="text-[#739C14]">Farsi-speaking</strong> students
              with knowledge and skills for the future.
            </p>
          </div>
        </div>
      </Container>

      {/* Event Card - Full Width */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#739C14]/10">
            {/* Event Header with Gradient */}
            <div className="bg-gradient-to-br from-[#DBEFF2] via-[#E8F5F7] to-white p-8 md:p-12">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md mb-6 border border-[#739C14]/20">
                  <span className="w-2 h-2 bg-[#8BB825] rounded-full animate-pulse"></span>
                  <span className="text-sm font-semibold text-gray-700">
                    {event.description}
                  </span>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {event.title}
              </h2>
              
              <div className="mt-6 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-[#739C14]/20">
                <p className="text-lg md:text-xl text-gray-800 font-semibold">
                  {event.question}
                </p>
              </div>
            </div>

            {/* Event Details */}
            <div className="p-8 md:p-12">
              {/* Date and Time Bar */}
              <div className="bg-gradient-to-r from-[#739C14]/10 via-[#8BB825]/10 to-[#739C14]/10 rounded-2xl p-6 mb-8 border border-[#739C14]/20">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#739C14] to-[#8BB825] rounded-xl flex items-center justify-center">
                      <FaCalendarAlt className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Date</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {event.date}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#739C14] to-[#8BB825] rounded-xl flex items-center justify-center">
                      <FaClock className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Time</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {event.time}
                      </p>
                      <p className="text-sm text-gray-600">{event.timeZone}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Speaker Information */}
              <div className="bg-gradient-to-br from-[#DBEFF2] to-white rounded-2xl p-6 md:p-8 mb-8 border border-[#739C14]/10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Speaker
                </h3>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#739C14] to-[#8BB825] rounded-full blur-xl opacity-30"></div>
                    <img
                      src={event.speaker.image}
                      alt={event.speaker.name}
                      className="relative w-32 h-32 md:w-40 md:h-40 rounded-full shadow-2xl border-4 border-white ring-4 ring-[#739C14]/20 object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left flex-1">
                    <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {event.speaker.name}
                    </h4>
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#739C14] to-[#8BB825] text-white px-4 py-1.5 rounded-full text-sm font-semibold mt-2">
                      <span>{event.speaker.role}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Notes */}
              <div className="mb-8">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                  <p className="text-gray-800 font-semibold">
                    {event.registrationNote}
                  </p>
                </div>
              </div>

              {/* Registration Button */}
              <div className="text-center">
                <a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#739C14] to-[#8BB825] hover:from-[#577714] hover:to-[#739C14] text-white text-lg font-semibold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  <span>Register Now</span>
                  <FaExternalLinkAlt className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <p className="text-sm text-gray-500 mt-4">
                  Registration link will be sent to your email
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <Container>
        <div className="py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#739C14]/5 to-[#8BB825]/5 rounded-2xl p-6 md:p-8 border border-[#739C14]/20">
              <p className="text-gray-700 text-center leading-relaxed">
                This workshop is part of Taraz&apos;s commitment to providing free,
                equal, and accessible education. We connect students with expert
                educators and valuable resources to turn possibility into reality.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Events;

