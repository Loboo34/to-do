import React from 'react'


const Task = () => {
  
  return (
   
        <div className="relative flex mt-6 pl-2 pt-1 pb-2 space-x-4 bg-slate-300 w-[550px] items-center rounded-md">
          <input type="checkbox" className=" rounded-full" />
          <div className=" items-center">
            <p>my list:taks</p>
            <h1 className=" text-[20px]">name</h1>
          </div>
        </div>
  );
}

export default Task