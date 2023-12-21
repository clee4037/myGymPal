const router = require("express").Router();
const controllers = require("./controllers");
require("dotenv").config();

router.get("/workout", controllers.getWorkouts);
router.get("/exercise", controllers.getExercises);
router.get("/workout/history", controllers.getHistory);
router.get("/routine", controllers.getRoutine);
router.post("/workout", controllers.addWorkout);

module.exports = router;
