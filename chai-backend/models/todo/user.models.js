import mongoose from "mongoose";

// in this schema u can also share value and error message in array
/*
timestamp help to store the value of createdAt and UpdatedAT which define timestamps when the value is updated or created 
*/

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username Is Required"],
      unique: [true, "Username Already Exist"],
      lowercase: true,
      min: 3,
    },
    email: {
      type: String,
      required: [true, "Email Is Required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password Is Required"],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
