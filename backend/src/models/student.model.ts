import mongoose from 'mongoose';
import { type StudentModelType } from './types/mongooseModelTypes.js';

const studentSchema = new mongoose.Schema<StudentModelType>({
    name: { type: String, required: true, unique: true },
    gender: { type: String, required: true, enum: ["male", "female", "others"] },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ["student", "teacher"] },
    mobileNumber: { type: String, required: true },
    picture: { type: String },
    studyingClass: { type: String, required: true },
    fees: { type: Number, default: 0 },
    isFeesPaid: { type: Boolean, default: false },
    homework : { type: [String], default: []  },
})

export const StudentModel = mongoose.model('student',studentSchema)