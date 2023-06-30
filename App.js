import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './TEMPLATEINTEGRATION/Layout';
import Home from './TEMPLATEINTEGRATION/Home';
import About from './TEMPLATEINTEGRATION/About';
import Service from './TEMPLATEINTEGRATION/Service';
import Contactus from './TEMPLATEINTEGRATION/Contactus';
import Login from './TEMPLATEINTEGRATION/Login';
import Signup from './TEMPLATEINTEGRATION/Signup';
import Logout from './TEMPLATEINTEGRATION/Logout';
import Dashboard from './TEMPLATEINTEGRATION/Dashboard';
import Adminasidebar from './TEMPLATEINTEGRATION/Admin/Adminasidebar';
import AdminLayout from './TEMPLATEINTEGRATION/Admin/AdminLayout';
import AdminHome from './TEMPLATEINTEGRATION/Admin/AdminHome';

function App() {
  return (
    <div className="hero_area">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="Home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="service" element={<Service />} />
            <Route path="Contactus" element={<Contactus />} />
            <Route path="Login" element={<Login />} />
            <Route path="Signup" element={<Signup />} />
            <Route path="logout" element={<Logout />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminHome />} /> 
        <Route path="home" element={<AdminHome />} /> 
        <Route path='asidebar' element={<Adminasidebar/>} />
      
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
