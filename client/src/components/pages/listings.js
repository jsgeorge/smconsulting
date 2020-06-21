import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductList from "../products";
import ContactForm from "../contacts/contactform";

const ListingsPage = ({ match }) => {
  useEffect(() => {
    console.log(
      "listings show=",
      match.params.show,
      "srch=",
      match.params.srch
    );
  }, []);

  return (
    <div className="page-wrapper" id="top">
      <section className="container-fluid content-section pageHeader">
        <div className="container">
          <div className="row">
            <ol className="breadcrumb">
              <li>
                <Link to="/">HOME</Link>
              </li>

              <li>
                {" "}
                <Link to="/products">products</Link>
              </li>
              <li>
                {match.params.category
                  ? match.params.category
                  : match.params.srch}
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="container-fluid content-section" id="latestproducts">
        <div className="container">
          {match.params.category ? (
            <ProductList
              show={match.params.show}
              category={match.params.category}
              id={match.params.id}
            />
          ) : (
            <span>
              {match.params.show == "filterproducts" && match.params.srch ? (
                <ProductList
                  show={match.params.show}
                  srch={match.params.srch}
                />
              ) : (
                <ProductList show={match.params.show} />
              )}
            </span>
          )}
        </div>
        <div className="row" />
      </section>
      <ContactForm />
    </div>
  );
};

export default ListingsPage;
