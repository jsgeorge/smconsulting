import React, { useState, useEffect, useContext } from "react";
import "../../admin-styles.css";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import classnames from "classnames";
import AdminServicesList from "../comonents/services";
import AdminHeader from "../layout/header";
import AdminSidebar from "../layout/sidebar";

const AdminServicesPage = () => {
  const [adding, setAdding] = useState(false);
  const [service, setService] = useState();
  const [desc, setDesc] = useState();
  const [error, setError] = useState("");
  const [formError, setFormError] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!localStorage.jwtToken) setRedirect(true);
  });
  const handleChange = (e) => {
    setService(e.target.value);
  };

  const validData = () => {
    let err = {};
    setError({});
    if (!service) {
      err.service = "Inalid/Missing service type";
    }
    if (!desc) {
      err.service = "Inalid/Missing service type";
    }
    //console.log(errs);
    if (!service | !desc) {
      setError(err);
      return false;
    }
    //console.log(errors);
    //if (errors) return false;

    return true;
  };
  const submitservice = async () => {
    if (validData()) {
      console.log("service", service);

      try {
        const response = await axios
          .post("/services", { name: service })
          .then((res) => {
            setAdding(false);
          })
          .catch((err) => {
            console.log(err);
            setFormError("Could add  document to file, Unknown error");
          });
      } catch (error) {
        setFormError("Could not add document to file, Unknown error");
        console.log(error);
        //flashErrorMessage(dispatch, error);
      }
    }
  };
  const onSubmitAdd = async () => {
    await submitservice();
  };
  if (redirect) return <Redirect to="/admin" />;

  return (
    <div className="bodyadmin" id="services">
      <AdminHeader />
      <div className="row">
        <AdminSidebar />
        <div className=" adminContent">
          <h3>Services</h3>
          <div className="cmd-line">
            <Link to="/admin" className="btnLink">
              Close
            </Link>
            <button
              style={{ width: "100px" }}
              onClick={() => setAdding(!adding)}
              className="btnLink2"
            >
              {!adding ? "Add" : "Cancel Add"}
            </button>
            <div className="cmd-form-srch">
              Search <input />
              <button>GO</button>
            </div>
          </div>
          {adding ? (
            <div className="form">
              <span>
                <strong>Add service</strong>
              </span>
              {formError ? <div className="has-error">{formError}</div> : null}

              <div className={classnames("form-group", { "has-error": error })}>
                {error.service ? (
                  <span className="help-block">{error.service}</span>
                ) : (
                  <label>Service Name</label>
                )}
                <br />
                <input
                  name="service"
                  type="text"
                  value={service}
                  onChange={handleChange}
                  style={{ width: "300px" }}
                />
              </div>
              <div className={classnames("form-group", { "has-error": error })}>
                {error.service ? (
                  <span className="help-block">{error.desc}</span>
                ) : (
                  <label>Description</label>
                )}
                <textarea
                  type="text"
                  name="desc"
                  value={desc}
                  onChange={handleChange}
                  rows={3}
                />
              </div>

              <button
                type="button"
                onClick={() => onSubmitAdd()}
                style={{ clear: "left" }}
              >
                Submit
              </button>
            </div>
          ) : null}

          <AdminServicesList />
        </div>
      </div>
    </div>
  );
};

export default AdminServicesPage;
