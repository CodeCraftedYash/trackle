import mongoose from "mongoose";
import {type User } from './types/types'

const userSchema = new mongoose.Schema<User>(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["student", "teacher"],
      required: true,
    },
    mobileNumber: { type: String, required: true },
  },
  {
    timestamps:true,
    discriminatorKey: "role",
    collection: "users",
  },
);

export const UserModel = mongoose.model<User>("User", userSchema);
