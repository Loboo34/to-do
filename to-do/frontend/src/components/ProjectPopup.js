import React from "react";
import { FaPen, FaShareAlt, FaHeart, FaCopy} from "react-icons/fa";

const ProjectPopup = (props) => {
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
  return props.trigger ? (
    <div className=" bg-white w-[250px] h-[200px] fixed bottom-4 left-5  pt-3 rounded-md  ">
      {items.map((item, key) => (
        <div className=" text-black pb-2 pl-2  items-center flex space-x-3  hover:bg-slate-300 mr-2 ml-2 rounded-md ">
          <div className=" text-[14px] pt-[5px]">{item.icon}</div>
          <div className=" text-[16px] pt-1">{item.name}</div>
        </div>
      ))}
    </div>
  ) : (
    ""
  );
};

export default ProjectPopup;
