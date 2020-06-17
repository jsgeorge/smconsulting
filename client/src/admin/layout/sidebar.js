import React from "react";
import { Link, Redirect } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="leftBar">
      <h4>File Maintainance</h4>
      <ul id="fileMenu">
        <li>
          <Link to={"/admin/products"} id="products">
            Products
          </Link>
        </li>
        <li>
          <Link to={"/admin/productcategories"} id="productcategories">
            Product Categories
          </Link>
        </li>

        <li>
          <Link to={"/admin/services"} id="services">
            Services
          </Link>
        </li>
        <li>
          <Link to={"/admin/servicecategories"} id="servicecategories">
            Service Categories
          </Link>
        </li>
        <li>
          <Link to={"/admin/users"} id="users">
            Users
          </Link>
        </li>
        <li>
          <Link to={"/admin/users/roles"} id="roles">
            Roles
          </Link>
        </li>
        <li>
          <Link to={"/admin/company/settings"} id="company">
            Company
          </Link>
        </li>
        <li>
          <Link to={"/admin/settings"} id="settings">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
