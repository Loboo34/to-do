require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/tasks");
const userRoutes = require("./routes/User");
const projectRoutes = require("./routes/projects");

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/tasks", taskRoutes);
app.use("/api/project", projectRoutes);
app.use("/api/user", userRoutes);

//db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to db");
    //listen
    app.listen(process.env.PORT, () => {
      console.log("listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
