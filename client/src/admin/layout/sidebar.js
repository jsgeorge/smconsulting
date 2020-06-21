import React from "react";
import { Link, Redirect } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="leftBar">
      {/* <h4>File Maintainance</h4> */}
      <ul id="fileMenu">
        <li>
          <Link to={"/admin/products"} id="productsLink">
            Products
          </Link>
        </li>
        <li>
          <Link to={"/admin/productcategories"} id="prodctgryLink">
            Product Categories
          </Link>
        </li>

        <li>
          <Link to={"/admin/services"} id="servicesLink">
            Services
          </Link>
        </li>
        <li>
          <Link to={"/admin/servicecategories"} id="servctgryLink">
            Service Categories
          </Link>
        </li>

        <li>
          <Link to={"/admin/users/roles"} id="rolesLink">
            Roles
          </Link>
        </li>
        <li>
          <Link to={"/admin/company/settings"} id="companyLink">
            Company
          </Link>
        </li>
        <li>
          <Link to={"/admin/settings"} id="settingsLink">
            Settings
          </Link>
        </li>
        <li>
          <Link to={"/admin/users"} id="usersLink">
            Users
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
