import React from 'react'

const TPopup = (props) => {
  return (props.trigger) ? (
    <div className=" bg-[#00000062] fixed top-0 left-0 z-10 flex justify-center items-center w-[100%] h-[100vh]  pl-0">
      <div className=" relative bg-slate-50 md:w-[100%] max-w-[500px] w-[80%] md:h-[350px] h-[300px]  pt-3 pl-4 z-50 max-md:rounded-md">
        <h1 className=" text-2xl font-black pb-4">Add List</h1>
        <form className=" flex flex-col">
          <label className=" font-bold pb-2 text-lg">Name</label>
          <input
            className=" mb-2 pb-1 pt-1 pl-2 text-base bg-slate-300 w-[90%] outline-none rounded"
            type="text"
          ></input>

          <label className=" font-bold pb-2 text-lg">Work space</label>
          {/* <input className=' mb-2 pb-1 pt-1 bg-slate-300 w-[90%] rounded' type="text"></input> */}
          <select className=" mb-2 pb-1 pt-1 text-base bg-slate-300 w-[90%] rounded">
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
              className=" text-[18px] hover:bg-slate-300 pl-2 pr-2 rounded-md" onClick={() =>props.setTrigger(false)}
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
  ) : "";
}

export default TPopup