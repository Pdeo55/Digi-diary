import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import classes from './Homepage.module.css'
import Homework from '../../assets/Homework.jpeg'
import Holiday from '../../assets/Holiday.jpeg'
import Notice from '../../assets/Notice.jpeg'
import Welcome from '../../components/Welcome'

function Homepage() {
    return (
        <Container fluid>
            <Navbar />
            <Container className='mt-5'>
                <Welcome />
                <Row className={classes.options}>
                    <Col>
                        <div className={classes.item}>
                            <Link to='/homework'>
                                <img src={Homework} alt="Homework" />
                                <p>Homework</p>
                            </Link>
                        </div>
                    </Col>
                    <Col>
                        <div className={classes.item}>
                            <Link to='/holiday'>
                                <img src={Holiday} alt="Holiday" />
                                <p>Holiday</p>
                            </Link>
                        </div>
                    </Col>
                    <Col>
                        <div className={classes.item}>
                            <Link to='/notice-board'>
                                <img src={Notice} alt="Notice-board" />
                                <p>Notice Board</p>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container >
    )
}

export default Homepage