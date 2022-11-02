import { ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Homepage from './screens/Homepage';
import Homework from './screens/Homework/';
import Holiday from './screens/Holiday/';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import Navbar from './components/Navbar/Navbar'
import Notice from './screens/Notice/Notice';
import Profile from './components/Profile/Profile';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'

function App() {

  const { user } = useSelector((state) => state.auth)

  return (
    <>
      <Container fluid>
        <Row>
          {user && <Col lg="2"><Profile /></Col>}
          <Col lg={user ? "10" : "12"}>
            <Navbar />
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='register' element={<Register />} />
              <Route path='holiday' element={<Holiday />} />
              <Route path='login' element={<Login />} />
              <Route path='homework' element={<Homework />} />
              <Route path='notice-board' element={<Notice />} />
            </Routes>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </>
  );
}

export default App;
