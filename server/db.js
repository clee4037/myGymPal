const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect(`mongodb://localhost:27017/Gym`, {});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log(`Connected to MongoDB`);
});

// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });

const routineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  data: [
    {
      exercise: {
        type: String,
        ref: "Exercise", // Reference to the Exercise model
        required: true,
      },
      sets: {
        type: Number,
        required: true,
      },
    },
  ],
});
const workoutSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  routine: {
    type: String,
    ref: "Routine",
    required: true,
  },
  exercises: [
    {
      name: {
        type: String,
        ref: "Exercise",
        required: true,
      },
      data: [
        {
          reps: {
            type: Number,
            // required: true,
          },
          weight: {
            type: Number,
            // required: true,
          },
          notes: {
            type: String,
          },
        },
      ],
    },
  ],
});

const exerciseSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  exercises: [
    {
      name: {
        type: String,
        required: true,
      },
    },
  ],
});

const Routine = mongoose.model("Routine", routineSchema);
const Workout = mongoose.model("Workout", workoutSchema);
const Exercise = mongoose.model("Exercise", exerciseSchema);
// const User = mongoose.model("User", userSchema); // depri

module.exports = {
  // User,
  Routine,
  Workout,
  Exercise,
};

// /* EXERCISE */
// var exercise_data = [
//   {
//     type: "Abs",
//     exercises: [
//       { name: "Crunches" },
//       { name: "Leg Raises" },
//       { name: "Ab Wheel" },
//     ],
//   },
//   {
//     type: "Back",
//     exercises: [
//       { name: "Barbell Row" },
//       { name: "Pull-ups" },
//       { name: "Lat Pulldowns" },
//       { name: "Cable Rows" },
//     ],
//   },
//   {
//     type: "Biceps",
//     exercises: [
//       { name: "Cable Curls" },
//       { name: "Dumbbell Curls" },
//       { name: "Hammer Curls" },
//     ],
//   },
//   {
//     type: "Chest",
//     exercises: [
//       { name: "Bench Press" },
//       { name: "Dumbbell Press" },
//       { name: "Incline Dumbbell Press" },
//       { name: "Dumbbell Flies" },
//     ],
//   },
//   {
//     type: "Legs",
//     exercises: [{ name: "Deadlifts" }, { name: "Squats" }, { name: "Lunges" }],
//   },
//   {
//     type: "Shoulders",
//     exercises: [
//       { name: "Dumbbell Press" },
//       { name: "Dumbbell Side Laterals" },
//       { name: "Barbell Shoulder Press" },
//       { name: "Face Pulls" },
//     ],
//   },
// ];

// /* Routine */
// var data = [
//   {
//     name: "Nat's Chad Chest Day",
//     data: [
//       {
//         // exercise_id: "6583ea8849520232f991bda9",
//         exercise: "Bench Press",
//         sets: 3,
//       },
//       {
//         // exercise_id: "6583ea8849520232f991bdaa",
//         exercise: "Dumbbell Press",
//         sets: 3,
//       },
//       {
//         exercise_id: "6583ea8849520232f991bdab",
//         exercise: "Dumbbell Fly",
//         sets: 3,
//       },
//     ],
//   },
//   {
//     name: "Uncle J's Back Day",
//     data: [
//       {
//         exercise_id: "6583ea8849520232f991bda2",
//         exercise: "Lat Pulldowns",
//         sets: 3,
//       },
//       {
//         exercise_id: "6583ea8849520232f991bda3",
//         exercise: "Cable Rows",
//         sets: 3,
//       },
//       {
//         exercise_id: "6583ea8849520232f991bda6",
//         exercise: "Dumbbell Curls",
//         sets: 3,
//       },
//     ],
//   },
//   {
//     name: "Kevin's Leg Day",
//     data: [
//       {
//         exercise_id: "6583ea8849520232f991bdaf",
//         exercise: "Squats",
//         sets: 3,
//       },
//       {
//         exercise_id: "6583ea8849520232f991bdb0",
//         exercise: "Lunges",
//         sets: 3,
//       },
//       {
//         exercise_id: "6583ea8849520232f991bdae",
//         exercise: "Deadlifts",
//         sets: 3,
//       },
//     ],
//   },
// ];
