import React from 'react'
import Navbar from '../components/Navbar'
import Task from '../components/Task'
import Sidebar from '../components/Sidebar'
import AddTask from '../components/AddTask'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className=" flex w-full">
        <div className=" w-3/12">
          <Sidebar />
        </div>
        <div className=" w-6/12">
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