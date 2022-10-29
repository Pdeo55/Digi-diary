import React, { useEffect, useState } from 'react'
import { GrAttachment } from 'react-icons/gr'
import { Container, Table } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getAllHomework, getHomeworkByGrade } from '../../../features/homework/homeworkSlice'
import Welcome from '../../../components/Welcome'
import Spinner from '../../../components/Spinner/Spinner'
import axios from 'axios'

const API_URL = 'http://localhost:8000/api/homework/getbygrade/'

function ParentHW() {

  // const dispatch = useDispatch()

  const { user } = useSelector((state => state.auth))
  // const { homeworks, isLoading, isError, message } = useSelector((state) => state.homeworks)

  // if (isLoading) {
  //   return <Spinner />
  // }

  const [homeworks, setHomeworks] = useState(null);

  useEffect(() => {
    axios.get(API_URL + `${user._id}`
    ).then((response) => {
      setHomeworks(response.data)
    })
  }, [])

  return (
    <Container className='mt-5'>
      <Welcome />
      <Table striped bordered hover className='mt-5'>
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