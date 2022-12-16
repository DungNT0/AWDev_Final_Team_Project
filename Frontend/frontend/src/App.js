import './App.css';
import Navbar from './component/navbar';
import Dashboard from './pages/dashboard/dashboard';
import UserAdmins from './pages/user-admins/user-admins';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/user-admins" exact element={<UserAdmins />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
