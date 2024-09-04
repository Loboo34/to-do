import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';
import { useTasksContext } from "../hooks/useTasksContext";
import TodoTask from '../components/TodoTask';
const TodaysTasks = () => {
   const [isOpen, setIsOpen] = useState();
   const toggle = () => {
     setIsOpen(!isOpen);
   };

    const { dispatch, tasks } = useTasksContext();
   //FETCH TODAYS TASKS
    // eslint-disable-next-line react-hooks/exhaustive-deps
   const fetchTasks = async () => {
     const response = await fetch("/api/tasks");
     const json = await response.json();
     if (response.ok) {
       dispatch({ type: "SET_TASKS", payload: json });
     }
   };

   useEffect(() => {
     fetchTasks();
   }, [fetchTasks]);
  return (
    <div >
      <Navbar toggle={toggle} />
      <div className=" flex  w-full ">
        <Sidebar isOpen={isOpen} />
        <div
          className={` w-[100%]  pb-32 md:ml-[50px]  justify-center items-start mt-[50px]  pl-4 md:pl-9  md:box-border   home 
          ${isOpen ? "expanded" : ""}`}
        >
          <div className="flex justify-center items-center h-screen">
            <h1 className="text-4xl">
              Today Tasks
              {/* <TodoTask /> */}
              {tasks &&
                tasks.map((task) => <TodoTask key={task._id} task={task} />)}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodaysTasks