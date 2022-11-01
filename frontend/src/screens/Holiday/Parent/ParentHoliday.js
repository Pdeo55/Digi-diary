import React from 'react'
import { GrAttachment } from 'react-icons/gr'
import { Container, Table } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getAllHoliday } from '../../../features/holiday/holidaySlice'
import Welcome from '../../../components/Welcome'
import classes from '../Holiday.module.css'

function ParentHoliday() {

  const dispatch = useDispatch()

  const { holidays } = useSelector((state) => state.holidays)

  dispatch(getAllHoliday())

  return (
    <Container className='mt-5'>
      <Welcome />
      <Table striped bordered hover className={classes.parentTable}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Attachment (Click to view)</th>
          </tr>
        </thead>
        <tbody>
          {holidays && holidays.map((homework) => (
            <tr key={homework._id}>
              <td>{homework?.title}</td>
              <td style={{ cursor: 'pointer' }}>
                <a href={homework.attachment} target="_blank">
                  <GrAttachment />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default ParentHoliday