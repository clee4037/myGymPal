const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect(`mongodb://localhost:27017/${process.env.DB_Name}`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

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
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  workout_title: {
    type: String,
    required: true,
  },
  exercises: [
    {
      exercise_name: {
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
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  routine_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Routine",
    required: true,
  }
  workout_title: {
    type: String,
    required: true,
  },
  exercises: [
    {
      exercise_name: {
        type: String,
        required: true,
      },
      reps: [
        {
          type: Number,
          required: true,
        },
      ],
      weight: [
        {
          type: Number,
          required: true,
        },
      ],
      notes: [
        {
          type: String,
        },
      ],
    },
  ],
});

const exerciseSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  exercise_id {
    type: Number,
    required: true,
  },
  name {
    type: String,
    required: true,
  },
  history: [
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
  ]
});


const User = mongoose.model("User", userSchema);
const Routine = mongoose.model("Routine", routineSchema);
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = {
  User,
  Routine,
  Workout,
};
