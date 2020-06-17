import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/footer";
import ProductDetail from "../products/detail";
import ServiceDetail from "../services/detail";
import ContactForm from "../contacts/contactform";

const DetailPage = ({ match }) => {
  //const [id, setId] = useState("");
  useEffect(() => {
    const { id } = match.params;
    console.log("model id", id);
    /// setId(id);
  });
  const { show, name, id } = match.params;
  return (
    <div id="detail">
      <section className="container-fluid content-section pageHeader">
        <div className="container">
          <div className="row">
            <ol className="breadcrumb">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to={`/${show}`}>{show}</Link>
              </li>

              <li className="activenav">{name}</li>
            </ol>
          </div>
        </div>
      </section>

      <section class="container-fluid content-section" id="item-detail">
        <div class="container">
          {show == "products" ? <ProductDetail id={id} /> : null}
          {show == "services" ? <ServiceDetail id={id} /> : null}
          <div className="row"></div>
        </div>{" "}
      </section>

      <ContactForm />
      <a href="#top" className="topPage">
        Top
      </a>
    </div>
  );
};

export default DetailPage;
