import React, { useState } from "react";
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

//import { useAuthContext } from '../hooks/useAuthContext';
const Sidebar = ({ isOpen }) => {
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
  const items = [
    {
      icon: <FaPen />,
      name: "Edit",
    },
    {
      icon: <FaShareAlt />,
      name: "Share",
    },
    {
      icon: <FaHeart />,
      name: "Add to favourites",
    },
    {
      icon: <FaCopy />,
      name: "Duplicate",
    },
    {
      icon: <FaCopy />,
      name: "Duplicate",
    },
  ];

  const [isActive, setIsActive] = useState(false);
  const [btnPopup, setBtnPopup] = useState(false);





  return (
    <div
      className={`h-[100vh] mt-[59px] bg-slate-300 pt-4 mr-6   md:pr-2 text-left transition-all duration-[0.5s] border-box md:fixed  sidebar  ${
        isOpen ? "md:w-[250px]" : "md:w-[60px]"
      } ${isOpen ? "max-md:w-[250px]" : "max-md:hidden"} ${
        isOpen ? "max-md:z-10" : ""
      }`}
      // style={{ width: isOpen ? "250px" : "60px" }}
    >
      <div className="mb-3 flex">
        <FaHome
          // onClick={toggle}
          className=" text-[22px] w-[40px] h-[30px] pb-1 pt-1 rounded-md hover:bg-slate-400 "
        />
        {/* <h1 style={{display : isOpen ? "block" : "none"}}>Home</h1> */}
      </div>

      <div className="  pb-3">
        {menuItems.map((item, key) => (
          <NavLink className=" flex space-x-1 pb-3 " key={key}>
            <div
              className={` mb-2 flex justify-center items-center text-[20px] w-[40px] h-[30px] rounded-md hover:bg-slate-400 pl-2 ${
                isOpen ? "max-md:block" : "max-md:hidden"
              }`}
              activeclassname="active"
            >
              {item.icon}
            </div>
            <div
              // style={{
              //   maxHeight: isOpen ? "100px" : "0",
              //   opacity: isOpen ? "1" : "0",
              //   transition: "max-height 0.3s ease, opacity 0.3s ease",
              //   overflow: "hidden",
              // }}
              style={{
                display: isOpen ? "block" : "none",
              }}
              className=" hover:text-blue-700 flex gap-[15px] menu"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <div className=" pb-8">
        <div
          className=" relative flex items-center  pb-2 pt-1 mb-3   rounded"
          // style={{ background: isOpen ? "rgb(180, 180, 180)" : "" }}
        >
          <FaTh className=" text-[22px] w-[40px] h-[30px] pb-1 pt-1 rounded-md hover:bg-slate-400 " />

          <h1
            className=" text-[18px] text-blue-600 font-bold pl-2"
            style={{
              display: isOpen ? "block" : "none",
            }}
          >
            My lists
          </h1>
          <FontAwesomeIcon
            icon={faPlus}
            className=" p-2 text-[15px] transition ease-out hover:scale-110 hover:bg-slate-400 rounded-md absolute right-8 top-[6px]  "
            onClick={() => setBtnPopup(true)}
            style={{ display: isOpen ? "block" : "none" }}
          />
          <FontAwesomeIcon
            icon={faAngleRight}
            className={`p-2 text-[15px] transition ease-out hover:scale-110 text-black font-bold popmenu absolute right-2 top-[6px] ${
              isActive ? "rotate-90" : ""
            }`}
            onClick={(e) => setIsActive(!isActive)}
            style={{ display: isOpen ? "block" : "none" }}
          />
          <TPopup trigger={btnPopup} setTrigger={setBtnPopup} />
          {/* <div
            className=" flex space-x-2 absolute right-1 pt-2 pr-1 text-black bg-red-600 text-[10px]"
            style={{ display: isOpen ? "block" : "none" }}
          >
            {" "}
             <FontAwesomeIcon
              icon={faGreaterThan}
              className=" p-2 transition ease-out hover:scale-110 text-white font-bold bg-blue-700 text-[20px] popmenu"
              onClick={(e) => setIsActive(!isActive)}
            /> 
          </div> */}
        </div>
        {isActive && (
          <div className="  ">
            {typeData.map((tasktype, key) => (
              <div className=" flex pb-2 pl-1 space-x-2 items-center relative hover:bg-slate-300 rounded-sm list">
                <Link to={`/type/${tasktype.name}`}>
                  <p
                    className="  text-[18px]  font-bold cursor-pointer"
                    style={{ display: isOpen ? "block" : "none" }}
                    key={key}
                  >
                    {tasktype.name}
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
                    {items.map((item, key) => (
                      <div className=" text-black pb-2 pl-2  items-center flex space-x-3  hover:bg-slate-300 mr-2 ml-2 rounded-md cursor-default ">
                        <div className=" text-[14px] pt-[5px]">{item.icon}</div>
                        <div className=" text-[16px] pt-1">{item.name}</div>
                      </div>
                    ))}
                  </div>
                </Popup>

                {/* <h1 className=" absolute z-10 info">list actions</h1> */}
                {/* <ProjectPopup
                  trigger={projectPopup}
                  setTrigger={setProjectPopup}
                /> */}
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
