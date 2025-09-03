import Table from '../../components/table/Table';
import Button from '../../components/button/Button';
import AddStudentModal from '../../features/students/AddStudentModal';
import UpdateStudentModal from '../../features/students/UpdateStudentModal';
import { handleAddStudent, handleEditStudent, handleDeleteStudent, handleDeleteAllSubmit, handleScoreStudentSubmit, handleAssignHWSubmit } from '../../handler/studentHandler';
import { useStudentStore } from '../../store/studentStore';
import { getAllStudentPerformance, getStudents } from '../../api/studentServices';
import DeleteStudentModal from '../../features/students/DeleteStudentModal';
import { useStudentPerformanceStore } from '../../store/allStudentPerformanceStore';
import DeleteAllStudentModal from '../../features/students/DeleteAllStudentModal';
import ScoreStudentModal from '../../features/students/ScoreStudentModal';
import AssignHWModal from '../../features/students/AssignHWModal';
import { IoMdPersonAdd } from "react-icons/io";
import { RxUpdate } from "react-icons/rx";
import { TiUserDelete } from "react-icons/ti";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { GrScorecard } from "react-icons/gr";
import { FaPen } from "react-icons/fa";

export {
    Table,
    Button,
    AddStudentModal,
    UpdateStudentModal,
    DeleteStudentModal,
    DeleteAllStudentModal,
    ScoreStudentModal,
    AssignHWModal,
    handleAddStudent,
    handleEditStudent,
    handleDeleteStudent,
    handleDeleteAllSubmit,
    handleScoreStudentSubmit,
    handleAssignHWSubmit,
    useStudentStore,
    useStudentPerformanceStore,
    getAllStudentPerformance,
    getStudents,
    IoMdPersonAdd,
    RxUpdate,
    TiUserDelete,
    RiDeleteBin6Fill,
    GrScorecard,
    FaPen,
};