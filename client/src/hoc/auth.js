import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../context/user-context";
import { Redirect } from "react-router-dom";

export default function Auth(ComposedComponent) {
  const { user, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!user || !localStorage.jwtToken) {
      setRedirect(true);
    }
  }, []);

  if (redirect) return <Redirect to={"/admin"} />;
  return <ComposedComponent />;
}
