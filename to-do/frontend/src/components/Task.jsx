import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faThumbTack, faPencil } from "@fortawesome/free-solid-svg-icons";
import { useTasksContext } from "../hooks/useTasksContext";
const Task = ({ task }) => {
  // const { dispatch } = useTasksContext();

  // const handleClick = async () => {
  //   const response = await fetch("/api/tasks/" + task._id, {
  //     method: "DELETE",
  //   });
  //   const json = await response.json();

  //   if (response.ok) {
  //     dispatch({ type: "DELETE_TASK", payload: json });
  //   }
  // };
const myStyle = {
  display: "none"
}
  return (
    <div>
      <div className="relative  mt-6 pl-2 pt-2 pb-2  bg-slate-300 w-[380px] md:w-[800px] rounded-md flex">
        
        <div className=" pr-3 pt-1">
          <input type="checkbox" />
        </div>
        <div className="">
          <h1 className=" text-[16px] md:text-[22px]">{task.title}</h1>
          <p className=" text-slate-500">{task.type}</p>
        </div>
        <ul className="  flex flex-row-reverse space-x-1 absolute right-0 pt-4  ">
          <div className="group relative">
            <button>
              <FontAwesomeIcon
                icon={faTrashCan}
                className="   pr-4 text-blue-700 transition ease-in-out hover:scale-110 hover:text-red-500  overlay"
              />
            </button>
            <span
              className="absolute -top-12 left-[15%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100 tooltip"
            >
              DELETE<span></span>
            </span>
          </div>
          <div className="group relative">
            <button>
              <FontAwesomeIcon
                icon={faThumbTack}
                className="   pr-4 text-blue-700 transition ease-in-out hover:scale-110  overlay"
              />
            </button>
            <span
              className="absolute -top-12 left-[15%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100 tooltip"
            >
              PIN<span></span>
            </span>
          </div>
          <div className="group relative">
            <button>
              <FontAwesomeIcon
                icon={faPencil}
                className="   pr-4 text-blue-700 transition ease-in-out hover:scale-110  overlay"
              />
            </button>
            <span
              className="absolute -top-12 left-[35%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100 tooltip"
            >
              Edit<span></span>
            </span>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Task;
