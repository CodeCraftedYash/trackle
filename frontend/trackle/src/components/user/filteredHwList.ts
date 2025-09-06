import { useAuthStore } from "../../store/authStore";

const todayDate = new Date().getDate() - 1;
const currentMonth = new Date().toLocaleString("default", { month: "long" });

export const filterHw = () => {
  const homework = useAuthStore.getState().user?.homework;
  if (!homework) {
    return[];
  }
  const todayHw = {
    index: todayDate,
    hw: homework[todayDate],
    month: currentMonth,
  };
  const previousMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth() - 1
  ).toLocaleString("default", { month: "long" });
  const after = homework
    .slice(todayDate + 1)
    .map((hw, index) => ({
      index: todayDate + 1 + index,
      hw,
      month: previousMonth,
    }))
    .filter((item) => item.hw !== "");
  const before = homework
    .slice(0, todayDate)
    .map((hw, index) => ({ index: index, hw, month: currentMonth }))
    .filter((item) => item.hw !== "");
  return [...before, todayHw, ...after];
};
