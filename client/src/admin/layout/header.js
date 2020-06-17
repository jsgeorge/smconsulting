import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
const AdminHeader = () => {
  const [redirect, setRedirect] = useState(false);

  const onLogout = () => {
    localStorage.clear();
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to="/" />;
  }
  return (
    <div className="header">
      <div className="logo-div">
        <h3>SM Consulting admin</h3>
      </div>
      <div className="admin-menu-cmds">
        <ul id="admin-mnu">
          {localStorage.jwtToken ? (
            <li>
              <button onClick={() => onLogout()}>Logout</button>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default AdminHeader;
