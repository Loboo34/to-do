import React from 'react'
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan
} from "@fortawesome/free-solid-svg-icons";

const Task = () => {
  return (
    <div className="relative  mt-6 pl-2 pt-1 pb-2  bg-slate-300 w-[650px] rounded-md">
      <label className=" relative flex space-x-3 items-center overlaycontainer ">
        <input type="radio" className=" rounded-full " />
        <div className=" items-center">
          <p>my list:taks</p>
          <h1 className=" text-[22px]">name</h1>
        </div>
        <FontAwesomeIcon
          icon={faTrashCan}
          className=" absolute hidden right-0 pr-8 text-blue-700 overlay"
        />
      </label>
    </div>
  );
}

export default Task