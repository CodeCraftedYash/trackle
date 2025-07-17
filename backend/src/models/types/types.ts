export interface TeacherType {
  name: string;
  gender: string;
  password: string;
  role: 'student' | 'teacher';
  mobileNumber: string;
  picture: Blob | string;
}

export interface StudentType extends TeacherType {
    studyingClass: string;
    fees: number;
    isFeesPaid: boolean;
    homework: string[];
}

