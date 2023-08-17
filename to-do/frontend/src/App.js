import React from 'react'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home'
import Singup from './pages/Singup';
import Login from './pages/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home />} />
      <Route path='signup' element={<Singup />} />
      <Route path='signin' element={<Login />} />
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