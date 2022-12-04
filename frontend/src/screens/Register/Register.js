import React from "react";
import { Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useInput from "../../Hooks/use-input";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { register, reset } from "../../features/auth/authSlice";
import Spinner from "../../components/Spinner/Spinner";
import classes from "./Register.module.css";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@") && value.includes(".");
const isPhone = (value) => value.length === 10;
const isPassword = (value) => value.length > 5;

function Register() {
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    value: phoneNo,
    isValid: phoneNoisValid,
    hasError: phoneNohasError,
    valueChangeHandler: phoneNoChangeHandler,
    inputBlurHandler: phoneNoBlurHandler,
    reset: resetphoneNo,
  } = useInput(isPhone);

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
  } = useInput(isPassword);

  const {
    value: password2,
    isValid: password2isValid,
    hasError: password2hasError,
    valueChangeHandler: password2ChangeHandler,
    inputBlurHandler: password2BlurHandler,
    reset: resetpassword2,
  } = useInput(isPassword);

  const [grade, setGrade] = useState("")
  const [role, setRole] = useState("")

  let formIsValid = false;
  if (nameIsValid && emailisValid && passwordisValid && password2isValid && phoneNoisValid) {
    formIsValid = true;
  }


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
      console.log("Done");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      toast.error('Enter all form Details')
      return;
    }

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        phoneNo,
        email,
        password,
        grade,
        role,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={classes.container}>
      <section className={classes.heading}>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className={classes.form}>
        <form onSubmit={onSubmit}>
          <div className={classes.formGroup}>
            <input
              type="text"
              className={classes.formControl}
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            {nameHasError && <span className={classes.errorMsg}>Name should not be Empty</span>}
          </div>
          <Row>
            <Col>
              <div className={classes.formGroup}>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                />
                {emailhasError && <span className={classes.errorMsg}>Enter a Valid Email Address</span>}
              </div>
            </Col>
            <Col>
              <div className={classes.formGroup}>
                <input
                  type="phoneNo"
                  className={classes.formControl}
                  id="phoneNo"
                  name="phoneNo"
                  value={phoneNo}
                  placeholder="Enter your Contact Number"
                  onChange={phoneNoChangeHandler}
                  onBlur={phoneNoBlurHandler}
                  required
                />
                {phoneNohasError && <span className={classes.errorMsg}>Enter a Valid Contact Number</span>}
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className={classes.formGroup}>
                <input
                  type="password"
                  className={classes.formControl}
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Enter password"
                  onChange={passwordChangeHandler}
                  onBlur={passwordBlurHandler}
                  required
                />
                {passwordhasError && <span className={classes.errorMsg}>Password should be greater than 5 characters</span>}
              </div>
            </Col>
            <Col>
              <div className={classes.formGroup}>
                <input
                  type="password"
                  className={classes.formControl}
                  id="password2"
                  name="password2"
                  value={password2}
                  placeholder="Confirm password"
                  onChange={password2ChangeHandler}
                  onBlur={password2BlurHandler}
                  required
                />
                {password2 !== password && <span className={classes.errorMsg}>Password don't match</span>}
              </div>
            </Col>
          </Row>
          <div className={classes.formGroup}>
            <select name="role" id="role" onChange={(e) => setRole(e.target.value)}>
              <option value="select">Select Role</option>
              <option value="TEACHER">Teacher</option>
              <option value="STUDENT">Student</option>
            </select>
          </div>
          {role === "STUDENT" ? (
            <div className={classes.formGroup}>
              <select name="grade" id="grade" onChange={(e) => setGrade(e.target.value)}>
                <option value="select">Select Class</option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
              </select>
            </div>
          ) : null}

          <div className={classes.formGroup}>
            <button type="submit" className={classes.btn}>
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Register;
