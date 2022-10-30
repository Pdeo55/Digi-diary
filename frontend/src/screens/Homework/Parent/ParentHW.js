import React, { useEffect, useState } from 'react'
import { GrAttachment } from 'react-icons/gr'
import { Container, Table } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getAllHomework, getHomeworkByGrade } from '../../../features/homework/homeworkSlice'
import Welcome from '../../../components/Welcome'
import Spinner from '../../../components/Spinner/Spinner'
import axios from 'axios'
import classes from '../Homework.module.css'

function ParentHW() {

  const dispatch = useDispatch()

  const { user } = useSelector((state => state.auth))
  const { homeworks } = useSelector((state) => state.homeworks)

  dispatch(getHomeworkByGrade(user._id))

  return (
    <Container className='mt-5'>
      <Welcome />
      <Table striped bordered hover className={classes.parentTable}>
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
    </Container>
  )
}

export default ParentHW