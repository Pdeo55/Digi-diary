import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import classes from './Homepage.module.css'
import Homework from '../../assets/Homework.jpeg'
import Holiday from '../../assets/Holiday.jpeg'
import Notice from '../../assets/Notice.jpeg'
import Welcome from '../../components/Welcome'

function Homepage() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [user, dispatch, navigate])

    return (
        <Container fluid>
            {user.role === "STUDENT" && (
                <>
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
                </>
            )}
            {user.role === 'TEACHER' && (
                <>
                    <Container fluid className='mt-5'>
                        <Row>
                            <Col lg='11'>
                                <Welcome />
                            </Col>
                            <Col lg='1'>
                                <button className={classes.queryButton}>See Student queries</button>
                            </Col>
                        </Row>
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
                </>
            )}
        </Container >
    )
}

export default Homepage