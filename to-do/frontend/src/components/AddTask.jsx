import React from 'react'

const AddTask = () => {
  return (
    <div className=" mt-10 pl-4 w-[300px pb-5">
      <h1 className="  text-[22px] font-bold pb-4">Add Task</h1>
      <form className=" pb-9 flex flex-col">
        <label className="">
          <p className=" text-[16px] pb-1 font-semibold">Title:</p>
          <input type="text" className=" mb-5" required />
        </label>
        <label className="">
          <p className=" text-[16px] pb-1 font-semibold">Type:</p>
          <select className=" w-[184px]">
            <input type="text" placeholder="" className=" mb-5 " required />
            <option value="personal">Work</option>
            <option value="personal">Groceries</option>
            <option value="personal">Shopping</option>
            <option value="personal">Personal</option>
          </select>
        </label>
        <label className="mt-4">
          <p className=" text-[16px] pb-1 font-semibold">Due Date:</p>
          <input type="date" className="  mb-5 w-[184px]" />
        </label>
        <label className="">
          <p className=" text-[16px] pb-1 font-semibold">Time:</p>
          <input type="time" className="w-[184px] mb-8" />
        </label>
        <input
          type="submit"
          value="Add Task"
          placeholder=" Add Task"
          className=" bg-blue-600 text-white w-[100px] pl-2 pr-2 pb-1 pt-1 rounded font-bold"
        />
      </form>
    </div>
  );
}

export default AddTask