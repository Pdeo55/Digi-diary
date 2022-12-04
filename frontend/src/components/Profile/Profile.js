import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
import { FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import classes from './Profile.module.css'

function Profile() {

    const { user } = useSelector((state) => state.auth)

    return (
        <div className={classes.sidebar}>
            <div className={classes.userLogo}>
                <FaUserAlt className={classes.icon} />
            </div>
            {user.role === "STUDENT" && (
                <>
                    <p style={{ fontSize: "2rem" }}>{user.name}</p>
                    <p> <span style={{ fontWeight: 'bold' }}> Class </span>: {user.grade}</p>
                    {/* <p> <span style={{ fontWeight: 'bold' }}> Class Teacher </span>: Riddhi Mirajkar</p>
                    <p> <span style={{ fontWeight: 'bold' }}> Class Monitor </span>: Sahil Chaudhari</p> */}
                    {/* <p className={classes.timeTable}><Link>View Time Table</Link></p> */}
                </>
            )}
            {user.role === "TEACHER" && (
                <>
                    <p style={{ fontSize: "2rem" }}>{user.name}</p>
                    {/* <p> <span style={{ fontWeight: 'bold' }}> Class </span>: {user.grade}</p>
                    <p> <span style={{ fontWeight: 'bold' }}> Class Teacher </span>: Riddhi Mirajkar</p>
                    <p> <span style={{ fontWeight: 'bold' }}> Class Monitor </span>: Sahil Chaudhari</p>
                    <p className={classes.timeTable}><Link>View Time Table</Link></p> */}
                </>
            )}
        </div>
    )
}

export default Profile