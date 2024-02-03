import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEllipsis,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FaTh, FaList, FaHome, FaCalendar, FaThList } from "react-icons/fa";
import { FaPen, FaShareAlt, FaHeart, FaCopy } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Popup from "reactjs-popup";
import TPopup from "./TPopup";
import { useProjectsContext } from "../hooks/useProjectsContext";

const Sidebar = ({ isOpen, project }) => {
  const {projects, dispatch} = useProjectsContext()
  //const { user} = useAuthContext()
  const typeData = [
    {
      id: 1,
      name: "Personal",
      path: "/personal",
      icon: <FaList />,
    },
    {
      id: 2,
      name: "Work",
      path: "/work",
      icon: "",
    },
    {
      id: 3,
      name: "Shopping List",
      path: "/shopping",
      icon: "",
    },
    {
      id: 4,
      name: "Grocery List",
      path: "/groceries",
    },
  ];
  const menuItems = [
    {
      id: 1,
      name: "AllTasks",
      path: "/",
      icon: <FaList />,
    },
    {
      id: 2,
      name: "Today",
      path: "/",
      icon: <FaCalendar />,
    },
    {
      id: 3,
      name: "Upcoming",
      path: "/",
      icon: <FaThList />,
    },
  ];
  const items = [
    {
      id: 1,
      icon: <FaPen />,
      name: "Edit",
    },
    {
      id: 2,
      icon: <FaShareAlt />,
      name: "Share",
    },
    {
      id: 3,
      icon: <FaHeart />,
      name: "Add to favourites",
    },
    {
      id: 4,
      icon: <FaCopy />,
      name: "Duplicate",
    },
    {
      id: 5,
      icon: <FaCopy />,
      name: "Delete",
    },
  ];

  const [isActive, setIsActive] = useState(false);
  const [btnPopup, setBtnPopup] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch ("api/project");
      const json = await response.json();
        if (response.ok) {
          dispatch({ type: "SET_PROJECTS", payload: json });
        }
    };
    fetchProjects()
  }, [dispatch])
  const handleClick = async () => {
    const response = await fetch("/api/project/" + project._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_PROJECT", payload: json });
    }
  };
  return (
    <div
      className={`h-[100vh] mt-[59px] bg-slate-300 pt-4 mr-6  md:pr-2 text-left transition-all duration-[0.5s] border-box md:fixed z-50  sidebar  ${
        isOpen ? "md:w-[250px]" : "md:w-[60px]"
      } ${isOpen ? "max-md:w-[250px]" : "max-md:hidden"} ${
        isOpen ? "max-md:z-10" : ""
      }`}
      // style={{ width: isOpen ? "250px" : "60px" }}
    >
      <div className="mb-3 flex">
        {/* <FaHome
         
          className=" text-[22px] w-[40px] h-[30px] pb-1 pt-1 rounded-md hover:bg-slate-400 "
        /> */}
        {/* <h1 style={{display : isOpen ? "block" : "none"}}>Home</h1> */}
      </div>

      <div className="  pb-3">
        {menuItems.map((item) => (
          <NavLink className=" flex space-x-2 pb-3 " key={item.id}>
            <span
              className={` mb-2 flex items-center text-[1.3rem] w-[40px] h-[30px] rounded-md text-gray-600 pl-4 ${
                isOpen ? "max-md:block" : "max-md:hidden"
              }`}
              activeclassname="active"
            >
              {item.icon}
              <span
                // style={{
                //   maxHeight: isOpen ? "100px" : "0",
                //   opacity: isOpen ? "1" : "0",
                //   transition: "max-height 0.3s ease, opacity 0.3s ease",
                //   overflow: "hidden",
                // }}
                style={{
                  display: isOpen ? "block" : "none",
                }}
                className=" hover:text-blue-700 text-[1.2rem] font-semibold flex menu"
              >
                {item.name}
              </span>
            </span>
          </NavLink>
        ))}
      </div>

      <div className=" pb-4">
        <div
          className=" relative flex items-center  pb-2 pt-1 mb-3   rounded"
          // style={{ background: isOpen ? "rgb(180, 180, 180)" : "" }}
        >
          <span
            className={` text-[22px] w-full pb-1 pt-1 pl-4 rounded-md flex items-center ${
              isOpen ? "max-md:block" : "max-md:hidden"
            }`}
          >
            <FaTh />
            <span
              className=" text-[18px] text-blue-600 font-bold pl-2 menu"
              style={{
                display: isOpen ? "block" : "none",
              }}
            >
              My lists
            </span>
          </span>

          <FontAwesomeIcon
            icon={faPlus}
            className=" p-2 text-[1rem] transition ease-out hover:scale-110 hover:bg-slate-400 rounded-md absolute right-8 top-[6px]  "
            onClick={() => setBtnPopup(true)}
            style={{ display: isOpen ? "block" : "none" }}
          />
          <FontAwesomeIcon
            icon={faAngleRight}
            className={`p-2 text-[1rem] transition ease-out hover:scale-110 text-black font-bold popmenu absolute right-2 top-[6px] ${
              isActive ? "rotate-90" : ""
            }`}
            onClick={(e) => setIsActive(!isActive)}
            style={{ display: isOpen ? "block" : "none" }}
          />
          <TPopup trigger={btnPopup} setTrigger={setBtnPopup} />
        </div>
        {isActive && (
          <div>
            {projects &&
              projects.map((project) => (
                <div
                  className=" flex pb-2 pl-3 space-x-2 items-center relative hover:bg-slate-300 rounded-sm list"
                  key={project._id}
                >
                
                  <Link to={`/type/${project.name}`}>
                    <p
                      className="  text-[1.14rem]  font-bold cursor-pointer"
                      style={{ display: isOpen ? "block" : "none" }}
                    >
                     # {project.name}
                    </p>
                  </Link>
                  <Popup
                    trigger={
                      <FontAwesomeIcon
                        icon={faEllipsis}
                        className=" absolute  text-slate-500 hidden text-[20px] right-3 pt-1 z-10 dots"
                      />
                    }
                  >
                    <div className=" bg-white w-[250px] h-[200px] absolute left-[5px] top-0  pt-2 rounded-md  ">
                      {items.map((item) => (
                        <div
                          className=" text-black pb-2 pl-2  items-center flex space-x-3  hover:bg-slate-300 mr-2 ml-2 rounded-md cursor-default "
                          key={item.id}
                        >
                          <div className=" text-[14px] pt-[5px]">
                            {item.icon}
                          </div>
                          <div
                            className=" text-[16px] pt-1"
                            onClick={handleClick}
                          >
                            {item.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popup>
                </div>
              ))}
          </div>
        )}
      </div>

      {/* <div className=" flex items-center space-x-2">
        <p>Pinned</p>
        <FontAwesomeIcon
          icon={faThumbTack}
          className="   text-blue-700 text-[12px] pt-1"
        />
      </div> */}
    </div>
  );
};

export default Sidebar;
