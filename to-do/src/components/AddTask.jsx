import React from 'react'

const AddTask = () => {
  return (
    <div className=" mt-10 pl-4 w-[300px pb-5">
      <h1 className=" text-center text-[22px] font-bold pb-4">Add Task</h1>
      <div className=' pb-9 flex flex-col'>
        <label className="">
          <p className=' text-[18px]'>Title:</p>
          <input type="text" className=' mb-6'/>
        </label>
        <label className="">
          <p className=' text-[18px]'>Type:</p>
          <input type="text" />
        </label>
      </div>
      <button className=' bg-blue-600 text-white p-1 rounded'>Add Task</button>
    </div>
  );
}

export default AddTask