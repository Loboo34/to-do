import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Action from './Action';

const Addtasks = () => {
  const [isActive, setIsActive] = useState(false)
  
  return (
    <div className=" relative bg-white w-[800px] pt-4 pl-3 pb-6 rounded-lg">
      <form>
        <div className=" flex flex-col w-[100%]">
          {/* <label className=' pb-1 text-[18px]'>Name</label> */}
          <input
            type="text"
            className=" w-[90%] mb-4 rounded border pl-2"
            placeholder="Task Name"
          
          />

          {/* <label className=' pb-1 text-[18px]'>Description</label> */}
          <input
            type="text"
            className=" w-[90%] mb-3 rounded border pl-2 text-black"
            placeholder="Description"
          />
        </div>

        <div className=" flex space-x-3 pb-6">
          <button className=" text-[14px] text-blue-700 font-semibold pl-1 pr-1 bg-white border-2 border-[#00000046]  rounded-md hover:bg-slate-200">
            Due Date
          </button>
          <button className=" text-[14px] text-blue-700 font-semibold pl-1 pr-1 bg-white border-2 border-[#00000046]    rounded-md hover:bg-slate-200">
            Priority
          </button>
          <button className=" text-[14px] text-blue-700 font-semibold pl-1 pr-1 bg-white border-2 border-[#00000046]    rounded-md hover:bg-slate-200">
            Reminder
          </button>
        </div>
        <div >
          <input type='button' value={"action"}
            className=" text-[16px] text-blue-700 font-semibold pl-1 pr-1 rounded-md hover:bg-slate-200 absolute bottom-2 left-3 border-2"
            onClick={() => setIsActive(true)}
           />
         {/* <Action trigger={isActive} setTrigger={setIsActive}/> */}
        </div>

        <div className=" absolute right-2 bottom-2 space-x-3">
          <button className=" text-[16px] bg-slate-300 pl-2 pr-2 rounded hover:bg-slate-400 font-semibold">
            Cancel
          </button>
          <button className=" text-[16px] text-white bg-blue-700 pl-2 pr-2 rounded font-semibold">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default Addtasks