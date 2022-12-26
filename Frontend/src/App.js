import './App.css';
import Navbar from './component/navbar/navbar';
import Schedules from './pages/schedules-class-routine/schedules-class-routine';
import SchedulesTeacher from './pages/schedules-teacher-routine/schedules-teacher-routine';
import ClassSectionB from './pages/schedules-class-routine/class-section-b/class-section-b';
import ClassSectionC from './pages/schedules-class-routine/class-section-c/class-section-c';
import TeacherSectionB from './pages/schedules-teacher-routine/teacher-section-b/teacher-section-b';
import TeacherSectionC from './pages/schedules-teacher-routine/teacher-section-c/teacher-section-c';
import AttendanceStudents from './pages/attendance-students/attendance-students';
import AttendanceTeachers from './pages/attendance-teachers/attendance-teachers';
import Classrooms from './pages/classrooms/classrooms';
import StudentsRegister from './pages/user-students/students-new/students-register';
import Dashboard from './pages/dashboard/dashboard';
import UserAdmins from './pages/user-admins/user-admins';
import UserTeachers from './pages/user-teachers/user-teachers';
import UserStudents from './pages/user-students/user-students';
import TeachersNew from './pages/user-teachers/teachers-new/teachers-new';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/user-admins" exact element={<UserAdmins />}/>
          <Route path="/user-teachers" exact element={<UserTeachers />}/>
          <Route path="/user-students" exact element={<UserStudents />}/>
          <Route path="/teachers-new" exact element={<TeachersNew />}/>
          <Route path="/students-register" exact element={<StudentsRegister />}/>
          <Route path="/schedules-class-routine" exact element={<Schedules />}/>
          <Route path="/schedules-teacher-routine" exact element={<SchedulesTeacher />}/>
          <Route path="/class-section-b" exact element={<ClassSectionB />}/>
          <Route path="/class-section-c" exact element={<ClassSectionC />}/>
          <Route path="/teacher-section-b" exact element={<TeacherSectionB />}/>
          <Route path="/teacher-section-c" exact element={<TeacherSectionC />}/>
          <Route path="/attendance-students" exact element={<AttendanceStudents />}/>
          <Route path="/attendance-teachers" exact element={<AttendanceTeachers />}/>
          <Route path="/classrooms" exact element={<Classrooms />}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
