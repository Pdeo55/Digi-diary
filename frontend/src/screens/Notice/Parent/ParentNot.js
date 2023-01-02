import React, { useEffect, useState } from 'react'
import { GrAttachment } from 'react-icons/gr'
import { Container, Table } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
// import { getHomeworkByGrade } from '../../../features/homework/homeworkSlice'
import Welcome from '../../../components/Welcome'
import classes from '../Notice.module.css'

function ParentNot() {

  const dispatch = useDispatch()

  const { user } = useSelector((state => state.auth))
  
  return (
    
      <Container className='mt-5'>
        <Welcome />
        <Table striped bordered hover className={classes.parentTable}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Assigned On</th>
              <th>Attachment (Click to view)</th>
            </tr>
          </thead>
          <tbody>
            {/* {homeworks && homeworks.map((homework) => (
              <tr key={homework._id}>
                <td>{homework?.title}</td>
                <td>{homework.description}</td>
                <td>{homework.subject}</td>
                <td>{homework.assignDate}</td>
                <td>{homework.subDate}</td>
                <td style={{ cursor: 'pointer' }}>
                  <a href={homework.attachment} target="_blank">
                    <GrAttachment />
                  </a>
                </td>
                <td>
                  <p className={classes.button} onClick={() => onQueryClick(homework)}>Query</p>
                </td>
                <td>
                  <p className={classes.button} onClick={() => onSetRemainderClick(homework)}>Set Reminder</p>
                </td>
              </tr>
            ))} */}
          </tbody>
        </Table>
      </Container>
    
  )
}

export default ParentNot