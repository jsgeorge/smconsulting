import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ServiceContext } from "../../context/service-context";

const ServicesList = ({ show, col }) => {
  // const { services, setServices } = useContext(ServiceContext);
  const [services, setServices] = useState([]);
  const [limit, setLimit] = useState(0);
  const [id, setid] = useState("");
  const [error, setError] = useState("");
  const [cols, setcols] = useState("");
  useEffect(() => {
    switch (col) {
      case 4:
        setcols("col-md-3");
        break;
      case 3:
        setcols("col-md-4");
        break;
      case 2:
        setcols("col-md-6");
        break;
      case 1:
        setcols("col-md-12");
      default:
        setcols("col-md-4");
    }
  });
  const fetchData = async () => {
    let filters = [];
    filters = { filters: [{ category: show }] };

    const response = await axios
      .post("/services/view", filters)
      .then((res) => {
        setServices(res.data);
      })
      .catch((err) => {
        setError("Error could not retrive services. Netowrk error");
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const renderCardImage = (images, id) => {
    if (images && images.length > 0) return <img src={images[0].url} id={id} />;
  };

  // if (error) return <div className="has-err2">{error}</div>;
  // if (!services || services.length == 0)
  //   return (
  //     <div className="has-error2">
  //       No current services for selected criteriea
  //     </div>
  //   );
  return (
    <div>
      {show ? (
        <div className="row">
          {services.map((c) => (
            <div className={cols} key={c._id} id="service-item">
              {show == "Financial Management"
                ? renderCardImage(c.images, "img_med2")
                : show != "other"
                ? renderCardImage(c.images, "img_med")
                : null}

              {show != "Other" ? (
                <h4>{c.name}</h4>
              ) : (
                <div className="other-categories">{c.name}</div>
              )}

              {c.description ? (
                <span>
                  <p> {c.description}</p>
                  {show == "Online" ? (
                    <Link
                      to={`/model/service/${c.name}/${c._id}`}
                      key={c._id}
                      className="btnLink"
                    >
                      Show More
                    </Link>
                  ) : null}
                </span>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ServicesList;
