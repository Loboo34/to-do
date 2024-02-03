import React, { useState } from 'react'
import { useProjectsContext } from "../hooks/useProjectsContext";

const TPopup = (props) => {

  const { dispatch } = useProjectsContext();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    const project = {name, type}

    const response = await fetch("/api/project", {
      method: "POST",
      body: JSON.stringify(project),
      headers: {
        "Content-Type": "application/json",
      },
    });
const json = await response.json();

 if (!response.ok) {
   setError(json.error);
 }
 if (response.ok) {
   setError(null);
   setName("");
   setType("");
   console.log("new Project added:", json);
   dispatch({ type: "CREATE_Project", payload: json });
 }
  }
  return props.trigger ? (
    <div className=" bg-[#00000062] fixed top-0 left-0 z-50 flex justify-center items-center w-[100%] h-[100vh]  pl-0">
      <div className=" relative bg-slate-50 md:w-[100%] max-w-[500px] w-[80%] md:h-[350px] h-[300px]  pt-3 pl-4 z-50 max-md:rounded-md">
        <h1 className=" text-2xl font-black pb-4">Add List</h1>
        <form className=" flex flex-col" onSubmit={handleSubmit}>
          <label className=" font-bold pb-2 text-lg">Name</label>
          <input
            className=" mb-2 pb-1 pt-1 pl-2 text-base bg-slate-300 w-[90%] outline-none rounded"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label className=" font-bold pb-2 text-lg">Work space</label>
          {/* <input className=' mb-2 pb-1 pt-1 bg-slate-300 w-[90%] rounded' type="text"></input> */}
          <select
            className=" mb-2 pb-1 pt-1 text-base bg-slate-300 w-[90%] rounded"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option onChange={(e) => setType(e.target.value)}>Personal</option>
            <option onChange={(e) => setType(e.target.value)}>Team</option>
          </select>

          <div className=" pt-4 flex space-x-2">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
            <label className=" text-[15px]">Add to favourites</label>
          </div>

          <div className=" absolute right-5 bottom-3 z-20 flex space-x-3">
            <input
              type="submit"
              value="Cancle"
              className=" text-[18px] hover:bg-slate-300 pl-2 pr-2 rounded-md"
              onClick={() => props.setTrigger(false)}
            />
            <input
              type="submit"
              value="Add"
              className=" bg-blue-700 hover:bg-blue-600 text-white pl-2 pr-2 text-[18px] rounded-md"
            />
          </div>
        </form>
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  ) : (
    ""
  );
}

export default TPopup