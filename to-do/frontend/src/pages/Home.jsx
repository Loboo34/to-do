import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Task from "../components/Task";
import Sidebar from "../components/Sidebar";
import { useTasksContext } from "../hooks/useTasksContext";
//import { useAuthContext } from "../hooks/useAuthContext";
import Addtasks from "../components/Addtasks";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tasks from "../components/TodoTask";
import TodoTask from "../components/TodoTask";

const Home = () => {
  // const { user } = useAuthContext();
  const [taskPopup, setTaskPopup] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [timeOfDay, setTimeOfDay] = useState("");
  const { tasks, dispatch } = useTasksContext();
  const [isOpen, setIsOpen] = useState();
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
      determineTimeOfDay();
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  
  // const date = new Date()
  const determineTimeOfDay = () => {
    const currentHour = currentDate.getHours();

    if (currentHour >= 6 && currentHour <= 12) setTimeOfDay("Morning");
    else if (currentHour >= 12 && currentHour <= 18) setTimeOfDay("Evening");
    else {
      setTimeOfDay("Afternoon");
    }
  };
  //api call
useEffect(() => {
  const fetchTasks = async () => {
    const response = await fetch("/api/tasks");
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "SET_TASKS", payload: json });
    }
  };
  fetchTasks();
}, [dispatch]);

  return (
    <div className=" bg-slate-200 relative h-full w-full">
      <Navbar toggle={toggle} />

      <div className=" flex  w-full ">
        <Sidebar isOpen={isOpen} />
        <div
          className={` w-[100%]  pb-32 md:ml-[50px]  justify-center items-start mt-[50px]  pl-4 md:pl-9  md:box-border   home 
          ${isOpen ? "expanded" : ""}`}
        >
          <div className=" ">
            <h1 className=" text-blue-700 text-[22px] pt-7">
              {`Good ${timeOfDay} `}
              Tempest
            </h1>
            <p className=" text-[18px] text-slate-400">
              {currentDate.toDateString()}
            </p>
            <p className=" text-[18px] font-bold">{}</p>
          </div>

          <div className=" mt-8  ">
            {tasks && tasks.map((task) => (<TodoTask key={task._id} task={task} />))}
           
          </div>

          <div className="flex space-x-1  pb-2 pt-4 ">
            <FontAwesomeIcon
              icon={faPlus}
              className=" text-blue-700 text-[12px] mt-1 hover:text-white  pl-1 pr-1 pb-1 pt-1 rounded-full hover:bg-blue-700"
              onClick={() => setTaskPopup(true)}
            />
            <h1
              className=" cursor-pointer hover:text-blue-700"
              onClick={() => setTaskPopup(true)}
            >
              Add Task
            </h1>
          </div>
          <Addtasks trigger={taskPopup} setTrigger={setTaskPopup} />
          
        </div>
      </div>

      {/* {!user && (
        <div className=" text-black w-full h-screen flex justify-center ">
          <svg className="w-full h-full">
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
                  strokeWidth="6"
                  fill="none"
                  opacity="1"
                ></circle>
                <line
                  x1="35"
                  y1="35"
                  x2="65"
                  y2="65"
                  stroke="#000095"
                  strokeWidth="6"
                  strokeLinecap="round"
                  opacity="1"
                ></line>{" "}
                <line
                  x1="35"
                  y1="65"
                  x2="65"
                  y2="35"
                  stroke="#000095"
                  strokeWidth="6"
                  strokeLinecap="round"
                  opacity="1"
                ></line>
                <circle
                  cx="100.5"
                  cy="0.5"
                  r="16"
                  stroke="#101011"
                  strokeWidth="6"
                  fill="none"
                  opacity="1"
                ></circle>
                <circle
                  cx="0.5"
                  cy="100.5"
                  r="16"
                  stroke="#101011"
                  strokeWidth="6"
                  fill="none"
                  opacity="1"
                ></circle>
                <circle
                  cx="100.5"
                  cy="100.5"
                  r="16"
                  stroke="#101011"
                  strokeWidth="6"
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
      )} */}
    </div>
  );
};

export default Home;
