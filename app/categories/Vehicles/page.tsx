'use client'
import Filter from "@/components/cards/vehicles/Filter";
import Upper from "@/components/cards/vehicles/Upper";
import React, { useState } from "react";


export default function Main() {
  const [showFilter, setShowFilter] = useState(true);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <section id="section" className="w-[90%] mx-auto h-full mt-[10%] gap-4">
      <div className="lg:col-span-6 lg:row-span-1 lg:mt-[1.5rem] md:mt-[2.5rem] mt-[5rem] base:mt-[6rem]">
        <Upper />
      </div>
      {showFilter && (
        <div className="lg:col-span-2 lg:block hidden">
          <Filter />
        </div>
      )}
      {/* <div className={`lg:col-span-4 lg:flex ${showFilter ? "hidden" : ""}`}>
        <Cards />
      </div> */}
      <button
        className="lg:hidden fixed bottom-4 right-4 rounded-full p-3 bg-blue-500 text-white"
        onClick={toggleFilter}
      >
        {showFilter ? "Show Filter" : "Hide Filter"}
      </button>
    </section>
  );
}
