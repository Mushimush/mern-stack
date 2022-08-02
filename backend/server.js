require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const workoutRoutes = require("./routes/workouts")

//express app
const app = express()

//middleware
//express.json, if it contains any data it will be passed to the 'req' argument.
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
});
//routes
app.use("/api/workouts", workoutRoutes)

//connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for request
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port 4000")
    })
  })
  .catch((error) => {
    console.log(error)
  })
