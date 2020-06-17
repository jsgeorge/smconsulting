import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductList from "../products";
import ProductCategoryList from "../productcategories";
import ContactForm from "../contacts/contactform";

const ProductsPage = () => {
  const [error, setError] = useState("");
  useEffect(() => {}, []);
  return (
    <div className="page-wrapper" id="top">
      <section className="container-fluid content-section pageHeader">
        <div className="container">
          <div className="row">
            <ol className="breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>Products</li>
            </ol>
          </div>
        </div>
      </section>

      <section class="container-fluid content-section" id="latestProducts">
        <div class="container">
          <div className="pageHeader2">
            <ProductCategoryList />
          </div>
          <ProductList
            error={error}
            setError={setError}
            show="latestProducts"
          />
        </div>
      </section>
      <ContactForm />
      <a href="#top" className="topPage">
        Top
      </a>
    </div>
  );
};

export default ProductsPage;
