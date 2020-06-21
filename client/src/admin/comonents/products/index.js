import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import { ProductContext } from "../../../context/product-context";
import AdminProductItem from "./item";

export default function AdminProductList({ products, srch }) {
  return (
    <div className="admin-products-wrapper">
      {/* {category ? <h2> {category}</h2> : <h2> Recent products</h2>} */}
      <div className="cols_head">
        <div className="col id">ID</div>
        <div className="col name">Name</div>
        <div className="col ctgry">Category</div>
        <div className="col desc">Descrtiption</div>
        <div className="col img">Image</div>
        <div className="col cmds">Cmds</div>
      </div>
      {products && products.length > 0 ? (
        products.map((p) => <AdminProductItem key={p._id} product={p} />)
      ) : (
        <p>NO Current products</p>
      )}
    </div>
  );
}
