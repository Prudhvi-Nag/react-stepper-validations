import { color } from "@mui/system";
import React, { useState } from "react";

const Home = () => {
  // const [addstatus, setAddStatus] = useState(false);
  //     const [username, setFirstName] = useState('');
  //     const [password, setPassword] = useState('');
  //     const [email, setEmail] = useState('');
  //     const [role, setRole] = useState('');

  //
  //     function AddUser() {
  //         const RegisterModel = {
  //             "username": username,
  //             "password": password,
  //             "email": email,
  //             // "role": role
  //         };

  //         RegisterUser(RegisterModel).then((res => {
  //             if (res.status != 'Error') {
  //                 setAddStatus(res.message);
  //             } else {
  //                 setAddStatus(res.message);
  //             }
  //         }));
  //     }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateName = () => {
    if (name === "") {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
  };

  const validateEmail = () => {
    if (email === "") {
      setEmailError("Email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Email is invalid");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (password === "") {
      setPasswordError("Password is required");
    } else if (!/^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$/.test(password)) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const validateForm = () => {
    validateName();
    validateEmail();
    validatePassword();

    return !nameError && !emailError && !passwordError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully!");
      // perform other actions like API calls, etc.
    }
  };

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="form">
          <div>
            <h1>REGISTER USER</h1>
          </div>
          <div className="form-body">
            <div className="username">
              <label className="form__label" htmlFor="username">
                User Name{" "}
              </label>
              <br />
              {/*<input className="form__input" type="text" onChange={e => setFirstName(e.target.value)} value={username} id="UserName" placeholder="Enter User Name" /> */}
              <input
                type="text"
                id="username"
                name="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={validateName}
                
              />
              <div className="error" style={{ color: "red" }}>
                {nameError}
              </div>
              <br />
              {/* {this.state.UsernameError ? <span style={{color: "red"}}>Please Enter some value</span> : ''}  */}{" "}
            </div>{" "}
            <div className="password">
              {" "}
              <label className="form__label" htmlFor="password">
                Password{" "}
              </label>
              <br />
              {/*<input className="form__input" onChange={e => setPassword(e.target.value)} value={password} type="password" id="password" placeholder=" Enter Password" /> */}{" "}
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={validatePassword}
               
              />
              <div className="error" style={{ color: "red", margin: "5px" }}>
                {passwordError}
              </div>
              <br />
              {/* {this.state.passwordError ? <span style={{color: "red"}}>Please enter some   value</span> : ''} */}{" "}
            </div>{" "}
            <div className="Email">
              {" "}
              <label className="form__label" htmlFor="email">
                Email{" "}
              </label>
              <br />
              {/*<input className="form__input" onChange={e => setEmail(e.target.value)} value={email} type="email" id="email" placeholder=" Enter Email" /> */}{" "}
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
              
              />
              <div className="error" style={{ color: "red" }}>
                {emailError}
              </div>
              <br />
              {/* {this.state.emailError ? <span style={{color: "red"}}>Please Enter valid email address</span> : ''} */}{" "}
            </div>{" "}
            {/* <div className="role">
                    <label className="form__label" htmlFor="role">Role </label>
                    <input className="form__input" onChange={e => setRole(e.target.value)} value={role} type="role" id="role" placeholder=" Enter role" />
                </div> */}{" "}
            <div className="confirm-password">
              {/*                     <button onClick={() => AddUser()}>Submit</button> */}{" "}
              <button>Submit</button>
            </div>{" "}
          </div>{" "}
          <div>
            {/* <span style={{ color: "green" }}>{addstatus}</span> */}{" "}
          </div>{" "}
        </div>
      </form>
    </>
  );
};

export default Home;
