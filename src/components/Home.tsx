import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";

const Home = () => {
  return (
    <div
      className="bg-white text-center h-screen flex flex-col justify-center py-16 px-8"
      id="home"
    >
      <h1 className="text-5xl md:text-8xl font-bold text-black mb-4">
        Hamza Khan
      </h1>
      <h4 className="text-black text-lg md:text-3xl font-semibold mb-2">
        Freelance Software Developer
      </h4>
      <p className="text-black text-md md:text-xl mb-8">
        Specialised in{" "}
        <span className="font-semibold text-orange-600">JavaScript.</span>
      </p>
      <div className="flex justify-center space-x-12 text-6xl mt-2">
        <a
          href="https://github.com/DevKhan786"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-orange-600 hover:text-gray-700 transition-transform transform hover:scale-125 animate-bounce"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/hamzakhan786/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-125 animate-bounce"
        >
          <FaLinkedin />
        </a>
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
          className="text-red-600 hover:text-red-800 transition-transform transform hover:scale-125 animate-bounce"
        >
          <FaFilePdf />
        </a>
      </div>
    </div>
  );
};

export default Home;
