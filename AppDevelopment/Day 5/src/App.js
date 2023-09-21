
import './App.css';
// import HomePage from './Components/Homepage';
// import Sidebar from './Components/SideBar';
  import SignUp from './Components/SignUp';
 import {Routes, Route, BrowserRouter} from 'react-router-dom';
// import Dashboard from './Components/Dashboard';
// import EcommerceDashboard from './Redux/EcommerceDashboard';
import AdminLogin from './Components/AdminLogin';
import SideBar from './Components/SideBar';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<SignUp/>}/>
    <Route path='/Adminlogin' element={<AdminLogin/>}/>
    <Route path='/SideBar' element={<SideBar/>}/>
    </Routes>
    </BrowserRouter>
    </div>  
    );
  }
  export default App;
  // 