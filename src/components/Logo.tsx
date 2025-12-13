import logo from "../assets/svg/logo.svg";

const Logo = () => {
  return (
    <div>
      <a href="/index.html" className="hover:opacity-80 transition-opacity">
        <img
          src={logo}
          className="w-32 md:w-40 h-auto object-contain"
          alt="Coffee Explorer"
        />
      </a>
    </div>
  );
};

export default Logo;
