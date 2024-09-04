import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";


import { useTasksContext } from "../hooks/useTasksContext";
import TodoTask from "../components/TodoTask";

const Upcomming = () => {
  const { type } = useParams();
  const { tasks, dispatch } = useTasksContext();

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("/api/tasks/");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_TASKS", payload: json });
      }
    };
    fetchTasks();
  }, [dispatch]);
  return (
    <div className=" bg-slate-200">
      <Navbar />
      <div className=" flex">
        <Sidebar />
        <div className=" w-7/12 ml-8 ">
          <h1 className=" text-blue-700 text-[22px] pt-5">Good morning name</h1>
          <div className=" flex space-x-5">
            <div className=" flex flex-col leading-5">
              <span className=" text-[15px] text-slate-400">Sunday</span>
              <span className=" text-center text-[22px] font-bold">13</span>
              <span className=" text-[15px] text-slate-400">August</span>
            </div>
            <div className=" flex flex-col leading-5 pt-4">{type}</div>
          </div>

          {tasks && tasks.map((task) => <TodoTask key={task._id} task={task} />)}
        </div>
        <div className=" w-3/12 max-md:hidden">
         
        </div>
      </div>
    </div>
  );
};

export default Upcomming;
