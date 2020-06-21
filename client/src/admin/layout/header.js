import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";

const AdminHeader = () => {
  const { isadmin, setisadmin, isloggedin, setisloggedin } = useContext(
    AuthContext
  );
  const [redirect, setRedirect] = useState(false);

  const onLogout = () => {
    localStorage.clear();
    setisadmin(false);
    setisloggedin(false);
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to="/" />;
  }
  return (
    <div className="header">
      <div className="logo-div">
        <img src="/images/logoadmin2.png" />
      </div>
      <div className="admin-menu-cmds">
        <ul id="admin-mnu">
          {isloggedin ? (
            <span>
              <li>
                <Link to="/user/account">Account</Link>
              </li>

              <li>
                <button onClick={() => onLogout()}>Logout</button>
              </li>
            </span>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default AdminHeader;
