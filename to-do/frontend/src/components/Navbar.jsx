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
          <input type="search" placeholder="Search" className=" text-blue-700 hover:bg-white"/>
        </form>
      </div>
      {user && (
        <div className="flex absolute right-0 pr-4 space-x-5 items-center">
          <FontAwesomeIcon icon={faBell} />
          <FontAwesomeIcon
            icon={faPlus}
            className=" text-xl"
            onClick={() => setTaskPopup(true)}
          />
          <div className=" flex flex-col items-center justify-center fixed ">
            <Addtasks trigger={taskPopup} setTrigger={setTaskPopup} />
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
