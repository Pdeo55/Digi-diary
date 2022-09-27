import { Container } from 'react-bootstrap'
import classes from './Welcome.module.css'

function Welcome() {

    return (
        <Container className={classes.welcome}>
            <h1>Welcome Parent !! </h1>
            <p> You are viewing the profile of <span> Aman 😎 </span></p>
        </Container>
    )
}

export default Welcome