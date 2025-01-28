import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const projects = [
  {
    name: "Spotify Clone",
    description:
      "A music streaming platform with playback, volume controls, and a seamless user experience.",
    screenshot: "/images/SPOTIFYCLONE.png",
    tech: [
      "/images/react.svg",
      "/images/typescript.png",
      "/images/nodejs.svg",
      "/images/expressjs.svg",
      "/images/mongodb.svg",
      "/images/tailwindcss.svg",
      "/images/zustand.png",
      "/images/shadcn.png",
    ],
    github: "https://github.com/DevKhan786/SPOTIFYCLONE",
    demo: "https://spotifyclone-20ig.onrender.com/",
  },
  {
    name: "Twitter Clone",
    description:
      "Full-stack clone with user authentication, posts, likes, and a scalable backend.",
    screenshot: "/images/TWITTERCLONE.png",
    tech: [
      "/images/react.svg",
      "/images/typescript.png",
      "/images/nodejs.svg",
      "/images/expressjs.svg",
      "/images/mongodb.svg",
      "/images/tailwindcss.svg",
      "/images/reactquery.png",
      "/images/shadcn.png",
    ],
    github: "https://github.com/DevKhan786/TWITTER-CLONE",
    demo: "https://twitter-clone-qnbf.onrender.com/",
  },
  {
    name: "E-commerce Site",
    description:
      "Built with React.js and Stripe for secure payments and dynamic carts.",
    screenshot: "/images/ECOMMERCE.png",
    tech: [
      "/images/react.svg",
      "/images/typescript.png",
      "/images/nodejs.svg",
      "/images/expressjs.svg",
      "/images/mongodb.svg",
      "/images/tailwindcss.svg",
      "/images/redux.png",
      "/images/shadcn.png",
    ],
    github: "https://github.com/DevKhan786/STOREMERN/tree/master",
    demo: "https://storemern.onrender.com/",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col px-16" id="projects">
      <h1 className="mt-16 text-4xl sm:text-5xl md:text-6xl font-extrabold text-black mb-12 text-center">
        Projects
      </h1>

      <Tabs defaultValue="Project1">
        <TabsList className="flex bg-white justify-center space-x-4 sm:space-x-2 gap-2 sm:gap-4 mb-8">
          <TabsTrigger
            value="Project1"
            className="px-2 py-3 sm:px-4 sm:py-2 cursor-pointer text-sm sm:text-lg font-semibold transition-all data-[state=active]:border data-[state=active]:border-black data-[state=active]:text-black text-gray-600 hover:text-black"
          >
            Project One
          </TabsTrigger>
          <TabsTrigger
            value="Project2"
            className="px-2 py-3 sm:px-4 sm:py-2 cursor-pointer text-sm sm:text-lg font-semibold transition-all data-[state=active]:border data-[state=active]:border-black data-[state=active]:text-black text-gray-600 hover:text-black"
          >
            Project Two
          </TabsTrigger>
          <TabsTrigger
            value="Project3"
            className="px-2 py-3 sm:px-4 sm:py-2 cursor-pointer text-sm sm:text-lg font-semibold transition-all data-[state=active]:border data-[state=active]:border-black data-[state=active]:text-black text-gray-600 hover:text-black"
          >
            Project Three
          </TabsTrigger>
        </TabsList>

        {/* Project One */}
        <TabsContent value="Project1">
          <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-3xl shadow-lg border border-black mt-12">
            {/* Left Column: Screenshot */}
            <div className="md:w-1/2 mb-6 md:mb-0 md:block hidden">
              <img
                src={projects[0].screenshot}
                alt={projects[0].name}
                className="h-[200px] md:h-[400px] lg:h-[600px] w-auto md:w-full rounded-3xl object-cover"
              />
            </div>

            {/* Right Column: Project Details */}
            <div className="flex flex-col items-center justify-center md:ml-10 md:w-1/2">
              <h3 className="md:text-4xl text-xl font-semibold text-black mb-4">
                {projects[0].name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {projects[0].description}
              </p>

              <div className="flex flex-wrap gap-4 mb-4">
                {projects[0].tech.map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt={`tech-icon-${index}`}
                    className="md:w-16 md:h-16 w-8 h-8 object-cover mb-4 border-black border rounded-3xl p-1"
                  />
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={projects[0].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-4 py-2 rounded-lg hover:scale-105 transition"
                >
                  View Code
                </a>
                <a
                  href={projects[0].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Project Two */}
        <TabsContent value="Project2">
          <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-3xl shadow-lg border border-black mt-12">
            {/* Left Column: Screenshot */}
            <div className="md:w-1/2 mb-6 md:mb-0 md:block hidden">
              <img
                src={projects[1].screenshot}
                alt={projects[1].name}
                className="h-[200px] md:h-[400px] lg:h-[600px] w-auto md:w-full rounded-3xl object-cover"
              />
            </div>

            {/* Right Column: Project Details */}
            <div className="flex flex-col items-center justify-center md:ml-10 md:w-1/2">
              <h3 className="md:text-4xl text-xl font-semibold text-black mb-4">
                {projects[1].name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {projects[1].description}
              </p>

              <div className="flex flex-wrap gap-4 mb-4">
                {projects[1].tech.map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt={`tech-icon-${index}`}
                    className="md:w-16 md:h-16 w-8 h-8  object-cover mb-4 border-black border rounded-3xl p-1"
                  />
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={projects[1].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-4 py-2 rounded-lg hover:scale-105 transition"
                >
                  View Code
                </a>
                <a
                  href={projects[1].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Project Three */}
        <TabsContent value="Project3">
          <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-3xl shadow-lg border border-black mt-12">
            {/* Left Column: Screenshot */}
            <div className="md:w-1/2 mb-6 md:mb-0 md:block hidden">
              <img
                src={projects[2].screenshot}
                alt={projects[2].name}
                className="h-[200px] md:h-[400px] lg:h-[600px] w-auto md:w-full rounded-3xl object-cover"
              />
            </div>

            {/* Right Column: Project Details */}
            <div className="flex flex-col items-center justify-center md:ml-10 md:w-1/2">
              <h3 className="md:text-4xl text-xl font-semibold text-black mb-4">
                {projects[2].name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {projects[2].description}
              </p>

              {/* Tech Icons */}
              <div className="flex flex-wrap gap-4 mb-4">
                {projects[2].tech.map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt={`tech-icon-${index}`}
                    className="md:w-16 md:h-16 w-8 h-8 object-cover mb-4 border-black border rounded-3xl p-1"
                  />
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={projects[2].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-4 py-2 rounded-lg hover:scale-105 transition"
                >
                  View Code
                </a>
                <a
                  href={projects[2].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Projects;
