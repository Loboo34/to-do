import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Task from "../components/Task";
import Sidebar from "../components/Sidebar";
import AddTask from "../components/AddTask";
import { useTasksContext } from "../hooks/useTasksContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { user } = useAuthContext();

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

  // const date = new Date()
  return (
    <div className=" bg-slate-200">
      <Navbar />
      {user && (
        <div className=" flex w-full">
          <div className=" md:w-2/12 mr-8 max-md:hidden">
            <Sidebar />
          </div>
          <div className=" w-7/12 ">
            <h1 className=" text-blue-700 text-[22px] pt-5">
              Good morning {user.name}
            </h1>
            <div className=" flex space-x-5">
              <div className=" flex flex-col leading-5">
                <span className=" text-[15px] text-slate-400">Sunday</span>
                <span className=" text-center text-[22px] font-bold">13</span>
                <span className=" text-[15px] text-slate-400">August</span>
              </div>
              <div className=" flex flex-col leading-5 pt-4">
                <span>6:45p.m - 8:00p.m</span>
                <p>task due: read </p>
              </div>
            </div>

            {tasks && tasks.map((task) => <Task key={task._id} task={task} />)}
          </div>
          <div className=" w-3/12 max-md:hidden">
            <AddTask />
          </div>
        </div>
      )}
      {!user && (
        <div className=" text-black w-full h-screen flex justify-center ">
          <div className=" pt-[100px]">
            <h1 className=" text-[40px]"> Organize your Work and Life</h1>
            <p>Unleash Your Productivity Potential with to-do</p>
            <div className=" flex justify-center">
              <button>Start Today</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
