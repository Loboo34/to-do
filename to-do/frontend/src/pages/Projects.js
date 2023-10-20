import React from "react";

const Projects = () => {
  return (
    <div className=" bg-pink-500 flex justify-center items-center h-[100vh]">
      <div className=" relative bg-slate-50 w-[500px] h-[350px] pt-3 pl-4">
        <h1 className=" text-2xl font-black pb-4">Add List</h1>
        <form className=" flex flex-col">
          <label className=" font-bold pb-2 text-lg">Name</label>
          <input
            className=" mb-2 pb-1 pt-1 bg-slate-300 w-[90%] rounded"
            type="text"
          ></input>

          <label className=" font-bold pb-2 text-lg">Work space</label>
          {/* <input className=' mb-2 pb-1 pt-1 bg-slate-300 w-[90%] rounded' type="text"></input> */}
          <select className=" mb-2 pb-1 pt-1 bg-slate-300 w-[90%] rounded">
            <option>Personal</option>
            <option>Team</option>
          </select>

          <div className=" pt-4 flex space-x-2">
            <label className="switch">
              <input type="checkbox" />
              <span class="slider"></span>
            </label>
            <label className=" text-[15px]">Add to favourites</label>
          </div>

          <div className=" absolute right-5 bottom-3 flex space-x-3">
            <input
              type="submit"
              value="Cancle"
              className=" text-[18px] hover:bg-slate-300 pl-2 pr-2 rounded-md"
            />
            <input
              type="submit"
              value="Add"
              className=" bg-blue-700 text-white pl-2 pr-2 text-[18px] rounded-md"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Projects;
