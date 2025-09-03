import { useStudentStore } from "../store/studentStore";
import * as studentService from "../api/studentServices";
import { useDialogStore } from "../store/dialogStore";

const openDialog = useDialogStore.getState().openDialog;

export const handleAddStudent = async (student: FormData) => {
  try {
    await studentService.addStudent(student);
    openDialog("Student added successfully", "Success");
  } catch (error) {
    openDialog("Could not add student, Please try again", "Error");
    return;
  }
};

export const handleDeleteStudent = async (id: string) => {
  try {
    await studentService.deleteStudent(id);
    useStudentStore.getState().removeStudent(id);
    openDialog("Student deleted successfully", "Success");
  } catch (error) {
    openDialog("Could not delete student, Please try again", "Error");
  }
};

export const handleEditStudent = async (student: FormData) => {
  try {
    await studentService.updateStudent(student);
    openDialog("Student updated successfully", "Success");
  } catch (error) {
    openDialog("Could not update student, Please try again", "Error");
  }
};

export const handleCheckStudentExists = async (name: string) => {
  const checkStudentExists = useStudentStore.getState().checkStudent;
  return checkStudentExists(name);
};

export const handleDeleteAllSubmit = async (_Id: string, password: string) => {
  try {
    await studentService.deleteAllStudent(_Id, password);
    openDialog("Deleted all students", "Successful");
  } catch (error) {
    openDialog("Could not delete all students");
  }
};

export const handleScoreStudentSubmit = async (
  student_Id: string,
  month: number,
  year: number,
  score: number
) => {
  try {
    await studentService.updateStudentPerformance(
      student_Id,
      month,
      year,
      score
    );

    openDialog("Updated Student Score Successfully ", "Successful");
  } catch (error) {
    if (error instanceof Error)
      openDialog(
        error.message
          ? error.message
          : "Failed to update student performance score",
        "Failed"
      );
    else {
      openDialog("Something went wrong", "Failed");
    }
  }
};

export const handleAssignHWSubmit = async (student_Id: string, HW: string) => {
  try {
    await studentService.assignHW(student_Id, HW);
    openDialog("HW assigned to Student Successfully", "Successful");
  } catch (error) {
    if (error instanceof Error) {
      openDialog(
        error.message ? error.message : "Failed to assign HW",
        "Failed"
      );
    } else {
      openDialog("Something went wrong", "Failed");
    }
  }
};
