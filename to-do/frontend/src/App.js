import React, { useState } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { MantineProvider } from "@mantine/core";
import Home from "./pages/Home";
import Singup from "./pages/Singup";
import Login from "./pages/Singin";
//iimport TaskType from "./pages/TaskType";
import Upcomming from "./pages/Upcomming";
import Projects from "./pages/Projects";
import AllTasks from "./pages/AllTasks";
import TodaysTasks from "./pages/TodaysTasks";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* <Route path="type/:type" element={<TaskType />} /> */}
      <Route path="upcomming" element={<Upcomming />} />
      <Route path="projects" element={<Projects />} />
      <Route path="/" element={<Home />} />
      <Route path="signup" element={<Singup />} />
      <Route path="signin" element={<Login />} />
      <Route path="alltasks" element={<AllTasks />} />
      <Route path="today" element={<TodaysTasks />} />
    </Route>
  )
);

// const App = () => {
//   return (
//     <div className=" ">
//       <RouterProvider router={router} />
//     </div>
//   );
// }
function App() {
  return (
    <div className=" bg-slate-200 relative h-screen">
      <MantineProvider>
        <div className=" ">
          <RouterProvider router={router} />
        </div>
      </MantineProvider>
    </div>
  );
}

export default App;
