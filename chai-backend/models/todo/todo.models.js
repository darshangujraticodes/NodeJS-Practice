import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    isComplete: {
      type: Boolean,
      default: false,
    },
    createBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ], // array of subtodos
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);

// this above create Todo will get store in mongodb in giver format
// first add `s` to convert in plural form and in lowercase `Todo` --> `todos`
