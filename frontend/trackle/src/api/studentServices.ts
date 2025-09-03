import { useLoadingStore } from "../store/loadingStore";
import { type StudentType } from "../types/studentType";
import axiosInstance from "./axios";

const updateStudentURL = "/student/updateStudent";
const deleteStudentURL = "/student/deleteStudent";
const getStudentsURL = "/student/getAllStudents";
const addStudentURL = "/auth/student/register";
const deleteAllStudentURL = "/student/deleteAllStudent";
const assignHWURL = "/student/assignHW";
const getAllStudentPerformanceURL =
  "/student/performance/getAllStudentPerformance";
const updateStudentPerformanceURL =
  "/student/performance/updateStudentPerformance";

const { setIsLoading } = useLoadingStore.getState();

export const getStudents = async (): Promise<StudentType[]> => {
  try {
    setIsLoading(true);
    const res = await axiosInstance.get(getStudentsURL);
    return res.data;
  } catch (error: any) {
    throw error;
  } finally {
    setIsLoading(false);
  }
};

export const addStudent = async (student: FormData) => {
  try {
    setIsLoading(true);
    const res = await axiosInstance.post(addStudentURL, student);
    return res.data;
  } catch (error: any) {
    throw error;
  } finally {
    setIsLoading(false);
  }
};

export const deleteStudent = async (_id: string) => {
  try {
    setIsLoading(true);
    const res = await axiosInstance.post(deleteStudentURL, { _id });
    return res.data;
  } catch (error: any) {
    throw error;
  } finally {
    setIsLoading(false);
  }
};

export const updateStudent = async (updatedStudent: FormData) => {
  try {
    setIsLoading(true);
    const res = await axiosInstance.post(updateStudentURL, updatedStudent, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (error: any) {
    throw error;
  } finally {
    setIsLoading(false);
  }
};

export const deleteAllStudent = async (_Id: string, password: string) => {
  try {
    setIsLoading(true);
    const res = await axiosInstance.post(deleteAllStudentURL, {
      _Id,
      password,
    });
    return res.data;
  } catch (error: any) {
    throw error;
  } finally {
    setIsLoading(false);
  }
};

export const assignHW = async (student_Id: string, HW: string) => {
  try {
    setIsLoading(true);
    const res = await axiosInstance.post(assignHWURL, { student_Id, HW });
    return res.data;
  } catch (error: any) {
    throw error;
  } finally {
    setIsLoading(false);
  }
};

export const getAllStudentPerformance = async () => {
  try {
    setIsLoading(true);
    const res = await axiosInstance.get(getAllStudentPerformanceURL);
    return res.data;
  } catch (error: any) {
    throw error;
  } finally {
    setIsLoading(false);
  }
};

export const getStudentPerformance = async (student_Id: string) => {
  try {
    setIsLoading(true);
    const getStudentPerformanceURL = `/student/performance/getStudentPerformance/${student_Id}`;
    const res = await axiosInstance.get(getStudentPerformanceURL);
    return res.data;
  } catch (error: any) {
    throw error;
  } finally {
    setIsLoading(false);
  }
};

export const updateStudentPerformance = async (
  student_Id: string,
  month: number,
  year: number,
  score: number
) => {
  try {
    setIsLoading(true);
    const res = await axiosInstance.post(updateStudentPerformanceURL, {
      student_Id,
      year,
      month,
      score,
    });
    return res.data;
  } catch (error: any) {
    throw error;
  } finally {
    setIsLoading(false);
  }
};
