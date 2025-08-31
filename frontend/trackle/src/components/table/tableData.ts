import { useStudentStore } from "../../store/studentStore";

export const tableHeading = [ 'Picture','Name', 'Gender','Standard', 'Number', 'Fees', 'isPaid', 'HW'];

export const getTableRows = () => useStudentStore.getState().students;
