import React from 'react'

import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faSearch } from "@fortawesome/free-solid-svg-icons"
const Navbar = () => {
  return (
    <div className="relative bg-blue-600 text-white pt-2 pb-2  flex space-x-3 items-center">
      <FontAwesomeIcon
        icon={faCheck}
        className=" text-blue-600 bg-white rounded-full ml-4 pt-1 pb-1 pl-1 pr-1 text-[25px]"
      />
      <h1 className="text-[25px]">To Do</h1>
      <div className=" flex absolute right-0 pr-4 space-x-5 items-center">
        <FontAwesomeIcon icon={faSearch} className="  text-[20px] " />
        <button className=' bg-slate-100 text-blue-700 pl-2 pr-2 pt-1 pb-1 font-bold rounded-md'>Login</button>
      </div>
    </div>
  );
}

export default Navbar