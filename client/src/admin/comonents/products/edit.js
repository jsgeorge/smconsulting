import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { ProjectContext } from "../../../context/product-context";
import AdminHeader from "../../layout/header";
import AdminSidebar from "../../layout/sidebar";

import AdminDetailProdCategory from "../productcategories/detailcategory";
import AdminPoductForm from "./form";
import "../../../admin-styles.css";
import { Link } from "react-router-dom";
//import AdminProjectsList from "../comonents/projects";

const AdminProductEdit = ({ match }) => {
  const [error, setError] = useState("");
  const { header, setHeader } = useState("");
  const onDelete = () => {};
  if (!match.params.id)
    return (
      <div>
        Error -Could not retrieve project record. invalid/missing project id
      </div>
    );
  return (
    <div className="body" id="projects">
      <AdminHeader />
      <div className="row">
        <AdminSidebar />
        <div className="col-md-10 adminContent" id="edit">
          <h3>Projects</h3>

          <div className="cmd-line">
            <Link to="/admin" className="btnLink">
              Close
            </Link>
            <Link to="/admin/products/" className="btnLink" id="list">
              List
            </Link>
            <Link
              to={`/admin/products/${match.params.id}/detail`}
              className="btnLink"
            >
              Cancel
            </Link>
            <span className="btnLink">Edit</span>
            <button onClick={onDelete} className="btnLink2" id="btnDel">
              Delete
            </button>
          </div>
          <h4>Edit Project</h4>
          {<AdminPoductForm id={match.params.id} />}
        </div>
      </div>
    </div>
  );
};

export default AdminProductEdit;
