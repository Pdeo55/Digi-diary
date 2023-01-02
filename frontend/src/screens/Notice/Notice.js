import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
import ParentNot from './Parent/ParentNot'
import TeacherNot from './Teacher/TeacherNot'

function Notice() {

    const { user } = useSelector((state) => state.auth)

    return (
        <Container fluid>
            {user.role === "STUDENT" && <ParentNot />}
            {user.role === "TEACHER" && <TeacherNot />}
        </Container>
    )
}

export default Notice