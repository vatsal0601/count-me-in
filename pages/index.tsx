import { Head } from "@components";

const Home = () => {
  return (
    <>
      <Head />
      <main>
        <h1>Count Me In</h1>
        <button className="group relative px-6 py-2">
          <span className="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-black transition duration-300 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 h-full w-full border-2 border-black bg-white group-hover:bg-black"></span>
          <span className="relative text-black group-hover:text-white">
            hover effect
          </span>
        </button>
      </main>
    </>
  );
};

export default Home;
