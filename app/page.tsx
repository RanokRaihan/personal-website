import Image from "next/image";

const HomePage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/assets/images/main-logo.svg"
          width={200}
          height={200}
          alt="Md Ranok Raihan"
          className="w-[450px]"
        />
        <h1 className="text-4xl font-bold">Md Ranok Raihan</h1>
        <p>
          Web developer, skilled in the MERN stack and dedicated to building
          accessible, robust, user-centric applications.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
