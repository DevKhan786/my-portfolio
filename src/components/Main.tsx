import ResumeTabs from "./ResumeTabs";

const Main = () => {
  return (
    <div className="h-screen bg-white flex flex-col" id="resume">
      <h1 className="mt-16 text-6xl font-extrabold text-black mb-12 text-center">
        Resume
      </h1>
      <div className="container mx-auto px-14 md:px-6">
        <ResumeTabs />
      </div>
    </div>
  );
};

export default Main;
