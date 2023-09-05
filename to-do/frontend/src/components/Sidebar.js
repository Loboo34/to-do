import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarWeek, faTasks, faArrowAltCircleDown, faThumbTack, faPlus, faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FaTh, FaList, FaHome } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
const Sidebar = () => {
const { user} = useAuthContext()
  const typeData = [
    {
      name: "Personal",
      path: "/personal",
      icon: <FaList />,
    },
    {
      name: "Work",
      path: "/work",
      icon: "",
    },
    {
      name: "Shopping List",
      path: "/shopping",
      icon: "",
    },
    {
      name: "Grocery List",
      path: "/groceries",

    },
  ];
  const menuItems = [
    {
      name: "AllTasks",
      path: "/",
      icon: <FaList />,
    },
    {
      name: "Today",
      path: "/",
      icon: <FaList />,
    },
    {
      name: "Upcoming",
      path: "/",
      icon: <FaList />,
    },
  ];

  const [isOpen, setIsOpen] = useState()
   const toggle = () => setIsOpen(!isOpen);
  return (
    <div
      className=" h-[100vh] bg-slate-100 pt-4 pl-3 pr-2 text-left w-[230px]"
      style={{ width: isOpen ? "200px" : "50px" }}
    >
      <FaHome onClick={toggle} />
      <div className="  pb-8">
        {/* <div className=" flex items-center space-x-2 pb-2 text-[20px] ">
          {" "}
          <FontAwesomeIcon icon={faTasks} />
          <Link to={"/"}>
            <p className=" hover:text-blue-600 cursor-pointer">All Tasks</p>
          </Link>
        </div>
        <div className=" flex items-center space-x-2 pb-2 text-[20px] ">
          {" "}
          <FontAwesomeIcon icon={faArrowAltCircleDown} />
          <p className=" hover:text-blue-600 cursor-pointer">Today</p>
        </div>
        <div className=" flex items-center space-x-2 pb-2 text-[20px] ">
          {" "}
          <FontAwesomeIcon icon={faCalendarWeek} />
          <Link to={"upcomming"}>
            <p className=" hover:text-blue-600 cursor-pointer">Upcomming</p>
          </Link>
        </div> */}
        {menuItems.map((item) => (
          <NavLink className=" flex space-x-2 pb-3">
            <div className=" pt-1">{item.icon}</div>
            <div style={{ display: isOpen ? "block" : "none" }}>
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <div className=" pb-8">
        <div className=" relative flex items-center  pb-2 pt-1 mb-3 bg-slate-300 rounded">
          <FaTh />,
          <h1
            className=" text-[18px] text-blue-600 font-bold pl-2"
            style={{ display: isOpen ? "block" : "none" }}
          >
            My lists
          </h1>
          <div
            className=" flex space-x-2 absolute right-1 pt-2 pr-1 text-white text-[10px]"
            style={{ display: isOpen ? "block" : "none" }}
          >
            {" "}
            <FontAwesomeIcon
              icon={faPlus}
              className=" p-2 transition ease-out hover:scale-110 hover:bg-slate-400 rounded-md"
            />
            <FontAwesomeIcon
              icon={faGreaterThan}
              className=" pt-2 pb-2 pr-2 pl-2 rotate-90 transition ease-out hover:scale-110 bg-slate-400 rounded-md"
            />
          </div>
        </div>
        <div style={{ display: isOpen ? "block" : "none" }}>
          {typeData.map((tasktype) => (
            <Link to={`/type/${tasktype.name}`}>
              <p className=" pb-2 text-[18px] hover:text-blue-600 cursor-pointer">
                {tasktype.name}
              </p>
            </Link>
          ))}
        </div>
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
}

export default Sidebar