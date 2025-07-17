import { Document } from "mongoose";

export interface UserBase {
  name: string;
  gender: string;
  password: string;
  role: 'student' | 'teacher';
  mobileNumber: string;
  picture:string;
}

export interface TeacherModelType extends UserBase, Document {}

export interface StudentModelType extends TeacherModelType {
    studyingClass: string;
    fees: number;
    isFeesPaid: boolean;
    homework: string[];
}

