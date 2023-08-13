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
      <h1 className="text-[25px]">All list</h1>
      <FontAwesomeIcon
        icon={faSearch}
        className=" absolute right-0 text-[20px] pr-4"
      />
    </div>
  );
}

export default Navbar