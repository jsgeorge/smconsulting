import React, { useContext, useEffect, useState } from "react";
import "../admin-styles.css";
import { Link, Redirect } from "react-router-dom";
//
import { AuthContext } from "../context/auth-context";
import { UserContext } from "../context/user-context";
import axios from "axios";
import "../admin-styles.css";
import AdminHeader from "./layout/header";
import AdminSidebar from "./layout/sidebar";

import AdminLogin from "./auth/login";
import AdminRegister from "./auth/register";
import Dashboard from "./dashboard";

const Admin = () => {
  const { isloggedin, setisloggedin, isadmin, setisadmin } = useContext(
    AuthContext
  );
  const [showLogin, setShowLogin] = useState(true);
  const [showReg, setShowReg] = useState(false);
  const [margin, setmargin] = useState(0);

  useEffect(() => {
    setisadmin(true);
  });
  console.log("admin/index.js isAdmin", isadmin, "isloggedin", isloggedin);
  return (
    <span>
      {!isloggedin ? (
        <div className="body">
          {isloggedin ? <AdminHeader /> : null}
          {showLogin ? (
            <AdminLogin
              showLogin={showLogin}
              setShowLogin={setShowLogin}
              showReg={showReg}
              setShowReg={setShowReg}
            />
          ) : null}
          {showReg ? (
            <AdminRegister
              showLogin={showLogin}
              setShowLogin={setShowLogin}
              showReg={showReg}
              setShowReg={setShowReg}
            />
          ) : null}
        </div>
      ) : (
        <div className="bodyadmin">
          <AdminHeader />
          <Dashboard />
        </div>
      )}
    </span>
  );
};

export default Admin;
