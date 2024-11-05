const Button = ({ href, children, icon }) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        className="flex justify-center items-center bg-green-500 hover:bg-green-700 text-white text-lg font-semibold py-2 px-6 rounded-full"
      >
        {children}
        {icon && <div className="px-1 text-xl">{icon()}</div>}
      </a>
    );
  }

  return (
    <button className="flex justify-center items-center bg-green-500 hover:bg-green-700 text-white text-lg font-semibold py-2 px-6 rounded-full">
      {children}
      {icon && <div className="px-1">{icon()}</div>}
    </button>
  );
};

export default Button;
