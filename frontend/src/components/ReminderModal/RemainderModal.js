import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postReminder } from '../../features/reminder/reminderSlice'
import DateTimePicker from "react-datetime-picker"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify'
import classes from './Remainder.module.css'

function RemainderModal({ show, setShow, homework }) {

    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const [reminderMsg, setReminderMsg] = useState('')
    const [remindAt, setRemindAt] = useState();

    const handleClose = () => setShow(false);

    const reminderData = {
        msg: reminderMsg,
        time: remindAt,
        queId: homework._id,
        studentId: user._id,
        wpPhone: user.phoneNo,
    }

    const submitHandler = () => {
        dispatch(postReminder(reminderData))
        console.log(reminderData)
        setReminderMsg('')
        setRemindAt('')
        handleClose();
        toast.success('Reminder set')
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Send a Query</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Hi <span style={{ fontWeight: "bold" }}>{user.name}</span> looks like you want to set Reminder for Homework!!</p>
                    <p> <span className={classes.homeworkDetail}> Homework Title </span>: {homework.title}</p>
                    <p>  <span className={classes.homeworkDetail}> Homework Description </span>: {homework.description} </p>
                    <p>  <span className={classes.homeworkDetail}> Subject </span>: {homework.subject} </p>
                    <textarea className={classes.textarea} value={reminderMsg} onChange={(e) => setReminderMsg(e.target.value)} placeholder='Enter your Remainder Message...' />
                    <div className={classes.datePicker}>
                        <p>Select a Date and Time</p>
                        <DateTimePicker
                            value={remindAt}
                            onChange={setRemindAt}
                            minDate={new Date()}
                            minutePlaceholder='mm'
                            hourPlaceholder='hh'
                            dayPlaceholder='DD'
                            monthPlaceholder='MM'
                            yearPlaceholder='YYYY'
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={submitHandler}>
                        Set Remainder
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default RemainderModal