
import { Link } from "react-router-dom";
import logo from "../assets/svg/logo.svg";

interface LogoProps {
  variant?: "default" | "small";
}

const Logo: React.FC<LogoProps> = ({ variant = "default" }) => {
  const sizeClasses = variant === "small" ? "h-8" : "w-32 md:w-40 h-auto";

  return (
    <Link to="/" className="hover:opacity-80 transition-opacity">
      <img
        src={logo}
        className={`${sizeClasses} object-contain`}
        alt="Coffee Explorer"
      />
    </Link>
  );
};

export default Logo;
