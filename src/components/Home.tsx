const Home = () => {
  return (
    <div className="text-center h-screen flex flex-col justify-center py-16 px-8" id="home">
      <h1 className="text-5xl md:text-8xl font-bold text-black mb-4">
        Hamza Khan
      </h1>
      <h4 className="text-lg md:text-3xl font-semibold mb-2">
        Freelance Software Developer
      </h4>
      <p className="text-md md:text-xl mb-8">
        Specialised in{" "}
        <span className="font-semibold text-black">JavaScript.</span>
      </p>
    </div>
  );
};

export default Home;
