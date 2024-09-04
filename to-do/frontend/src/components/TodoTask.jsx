import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faThumbTack,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { useTasksContext } from "../hooks/useTasksContext";

const TodoTask = ({ task }) => {
  const { dispatch } = useTasksContext();
  const handleClick = async () => {
    const response = await fetch("/api/tasks/" + task._id, {
      method: "DELETE",
      
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_TASK", payload: json });
    }
  };
  return (
    <div className="  w-[90%] relative pl-1 rounded flex space-x-2 cursor-pointer hover:bg-slate-300 mb-3 ">
      {/* <form>
        <div className=" pt-3">
         
          <input type="checkbox" className=" pl-3 pr-3 text-red-700" />
        </div>
      </form> */}

      <div className="pt-2 pb-2 flex flex-col">
        <h1 className=" text-[1.2rem]">{task.title}</h1>
        <span className=" text-blue-500 text-[.8rem]">{task.description}</span>
        <span className=" text-[.8rem]">{task.dueDate}</span>
        <span className=" text-[.8rem]">{task.type}</span>
      </div>
      <div className=" absolute right-1 h-full flex items-center">
        <div className="group relative">
          <button>
            <FontAwesomeIcon
              icon={faPencil}
              className=" pr-4 text-blue-700 text-[1.2rem] transition ease-in-out hover:scale-110  overlay"
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
        <div className="group relative">
          <button>
            <FontAwesomeIcon
              icon={faThumbTack}
              className="   pr-4 text-blue-700 text-[1.2rem] transition ease-in-out hover:scale-110  overlay"
            />
          </button>
          <span className="absolute -top-12 left-[15%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 tooltip">
            PIN<span></span>
          </span>
        </div>
        <div className="group relative">
          <button className="">
            <FontAwesomeIcon
              icon={faTrashCan}
              className="   pr-4 text-blue-700 text-[1.2rem] transition ease-in-out hover:scale-110 hover:text-red-500  overlay"
              onClick={handleClick}
            />
          </button>
          <span className="absolute -top-12 left-[15%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg borde border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 tooltip">
            DELETE<span></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TodoTask;
