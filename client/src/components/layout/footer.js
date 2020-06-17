import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ type }) => {
  return (
    <div className="container-fluid" id="footer">
      <div className="container paddingTop">
        <div className="row">
          <p className="text-center">@2015 MovieApp | Privacy Plicy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
