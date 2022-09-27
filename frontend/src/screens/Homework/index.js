import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import { Container, Table } from 'react-bootstrap'
import { GrAttachment } from 'react-icons/gr'
import axios from 'axios'
import Welcome from '../../components/Welcome'


const baseURL = "http://localhost:8000/api/homework/get";

function Homework() {

    const [homeworks, setHomeworks] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setHomeworks(response.data)
        })
    }, [])

    return (
        <Container fluid>
            <Navbar />
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
        </Container>
    )
}

export default Homework