import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TasksContextProvider } from "./context/TaskContext";
//import { AuthContextProvider } from "./context/AuthContext";
import { ProjectsContextProvider } from "./context/ProjectContext";
import "@mantine/dates/styles.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  
      <ProjectsContextProvider>
        <TasksContextProvider>
          <App />
        </TasksContextProvider>
      </ProjectsContextProvider>
    
  </React.StrictMode>
);
