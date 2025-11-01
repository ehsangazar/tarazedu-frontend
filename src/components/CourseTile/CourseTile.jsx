const CourseTile = ({ imgSrc, title, learning, description, teachers }) => {
  return (
    <div className="bg-white rounded-2xl p-6 m-1 flex-grow-0 flex-shrink-0 grid grid-rows-[90px_1fr_60px] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
      <div className="flex justify-start items-start gap-4">
        <div className="bg-[#DBEFF2] rounded-xl p-3 flex-shrink-0">
          <img src={imgSrc} alt={"course"} className="w-12 h-12" />
        </div>
        <div className="text-left flex-1 min-w-0">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <h4 className="text-sm text-[#739C14] font-medium">{learning}</h4>
        </div>
      </div>
      <p className="text-gray-700 text-base mt-4 px-2 flex-auto leading-relaxed line-clamp-6">
        {description}
      </p>
      <div className="flex justify-start items-center gap-2 mt-4 pt-4 border-t border-gray-100">
        {teachers?.map((teacher, index) => (
          <img
            key={`teacher-${index}`}
            src={teacher}
            className="w-12 h-12 border-3 border-white rounded-full shadow-md hover:scale-110 transition-transform duration-200"
            alt={`Teacher ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseTile;
