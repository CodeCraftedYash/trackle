export interface AddStudentData {
  name: string;
  gender: string;
  password: string;
  mobileNumber: string;
  picture: File | null ;
  standard: string;
}
export interface AddStudentModalProps {
  onClose: () => void;
  onSubmit: (data: FormData) => void;
}
