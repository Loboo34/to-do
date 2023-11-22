import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Trial from "./Trial";
import Popup from "reactjs-popup";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCalendarAlt } from "react-icons/fa";
const Addtasks = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  //const [year, setYear] = useState(new Date().getFullYear());
  //const [month, setMonth] = useState(new Date().getMonth());
  //const [dates, setDates] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return props.trigger ? (
    <div className=" relative bg-white w-[380px] md:w-[800px] pt-4 pl-3 pb-6 rounded-lg">
      <form>
        <div className=" flex flex-col w-[100%]">
          {/* <label className=' pb-1 text-[18px]'>Name</label> */}
          <input
            type="text"
            className=" w-[90%] h-[35px] mb-4 rounded border pl-2"
            placeholder="Task Name"
          />

          {/* <label className=' pb-1 text-[18px]'>Description</label> */}
          <input
            type="text"
            className=" w-[90%] h-[35px] mb-3 rounded border pl-2 text-black"
            placeholder="Description"
          />
        </div>

        <div className=" flex space-x-3 pb-6">
          <Popup
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
            {/* <div className=' bg-white w-[252px] space-x-1 justify-center pr-3 border border-black rounded pt-2 pl-2'>
              <p>{currentDate.toDateString()}</p>
              <div className=" flex flex-col calendar-container">
                <header className="calendar-header">
                  <p className="calendar-current-date"></p>
                  <div className="calendar-navigation">
                    <span
                      className=" w-[20px] h-[20px] cursor-pointer items-center calendar-navigation"
                      id="calendar-prev"
                     
                    >
                      &lt;
                    </span>
                    <span
                      className=" w-[20px] cursor-pointer items-center calendar-navigation"
                      id="calendar-next"
                      
                    >
                      &gt;
                    </span>
                  </div>
                </header>

                <div className=" calendar-body">
                  <ul className=" flex space-x-2 text-blue-700 font-semibold justify-center calendar-weekdays dangerouslySetInnerHTML={{ __html: dates }}">
                    <li>Sun</li>
                    <li>Mon</li>
                    <li>Tue</li>
                    <li>Wed</li>
                    <li>Thu</li>
                    <li>Fri</li>
                    <li>Sat</li>
                  </ul>
                  <ul className="calendar-dates"></ul>
                </div>
              </div>
            </div> */}
            <div className=" absolute left-0 bottom-8">
              <Trial />
            </div>
          </Popup>

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
          <Popup
            trigger={
              <span className=" text-[14px] text-gray-600 hover:text-black  font-semibold pl-1 pr-1 bg-white   rounded-md hover:bg-gray-100 flex w-[80px] cursor-pointer">
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
              </span>
            }
          >
            <div className=" bg-slate-50 w-[250px] h-[200px] border border-[#00000045] rounded-md  absolute p-2   ">
              <div>
                <input
                  type="text"
                  placeholder="Project Name"
                  className=" text-[18px] w-[98%] pt-1 pb-1  mb-3 pl-1 outline-none border rounded-md border-[black ]"
                />
              </div>
              <div className=" overflow-y-auto h-[80%]">
                <p>My Projects</p>
                <ul>
                  <li>
                    Work
                    <ul className=" list-disc">
                      <ul className=" list-disc">pr</ul>
                      <li>marketing</li>
                      <li>Sales</li>
                    </ul>
                  </li>
                  <li>
                    Personal
                    <ol>
                      <li>Shopping</li>
                      <li>Work out</li>
                      <li>Work</li>
                    </ol>
                  </li>
                </ul>
              </div>
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
          <button className=" text-[16px] text-white bg-blue-700 pl-2 pr-2 rounded font-semibold">
            Add Task
          </button>
        </div>
      </form>
    </div>
  ) : (
    ""
  );
};

export default Addtasks;
