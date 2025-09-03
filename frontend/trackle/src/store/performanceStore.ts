import { create } from "zustand";
import { persist } from "zustand/middleware";

type PerformanceType = {
  student_Id: string;
  year: number;
  month: number;
  dailyScore: number[];
  addScore: (day: number, score: number) => void;
  setPerformance: (data: {
    dailyScore: number[];
    month: number;
    student_Id: string;
    year: number;
  }) => void;
};

export const usePerformanceStore = create<PerformanceType>()(persist((set) => ({
  student_Id: "",
  year: 0,
  month: 0,
  dailyScore: [],

  addScore: (day, score) =>
    set((state) => {
      const updated = [...state.dailyScore];
      if (updated.length < 31) {
        updated.length = 31;
      }
      updated[day - 1] = score;
      return { dailyScore: updated };
    }),
  setPerformance: (data) => set(() => ({
    student_Id:data.student_Id,
    year:data.year,
    month:data.month,
    dailyScore:data.dailyScore
  })),
}),
{
  name: "performance-storage"
}
));
