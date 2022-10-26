import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import classes from './Welcome.module.css'

function Welcome() {

    const { user } = useSelector((state) => state.auth)
    console.log(user)

    return (
        <Container className={classes.welcome}>
            {user.role === 'STUDENT' && (
                <>
                    <h1>Welcome {user.name} !! </h1>
                    <p> You are viewing the profile of your ward
                        {/* <span> your Ward 😎 </span> */}
                    </p>
                </>
            )}
            {user.role === 'TEACHER' && (
                <>
                    <h1>Welcome {user.name} !! </h1>
                    <p> Start by giving task to your students
                        {/* <span> your Ward 😎 </span> */}
                    </p>
                </>
            )}
        </Container>
    )
}

export default Welcome