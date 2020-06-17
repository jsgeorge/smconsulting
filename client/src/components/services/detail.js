import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ServiceContext } from "../../context/service-context";

export default function ServiceDetail({ id }) {
  const [error, setError] = useState("");
  const [service, setService] = useState({}); //useContext(serviceContext);
  const { header, setHeader } = useState("");

  useEffect(() => {
    let filters = [];
    console.log("detail", id);
    const fetchData = async () => {
      try {
        const response = await axios
          .get(`/services/id?id=${id}`)
          .then((res) => {
            setService(res.data[0]);
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
        setError("Error cannot show the curent service");
      }
    };
    fetchData();
  }, []);
  if (error) {
    return <div className="services-wrapper">{error}</div>;
  }
  const { _id, name, desc, longdesc, images } = service;

  return (
    <div className="detail-wrapper">
      <h1>Services</h1>
      <h3>{name}</h3>
      {service ? (
        <span>
          {images && images.length > 0 ? (
            <img src={images[0].url} id="img_full" />
          ) : null}

          <p style={{ color: "#888" }}>{longdesc}</p>
        </span>
      ) : (
        <p>NO Current service</p>
      )}
    </div>
  );
}
