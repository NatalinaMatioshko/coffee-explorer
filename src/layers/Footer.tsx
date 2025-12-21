import Logo from "../components/Logo";
import Menu from "../components/Menu";
import { FaInstagram } from "react-icons/fa";
import tiktok from "../assets/svg/tiktok .svg";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 px-4 md:px-8 bg-[#4f2d20] text-[#f9f3e9]">
      <div className="max-w-360 mx-auto flex flex-col items-center gap-10">
        <div className="flex flex-wrap justify-center items-center gap-40">
          <div>
            <Logo />
          </div>

          <div>
            <Menu isFooter />
          </div>

          <div className="max-w-26">
            <h3 className="font-extrabold">Work hours</h3>
            <p>Monday-Friday from 9 a.m. to 6 p.m.</p>
          </div>

          <div className="flex gap-5">
            <Link
              to="/gallery"
              aria-label="Instagram"
              className="hover:opacity-80 transition-opacity"
            >
              <FaInstagram className="w-8 h-8" />
            </Link>
            <a
              href="https://www.x.com"
              aria-label="X"
              className="hover:opacity-80 transition-opacity"
              target="_blank"
            >
              <BsTwitterX className="w-8 h-8" />
            </a>
            <a
              href="https://www.tiktok.com"
              aria-label="TikTok"
              className="hover:opacity-80 transition-opacity"
              target="_blank"
            >
              <img src={tiktok} alt="Tiktok" className="w-8 h-8" />
            </a>
          </div>
        </div>

        <div className="text-sm ">© All rights reserved, 2025</div>
      </div>
    </footer>
  );
};

export default Footer;
