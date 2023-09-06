import React from 'react'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home'
import Singup from './pages/Singup';
import Login from './pages/Singin';
import TaskType from './pages/TaskType';
import Upcomming from './pages/Upcomming';
import Projects from './pages/Projects';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home />} />
      <Route path='signup' element={<Singup />} />
      <Route path='signin' element={<Login />} />
      <Route path='type/:type' element={<TaskType />} />
      <Route path='upcomming' element={<Upcomming />} />
      <Route path='projects' element={<Projects />} />
    </Route>
  )
)

// const App = () => {
//   return (
//     <div className=" ">
//       <RouterProvider router={router} />
//     </div>
//   );
// }
function App() {
  return (
    <div className=" ">
    
       <RouterProvider router={router} />
    </div>
  );
}

export default App