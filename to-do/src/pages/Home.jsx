import React from 'react'
import Navbar from '../components/Navbar'
import Task from '../components/Task'
import Sidebar from '../components/Sidebar'
import AddTask from '../components/AddTask'

const Home = () => {
  return (
    <div className=' bg-slate-200'>
      <Navbar />
      <div className=" flex w-full">
        <div className=" w-2/12 mr-8">
          <Sidebar />
        </div>
        <div className=" w-7/12 ">
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
        <div className=' w-3/12'>
            <AddTask />
        </div>
      </div>
    </div>
  );
}

export default Home