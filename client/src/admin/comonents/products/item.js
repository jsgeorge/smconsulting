import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Moment from "moment";
import AdminDetailProdCategory from "../productcategories/detailcategory";

const AdminProductItem = ({ product }) => {
  const displayDate = (d) => {
    return Moment(d).format("YYYY");
  };

  const renderCardImage = (images) => {
    if (images.length > 0) return images[0].url; //images[0].url;
  };
  const { _id, name, category, images } = product;

  return (
    <div className="long_pod_admin">
      <div className="row">
        <div className="col-md-3" style={{ width: "140px" }}>
          {_id}
        </div>
        <div className="col-md-3" style={{ width: "360px" }}>
          {name}
        </div>
        <div className="col-md-2">
          {category ? (
            <span>
              <AdminDetailProdCategory id={category} />
            </span>
          ) : (
            <span className="has-error">Not selected</span>
          )}
        </div>

        <div className="col-md-3 paddiing">
          {images && images.length > 0 && images[0].url ? (
            <img src={images[0].url} id="img_small" />
          ) : (
            "no image"
          )}
        </div>
        <div className="col-md-1">
          <Link to={`/admin/products/${_id}/detail`} className="btnLink">
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};
export default AdminProductItem;
