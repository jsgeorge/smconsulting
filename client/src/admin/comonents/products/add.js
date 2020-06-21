import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ProductContext } from "../../../context/product-context";
import DetailCategory from "../productcategories/detailcategory";
import DetailProperty from "../servicecategories/detailproperty";
import AdminHeader from "../../layout/header";
import AdminSidebar from "../../layout/sidebar";
import { UserContext } from "../../../context/user-context";
import AdminAddProductForm from "./addForm";
import "../../../admin-styles.css";
import { Link, Redirect } from "react-router-dom";
//import AdminproductsList from "../comonents/products";
const AdminProductAdd = () => {
  const [error, setError] = useState("");
  const [product, setproduct] = useState({}); //useContext(ProductContext);
  const { header, setHeader } = useState("");
  const [redirect, setRedirect] = useState(false);
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    if (!user || !localStorage.jwtToken) setRedirect(true);
  }, []);

  if (redirect) return <Redirect to={"/admin"} />;
  if (error) {
    return <div className="products-wrapper">{error}</div>;
  }
  if (!product) return <div>No current product</div>;
  return (
    <div className="bodyadmin" id="products">
      <AdminHeader />
      <div className="row">
        <AdminSidebar />
        <div className="col-md-10 adminContent" id="edit">
          <h3>Products</h3>
          <div className="cmd-line">
            <Link to="/admin" className="btnLinkadmin">
              Close
            </Link>

            <Link to="/admin/products/add" className="btnLinkActive" id="list">
              Add
            </Link>
            <Link to="/admin/products/" className="btnLinkadmin" id="list">
              Cancel
            </Link>
          </div>
          <h4>Add Product</h4>
          <AdminAddProductForm />
        </div>
      </div>
    </div>
  );
};

export default AdminProductAdd;
