import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Trial from "./Trial";
import Popup from "reactjs-popup";
import { faAngleRight, faHourglass1 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { FaCalendarAlt } from "react-icons/fa";
import { useTasksContext } from "../hooks/useTasksContext";
import { useProjectsContext } from "../hooks/useProjectsContext";
import { DatePickerInput } from "@mantine/dates";

const Addtasks = (props) => {
  //const [isActive, setIsActive] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  //const [year, setYear] = useState(new Date().getFullYear());
  //const [month, setMonth] = useState(new Date().getMonth());
  //const [dates, setDates] = useState([]);
  const { projects } = useProjectsContext();
  const { dispatch } = useTasksContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState(null);
  const [data, setData] = useState(undefined);
  //const [value, setValue] = (useState < Date) | (null > null);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const task = { title, description, type, date, time };

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
      setDate("");
      setTime("");
      //console.log("new Task added:", json);
      dispatch({ type: "CREATE_TASK", payload: json });
    }
  };
  const onOptionChangeHandler = (event) => {
    setData(event.target.value);
    console.log("User Selected Value - ", event.target.value);
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
          {/* <input
            type="text"
            value={type}
            className=" w-[90%] h-[35px] mb-3 rounded border pl-2 text-black"
            placeholder="Type"
            onChange={(e) => setType(e.target.value)}
           
          /> */}
        </div>

        <div className=" flex space-x-3 pb-6">
          {/* <Popup
            trigger={
              <span className=" text-[14px] text-blue-700 font-semibold pl-1 pr-1 bg-white border-2 border-[#00000046]  rounded-md hover:bg-slate-200 flex cursor-pointer ">
                <img
                  src="/img/calendar.png"
                  className=" w-3 h-3 mt-1 mr-1"
                  alt="calendar"
                />
                Due Date
              </span>
            }
            position="left center"
            nested
          >
            <div className=" absolute left-0 bottom-8">
              <Trial />
            </div>
          </Popup> */}
          <DatePickerInput
            placeholder="# Due date"
            value={date}
            onChange={setDate}
            clearable
          />

          <button className=" text-[14px] text-blue-700 font-semibold pl-1 pr-1 bg-white border-2 border-[#00000046]    rounded-md hover:bg-gray-300 flex">
            <img
              src="/img/flag.png"
              className=" w-3 h-3 mt-1 mr-1"
              alt="flag"
            />
            Priority
          </button>
          <button className=" text-[14px] text-blue-700 font-semibold pl-1 pr-1 bg-white border-2 border-[#00000046]    rounded-md hover:bg-gray-300 flex">
            <img
              src="/img/alarm.png"
              className=" w-3 h-3 mt-1 mr-1"
              alt="alarm"
            />
            Reminder
          </button>
        </div>
        <div>
          {/* <Popup
            trigger={
              <select className=" text-[14px] text-gray-600 hover:text-black  font-semibold pl-1 pr-1 bg-white   rounded-md hover:bg-gray-100 flex w-[80px] cursor-pointer">
                <img
                  src="/img/inbox.png"
                  className=" w-3 h-3 mt-[5px] mr-1"
                  alt="alarm"
                />
                Inbox
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className=" rotate-90 mt-[5px] ml-[5px]"
                />
              </select>
            }
            nested
          >
            <div className=" bg-slate-50 w-[250px] h-[200px] border border-[#00000045] rounded-md  absolute p-2   ">
              <div>
                 <input
                  type="text"
                  placeholder="Project Name"
                  className=" text-[18px] w-[98%] pt-1 pb-1  mb-3 pl-1 outline-none border rounded-md border-[black ]"
                 
                /> 
              </div>
              <option
                className="  w-[90%] pl-1 pt-1 pb-1"
                onChange={onOptionChangeHandler}
              >
                <option>Type</option>
                {projects &&
                  projects.map((project) => (
                    <option
                      key={project._id}
                      className=" text-[1.2rem] font-normal"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    >
                      {project.name}
                    </option>
                  ))}
              </option>
            </div>
          </Popup>  */}

          <Popup trigger={<p>{data}</p>}>
            <div>
              <input type="search" />
              <span>my Projects</span>
              {projects &&
                projects.map((project) => (
                  <option
                    key={project._id}
                    className=" text-[1.2rem] font-normal"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    {project.name}
                  </option>
                ))}
            </div>
          </Popup>

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
