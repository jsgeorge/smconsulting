import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ProductContext } from "../../context/product-context";
import ProjectItem from "./item";
import { Link } from "react-router-dom";

export default function ProductsList({ show, category, id, srch }) {
  const [error, setError] = useState("");
  const { products, setproducts } = useContext(ProductContext);
  const [prods, setprods] = useState([]);
  const { header, setHeader } = useState("");

  useEffect(() => {
    let limit = {};
    if (show && show == "latestproducts") limit = { limit: 6 };
    if (show && show == "gallery") limit = { limit: 6 };
    if (show && show == "allgallery") limit = { limit: 1000 };
    if (show && show == "allproducts") {
      limit = { limit: 1000 };
    }
    if (show && show == "featured") limit = { limit: 10 };
    if (!show) limit = { limit: 20 };
    let filters = [];
    //console.log("ctgryid", category, id);
    const fetchData = async () => {
      if (show == "featured") {
        filters = { filters: [{ featured: true }] };
        try {
          const response = await axios
            .post("/products/view", filters)
            .then((res) => {
              setprods(res.data.articles);
            })
            .catch((err) => {
              setError("Error could not retrive products Network error");
              console.log(err);
            });
        } catch (error) {
          setError("Error could not retrive products. Netwoerk error");
        }
      } else if (show == "filterproducts" && category) {
        filters = { filters: [{ category: id }] };
        console.log("filters", filters);
        try {
          const response = await axios
            .post("/products/view", filters)
            .then((res) => {
              setprods(res.data.articles);
            })
            .catch((err) => {
              setError("Error could not retrive products Network error");
              console.log(err);
            });
        } catch (error) {
          setError("Error could not retrive products. Netwoerk error");
        }
      } else if (show == "filterproducts" && srch) {
        filters = { filters: [{ name: srch }] };
        try {
          const response = await axios
            .post("/products/view", filters)
            .then((res) => {
              setprods(res.data.articles);
            })
            .catch((err) => {
              setError("Error could not retrive products Network error");
              console.log(err);
            });
        } catch (error) {
          setError("Error could not retrive products. Netwoerk error");
        }
      } else {
        try {
          const response = await axios
            .post("/products/view", limit)
            .then((res) => {
              setprods(res.data.articles);
            })
            .catch((err) => {
              setError("Error could not retrive products. Netowrk error");
              console.log("Error could not retrive products", err);
            });
        } catch (error) {
          setError("Error could not retrive products. Network error");
          console.log("Error could not retrive products", error);
        }
      }
    };
    fetchData();
  }, []);

  if (!prods || prods.length == 0)
    return (
      <div className="has-error2">
        Sorry no current products for this category or network error.
      </div>
    );

  return (
    <div className="products-wrapper">
      <section id="all-products">
        {category ? (
          <h3> {category}</h3>
        ) : (
          <h3>{show == "allproducts" ? "All products" : null}</h3>
        )}
        <h3>{show == "featured" ? "Featured products" : null}</h3>
        <div className="row">
          {prods ? (
            <span>
              {prods.map((p) => (
                <ProjectItem key={p._id} project={p} show={show} />
              ))}
              <div className="section-cmds">
                {show == "latestproducts" ? (
                  <Link to={`/listings/allproducts`} className="btnLink">
                    Show More
                  </Link>
                ) : null}
                {show == "gallery" ? (
                  <Link to={`/listings/allgallery`} className="btnLink">
                    View All >>
                  </Link>
                ) : null}
              </div>
              <div className="row" />
            </span>
          ) : (
            <div className="no-items">
              <p>NO Current products</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
