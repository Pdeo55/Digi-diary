import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import Homepage from './screens/Homepage'
import Homework from './screens/Homework/'

function App() {
  return (
    <Container fluid>
      <Routes>
        <Route path='homepage' element={<Homepage />} />
      </Routes>
      <Routes>
        <Route path='homework' element={<Homework />} />
      </Routes>

    </Container>
  );
}

export default App;
