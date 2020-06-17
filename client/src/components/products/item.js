import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Moment from "moment";

const ProjectItem = ({ show, project }) => {
  const displayDate = (d) => {
    return Moment(d).format("YYYY");
  };

  const renderCardImage = (images, id) => {
    if (images && images.length > 0) return <img src={images[0].url} id={id} />;
  };
  const {
    _id,
    name,
    category,
    images,
    description,
    location,
    headline,
    type,
    cost,
    area,
    startdate,
  } = project;
  if (show) {
    console.log("show", show);
  }
  if (show == "gallery")
    return (
      <div className="col-md-4 projectitem">
        {/* {images && images.length > 0 && images[0].url ? (
          <img src={images[0].url} id="img_gallery" />
        ) : null} */}
        {renderCardImage(images, "img_sm")}
        <h3>
          <span className="project-name">{name}</span>
        </h3>
      </div>
    );
  if (show == "allgallery")
    return (
      <div className="col-md-4 projectitem">
        {/* {images && images.length > 0 && images[0].url ? (
          <img src={images[0].url} id="img_gallery" />
        ) : null} */}
        {renderCardImage(images, "img_small")}
      </div>
    );
  if (show == "latestprojects")
    return (
      <div className="col-md-4 projectitem">
        {/* <Link to={`/projects/${_id}/detail`}> */}
        <Link to={`/detail/products/${name}/${_id}/`}>
          <p>
            {/* {images && images.length > 0 && images[0].url ? (
              <img src={images[0].url} id="img_small" />
            ) : null} */}
            {renderCardImage(images, "img_sm")}
            <span>
              {/* <span className="project-name">{name}</span>
            <br /> */}
              <h3>
                <span className="project-name">{name}</span>
              </h3>
              <span className="propertyfont">{headline}</span>
            </span>
          </p>
        </Link>
      </div>
    );

  return (
    <div className="col-md-4 projectitem">
      <Link to={`/detail/products/${name}/${_id}/`}>
        <p>
          {renderCardImage(images, "img_sm")}
          <span>
            <h4>
              <span className="project-name">{name}</span>
            </h4>{" "}
            <span className="propertyfont">{description}</span>
          </span>
        </p>
      </Link>
    </div>
  );
};
export default ProjectItem;
