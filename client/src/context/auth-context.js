import { createContext } from "react";

export const AuthContext = createContext(
    { isloggedin: false,
      isadmin: false });
