import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faThumbTack, faPencil } from "@fortawesome/free-solid-svg-icons";
import { useTasksContext } from "../hooks/useTasksContext";
const Task = ({ task }) => {
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
    <div>
      <div className="relative  mt-6 pl-2 pt-1 pb-2  bg-slate-300 w-[650px] rounded-md">
        <label className=" relative flex space-x-3 items-center overlaycontainer ">
          <input type="radio" className=" rounded-full " />
          <div className=" items-center">
            <p className=" text-slate-500">my list:{task.type}</p>
            <h1 className=" text-[22px]">{task.title}</h1>
            <h1>{task.date}</h1>
          </div>
          <div className=" flex flex-row-reverse space-x-2 absolute right-0 items-center">
            <FontAwesomeIcon
              icon={faTrashCan}
              className=" hidden pr-4 text-blue-700 transition ease-in-out hover:scale-110 hover:text-red-500 overlay"
              onClick={handleClick}
            />
            <FontAwesomeIcon
              icon={faThumbTack}
              className=" hidden  pr-4 text-blue-700 transition ease-in-out  hover:scale-110  rotate-45 pt-6 overlay"
            />
            <FontAwesomeIcon
              icon={faPencil}
              className=" hidden  pr-4 text-blue-700 transition ease-in-out hover:scale-110  overlay"
            />
          </div>
        </label>
      </div>
    </div>
  );
};

export default Task;
