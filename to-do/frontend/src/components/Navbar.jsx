import React, { useState } from "react";
//import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faAngleRight, faBell, faGear, faUser, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useTasksContext } from "../hooks/useTasksContext";

//import { useAuthContext } from "../hooks/useAuthContext";
//import Addtasks from "./Addtasks";
//import Sidebar from "./Sidebar";
const Navbar = ({ toggle }) => {
   const { dispatch } = useTasksContext();
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   const [type, setType] = useState("");
   const [date, setDate] = useState("");
   const [time, setTime] = useState("");
   const [error, setError] = useState(null);

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

  // const { user, dispatch } = useAuthContext();

  // const singOut = () => {
  //   localStorage.removeItem("user");
  //   dispatch({ type: "SINGOUT" });
  // };
  // const handleSingout = () => {
  //   singOut();
  // };

  return (
    <div className=" fixed z-10  text-white pt-2 pb-2 bg-blue-700    flex space-x-3 items-center w-[100%]">
      <label className="menuButton">
        <input type="checkbox" onClick={toggle} />
        <span className="top"></span>
        <span className="mid"></span>
        <span className="bot"></span>
      </label>

      {/* <FontAwesomeIcon
        icon={faCheck}
        className=" text-blue-600 bg-white rounded-full ml-4 pt-1 pb-1 pl-1 pr-1 text-[25px] max-md:hidden"
      /> */}
      <h1 className=" text-[18px] md:text-[25px]">To Do</h1>
      <div>
        <form>
          <div className=" relative container-input">
            <input
              type="search"
              placeholder="Search"
              className="  hover:bg-white hover:text-black w-[80px] md:w-[200px] pl-[30px] pr-[10px] md:focus:w-[300px] outline-none rounded-sm transition-all duration-75 ease-in-out bg-blue-600 cursor-pointer placeholder:text-white placeholder:hover:text-black "
            />
            <svg
              fill="#000000"
              width="16px"
              height="16px"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
              className=" absolute top-[50%] left-[5px]  "
            >
              <path
                d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
        </form>
      </div>
      {/* body */}
      <div className="flex absolute right-0 pr-4 space-x-5 items-center">
        <div className=" relative">
          <label className="container">
            <input type="checkbox" />
            <svg
              className="bell-regular"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"></path>
            </svg>
            <svg
              className="bell-solid"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"></path>
            </svg>
          </label>
        </div>
        <div>
          <Popup
            trigger={
              <FontAwesomeIcon icon={faPlus} className=" text-xl pl-2" />
            }
            modal
            nested
          >
            {(close) => (
              <div className="fixed top-[100px] left-0 z-10 flex justify-center  w-[100%] h-[100vh] ">
                <div className=" bg-white  w-[100%] max-w-[500px] max-md:w-[350px] h-[180px] relative pt-3 rounded-md shadow-2xl shadow-black">
                  <form className=" flex flex-col " onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="Task Name"
                      className=" text-[18px] ml-3 mr-2 mb-3 outline-none"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Description"
                      className=" text-[18px] ml-3 mr-2 mb-3 outline-none"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />

                    <div className=" flex space-x-2 pl-3">
                      <button className=" text-[14px] text-blue-700 font-semibold pl-1 pr-1 bg-white border-2 border-[#00000046]  rounded-md hover:bg-slate-200 flex ">
                        <img
                          src="/img/calendar.png"
                          className=" w-3 h-3 mt-1 mr-1"
                          alt="calendar"
                        />
                        Due Date
                      </button>
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
                    <hr className="mt-4 w-[100%] h-10 text-black" />
                    <Popup
                      trigger={
                        <span className=" text-[14px] text-gray-600 hover:text-black  font-semibold pl-1 pr-1 bg-white   rounded-md hover:bg-gray-100 flex absolute bottom-3 left-3 cursor-default">
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
                      position="bottom center"
                      nested
                    >
                      <div className=" bg-slate-50 w-[250px] h-[200px] border border-[#00000045] rounded-md absolute  p-2 pb-4   ">
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

                    <div className=" absolute flex bottom-3 right-5 space-x-3">
                      <input
                        type="button"
                        value="Cancel"
                        className=" bg-slate-200 text-black pl-2 pr-2 rounded-md hover:bg-gray-300"
                        onClick={() => {
                          console.log("modal closed ");
                          close();
                        }}
                      />
                      <input
                        type="Submit"
                        value="Add Task"
                        className=" bg-blue-700 text-white rounded-md pl-2 pr-2"
                      />
                    </div>
                  </form>
                </div>
              </div>
            )}
          </Popup>
        </div>
        <div className=" flex flex-col items-center justify-center fixed ">
          {/* <Addtasks trigger={taskPopup} setTrigger={setTaskPopup} /> */}
        </div>
        {/* <h1
            className=" text-white cursor-pointer hidden"
            onClick={handleSingout}
          >
            log out
          </h1> */}
        <div className=" flex  items-center space-x-2">
          <Popup
            trigger={<img src="/img/prof.png" alt="pic" className=" w-10" />}
            position="bottom right"
          >
            <div className=" relative bg-slate-300 h-[270px] w-[250px] pt-3 pl-3 ml-[70px]">
              <span className=" flex flex-col pb-4">
                <p className=" text-blue-700 text-[1.2rem] font-semibold">
                  user-name
                </p>
                <p className=" text-[1.2rem]">user@gmail.com</p>
              </span>
              <span className=" flex flex-col space-y-2 pb-3">
                <span className=" bg-slate-400 w-[95%] rounded text-[1.1rem] pl-1 pb-1 pt-1 hover:bg-slate-200 hover:text-blue-700 hover:font-semibold cursor-pointer flex items-center">
                  <FontAwesomeIcon icon={faBell} className=" pr-2" />
                  Notifications
                </span>

                <span className=" bg-slate-400 w-[95%] rounded text-[1.1rem] pl-1 pb-1 pt-1 hover:bg-slate-200 hover:text-blue-700 hover:font-semibold cursor-pointer flex items-center">
                  <FontAwesomeIcon icon={faUser} className=" pr-2" />
                  Teams
                </span>
                <span className=" bg-slate-400 w-[95%] rounded text-[1.1rem] pl-1 pb-1 pt-1 hover:bg-slate-200 hover:text-blue-700 hover:font-semibold cursor-pointer flex items-center">
                  <FontAwesomeIcon icon={faGear} className=" pr-2" />
                  Settings
                </span>
              </span>
              <span className=" absolute bottom-2 right-2 text-[1rem] font-medium hover:text-blue-600 hover:font-bold cursor-pointer flex items-center">
                Log out
                <FontAwesomeIcon icon={faArrowRight} className=" pl-2" />
              </span>
            </div>
          </Popup>

          <div>{/* <h1 className=" hidden">{user.name}</h1> */}</div>
        </div>
      </div>

      {/* {!user && (
        <div className=" flex absolute right-0 pr-4 space-x-5 items-center">
          <FontAwesomeIcon icon={faSearch} className="  text-[20px] " />
          <Link to={"signin"}>
            <p className=" text-slate-100 pl-2 pr-2 pt-1 pb-1 font-bold rounded-md cursor-pointer">
              Sing in
            </p>
          </Link>
          <Link to={"signup"}>
            <button className=" bg-slate-100 text-blue-700 pl-2 pr-2 pt-1 pb-1 font-bold rounded-md">
              Sing up
            </button>
          </Link>
        </div>
      )} */}
    </div>
  );
};

export default Navbar;
