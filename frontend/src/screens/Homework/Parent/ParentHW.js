import React, { useEffect, useState } from 'react'
import { GrAttachment } from 'react-icons/gr'
import { Container, Table } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getHomeworkByGrade } from '../../../features/homework/homeworkSlice'
import QueryModal from '../../../components/QueryModal/QueryModal'
import Welcome from '../../../components/Welcome'
import classes from '../Homework.module.css'
import RemainderModal from '../../../components/ReminderModal/RemainderModal'

function ParentHW() {

  const dispatch = useDispatch()

  const { user } = useSelector((state => state.auth))
  const { homeworks } = useSelector((state) => state.homeworks)

  const [queModalShow, setQueModalShow] = useState(false);
  const [remModalShow, setRemModalShow] = useState(false);

  const [homework, setHomework] = useState({})

  const onQueryClick = (homework) => {
    setQueModalShow(true)
    setHomework(homework)
  }

  const onSetRemainderClick = (homework) => {
    setRemModalShow(true)
    setHomework(homework)
  }

  useEffect(() => {
    dispatch(getHomeworkByGrade(user._id))
  }, [dispatch])

  return (
    <>
      {queModalShow && <QueryModal show={queModalShow} setShow={setQueModalShow} homework={homework} />}
      {remModalShow && <RemainderModal show={remModalShow} setShow={setRemModalShow} homework={homework}/>}
      <Container className='mt-5'>
        <Welcome />
        <Table striped bordered hover className={classes.parentTable}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Subject</th>
              <th>Attachment (Click to view)</th>
              <th>Queries</th>
              <th>Remainders</th>
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
                <td>
                  <p className={classes.button} onClick={() => onQueryClick(homework)}>Query</p>
                </td>
                <td>
                  <p className={classes.button} onClick={() => onSetRemainderClick(homework)}>Set Remainder</p>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default ParentHW