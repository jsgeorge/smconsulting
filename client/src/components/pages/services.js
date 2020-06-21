import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServicesList from "../services";
import ContactForm from "../contacts/contactform";
import axios from "axios";

const ServicesPage = () => {
  const [error, setError] = useState("");

  useEffect(() => {}, []);

  return (
    <div className="page-wrapper" id="top">
      <section className="container-fluid content-section pageHeader">
        <div className="container">
          <div className="row">
            <ol className="breadcrumb">
              <li>
                <Link to="/">HOME</Link>
              </li>

              <li className="activenav">SERVICES</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="container-fluid content-section" id="ourservices1">
        <div className="container">
          <h1>Marketing Services</h1>
          <ServicesList show={"Marketing"} col={4} />
        </div>
      </section>

      <section className="container-fluid content-section" id="ourservices">
        <div className="container">
          <h1>OnLine Services</h1>
          <ServicesList show={"Online"} col={2} />
        </div>
      </section>

      <section className="container-fluid content-section" id="ourservices2">
        <div className="container">
          <h1>Financial Management</h1>
          <ServicesList show={"Financial Management"} col={3} />
        </div>
      </section>

      <section
        className="container-fluid content-section text-center"
        id="parallax4"
        data-speed="6"
        data-type="background"
      >
        <div className="container">
          <div className="row">
            <h1>Improve Your Business</h1>
            <h4>
              Be aware that the CSS for these layouts is heavily commented. If
              you do most of your work in Design view, have a peek at the code
              to get tips{" "}
            </h4>
          </div>
        </div>
      </section>
      <section className="container-fluid content-section" id="ourservices2">
        <div className="container">
          <h1>International Business</h1>
          <ServicesList show={"International Business"} col={2} />
        </div>
      </section>
      <section className="container-fluid content-section" id="ourservices">
        <div className="container">
          <h1>Other Services</h1>
          <div className="row">
            <div className="col-md-3" id="servcol">
              We open new departments in SM Consulting every year. It gives our
              clients a unique possibility to decide what kind of consulting and
              supportive services they need. Moreover, with the laps of time we
              plan to open new departments and offices in other countries
            </div>
            <div className="col-md-9" id="servcol2">
              <ServicesList show={"Other"} col={3} />
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <a href="#top" className="topPage">
        Top
      </a>
    </div>
  );
};

export default ServicesPage;
