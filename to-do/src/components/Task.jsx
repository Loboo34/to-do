import React from 'react'


const Task = () => {
  
  return (
    <div className="relative  mt-6 pl-2 pt-1 pb-2  bg-slate-300 w-[650px] rounded-md">
      <label className="flex space-x-3 items-center ">
        <input type="checkbox" className=" rounded-full" />
        <div className=" items-center">
          <p>my list:taks</p>
          <h1 className=" text-[22px]">name</h1>
        </div>
      </label>
      
    </div>
  );
}

export default Task