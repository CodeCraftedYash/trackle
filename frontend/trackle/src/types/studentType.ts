export interface StudentType {
  id: string;
  name: string;
  gender: string;
  password: string;
  role: 'student' | 'teacher';
  mobileNumber: string;
  picture: Blob | string;
  studyingClass: string;
  fees: number;
  isFeesPaid: boolean;
  homework: string[];
}