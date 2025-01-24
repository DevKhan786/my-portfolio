import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { resumeData } from "../data/Data.ts";

const ResumeTabs = () => {
  return (
    <div className="p-4 mx-auto max-w-4xl ">
      <Tabs defaultValue="education">
        <TabsList className="flex space-x-4">
          <TabsTrigger
            value="work"
            className="px-4 py-2 cursor-pointer text-lg font-semibold transition-all data-[state=active]:border data-[state=active]:border-black data-[state=active]:text-black text-gray-600 hover:text-black"
          >
            Work Experience
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="px-4 py-2 cursor-pointer text-lg font-semibold transition-all data-[state=active]:border data-[state=active]:border-black data-[state=active]:text-black text-gray-600 hover:text-black"
          >
            Education
          </TabsTrigger>
        </TabsList>

        <TabsContent value="work">
          {resumeData.workExperience.map((experience, index) => (
            <div
              key={index}
              className="space-y-4 border rounded-lg border-black p-8 mt-4 bg-white"
            >
              <div>
                <h3 className="font-bold text-xl text-black">
                  {experience.company}
                </h3>
                <p className="text-black font-semibold">
                  {experience.position}
                </p>
                <p className="text-black">Duration: {experience.duration}</p>
                <ul className="list-disc mt-1 pl-5 text-black text-sm md:text-md lg:text-lg">
                  {experience.responsibilities.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="education">
          {resumeData.education.map((edu, index) => (
            <div
              key={index}
              className="space-y-4 border rounded-lg border-black p-8 mt-4 bg-white"
            >
              <div>
                <h3 className="font-bold text-xl text-black">
                  {edu.institution}
                </h3>
                <p className="text-black font-semibold">{edu.degree}</p>
                <p className="text-black">Date: {edu.graduationDate}</p>
                <ul className="list-disc mt-1 pl-5 text-black text-sm md:text-md lg:text-lg">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResumeTabs;
