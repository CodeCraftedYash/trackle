import mongoose, { Schema } from "mongoose";
import type { StudentPerformanceType } from "./types/studentPerformanceModelType.js";
const performanceSchema = new Schema<StudentPerformanceType>({
    student_Id: {
        type: Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    month: {
        type: Number,
        required: true,
    },
    dailyScore: {
        type: [Number],
        min: 0,
        max: 3,
        validate: {
            validator: function (scores: number[]) {
                return scores.every(score => score >= 0 && score <= 3);
            },
            message: 'Each score must be between 0 and 3.',
        },
        required: true,
    },
})

const StudentPerformanceModel = mongoose.model('StudentPerformance', performanceSchema);

export default StudentPerformanceModel;