import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register, reset } from '../../features/auth/authSlice'
import Spinner from '../../components/Spinner/Spinner'
import classes from './Register.module.css'

function Register() {

    const [formData, setFormData] = useState({
        name: '',
        phoneNo: null,
        email: '',
        password: '',
        password2: '',
        grade: null,
        role: '',
    })

    const { name, email, phoneNo, password, password2, grade, role } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if (isError) {
          toast.error(message)
        }
    
        if (isSuccess || user) {
        //   navigate('homepage')
          console.log("Done")
        }
    
        dispatch(reset())
      }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))

    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (password !== password2) {
            toast.error('Passwords do not match')
        } else {
            const userData = {
                name,
                phoneNo,
                email,
                password,
                grade,
                role,
            }

            dispatch(register(userData))
            console.log(userData);
        }
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className='heading'>
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Please create an account</p>
            </section>

            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input
                            type='text'
                            className='form-control'
                            id='name'
                            name='name'
                            value={name}
                            placeholder='Enter your name'
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='email'
                            className='form-control'
                            id='email'
                            name='email'
                            value={email}
                            placeholder='Enter your email'
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='phoneNo'
                            className='form-control'
                            id='phoneNo'
                            name='phoneNo'
                            value={phoneNo}
                            placeholder='Enter your Phone phoneNo'
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='password'
                            className='form-control'
                            id='password'
                            name='password'
                            value={password}
                            placeholder='Enter password'
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='password'
                            className='form-control'
                            id='password2'
                            name='password2'
                            value={password2}
                            placeholder='Confirm password'
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <select name="grade" id="grade" onChange={onChange}>
                            <option value="select">--Select Class--</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <select name="role" id="role" onChange={onChange}>
                            <option value="select">--Select Role--</option>
                            <option value="teacher">Teacher</option>
                            <option value="parent">Parent</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-block'>
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register