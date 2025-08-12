import mongoose, { Mongoose } from "mongoose";
import { TeacherModelType } from "./types/mongooseModelTypes.js";
const teacherSchema = new mongoose.Schema<TeacherModelType>(
  { 
    name: { type: String, required: true, unique: true },
    gender: { type: String, required: true, enum: ["male", "female", "others"] },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ["student", "teacher"] },
    mobileNumber: { type: String, required: true,unique: true },
    picture: { type: String },
    picture_Id: { type: String },
  });
    

export const TeacherModel = mongoose.model<TeacherModelType>("Teacher", teacherSchema);
