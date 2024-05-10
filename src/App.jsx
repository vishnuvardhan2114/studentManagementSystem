import React from "react";
import Searchbar from "./components/Searchbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="bg-white m-9 ">
      <div className="pl-[65px] pt-[15px]">
        <h1 className="font-bold text-2xl ">Student management system</h1>
      </div>
      <Searchbar />
      <Hero />
    </div>
  );
};

export default App;
