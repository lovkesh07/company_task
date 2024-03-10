import React from "react";

const Home = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2">
        <h1 className="text-6xl font-bold">Welcome to dashboard</h1>
      </div>
      <div className="rounded-2xl h-[20vh] w-full bg-red-400">1</div>

      <div className="rounded-2xl h-[20vh] w-full bg-red-900">2</div>
    </div>
  );
};

export default Home;
