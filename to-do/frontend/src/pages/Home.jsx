import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Task from '../components/Task'
import Sidebar from '../components/Sidebar'
import AddTask from '../components/AddTask'


const Home = () => {
const [tasks, setTasks] = useState(null);

    useEffect(() => {
      const fetchTasks = async () => {
        const response = await fetch("/api/tasks/");
        const json = await response.json();

        if (response.ok) {
          setTasks(json);
        }
      };
      fetchTasks();
    }, []);
  return (
    <div className=" bg-slate-200">
      <Navbar />
      <div className=" flex w-full">
        <div className=" md:w-2/12 mr-8 max-md:hidden">
          <Sidebar />
        </div>
        <div className=" w-7/12 ">
          <h1 className=" text-blue-700 text-[22px] pt-5">Good morning name</h1>
          <div className=" flex space-x-5">
            <div className=" flex flex-col leading-5">
              <span className=" text-[15px] text-slate-400">Sunday</span>
              <span className=" text-center text-[22px] font-bold">13</span>
              <span className=" text-[15px] text-slate-400">August</span>
            </div>
            <div className=" flex flex-col leading-5 pt-4">
              <span>6:45p.m - 8:00p.m</span>
              <p>task due: read </p>
            </div>
          </div>

          {tasks && tasks.map((task) => <Task key={task._id} task={task}/>)}
        </div>
        <div className=" w-3/12 max-md:hidden">
          <AddTask />
        </div>
      </div>
    </div>
  );
}

export default Home