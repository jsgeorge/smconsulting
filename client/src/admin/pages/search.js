import React, { useState, useEffect, useContext } from "react";
import "../../admin-styles.css";
import { Link, Redirect } from "react-router-dom";
import AdminHeader from "../layout/header";
import AdminSidebar from "../layout/sidebar";
import AdminCommandLine from "../layout/cmdline";
import AdminProductsList from "../comonents/products";
const AdminProductsSearch = ({ match }) => {
  return (
    <div className="bodyadmin" id="products">
      <AdminHeader />
      <div className="row">
        <AdminSidebar />
        <div className="adminContent">
          <h3>Products</h3>
          <AdminCommandLine type={"products"} />
          <AdminProductsList
            show={"srchproducts"}
            srchstr={match.params.srchstr}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminProductsSearch;
