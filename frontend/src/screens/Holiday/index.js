import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
import TeacherHoliday from './Teacher/TeacherHoliday'
import ParentHoliday from './Parent/ParentHoliday'

function Holiday() {

    const { user } = useSelector((state) => state.auth)

    return (
        <Container fluid>
            {user.role === "STUDENT" && <ParentHoliday />}
            {user.role === "TEACHER" && <TeacherHoliday />}
        </Container>
    )
}

export default Holiday;