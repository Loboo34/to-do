import React, { useEffect } from 'react'
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan, faThumbTack
} from "@fortawesome/free-solid-svg-icons";

const Task = () => {

  useEffect(() => {
const fetchTasks = async () => {
  const response = await fetch('')
  const json = await response.json()

  if(response.ok){
    
  }

}
  }, [])
  return (
    <div className="relative  mt-6 pl-2 pt-1 pb-2  bg-slate-300 w-[650px] rounded-md">
      <label className=" relative flex space-x-3 items-center overlaycontainer ">
        <input type="radio" className=" rounded-full " />
        <div className=" items-center">
          <p className=' text-slate-500'>my list:taks</p>
          <h1 className=" text-[22px]">name</h1>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faTrashCan}
            className=" absolute hidden right-0 pr-6 text-blue-700 transition ease-in-out hover:scale-110 hover:text-red-500 overlay"
          />
          <FontAwesomeIcon
            icon={faThumbTack}
            className=" absolute hidden right-10 pr-6 text-blue-700 transition ease-in-out  hover:scale-110  rotate-45 pt-3 overlay"
          />
        </div>
      </label>
    </div>
  );
}

export default Task