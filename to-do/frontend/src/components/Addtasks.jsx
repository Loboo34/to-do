import React, { useState } from "react";

//import Popup from "reactjs-popup";
//import { faAngleRight, faHourglass1 } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { FaCalendarAlt } from "react-icons/fa";
import { useTasksContext } from "../hooks/useTasksContext";
//import { useProjectsContext } from "../hooks/useProjectsContext";
import { DatePickerInput } from "@mantine/dates";

import { MultiSelectCreatable } from "./Combo";

const Addtasks = (props) => {
  //const [currentDate, setCurrentDate] = useState(new Date());

  //const { projects } = useProjectsContext();
  const { dispatch } = useTasksContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [time, setTime] = useState("");
  const [error, setError] = useState(null);
  //const [data, setData] = useState(undefined);
  //const [value, setValue] = (useState < Date) | (null > null);
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentDate(new Date());
  //   }, 1000);

  //   // Clear the interval when the component is unmounted
  //   return () => clearInterval(intervalId);
  // }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const task = { title, description, type, dueDate, time };

    const response = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify(task),
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
      setTitle("");
      setDescription("");
      setType("");
      setDueDate("");
      setTime("");
      //console.log("new Task added:", json);
      dispatch({ type: "CREATE_TASK", payload: json });
    }
  };

  return props.trigger ? (
    <div className=" relative bg-white w-[380px] md:w-[800px] pt-4 pl-3 pb-6 rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className=" flex flex-col w-[100%]">
          {/* <label className=' pb-1 text-[18px]'>Name</label> */}
          <input
            type="text"
            value={title}
            className=" w-[90%] h-[35px] mb-4 rounded border pl-2"
            placeholder="Task Name"
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          {/* <label className=' pb-1 text-[18px]'>Description</label> */}
          <input
            type="text"
            value={description}
            className=" w-[90%] h-[35px] mb-3 rounded border pl-2 text-black"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className=" flex space-x-3 pb-6">
          <DatePickerInput
            placeholder="# Due date"
            value={dueDate}
            onChange={setDueDate}
            defaultValue={new Date()}
            valueFormat="DD MMM YYYY"
            clearable
          />

          <button className=" text-[14px] text-[#ADB5BD] pl-1 pr-1 border-[.1rem]  border-[#e5e7eb]    rounded  flex items-center">
            <img
              src="/img/flag.png"
              className=" w-3 h-3 mt-1 mr-1"
              alt="flag"
            />
            Priority
          </button>
          <button className=" text-[14px] text-[#ADB5BD]  pl-1 pr-1  border-[.1rem] border-[#e5e7eb] border-solid    rounded   flex items-center">
            <img
              src="/img/alarm.png"
              className=" w-3 h-3 mt-1 mr-1 "
              alt="alarm"
            />
            Reminder
          </button>
        </div>
        <div className="  max-w-[20%] flex items-center">
          <MultiSelectCreatable value={type} onChange={setType}/>
          {/* <Action trigger={isActive} setTrigger={setIsActive}/> */}
        </div>

        <div className=" absolute right-2 bottom-2 space-x-3">
          <button
            className=" text-[16px] bg-slate-200 pl-2 pr-2 rounded hover:bg-slate-300 font-semibold"
            onClick={() => props.setTrigger(false)}
          >
            Cancel
          </button>
          <input
            className=" text-[16px] text-white bg-blue-700 pl-2 pr-2 rounded font-semibold"
            type="submit"
            value="Add Task"
          />
        </div>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  ) : (
    ""
  );
};

export default Addtasks;
