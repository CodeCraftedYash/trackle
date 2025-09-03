import { create } from 'zustand';
import { type StudentType } from '../types/studentType.js';

interface StudentStore {
  students: StudentType[];
  setStudents: (students: StudentType[]) => void;
  addStudent: (student: StudentType) => void;
  removeStudent: (id: string) => void;
  updateStudent: (student: Partial<StudentType>) => void;
  checkStudent: (name: string) =>string|null;
}

export const useStudentStore = create<StudentStore>((set) => ({
  students: [],
  setStudents: (students) => set({ students }),
  addStudent: (student) =>
    set((state) => ({ students: [...state.students, student] })),
  removeStudent: (id) =>
    set((state) => ({
      students: state.students.filter((s) => s._id !== id),
    })),
  updateStudent: (student) =>
    set((state) => ({
      students: state.students.map((s) =>
        s._id === student._id ? {...s,...student,_id:s._id} : s
      ),
    })),
    checkStudent: ( name:string):string | null => {
      const students = useStudentStore.getState().students;
      const student = students.find(
       (student) => student.name === name && student.role === 'student');
      return student ? student._id : null;
      }
}));
