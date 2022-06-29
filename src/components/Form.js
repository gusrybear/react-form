import React, { useState } from "react";
import "./Form.module.css";

function Form() {
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [data, setData] = useState([]);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event) => {
    // [
    // 	{
    // 		firstname: "",
    // 		surname: "",
    // 		mobileNumber: "",
    // 		password: "",
    // 		dateOfBirth: "",
    // 		gender: ""
    // 	}
    // ]

    const submitData = {
      ["firstname"]: firstname,
      ["surname"]: surname,
      ["mobileNumber"]: mobileNumber,
      ["password"]: password,
      ["dateOfBirth"]: dateOfBirth,
      ["gender"]: gender,
    };
    setData(submitData);
    setIsSent(true);
    event.preventDefault();
    // console.log(data);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          placeholder={"First name"}
        />
        <input
          type={"text"}
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          placeholder={"Surname"}
        />
        <input
          type={"text"}
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          placeholder={"Mobile number"}
        />

        <input
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={"New password"}
        />
        <div className="date-of-birth">
          <label>
            Date of birth
            <input
              type={"date"}
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </label>
        </div>

        <div className="gender" onChange={(e) => setGender(e.target.value)}>
          <label>
            Female
            <input type={"radio"} name={"gender"} value={"Female"} />
          </label>
          <label>
            Male
            <input type={"radio"} name={"gender"} value={"Male"} />
          </label>
        </div>

        <input
          type={"button"}
          onClick={(e) => handleSubmit()}
          value={"Sign Up"}
        />
      </form>
      <div>
        { isSent ? data.map((each, index) => {
          return (
            <div key={index}>
              <h1>Firstname: {each.firstname}</h1>
              <h1>Surname: {each.surname}</h1>
              <h1>Mobile Number: {each.mobileNumber}</h1>
              <h1>Date of birth: {each.dateOfBirth}</h1>
              <h1>Gender: {each.gender}</h1>
            </div>
          );
        }) : 'Hello'}
      </div>
    </div>
  );
}

export default Form;
