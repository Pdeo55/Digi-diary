import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import classes from './Query.module.css'

function QueryModal({ show, setShow, homework }) {

    const handleClose = () => setShow(false);

    const { user } = useSelector((state) => state.auth)

    // useEffect(() => {
    //     dispatch(getHomeworkByGrade(user._id))
    // }, [dispatch])

    console.log(homework)

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
                    <textarea className={classes.textarea} name="" id="" placeholder='Enter your Query...' />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" >
                        Send Query
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default QueryModal