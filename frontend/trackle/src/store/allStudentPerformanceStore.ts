import { create } from 'zustand';
import { persist } from 'zustand/middleware';
type StudentPerformance = {
    student_Id: string;
    year:number;
    month:number;
    dailyScore:number[];
}
type StoreState = {
  studentsPerformance: StudentPerformance[];
  studentPerformance: StudentPerformance | null;
  setAllStudentsPerformance: (studentsPerformance: StudentPerformance[]) => void;
  setStudentPerformance: (studentPerformance: StudentPerformance) => void;
};

export const useStudentPerformanceStore = create<StoreState>()(
  persist(
    (set) => ({
      studentsPerformance: [],
      studentPerformance: null,

      setAllStudentsPerformance: (studentsPerformance) =>
        set({ studentsPerformance }),

      setStudentPerformance: (studentPerformance) =>
        set({ studentPerformance }),
    }),
    {
      name: 'studentPerformance',
      partialize: (s) => ({
        studentsPerformance: s.studentsPerformance,
        studentPerformance: s.studentPerformance,
      }),
    }
  )
);
