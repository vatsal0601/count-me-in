import { Head, SmileSVG, WaveSVG } from "@components";

const Home = () => {
  return (
    <>
      <Head />
      <main className="pt-24 lg:pt-28">
        <section className="flex min-h-[75vh] flex-col justify-between space-y-16">
          <div className="container space-y-8">
            <h1 className="mx-auto max-w-4xl text-center text-4xl font-bold text-pink-brand lg:text-6xl">
              <span>Got goals to achieve? We will keep you on track.</span>
              <SmileSVG className="ml-2 inline h-8 w-8 lg:ml-4 lg:h-14 lg:w-14" />
            </h1>
            <p className="mx-auto max-w-3xl text-3xl font-semibold text-neutral-900">
              Find the right group for yourself, keep each other accountable and
              achieve your goals!
            </p>
            <div className="space-y-4 text-center">
              <button className="group relative">
                <span className="absolute inset-0 h-full w-full translate-x-1.5 translate-y-1.5 transform rounded-full bg-neutral-900"></span>
                <span className="relative block rounded-full border-2 border-neutral-900 bg-pink-brand px-4 py-2 text-xl font-bold text-white transition-transform group-active:translate-x-1.5 group-active:translate-y-1.5 lg:px-8 lg:py-4 lg:text-3xl">
                  Get Started!
                </span>
              </button>
              <span className="block font-semibold text-neutral-900">
                (You can click this. Trust me!)
              </span>
            </div>
          </div>
          <div>
            <WaveSVG className="w-full" />
            <div className="-mt-1 overflow-hidden bg-pink-brand py-4">
              <ul className="flex -translate-x-12 transform list-disc items-center space-x-28 text-3xl font-semibold text-white lg:py-8 lg:text-5xl">
                <li className="flex-shrink-0">Set a Goal</li>
                <li className="flex-shrink-0">Find the right peers</li>
                <li className="flex-shrink-0">Keep each other accountable</li>
                <li className="flex-shrink-0">Grow Together</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
