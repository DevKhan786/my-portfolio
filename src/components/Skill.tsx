import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const skillItem = [
  {
    category: "Frontend",
    skills: [
      { imgSrc: "/images/html.png", label: "HTML", desc: "Markup Language" },
      { imgSrc: "/images/css3.svg", label: "CSS", desc: "Styling" },
      {
        imgSrc: "/images/javascript.svg",
        label: "JavaScript",
        desc: "Scripting Language",
      },
      {
        imgSrc: "/images/typescript.png",
        label: "TypeScript",
        desc: "Typed JavaScript",
      },
      { imgSrc: "/images/react.svg", label: "React", desc: "UI Library" },
      {
        imgSrc: "/images/tailwindcss.svg",
        label: "TailwindCSS",
        desc: "CSS Framework",
      },
      { imgSrc: "/images/shadcn.png", label: "Shadcn", desc: "UI Components" },
      { imgSrc: "/images/redux.png", label: "Redux", desc: "State Management" },
      {
        imgSrc: "/images/reactquery.png",
        label: "React Query",
        desc: "Data Fetching",
      },
      {
        imgSrc: "/images/zustand.png",
        label: "Zustand",
        desc: "State Management",
      },
    ],
  },

  {
    category: "Backend",
    skills: [
      {
        imgSrc: "/images/nodejs.svg",
        label: "NodeJS",
        desc: "JavaScript Runtime",
      },
      {
        imgSrc: "/images/expressjs.svg",
        label: "ExpressJS",
        desc: "Web Framework",
      },
      {
        imgSrc: "/images/mongodb.svg",
        label: "MongoDB",
        desc: "NoSQL Database",
      },
      {
        imgSrc: "/images/firebase.png",
        label: "Firebase",
        desc: "Backend-Service",
      },
    ],
  },
  {
    category: "Tools & Design",
    skills: [
      { imgSrc: "/images/git.png", label: "Git", desc: "Version Control" },
      {
        imgSrc: "/images/github.png",
        label: "GitHub",
        desc: "Version Control",
      },
      { imgSrc: "/images/figma.svg", label: "Figma", desc: "Design Tool" },
    ],
  },
];

const Skill = () => {
  return (
    <div className="p-16 mx-auto max-w-6xl min-h-screen" id="skills">
      <Tabs defaultValue="Frontend">
        <h1 className="mt-16 text-4xl sm:text-5xl md:text-6xl font-extrabold text-black mb-12 text-center">
          Technologies
        </h1>
        <TabsList className="flex bg-white justify-center space-x-4 sm:space-x-2 gap-2 sm:gap-4">
          {skillItem.map((category, index) => (
            <TabsTrigger
              key={index}
              value={category.category}
              className="px-2 py-3 sm:px-4 sm:py-2 cursor-pointer text-sm sm:text-lg font-semibold transition-all data-[state=active]:border data-[state=active]:border-black data-[state=active]:text-black text-gray-600 hover:text-black"
            >
              {category.category}
            </TabsTrigger>
          ))}
        </TabsList>
        {skillItem.map((category, index) => (
          <TabsContent key={index} value={category.category}>
            <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mt-8">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="flex flex-col items-center text-center bg-white p-4 border border-black rounded-lg shadow-md transition-all hover:shadow-lg"
                >
                  <img
                    src={skill.imgSrc}
                    alt={skill.label}
                    className="w-12 sm:w-16 h-12 sm:h-16 mb-4 object-contain"
                  />
                  <h3 className="text-sm sm:text-lg font-semibold text-black">
                    {skill.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Skill;
