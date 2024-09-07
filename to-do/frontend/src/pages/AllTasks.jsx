import React, { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useTasksContext } from "../hooks/useTasksContext";
import TodoTask from "../components/TodoTask";
import DateToDay from "../components/Date";

const AllTasks = () => {
  const { tasks, dispatch } = useTasksContext();
      const [isOpen, setIsOpen] = useState();
       const toggle = () => {
         setIsOpen(!isOpen);
       };

      
        useEffect(() => {
          const fetchTasks = async () => {
            const response = await fetch("/api/tasks");
            const json = await response.json();
            if (response.ok) {
              dispatch({ type: "SET_TASKS", payload: json });
            }
          }

          fetchTasks();
        }, [dispatch]);
  return (
    <>
      <Navbar toggle={toggle} />
      <div className=" flex  w-full ">
        <Sidebar isOpen={isOpen} />
        <div
          className={` w-[100%]  pb-32 md:ml-[50px]  justify-center items-start mt-[50px]  pl-4 md:pl-9  md:box-border   home 
          ${isOpen ? "expanded" : ""}`}
        >
          <div className="">
            <div className="w-[90%]">
              {/* <h1 className="text-4xl">All Tasks</h1> */}
              <DateToDay />
              <div className="">
                {tasks &&
                  tasks.map((task) => <TodoTask key={task._id} task={task} />)}
                
                  {!tasks && <div className="text-center">Loading...</div>}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllTasks;
