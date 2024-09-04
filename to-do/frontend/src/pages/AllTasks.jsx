import React, { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const AllTasks = () => {
      const [isOpen, setIsOpen] = useState();
       const toggle = () => {
         setIsOpen(!isOpen);
       };
  return (
    <>
    <Navbar toggle={toggle} />
    <div className=" flex  w-full ">
      <Sidebar isOpen={isOpen} />
      <div
        className={` w-[100%]  pb-32 md:ml-[50px]  justify-center items-start mt-[50px]  pl-4 md:pl-9  md:box-border   home 
          ${isOpen ? "expanded" : ""}`}
      >
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-4xl">All Tasks</h1>
        </div>
      </div>
    </div>
    </>
  );
};

export default AllTasks;
