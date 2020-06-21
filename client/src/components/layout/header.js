import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const [srchText, setSrchText] = useState("");
  const [getProducts, setGetProducts] = useState(false);

  const onHandleSearch = (e) => {
    e.preventDefault();
    if (srchText) {
      setGetProducts(true);
    }
  };
  if (getProducts)
    return <Redirect to={`/listings/filterproducts/${srchText}`} />;
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
          <form onSubmit={onHandleSearch}>
            <input
              type="text"
              name="srchtxt"
              id="srchtxt"
              placeholder="Search"
              onChange={(e) => setSrchText(e.target.value)}
            />
            <button type="submit" id="srchbtn">
              Go
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
