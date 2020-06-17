import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ProductContext } from "../../../context/product-context";
import DetailCategory from "../productcategories/detailcategory";
import DetailProperty from "../servicecategories/detailproperty";
import AdminHeader from "../../layout/header";
import AdminSidebar from "../../layout/sidebar";

import AdminAddProductForm from "./addForm";
import "../../../admin-styles.css";
import { Link } from "react-router-dom";
//import AdminproductsList from "../comonents/products";
const AdminProductAdd = () => {
  const [error, setError] = useState("");
  const [product, setproduct] = useState({}); //useContext(ProductContext);
  const { header, setHeader } = useState("");

  if (error) {
    return <div className="products-wrapper">{error}</div>;
  }
  if (!product) return <div>No current product</div>;
  return (
    <div className="body" id="products">
      <AdminHeader />
      <div className="row">
        <AdminSidebar />
        <div className="col-md-10 adminContent" id="edit">
          <h3>Products</h3>
          <div className="cmd-line">
            <Link to="/admin" className="btnLink">
              Close
            </Link>
            <Link to="/admin/products/" className="btnLink" id="list">
              Cancel
            </Link>
            <Link to="/admin/products/add" className="btnLinkActive" id="list">
              New
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
