import './App.css';
import Navbar from './component/navbar/navbar';
import UserNavbar from './component/user-navbar/user-navbar';
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
