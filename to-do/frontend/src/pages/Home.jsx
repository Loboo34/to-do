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
          <svg class="w-full h-full" viewBox="">
            <defs>
              <pattern
                id="bg_pattern"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="0.5"
                  cy="0.5"
                  r="16"
                  stroke="#101011"
                  stroke-width="6"
                  fill="none"
                  opacity="1"
                ></circle>
                <line
                  x1="35"
                  y1="35"
                  x2="65"
                  y2="65"
                  stroke="#000095"
                  stroke-width="6"
                  stroke-linecap="round"
                  opacity="1"
                ></line>{" "}
                <line
                  x1="35"
                  y1="65"
                  x2="65"
                  y2="35"
                  stroke="#000095"
                  stroke-width="6"
                  stroke-linecap="round"
                  opacity="1"
                ></line>
                <circle
                  cx="100.5"
                  cy="0.5"
                  r="16"
                  stroke="#101011"
                  stroke-width="6"
                  fill="none"
                  opacity="1"
                ></circle>
                <circle
                  cx="0.5"
                  cy="100.5"
                  r="16"
                  stroke="#101011"
                  stroke-width="6"
                  fill="none"
                  opacity="1"
                ></circle>
                <circle
                  cx="100.5"
                  cy="100.5"
                  r="16"
                  stroke="#101011"
                  stroke-width="6"
                  fill="none"
                  opacity="1"
                ></circle>
              </pattern>
            </defs>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="#000000"
              opacity="1"
            ></rect>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#bg_pattern)"
              opacity="1"
            ></rect>
          </svg>
          <div className=" pt-[100px] z-10 absolute text-white">
            <h1 className=" text-[40px] pb-2 "> Organize your Work and Life</h1>
            <p className=" text-center pb-4">
              Unleash Your Productivity Potential with to-do
            </p>
            <div className=" flex justify-center">
              <button className=" bg-blue-700 text-white homebtn">
                Start Today
              </button>
            </div>
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Home;
