const express = require("express")
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout
} = require("../controllers/workoutController")
const router = express.Router()

//GET all workouts
router.get("/", getWorkouts)

//GET a single workout
router.get("/:id", getWorkout)

//Delete a workout
router.delete("/:id", deleteWorkout);

//POST a new workout
router.post("/", createWorkout)

router.patch("/:id", updateWorkout)

module.exports = router;
