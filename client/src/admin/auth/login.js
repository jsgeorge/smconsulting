import React, { useContext, useEffect, useState } from "react";
import "../../admin-styles.css";
import AdminHeader from "../layout/header";
import { Link, Redirect } from "react-router-dom";
import { UserContext } from "../../context/user-context";
import { AuthContext } from "../../context/auth-context";

import axios from "axios";
import classnames from "classnames";

const AdminLogin = ({ showLogin, setShowLogin, showReg, setShowReg }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const [errMsg, setErrMsg] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { isloggedin, setisloggedin } = useContext(AuthContext);
  const { user, setUser } = useContext(UserContext);
  const [errors, setErrors] = useState({});

  useEffect(() => {});
  const validData = () => {
    setErrors({});
    let errs = {};

    if (!username) {
      errs.username = "Inalid/Missing username";
    }
    if (!password) {
      errs.password = "Invalid/Missing password";
    }

    if (!username || !password) {
      setErrors(errs);

      return false;
    } else {
      return true;
    }
  };

  const signinUser = async () => {
    if (validData()) {
      let userData = {
        username: username,
        password: password,
      };
      try {
        const response = await axios.post("/auth", userData);

        //console.log(response.data);
        if (!response.data.loginSuccess) {
          console.log(response.data.message);
          setErrors({ form: response.data.message });
        } else {
          setUser(response.data);
          localStorage.setItem("jwtToken", response.data.token);
          setisloggedin(true);
          // setRedirect(true);
        }
      } catch (error) {
        console.log("Invalid username and/or passowrd", error);
        setErrors({ form: "invalid username and/or password" });
        //flashErrorMessage(dispatch, error);
      }
    } else {
      console.log("false");
    }
  };

  const onSubmit = async () => {
    await signinUser();
  };

  const handleShowReg = () => {
    setShowLogin(false);
    setShowReg(true);
  };
  if (redirect) {
    return <Redirect to="/admin" />;
  }
  return (
    <div className="form-wrapper">
      <div className="form">
        <div className="logo-div2">
          <h3>
            <img src="images/logoadmin.png" />
            User Login
          </h3>
        </div>

        {/* {state && state.message.content && (
              <FlashMessage message={state.message} />
            )} */}
        {errors.form && <div className="has-error">{errors.form}</div>}
        <div
          className={classnames("form-group", {
            "has-error": errors.username,
          })}
        >
          {errors.username ? (
            <span className="help-block">{errors.username}</span>
          ) : (
            <span className="error-space" />
          )}
          <label>Username</label>
          <input
            className="form-control"
            aria-label="Enter your task"
            data-testid="add-task-content"
            type="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div
          className={classnames("form-group", {
            "has-error": errors.password,
          })}
        >
          {errors.password ? (
            <span className="help-block">{errors.password}</span>
          ) : (
            <span className="error-space" />
          )}
          <label>Password</label>
          <input
            className="form-control"
            aria-label="Enter your task"
            data-testid="add-task-content"
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-cmds">
          <button onClick={() => handleShowReg()}>Swhitch to Register</button>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            data-testid="add-shout"
            onClick={() => onSubmit()}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
