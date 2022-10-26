import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import classes from '../Homework.module.css'

function TeacherHW() {

    const [formData, setFormData] = useState({
        title: '',
        subject: '',
        description: '',
        grade: ''
    })
    const { title, subject, description, grade } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }


    return (
        <>
            <p className={classes.text}>Want to give your Students some Homework ??</p>
            <section className={classes.form}>
                <form>
                    <div className={classes.formGroup}>
                        <input
                            type="text"
                            className={classes.formControl}
                            id='subject'
                            name='subject'
                            value={subject}
                            placeholder="Enter the Subject"
                            onChange={onChange}
                        />
                    </div>
                    <div className={classes.formGroup}>
                        <input
                            type="text"
                            className={classes.formControl}
                            id='title'
                            name='title'
                            value={title}
                            placeholder="Enter the title"
                            onChange={onChange}
                        />
                    </div>
                    <div className={classes.formGroup}>
                        <textarea
                            className={classes.formControl}
                            id='description'
                            name='description'
                            value={description}
                            placeholder="Enter the description for the homework..."
                            onChange={onChange}
                        />
                    </div>
                    <div className={classes.formGroup}>
                        <select name="grade" id="grade">
                            <option value="select">--SELECT YOUR GRADE--</option>
                            <option value="1">1st</option>
                            <option value="2">2nd</option>
                            <option value="3">3rd</option>
                            <option value="4">4th</option>
                            <option value="5">5th</option>
                        </select>
                    </div>
                    <div className={classes.formGroup}>
                        <button type='submit' className={classes.btn}>
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default TeacherHW