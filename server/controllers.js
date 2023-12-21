const { Routine, Workout, Exercise } = require("./db");

module.exports = {
  getWorkouts: async (req, res) => {
    try {
      const result = await Workout.find({}).sort({ date: -1 });
      res.send(result);
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
    // const { name } = req.params;
    try {
      /* CAN'T FIGURE THIS OUT RN */
      const name = "Bench Press";
      console.log("getHisory");
      const all = await Workout.find({ "exercises.name": "Bench Press" });
      // const history = [];
      // for (let i = 0; i < all.length; i++) {
      //   const routine = all[i];
      //   for (let j = 0; j < routine.exercises.length; j++) {
      //     const exercise = routine.exercises[j];
      //     if (exercise.name === name) {
      //       let record = { date: routine.date };
      //       record = { ...record, ...exercise };
      //       history.push(record);
      //     }
      //   }
      // }
      res.send(all);
    } catch (err) {
      console.error(err);
    }
  },
  addWorkout: async (req, res) => {
    // console.log(req.body);
    try {
      const newWorkout = await Workout.create(req.body);
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
    }
  },
};
