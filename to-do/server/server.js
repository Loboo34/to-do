require('dotenv').config()
const express = require('express')
const taskRoutes = require('./routes/tasks')

const app = express()

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()  
})

//routes
app.use('/api/tasks',taskRoutes)

//listen
app.listen(process.env.PORT, () => {
    console.log("listening on port", process.env.PORT);
})
