import { Document } from "mongoose";

export interface UserBase {
  name: string;
  gender: string;
  password: string;
  role: 'student' | 'teacher';
  mobileNumber: string;
  picture:string;
  picture_Id:string;
}

export interface TeacherModelType extends UserBase, Document {}

export interface StudentModelType extends TeacherModelType {
    standard: string;
    fees: number;
    isFeesPaid: boolean;
    homework: string[];
}

