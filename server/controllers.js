const { User, Routine, Workout, Exercise } = require("./db");

module.exports = {
  getWorkouts: async (req, res) => {
    try {
      console.log("successful", all);
      const all = await Workout.find();
      res.send(all);
    } catch (err) {
      console.error(err);
    }
  },
  getExercises: async (req, res) => {
    try {
      const all = await Exercise.find({});
      res.send(all);
    } catch (err) {
      console.error(err);
    }
  },
  getRoutine: async (req, res) => {
    try {
      const routine = await Routine.find({});
      res.send(routine);
    } catch (err) {
      console.error(err);
    }
  },
  getHistory: async (req, res) => {
    const { name } = req.params;
    try {
      const history = await Exercise.find({ name });
      res.send(history);
    } catch (err) {
      console.error(err);
    }
  },
  addWorkout: async (req, res) => {
    const { user_id, exercise_id, name, date, reps, weight, notes } = req.body;
    try {
      const newWorkout = await Workout.create({
        user_id,
        exercise_id,
        name,
        date,
        reps,
        weight,
        notes,
      });
      res.send(newWorkout);
    } catch (err) {
      console.error(err);
    }
  },
};
