import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postQuery } from '../../features/homworkQuery/querySlice';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import classes from './Query.module.css'

function QueryModal({ show, setShow, homework }) {

    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const [query, setQuery] = useState('')

    const handleClose = () => setShow(false);

    const queryData = {
        queId: homework._id,
        queQuery: query,
        studentId: user._id
    }

    const submitHandler = () => {
        dispatch(postQuery(queryData))
        console.log(queryData)
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Send a Query</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Hi <span style={{ fontWeight: "bold" }}>{user.name}</span> looks like you have a Query in your Homework!!</p>
                    <p> <span className={classes.homeworkDetail}> Homework Title </span>: {homework.title}</p>
                    <p>  <span className={classes.homeworkDetail}> Homework Description </span>: {homework.description} </p>
                    <p>  <span className={classes.homeworkDetail}> Subject </span>: {homework.subject} </p>
                    <textarea className={classes.textarea} value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Enter your Query...' />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={submitHandler}>
                        Send Query
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default QueryModal