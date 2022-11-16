import { Head, SmileSVG } from "@components";

const Home = () => {
  return (
    <>
      <Head />
      <main className="container pt-24 lg:pt-36">
        <section>
          <h1 className="mx-auto max-w-4xl text-center text-4xl font-bold text-pink-brand lg:text-6xl">
            <span>Got goals to achieve? We will keep you on track.</span>
            <SmileSVG className="ml-2 inline h-8 w-8 lg:ml-4 lg:h-14 lg:w-14" />
          </h1>
          <p>
            Find the right group for yourself, keep each other accountable and
            achieve your goals!
          </p>
          <div>
            <button>Get Started!</button>
            <span>(You can click this. Trust me!)</span>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
