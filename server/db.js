const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const routineSchema = new mongoose.Schema({
  // user_id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
  name: {
    type: String,
    required: true,
  },
  data: [
    {
      exercise: {
        type: String,
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
  // user_id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  routine_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Routine",
    required: true,
  },
  routine: {
    type: String,
    required: true,
  },
  exercises: [
    {
      exercise_name: {
        type: String,
        required: true,
      },
      data: [
        {
          reps: {
            type: Number,
            required: true,
          },
          weight: {
            type: Number,
            required: true,
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
  // user_id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  // },
  exercise_id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  history: [
    {
      workout_id: {
        type: Number,
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
      reps: {
        type: Number,
        required: true,
      },
      weight: {
        type: Number,
        required: true,
      },
      notes: {
        type: String,
        required: true,
      },
    },
  ],
});
const Routine = mongoose.model("Routine", routineSchema);
const Workout = mongoose.model("Workout", workoutSchema);
const Exercise = mongoose.model("Exercise", exerciseSchema);
const User = mongoose.model("User", userSchema); // depri

module.exports = {
  User,
  Routine,
  Workout,
  Exercise,
};

mongoose.connect(`mongodb://localhost:27017/Gym`, {}).then(async () => {
  console.log("Connected to MongoDB");
  const dataToInsert = [
    {
      name: "Nat's Chad Chest Day",
      data: [
        {
          exercise: "Bench Press",
          sets: 3,
        },
        {
          exercise: "Dips",
          sets: 3,
        },
        {
          exercise: "Dumbbell Fly",
          sets: 3,
        },
      ],
    },
    {
      name: "Uncle J's Back Day",
      data: [
        {
          exercise: "Lat Pulldowns",
          sets: 3,
        },
        {
          exercise: "Dumbbell Rows",
          sets: 3,
        },
        {
          exercise: "Dumbbell Curls",
          sets: 3,
        },
      ],
    },
    {
      name: "Kevin's Leg Day",
      data: [
        {
          exercise: "Squats",
          sets: 3,
        },
        {
          exercise: "Lunges",
          sets: 3,
        },
        {
          exercise: "Deadlifts",
          sets: 3,
        },
      ],
    },
  ];
  const get = await Routine.find();
  console.log(get);
  // Routine.insertMany(dataToInsert)
  //   .then((result) => {
  //     console.log(`${result.length} documents inserted.`);
  //   })
  //   .catch((err) => {
  //     console.error("Error during bulk insert:", err);
  //   })
  //   .finally(() => {
  //     // Close the connection
  //     mongoose
  //       .disconnect()
  //       .then(() => {
  //         console.log("Connection to MongoDB closed");
  //       })
  //       .catch((err) => {
  //         console.error("Error closing connection:", err);
  //       });
  //   });
});
