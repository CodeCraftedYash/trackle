export interface StudentType {
  _id: string;
  name: string;
  gender: string;
  password: string;
  role: 'student' | 'teacher';
  mobileNumber: string;
  picture: string | null;
  standard: string;
  isFeesPaid: boolean;
  fees:string;
  homeWork:string[];
}