import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './screens/Homepage'
import Homework from './screens/Homework/'
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <div className='container'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='homework' element={<Homework />} />
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
