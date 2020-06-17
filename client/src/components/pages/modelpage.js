import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContactForm from "../contacts/contactform";

const ModelPage = ({ match }) => {
  useEffect(() => {
    console.log("listings show=", match.params.show);
  }, []);

  return (
    <div id="listing">
      <section className="container-fluid content-section pageHeader">
        <div className="container">
          <div className="row">
            <ol className="breadcrumb">
              <li>
                <Link to="/">HOME</Link>
              </li>

              <li className="activenav">PAGE</li>
            </ol>
          </div>
        </div>
      </section>

      <section class="container-fluid content-section" id="latestprojects">
        <div class="container">
          <h1>Model Page</h1>
        </div>
      </section>
      <ContactForm />
    </div>
  );
};

export default ModelPage;
