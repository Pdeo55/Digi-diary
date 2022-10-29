import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createHomework } from '../../../features/homework/homeworkSlice'
import { Table } from 'react-bootstrap'
import { GrAttachment } from 'react-icons/gr'
import axios from 'axios'
import classes from '../Homework.module.css'

const API_URL = 'http://localhost:8000/api/homework/getbyteacher/'

function TeacherHW() {

    const dispatch = useDispatch()

    const [viewPrev, setViewPrev] = useState(false)
    const [homeworks, setHomeworks] = useState(null);

    const [title, setTitle] = useState('')
    const [subject, setSubject] = useState('')
    const [description, setDescription] = useState('')
    const [grade, setGrade] = useState('')
    const [attachment, setAttachment] = useState(null)

    const { user } = useSelector((state) => state.auth)

    const onClickViewPrev = () => {
        setViewPrev((prev) => !prev)
    }

    // get all previous homeworks for teacher
    useEffect(() => {
        axios.get(API_URL + `${user._id}`).then((response) => {
            console.log(response.data)
            setHomeworks(response.data)
        })
    }, [])

    // post new homework for students
    const onSubmit = (e) => {
        e.preventDefault()

        let formData = new FormData()

        formData.append('attachment', attachment)
        formData.append('title', title)
        formData.append('subject', subject)
        formData.append('description', description)
        formData.append('grade', grade)
        formData.append('teacherid', user._id)

        dispatch(createHomework(formData))
        console.log(formData)
    }

    return (
        <div className='p-5'>
            {viewPrev ?
                (
                    <div className={classes.formGroup}>
                        <button onClick={onClickViewPrev} className={classes.btn}>
                            Hide Previous Assigned Homework
                        </button>
                    </div>
                )
                :
                (
                    <div className={classes.formGroup}>
                        <button onClick={onClickViewPrev} className={classes.btn}>
                            See Previous Assigned Homework
                        </button>
                    </div>
                )
            }
            {viewPrev && (
                <div className={classes.homeworkDiv}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Subject</th>
                                <th>Attachment (Click to view)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {homeworks && homeworks.map((homework) => (
                                <tr key={homework._id}>
                                    <td>{homework?.title}</td>
                                    <td>{homework.description}</td>
                                    <td>{homework.subject}</td>
                                    <td style={{ cursor: 'pointer' }}>
                                        <a href={homework.attachment} target="_blank">
                                            <GrAttachment />
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            )}
            <p className={classes.text}>Want to give your Students some Homework ??</p>
            <section className={classes.form}>
                <form onSubmit={onSubmit}>
                    <div className={classes.formGroup}>
                        <input
                            type="text"
                            className={classes.formControl}
                            id='subject'
                            name='subject'
                            value={subject}
                            placeholder="Enter the Subject"
                            onChange={(e) => setSubject(e.target.value)}
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
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className={classes.formGroup}>
                        <textarea
                            className={classes.formControl}
                            id='description'
                            name='description'
                            value={description}
                            placeholder="Enter the description for the homework..."
                            onChange={(e)=> setDescription(e.target.value)}
                        />
                    </div>
                    <div className={classes.formGroup}>
                        <select name="grade" id="grade" onChange={(e)=>setGrade(e.target.value)}>
                            <option value="select">--Select Class--</option>
                            <option value="1">1st</option>
                            <option value="2">2nd</option>
                            <option value="3">3rd</option>
                            <option value="4">4th</option>
                            <option value="5">5th</option>
                        </select>
                    </div>
                    <div className={classes.formGroup}>
                        <label htmlFor="attachment">Upload any Image/Pdf</label>
                        <input type="file" id="attachment" name="attachment" accept="image/png, image/jpeg, application/pdf" onChange={(e)=>setAttachment(e.target.files[0])} />
                    </div>
                    <div className={classes.formGroup}>
                        <button type='submit' className={classes.btn}>
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default TeacherHW