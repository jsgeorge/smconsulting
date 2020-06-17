import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Header = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header page-scroll">
          <button
            type="button"
            className="navbar-toggle collapsed navbar-right"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/"></Link>
        </div>

        <div
          className="collapse navbar-collapse navbar-right navbar-main-collapse"
          id="navbar"
        >
          <ul className="nav navbar-nav">
            <li id="home">
              <Link to="/" className="active">
                HOME
              </Link>
            </li>
            <li className="page-scroll">
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="page-scroll">
              <Link to="/services">SERVICES</Link>
            </li>
            <li className="page-scroll">
              <Link to="/products">PRODUCTS</Link>
            </li>
            <li className="page-scroll">
              <Link to="/blog">BLOG</Link>
            </li>
            <li className="page-scroll">
              <Link to="/contacts">CONTACTS</Link>
            </li>
          </ul>
        </div>

        <div className="navsrch">
          <button type="submit" className="btn btn-default srchLink"></button>
        </div>

        <div className="srchForm" id="srchForm">
          <form method="get" action="search.php">
            <input
              type="text"
              name="srchtxt"
              id="srchtxt"
              placeholder="Search"
            />
            <input type="submit" id="srchbtn" value="GO" />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
