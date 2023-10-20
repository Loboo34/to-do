import React from 'react'
import { Link } from 'react-router-dom';

const Action = (props) => {
     const typeData = [
       {
         name: "Personal",
         path: "/personal",
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
  return props.trigger ? (
    <div className=" absolute z-10 top-0 left-0 bg-slate-300 w-[250px] ">
      {/* {typeData.map((tasktype, key) => (
        <Link to={`/type/${tasktype.name}`}>
          <p
            className=" pb-2 text-[18px] hover:text-blue-600 cursor-pointer"
            key={key}
          >
            {tasktype.name}
          </p>
        </Link>
      ))} */}
    </div>
  ) : (
    ""
  );
}

export default Action