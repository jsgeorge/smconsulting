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
  const { _id, name, category, description, images } = product;

  return (
    <div className="long_pod_admin">
      <div className="col id">{_id}</div>
      <div className="col name">{name}</div>
      <div className="col ctgry">
        {category ? (
          <span>
            <AdminDetailProdCategory id={category} />
          </span>
        ) : (
          <span className="has-error">Not selected</span>
        )}
      </div>
      <div className="col desc">{description}</div>
      <div className="col img">
        {images && images.length > 0 && images[0].url ? (
          <img src={images[0].url} id="img_smalladmin" />
        ) : (
          "no image"
        )}
      </div>
      <div className="col cmds">
        <Link to={`/admin/products/${_id}/detail`} className="btnLinkadmin">
          View
        </Link>
        <Link to={`/admin/products/${_id}/edit`} className="btnLinkadmin">
          Edit
        </Link>
      </div>
    </div>
  );
};
export default AdminProductItem;
