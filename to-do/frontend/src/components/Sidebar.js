import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarWeek, faTasks, faArrowAltCircleDown, faThumbTack } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
const Sidebar = () => {

  const typeData = [
    {
      name: "Personal",
      path: "/personal",
    },
    {
      name: "Work",
      path: "/work",
    },
    {
      name: "Shopping",
      path: "/shopping",
    },
    {
      name: "Groceries",
      path: "/groceries",
    },
  ];
  return (
    <div className=" h-screen bg-slate-100 pt-4 pl-4 text-left w-[200px]">
      <div className=" flex pb-10 items-center space-x-2">
        <img src="/img/prof.png" alt="pic" className=" w-10" />
        <div>
          <h1>Name</h1>
          <p>name@gmail.com</p>
        </div>
      </div>

      <div className="  pb-8">
        <div className=" flex items-center space-x-2 pb-2 text-[20px] ">
          {" "}
          <FontAwesomeIcon icon={faArrowAltCircleDown} />
          <p className=" hover:text-blue-600 cursor-pointer">Today</p>
        </div>
        <div className=" flex items-center space-x-2 pb-2 text-[20px] ">
          {" "}
          <FontAwesomeIcon icon={faCalendarWeek} />
          <p className=" hover:text-blue-600 cursor-pointer">This Week</p>
        </div>
        <div className=" flex items-center space-x-2 pb-2 text-[20px] ">
          {" "}
          <FontAwesomeIcon icon={faTasks} />
          <p className=" hover:text-blue-600 cursor-pointer">All Tasks</p>
        </div>
      </div>
      <div className=" pb-8">
        <h1 className="pb-3 text-[22px] text-blue-600 font-bold">My lists</h1>
        <div>
          {typeData.map((tasktype) => (
            <Link to={`/type/${tasktype.name}`}>
              <p className=" pb-2 text-[18px] hover:text-blue-600 cursor-pointer">
                {tasktype.name}
              </p>
            </Link>
          ))}
        </div>
       
      </div>
      <div className=" flex items-center space-x-2">
        <p>Pinned</p>
        <FontAwesomeIcon
          icon={faThumbTack}
          className="   text-blue-700 text-[12px] pt-1"
        />
      </div>
    </div>
  );
}

export default Sidebar