const PersonTile = ({ imgSrc, title, role }) => {
  return (
    <div>
      <img src={imgSrc} alt="Shadi" className="w-24 h-24 mx-auto mt-16" />
      <h3 className="text-xl font-semibold text-center text-gray-800 mt-4">
        {title}
      </h3>
      <h4 className="text-lg text-center text-gray-600 mt-2 mb-16">{role}</h4>
    </div>
  );
};

export default PersonTile;
