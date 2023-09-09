import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faGreaterThan, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FaTh, FaList, FaHome, FaCalendar, FaThList,  } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import Popup from './Popup';
//import { useAuthContext } from '../hooks/useAuthContext';
const Sidebar = () => {
//const { user} = useAuthContext()
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
      icon: <FaCalendar />,
    },
    {
      name: "Upcoming",
      path: "/",
      icon: <FaThList />,
    },
  ];

  const [isOpen, setIsOpen] = useState()
  const [isActive, setIsActive] = useState(false)
  const [btnPopup, setBtnPopup] = useState(false)
   const toggle = () => setIsOpen(!isOpen);

  return (
    <div
      className=" h-[100vh] bg-slate-100 pt-4 pl-3 pr-2 text-left w-[230px] transition-all duration-[0.5s]"
      style={{ width: isOpen ? "200px" : "60px" }}
    >
      <div className="mb-3 flex">
        <FaHome
          onClick={toggle}
          className=" text-[22px] w-[40px] h-[30px] pb-1 pt-1 rounded-md hover:bg-slate-400 "
        />
        {/* <h1 style={{display : isOpen ? "block" : "none"}}>Home</h1> */}
      </div>

      <div className="  pb-3">
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
        {menuItems.map((item, key) => (
          <NavLink className=" flex space-x-1 pb-3 " key={key}>
            <div
              className=" mb-2 flex justify-center items-center text-[20px] w-[40px] h-[30px] rounded-md hover:bg-slate-400"
              activeclassname="active"
            >
              {item.icon}
            </div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className=" hover:text-blue-700 flex gap-[15px] transition-all duration-[o.5s]"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <div className=" pb-8">
        <div
          className=" relative flex items-center  pb-2 pt-1 mb-3  rounded"
          // style={{ background: isOpen ? "rgb(180, 180, 180)" : "" }}
        >
          <FaTh className=" text-[22px] w-[40px] h-[30px] pb-1 pt-1 rounded-md hover:bg-slate-400 " />

          <h1
            className=" text-[18px] text-blue-600 font-bold pl-2"
            style={{ display: isOpen ? "block" : "none" }}
          >
            My lists
          </h1>
          <div
            className=" flex space-x-2 absolute right-1 pt-2 pr-1 text-black text-[10px]"
            style={{ display: isOpen ? "block" : "none" }}
          >
            {" "}
            <FontAwesomeIcon
              icon={faPlus}
              className=" p-2 transition ease-out hover:scale-110 hover:bg-slate-400 rounded-md"
              onClick={() => setBtnPopup(true)}
            />
            <Popup trigger={btnPopup} setTrigger={setBtnPopup} />
            <FontAwesomeIcon
              icon={faGreaterThan}
              className=" pt-2 pb-2 pr-2 pl-2 rotate-90 transition ease-out hover:scale-110 bg-slate-400 rounded-md"
              onClick={(e) => setIsActive(!isActive)}
            />
          </div>
        </div>
        {isActive && (
          <div className="  ">
            {typeData.map((tasktype, key) => (
              <div className=" flex pb-2 pl-1 space-x-2 items-center relative hover:bg-slate-300 rounded-sm list">
                <Link to={`/type/${tasktype.name}`}>
                  <p
                    className="  text-[18px] hover:text-blue-600 cursor-pointer"
                    style={{ display: isOpen ? "block" : "none" }}
                    key={key}
                  >
                    {tasktype.name}
                  </p>
                </Link>
                <FontAwesomeIcon
                  icon={faEllipsis}
                  className=" absolute text-slate-700 text-[20px] right-3 pt-1 z-10 dots"
                />
                <h1 className=' absolute z-10 info'>list actions</h1>
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
}

export default Sidebar