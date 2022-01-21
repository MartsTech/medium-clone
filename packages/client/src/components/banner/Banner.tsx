import Image from "next/image";

const Banner = () => {
  return (
    <div
      className="flex justify-between items-center bg-yellow-400
      border-y border-black py-10 lg:py-0"
    >
      <div className="px-10 space-y-5">
        <h1 className="text-6xl max-w-xl font-serif">
          <span className="underline decoration-black decoration-4">
            Medium
          </span>{" "}
          is a place to write, read and connect
        </h1>
        <h2>
          It is a easy and free to post your thinking on any topic and connect
          with millions of readers.
        </h2>
      </div>
      <div className="relative h-32 w-32 lg:h-[500px] lg:w-[500px]">
        <Image
          src="/images/logo-white.png"
          alt="logo"
          className="hidden md:inline-flex"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default Banner;
