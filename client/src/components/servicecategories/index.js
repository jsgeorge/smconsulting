import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ServiceCategoryContext } from "../../context/service-category-context";

const PropertyList = () => {
  const [error, setError] = useState("");
  const { properties, setProperties } = useContext(ServiceCategoryContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios
          .get("/properties")
          .then((res) => {
            setProperties(res.data);
          })
          .catch((err) => {
            setError("Error. could not retrieve properties. Network error");
            console.log(err);
          });
      } catch (err) {
        setError("Error. could not retrieve properties. Network error");
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const renderCardImage = (images, id) => {
    if (images && images.length > 0) return <img src={images[0].url} id={id} />;
  };
  if (error) return <div className="has-error2">{error}</div>;

  return (
    <div className="row">
      <div className="col-md-3 ">
        <Link to={`/listings/allprojects/All Projects/'${""}'`}>
          <h4>All Projects</h4>
        </Link>
      </div>
      {properties && properties.length > 0 ? (
        <span>
          {properties.map((c) => (
            <div className="col-md-3 ">
              <Link
                to={`/listings/filterprojects/${c.name}/${c._id}`}
                key={c._id}
              >
                <h4>{c.name}</h4>
              </Link>
            </div>
          ))}
        </span>
      ) : (
        <p className="no-items">No current categeories</p>
      )}
    </div>
  );
};

export default PropertyList;
