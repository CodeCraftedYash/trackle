export type User = {
  _id: string;
  name: string;
  gender: string;
  role: "student" | "teacher" | undefined;
  mobileNumber: string;
  standard: string;
  picture?: string;
  homework:string[];
};