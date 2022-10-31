import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createHoliday, getAllHoliday } from '../../../features/holiday/holidaySlice'
import { Table } from "react-bootstrap";
import { GrAttachment } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import classes from "../Holiday.module.css";
import Spinner from "../../../components/Spinner/Spinner";

function TeacherHoliday() {
  const dispatch = useDispatch();

  const [viewPrev, setViewPrev] = useState(false);

  const [title, setTitle] = useState("");
 
  const [attachment, setAttachment] = useState(null);

//   const { user } = useSelector((state) => state.auth);
  const { holidays, isLoading } = useSelector((state) => state.holidays);

  const onClickViewPrev = () => {
    setViewPrev((prev) => !prev);

    // get all previous holidays for teacher
    dispatch(getAllHoliday)
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();

    formData.append("attachment", attachment);
    formData.append("title", title);
   
    // formData.append("teacherid", user._id);

    console.log("hi");

    // post new holiday for students
    dispatch(createHoliday(formData))

    // clearing the state
    setTitle("");
   
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="p-5">
      {viewPrev ? (
        <div className={classes.formGroup}>
          <button onClick={onClickViewPrev} className={classes.btn}>
            Hide Previous Holidays
          </button>
        </div>
      ) : (
        <div className={classes.formGroup}>
          <button onClick={onClickViewPrev} className={classes.btn}>
            See Previous Holidays
          </button>
        </div>
      )}
      {viewPrev && (
        <div className={classes.holidayDiv}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>

                <th>Attachment (Click to view)</th>
              </tr>
            </thead>
            <tbody>
              {holidays &&
                holidays.length > 1 &&
                holidays.map((holiday) => (
                  <tr key={holiday._id}>
                    <td>{holiday?.title}</td>

                    <td style={{ cursor: "pointer" }}>
                      <a
                        href={holiday.attachment}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GrAttachment />
                      </a>
                    </td>
                    <td
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        dispatch(getAllHoliday);
                      }}
                    >
                      <AiFillDelete />
                    </td>
                    {/* deleteholiday(holiday._id) */}
                  </tr>
                ))}
              {holidays.length === 0 && <p>No holidays Assigned</p>}
            </tbody>
          </Table>
        </div>
      )}
      <p className={classes.text}>Want to give your Students some holiday ??</p>
      <section className={classes.form}>
        <form onSubmit={onSubmit}>
          <div className={classes.formGroup}>
            <input
              type="text"
              className={classes.formControl}
              id="title"
              name="title"
              value={title}
              placeholder="Enter the title"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className={classes.formGroup}>
            <label htmlFor="attachment">Upload any Image/Pdf</label>
            <input
              type="file"
              id="attachment"
              required
              name="attachment"
              accept="image/png, image/jpeg, application/pdf"
              onChange={(e) => setAttachment(e.target.files[0])}
            />
          </div>
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

export default TeacherHoliday;
