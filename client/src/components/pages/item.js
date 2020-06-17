import React from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Banner from "../layout/banner";

const ItemPage = ({ match }) => {
  return (
    <div id="item">
      {/* <Banner /> */}
      <div id="wrapper">
        <Header />
        <div className="topnav">
          <ul id="topnav">
            <li>
              <Link to="/" id="homeLink">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about" id="companyLink">
                COMPANY
              </Link>
            </li>
            <li>
              <Link to="/services" id="serviceLink">
                SERVICES
              </Link>
            </li>
            <li>
              <Link to="/projects" id="projectLink">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link to="/clients" id="clientLink">
                CLIENTS{" "}
              </Link>
            </li>
            <li>
              <Link to="/contacts" id="contactLink">
                CONTACTS
              </Link>
            </li>
          </ul>
          <div className="row" />
        </div>
        <div className="content">
          <div className="row">
            <div className="col-md-7">
              <section>
                <h2> {match.params.item ? match.params.item : null}</h2>
                <p>
                  {" "}
                  Our {match.params.item} is a global provider of planning,
                  pages/item and delivery solutions for the built environment.
                  Since the firm's founding in 1955, Arhitecto has developed
                  into one of the world's laargest, most diverse and respected
                  pages/item practices. We employ more than 1,800 professionals
                  linked across a global network of 25 offices on three
                  continents. Industry surveys consistently rank Arhitecto among
                  the leading firms in numerous building types, specialties and
                  regions,
                </p>
                <Link to="/about" className="btnLink">
                  Back
                </Link>
              </section>
            </div>

            <div className="col-md-5">
              <img src="../images/modern_homes_30.jpg" alt="img" />
            </div>
          </div>
          <div className="row" />
        </div>{" "}
        <Footer />
      </div>{" "}
    </div>
  );
};

export default ItemPage;
