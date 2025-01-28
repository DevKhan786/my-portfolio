import { FaHome, FaFileAlt } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";
import { FaGamepad } from "react-icons/fa6";

const Nav = () => {
  return (
    <div className="fixed top-1/2 left-4 transform -translate-y-1/2 space-y-4 md:text-2xl lg:text-5xl text-2xl border border-black bg-white rounded-2xl p-0.5 md:p-1">
      <a
        href="#home"
        className="block rounded-2xl p-0.5 md:p-1 hover:bg-purple-900 backdrop-blur-2xl hover:text-white"
        title="Home"
      >
        <FaHome />
      </a>
      <a
        href="#resume"
        className="block rounded-2xl p-0.5 md:p-1 hover:bg-purple-900 backdrop-blur-2xl hover:text-white"
        title="Resume"
      >
        <FaFileAlt />
      </a>
      <a
        href="#skills"
        className="block rounded-2xl p-0.5 md:p-1 hover:bg-purple-900 backdrop-blur-2xl hover:text-white"
        title="Technologies"
      >
        <FaLaptopCode />
      </a>
      <a
        href="#projects"
        className="block rounded-2xl p-0.5 md:p-1 hover:bg-purple-900 backdrop-blur-2xl hover:text-white"
        title="Projects"
      >
        <FaGamepad />
      </a>
    </div>
  );
};

export default Nav;
