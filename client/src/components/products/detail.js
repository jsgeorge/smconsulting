import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/product-context";

export default function ProductDetail({ id }) {
  const [error, setError] = useState("");
  const [project, setProject] = useState({}); //useContext(ProductContext);
  const { header, setHeader } = useState("");

  useEffect(() => {
    let filters = [];
    console.log("detail", id);
    const fetchData = async () => {
      try {
        const response = await axios
          .get(`/products/article?id=${id}`)
          .then((res) => {
            setProject(res.data[0]);
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
        setError("Error cannot show the curent project");
      }
    };
    fetchData();
  }, []);
  if (error) {
    return <div className="projects-wrapper">{error}</div>;
  }
  const { _id, name, category, images, description, longdesc } = project;
  const renderCardImage = (i, id) => {
    if (i) return <img src={i.url} id={id} />;
  };
  return (
    <div className="detail-wrapper">
      {project ? (
        <div className="row">
          <div className="col-md-8">
            {images && images.length > 0 && images[0].url ? (
              <img src={images[0].url} id="img_med" />
            ) : null}

            <p>{longdesc ? longdesc : null}</p>
          </div>

          <div className="col-md-4">
            {/* <h1>{name}</h1>
            <strong>Category:</strong> <br />
            */}
          </div>
        </div>
      ) : (
        <p>NO Current project</p>
      )}
    </div>
  );
}
