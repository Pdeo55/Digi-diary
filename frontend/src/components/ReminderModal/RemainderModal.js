import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postReminder } from '../../features/reminder/reminderSlice'
import DateTimePicker from "react-datetime-picker"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify'
import useInput from '../../Hooks/use-input';
import classes from './Remainder.module.css'

const isNotEmpty = (value) => value.trim() !== "";

function RemainderModal({ show, setShow, homework, setReminderHWid, setReminderMsg }) {

    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const {
        value: reminderMsg,
        isValid: reminderMsgIsValid,
        hasError: reminderMsgHasError,
        valueChangeHandler: reminderMsgChangeHandler,
        inputBlurHandler: reminderMsgBlurHandler,
        reset: resetreminderMsg,
    } = useInput(isNotEmpty);
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

        if (!reminderMsgIsValid) {
            return;
        }

        dispatch(postReminder(reminderData))

        setReminderMsg(reminderMsg);
        setReminderHWid(true);

        resetreminderMsg();
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
                    <div>
                        <textarea
                            className={classes.textarea}
                            value={reminderMsg}
                            onChange={reminderMsgChangeHandler}
                            onBlur={reminderMsgBlurHandler}
                            placeholder='Enter your Reminder Message...'
                        />
                        {reminderMsgHasError && <span className={classes.errorMsg}>Reminder Message should not be Empty</span>}
                    </div>
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
                            required
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={submitHandler}>
                        Set Reminder
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default RemainderModal