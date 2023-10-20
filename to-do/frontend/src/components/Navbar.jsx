import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSearch, faPlus, faBell } from "@fortawesome/free-solid-svg-icons";

import { useAuthContext } from "../hooks/useAuthContext";
import Addtasks from "./Addtasks";
const Navbar = () => {
  const [taskPopup, setTaskPopup] = useState(false);
  const { user, dispatch } = useAuthContext();

  const singOut = () => {
    localStorage.removeItem("user");
    dispatch({ type: "SINGOUT" });
  };
  const handleSingout = () => {
    singOut();
  };

  return (
    <div className="relative  text-white pt-2 pb-2 bg-blue-700    flex space-x-3 items-center">
      <FontAwesomeIcon
        icon={faCheck}
        className=" text-blue-600 bg-white rounded-full ml-4 pt-1 pb-1 pl-1 pr-1 text-[25px]"
      />
      <h1 className="text-[25px]">To Do</h1>
      <div>
        <form>
          <div className=" relative container-input">
            <input
              type="search"
              placeholder="Search"
              className=" text-blue-700 hover:bg-white w-[200px] pl-[30px] pr-[10px] focus:w-[300px] outline-none rounded-sm transition-all duration-75 ease-in-out"
            />
            <svg
              fill="#000000"
              width="15px"
              height="15px"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
              className=" absolute top-[50%] left-[10px]"
            >
              <path
                d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>
        </form>
      </div>
      {user && (
        <div className="flex absolute right-0 pr-4 space-x-5 items-center">
          <div className=" relative">
            <label class="container">
              <input type="checkbox" checked="checked" />
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
          <FontAwesomeIcon
            icon={faPlus}
            className=" text-xl"
            onClick={() => setTaskPopup()}
          />
          <div className=" flex flex-col items-center justify-center fixed ">
            {/* <Addtasks trigger={taskPopup} setTrigger={setTaskPopup} /> */}
          </div>
          <h1
            className=" text-white cursor-pointer hidden"
            onClick={handleSingout}
          >
            log out
          </h1>
          <div className=" flex  items-center space-x-2">
            <img src="/img/prof.png" alt="pic" className=" w-10" />
            <div>
              <h1 className=" hidden">{user.name}</h1>
            </div>
          </div>
        </div>
      )}
      {!user && (
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
      )}
    </div>
  );
};

export default Navbar;
