import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './screens/Homepage'
import Homework from './screens/Homework/'
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />

        <Route path='homepage' element={<Homepage />} />
        <Route path='homework' element={<Homework />} />
      </Routes>
    </div>
  );
}

export default App;
