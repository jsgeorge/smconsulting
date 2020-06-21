import React from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Banner from "../layout/banner";

const ContactsPage = () => {
  return (
    <div className="page-wrapper" id="top">
      <section className="container-fluid content-section pageHeader">
        <div className="container">
          <div className="row">
            <ol className="breadcrumb">
              <li>
                <a href="index.html">HOME</a>
              </li>

              <li className="activenav">CONTACT</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="container-fluid content-section" id="contactus">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <section>
                <h2>Contacts US</h2>
                <h3>Arhitecto Arthitectural Services</h3>
                <h4>
                  3900 Spear St
                  <br />
                  San Francisco, CA 94112
                </h4>
                <h4>Sales office: (415) 800-393-3343</h4>
                <h4>Advertising: (415) 848-383-2233</h4>
                <h4>Cusomer Support (415) 884-383-2222</h4>
              </section>
            </div>
            <div className="col-md-6 shaded">
              <section id="ourStaff">
                <h2>Our Staff</h2>
                <div className="items">
                  <div className="item2">
                    <img
                      alt=""
                      src="../images/staffpics/manager.jpeg"
                      className="imageStyle"
                    />
                    <strong>Tom Smith </strong>
                    <br />
                    PROJECT MANAGER <br />
                    Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt&nbsp;
                    <h5>(415) 800-393-3343</h5>
                  </div>
                  <div className="item2">
                    <img
                      alt=""
                      src="../images/staffpics/enginner.jpeg"
                      className="imageStyle"
                    />
                    <strong>Alan Johnson </strong>
                    <br />
                    CHIEF ENGINEER
                    <br />
                    Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet
                    <h5>(415) 800-393-3341</h5>
                  </div>
                  <div className="item2">
                    <img
                      alt=""
                      src="../images/staffpics/accountant.jpg"
                      className="imageStyle"
                      width="115"
                    />
                    <strong>Leslie Jennings</strong>
                    <br />
                    ACCOUNT SPECIALIST
                    <br />
                    Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt
                    <h5>(415) 800-393-3342</h5>
                  </div>
                </div>
                <button>More Info</button>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactsPage;
