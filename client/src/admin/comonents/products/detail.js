import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
//import { ProductContect } from "../../../context/product-context";
import AdminHeader from "../../layout/header";
import AdminSidebar from "../../layout/sidebar";

import DetailProductCategory from "../productcategories/detailcategory";
import "../../../admin-styles.css";
import { Link, Redirect } from "react-router-dom";

const AdminProductDetail = ({ match }) => {
  const [error, setError] = useState("");
  const [product, setproduct] = useState({}); //useContext(ProductContect);
  const { header, setHeader } = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    let filters = [];
    let id = match.params.id;
    const fetchData = async () => {
      try {
        const response = await axios
          .get(`/products/article?id=${id}`)
          .then((res) => {
            setproduct(res.data[0]);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
        setError("Error cannot show the curent product");
      }
    };
    fetchData();
  }, []);
  const onDelete = (id) => {
    try {
      axios
        .delete(`/products?id=${id}`)
        .then((res) => {
          setRedirect(true);
        })
        .catch((err) => {
          console.log(err);
          setError("Could delete document from file, Unknown error");
        });
    } catch (error) {
      setError("Could not delete document from file, Unknown error");
      console.log(error);
      //flashErrorMessage(dispatch, error);
    }
  };
  if (error) {
    return <div className="products-wrapper">{error}</div>;
  }
  if (!product) return <div>No current product</div>;
  const { _id, name, category, description, images } = product;
  //if (product) console.log('detail product',product);
  if (redirect) {
    return <Redirect to={`/admin/products`} />;
  }
  return (
    <div className="bodyadmin" id="products">
      <AdminHeader />
      <div className="row">
        <AdminSidebar />
        <div className="col-md-10 adminContent">
          <h3>products</h3>
          <div className="cmd-line">
            <Link to="/admin" className="btnLinkadmin">
              Close
            </Link>
            <Link to="/admin/products/" className="btnLinkadmin">
              List
            </Link>
            <Link to="/admin/products/add" className="btnLinkadmin">
              Add
            </Link>
            <Link to={`/admin/products/${_id}/edit`} className="btnLinkadmin">
              Edit
            </Link>
            <button onClick={() => onDelete(_id)} className="btn2" id="btnDel">
              Delete
            </button>

            {/* <div className="cmd-form-srch">
              Search <input />
              <button>GO</button>
            </div> */}
          </div>

          {product ? (
            <div className="project_detail_admin">
              <div className="row">
                <div className="col-md-7" id="project-detail">
                  <h2>
                    <strong>Product: </strong> {name}
                  </h2>
                  <p>
                    {category ? (
                      <span>
                        <strong>Category: </strong>{" "}
                        <DetailProductCategory id={category._id} />
                      </span>
                    ) : (
                      <span className="has-error">
                        <strong>Category: </strong> Not selected
                      </span>
                    )}{" "}
                    <br />
                  </p>
                  <div>
                    <strong>Description</strong>
                    <br />
                    <p>{description}</p>
                  </div>
                </div>
                <div className="col-md-5">
                  <h4>product Image</h4>
                  <p>
                    {images && images.length > 0 && images[0].url ? (
                      <img src={images[0].url} id="img_lrg" alt="No Image" />
                    ) : (
                      <span className="has-error">No Image Set</span>
                    )}

                    <br />
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <p>NO Current product</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProductDetail;
