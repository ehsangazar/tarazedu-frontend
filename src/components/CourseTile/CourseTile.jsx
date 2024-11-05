const CourseTile = ({ imgSrc, title, learning, description, teachers }) => {
  return (
    <div className="bg-sky-100 rounded-2xl p-3 m-1 flex-grow-0 flex-shrink-0">
      <div className="flex justify-center flex-wrap">
        <img src={imgSrc} alt={"course"} className="w-16 h-16 mt-4 mx-4" />
        <div className="text-right flex-1">
          <h3 className="text-xl font-semibold text-right text-gray-800 mt-4">
            {title}
          </h3>{" "}
          <h4 className="text-lg text-right text-gray-600 mt-2 ">{learning}</h4>
        </div>
      </div>
      <p className="text-right text-gray-600 text-lg mt-4 px-4 flex-auto min-h-96">
        {description}
      </p>
      <div className="flex justify-end flex-wrap">
        {teachers?.map((teacher, index) => (
          <img
            key={`teacher-${index}`}
            src={teacher}
            className="w-16 h-16 -mx-1 border-2 border-sky-200 rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export default CourseTile;
