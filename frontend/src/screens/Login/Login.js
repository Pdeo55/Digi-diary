import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../../features/auth/authSlice'
import useInput from '../../Hooks/use-input'
import Spinner from '../../components/Spinner/Spinner'
import classes from './Login.module.css'

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@") && value.includes(".");

function Login() {

    const {
        value: email,
        isValid: emailisValid,
        hasError: emailhasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetemail,
    } = useInput(isEmail);

    const {
        value: password,
        isValid: passwordisValid,
        hasError: passwordhasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetpassword,
    } = useInput(isNotEmpty);

    let formIsValid = false;
    if (emailisValid && passwordisValid) {
        formIsValid = true;
    }

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
            navigate('/')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onSubmit = (e) => {
        e.preventDefault()

        if (!formIsValid) {
            toast.error('Enter all form Details')
            return;
        }

        const userData = {
            email,
            password,
        }

        dispatch(login(userData))

        resetemail();
        resetpassword();
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className={classes.container}>
            <section className={classes.heading}>
                <h1>
                    <FaSignInAlt /> Login
                </h1>
            </section>

            <section className={classes.form}>
                <form onSubmit={onSubmit}>
                    <div className={classes.formGroup}>
                        <input
                            type='email'
                            className={classes.formControl}
                            id='email'
                            name='email'
                            value={email}
                            placeholder='Enter your email'
                            onChange={emailChangeHandler}
                            onBlur={emailBlurHandler}
                            required
                        />
                        {emailhasError ? <p className="error-text">Please Enter a valid Email ID!</p> : ""}
                    </div>
                    <div className={classes.formGroup}>
                        <input
                            type='password'
                            className={classes.formControl}
                            id='password'
                            name='password'
                            value={password}
                            placeholder='Enter password'
                            onChange={passwordChangeHandler}
                            onBlur={passwordBlurHandler}
                            required
                        />
                        {passwordhasError ? <p className="error-text">Please Enter valid Password!</p> : ""}
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

export default Login