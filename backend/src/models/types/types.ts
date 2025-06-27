import { Document } from "mongoose";
export interface User extends Document {
    name: string;
    password: string;
    role: "student" | "teacher";
    mobileNumber: string;
}

export interface Student extends User {
    class: string;
    fees: number;
    homework: string[];
}

