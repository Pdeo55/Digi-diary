import { ToastContainer } from 'react-toastify'
import { Routes, Route } from 'react-router-dom'
import Homepage from './screens/Homepage';
import Homework from './screens/Homework/';
import Holiday from './screens/Holiday/';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import Navbar from './components/Navbar/Navbar'
import Notice from './screens/Notice/Notice';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <div className='container'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='register' element={<Register />} />
          <Route path='holiday' element={<Holiday />} />
          <Route path='login' element={<Login />} />
          <Route path='homework' element={<Homework />} />
          <Route path='notice-board' element={<Notice/>} />
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
