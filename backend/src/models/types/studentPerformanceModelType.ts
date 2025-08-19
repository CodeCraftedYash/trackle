import { Types } from "mongoose";

export interface StudentPerformanceType {
  student_Id: Types.ObjectId;
  year: number;
  month: number;
  dailyScore: number[];
}
