const PersonTile = ({ imgSrc, title, role }) => {
  return (
    <div className="text-center">
      <div className="relative inline-block">
        <img
          src={imgSrc}
          alt={title}
          className="w-28 h-28 mx-auto rounded-full shadow-lg border-4 border-white hover:border-[#739C14] transition-all duration-300 hover:scale-110 grayscale"
        />
      </div>
      <h3 className="text-xl font-bold text-center text-gray-900 mt-4">
        {title}
      </h3>
      <h4 className="text-base text-center text-[#739C14] font-medium mt-2 mb-16">
        {role}
      </h4>
    </div>
  );
};

export default PersonTile;
