export interface TeacherType {
  _id: string;
  name: string;
  gender: string;
  password: string;
  role: 'student' | 'teacher';
  mobileNumber: string;
  picture: File | string;
}

export interface StudentType extends TeacherType {
    standard: string;
    fees: number;
    isFeesPaid: boolean;
    homework: string[];
}

