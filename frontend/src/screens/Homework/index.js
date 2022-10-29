import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
import ParentHW from './Parent/ParentHW'
import TeacherHW from './Teacher/TeacherHW'

function Homework() {

    const { user } = useSelector((state) => state.auth)

    return (
        <Container fluid>
            {user.role === "STUDENT" && <ParentHW />}
            {user.role === "TEACHER" && <TeacherHW />}
        </Container>
    )
}

export default Homework