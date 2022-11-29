import React from "react";
import { Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { register, reset } from "../../features/auth/authSlice";
import Spinner from "../../components/Spinner/Spinner";
import classes from "./Register.module.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNo: null,
    email: "",
    password: "",
    password2: "",
    grade: "",
    role: "",
  });

  const { name, email, phoneNo, password, password2, grade, role } = formData;

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

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

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
              onChange={onChange}
            />
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
                  onChange={onChange}
                />
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
                  onChange={onChange}
                  required
                />
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
                  onChange={onChange}
                  required
                />
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
                  onChange={onChange}
                  required
                />
              </div>
            </Col>
          </Row>
          <div className={classes.formGroup}>
            <select name="role" id="role" onChange={onChange}>
              <option value="select">Select Role</option>
              <option value="TEACHER">Teacher</option>
              <option value="STUDENT">Student</option>
            </select>
          </div>
          {formData.role === "STUDENT" ? (
            <div className={classes.formGroup}>
              <select name="grade" id="grade" onChange={onChange}>
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
