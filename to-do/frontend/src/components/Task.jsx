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
const myStyle = {
  display: "none"
}
  return (
    <main>
      <div className="relative  mt-6 pl-2 pt-2 pb-2  bg-slate-300 w-[800px] rounded-md">
        <div className=" relative flex space-x-3 items-center overlaycontainer ">
          <div className="container-c">
            <input type="checkbox" id="cbx2" style={myStyle} />
            <label for="cbx2" className="check">
              <svg width="18px" height="18px" viewBox="0 0 18 18">
                <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
                <polyline points="1 9 7 14 15 4"></polyline>
              </svg>
            </label>
          </div>
          <div className=" items-center">
            <p className=" text-slate-500">my list:{task.type}</p>
            <h1 className=" text-[22px]">{task.title}</h1>
            <h1>{task.date}</h1>
          </div>
          <ul className=" flex flex-row-reverse space-x-2 absolute right-0 items-center ">
            <div className="wrapper">
              <li className=" flex flex-col relative justify-center icon">
                <span className="tooltip ">Delete</span>
                <FontAwesomeIcon
                  icon={faTrashCan}
                  className="  pr-4 text-blue-700  transition ease-in-out hover:scale-110 hover:text-red-600 dicon  "
                  onClick={handleClick}
                />
              </li>
            </div>
            <li>
              <FontAwesomeIcon
                icon={faThumbTack}
                className="   pr-4 text-blue-700 transition ease-in-out  hover:scale-110  rotate-45 pt-6 overlay"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faPencil}
                className="   pr-4 text-blue-700 transition ease-in-out hover:scale-110  overlay"
              />
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Task;
