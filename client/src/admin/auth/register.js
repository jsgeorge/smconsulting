import React, { useContext, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { UserContext } from "../../context/user-context";
import axios from "axios";
import classnames from "classnames";

const AdminRegister = ({ showLogin, setShowLogin, showReg, setShowReg }) => {
  const [role, setRole] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [errMsg] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const [errors, setErrors] = useState([]);
  useEffect(() => {});
  const handleShowLogin = () => {
    setShowLogin(true);
    setShowReg(false);
  };

  const validData = () => {
    setErrors({});
    let errs = {};

    if (!username) {
      errs.username = "Inalid/Missing username";
    }
    if (!password) {
      errs.password = "Invalid/Missing password";
    }
    if (!role || role < 0) {
      errs.role = "Inalid/Missing user role";
    }
    if (!name) {
      errs.name = "Invalid/Missing first name";
    }
    if (!lastname) {
      errs.lastname = "Inalid/Missing lastname";
    }
    if (!email) {
      errs.email = "Invalid/Missing email";
    }
    if (!username || !password || !email || !role || !name || !lastname) {
      setErrors(errs);
      return false;
    } else {
      return true;
    }
  };

  const createUser = async () => {
    setErrors({});
    console.log(validData());
    if (validData()) {
      let newUser = {
        email: email,
        password: password,
        username: username,
        lastname: lastname,
        name: name,
        role: role,
      };
      console.log(newUser);
      try {
        await axios
          .post("/users", newUser)
          .then((res) => {
            setShowLogin(true);
            setShowReg(false);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const onSubmit = async () => {
    await createUser();
  };
  if (redirect) {
    return <Redirect to="/auth/signin" />;
  }

  return (
    <div className="form-wrapper2">
      <div className="form">
        <div className="logo-div2">
          <h3>
            <img src="images/logoadmin.png" />
            Admin User Register
          </h3>
        </div>

        {errors.form && <div className="has-error">{errors.form}</div>}
        <div
          className={classnames("form-group", {
            "has-error": errors.role,
          })}
        >
          {errors.role ? (
            <span className="help-block">{errors.role}</span>
          ) : (
            <span className="error-space" />
          )}
          <label>Role</label>

          <select
            className="form-control"
            id="form-role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value={-1} selected>
              Select User Role
            </option>
            <option value={0}>System Administrator</option>
            <option value={1}>Administrator</option>
          </select>
        </div>
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
            aria-label="Enter your Username"
            data-testid="add-task-content"
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div
          className={classnames("form-group", {
            "has-error": errors.email,
          })}
        >
          {errors.email ? (
            <span className="help-block">{errors.email}</span>
          ) : (
            <span className="error-space" />
          )}
          <label> Email</label>
          <input
            className="form-control"
            aria-label="Enter your task"
            data-testid="add-task-content"
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
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
          <label> Password</label>
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

        <div
          className={classnames("form-group", {
            "has-error": errors.name,
          })}
        >
          {errors.name ? (
            <span className="help-block">{errors.name}</span>
          ) : (
            <span className="error-space" />
          )}
          <label> First Name</label>
          <input
            className="form-control"
            aria-label="Enter your Name"
            data-testid="add-task-content"
            type="text"
            value={name}
            placeholder="First Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div
          className={classnames("form-group", {
            "has-error": errors.lastname,
          })}
        >
          {errors.lastname ? (
            <span className="help-block">{errors.lastname}</span>
          ) : (
            <span className="error-space" />
          )}
          <label> Last Name</label>
          <input
            className="form-control"
            aria-label="Enter your Last Name"
            data-testid="add-task-content"
            type="text"
            value={lastname}
            placeholder="Lastname"
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="form-cmds">
          <button onClick={() => handleShowLogin()}>Switch to Login</button>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            data-testid="add-shout"
            onClick={() => onSubmit()}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;
