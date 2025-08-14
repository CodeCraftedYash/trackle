import { Types } from "mongoose";

export interface StudentPerformanceType {
  student: Types.ObjectId;
  year: number;
  month: number;
  performance: number[];
}
