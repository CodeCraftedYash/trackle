import mongoose from 'mongoose';
import { UserModel } from './User.model';
import { type Student } from './types/types'

const studentSchema = new mongoose.Schema<Student>({
    class: { type: String, required: true },
    fees: { type: Number, required: true },
    homework: [{ type: String }],
})