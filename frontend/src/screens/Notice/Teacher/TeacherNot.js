import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { createnotice, getnoticeByTeacher, deletenotice } from '../../../features/notice/noticeSlice'
import { Table } from 'react-bootstrap'
import { GrAttachment } from 'react-icons/gr'
import { AiFillDelete } from 'react-icons/ai'
import { toast } from 'react-toastify'
import classes from '../Notice.module.css'
import Spinner from '../../../components/Spinner/Spinner'

function TeacherNot() {

    // const dispatch = useDispatch()

    const [viewPrev, setViewPrev] = useState(false)

    const { user } = useSelector((state) => state.auth)
    // const { notices, isLoading } = useSelector((state) => state.notices)

    const onClickViewPrev = () => {
        setViewPrev((prev) => !prev)

        // get all previous notices for teacher
        // dispatch(getnoticeByTeacher(user._id))
        // console.log(notices)
    }

    // if (isLoading) {
    //     return <Spinner />
    // }

    return (
        <div className='p-5'>
            {viewPrev ?
                (
                    <div className={classes.formGroup}>
                        <button onClick={onClickViewPrev} className={classes.btn}>
                            Hide Previous Notices
                        </button>
                    </div>
                )
                :
                (
                    <div className={classes.formGroup}>
                        <button onClick={onClickViewPrev} className={classes.btn}>
                            See Previous Notices
                        </button>
                    </div>
                )
            }
            {viewPrev && (
                <div className={classes.noticeDiv}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Subject</th>
                                <th>Assigned On</th>
                                <th>Submission Date</th>
                                <th>Class</th>
                                <th>Attachment (Click to view)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {notices && notices.length > 0 && notices.map((notice) => (
                                <tr key={notice._id}>
                                    <td>{notice?.title}</td>
                                    <td>{notice.description}</td>
                                    <td>{notice.subject}</td>
                                    <td>{notice.assignDate}</td>
                                    <td>{notice.subDate}</td>
                                    <td>{notice.grade}</td>
                                    <td style={{ cursor: 'pointer' }}>
                                        <a href={notice.attachment} target="_blank" rel="noreferrer" >
                                            <GrAttachment />
                                        </a>
                                    </td>
                                    <td style={{ cursor: 'pointer' }} onClick={() => { dispatch(deletenotice(notice._id)) }}><AiFillDelete /></td>
                                </tr>
                            ))} */}
                        </tbody>
                    </Table>
                    {/* {notices.length === 0 && <p>No notices Assigned</p>} */}
                </div>
            )}
            <p className={classes.text}>Do you want to add any new notice ?</p>
            <section className={classes.form}>
                <form>
                    <div className={classes.formGroup} >
                        <input
                            type="text"
                            className={classes.formControl}
                            id='title'
                            name='title'
                            placeholder='Enter the title for notice'
                            required
                        />
                    </div>
                    <div className={classes.formGroup}>
                        <textarea
                            type="text"
                            className={classes.formControl}
                            id='description'
                            name='description'
                            placeholder='Enter the description...'
                            required
                        />
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

export default TeacherNot