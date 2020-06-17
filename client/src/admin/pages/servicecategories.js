import React, { useState } from "react";
import "../../admin-styles.css";
import { Link } from "react-router-dom";
import axios from "axios";
import classnames from "classnames";
import AdminServiceCategoriesList from "../comonents/servicecategories";
import AdminHeader from "../layout/header";
import AdminSidebar from "../layout/sidebar";

const AdminServiceCategoryPage = () => {
  const [adding, setAdding] = useState(false);
  const [servicecategory, setservicecategory] = useState();
  const [error, setError] = useState("");
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    setservicecategory(e.target.value);
  };

  const validData = () => {
    let err = {};
    setError({});
    if (!servicecategory) {
      err.servicecategory = "Inalid/Missing servicecategory type";
    }

    //console.log(errs);
    if (!servicecategory) {
      setError(err);
      return false;
    }
    //console.log(errors);
    //if (errors) return false;

    return true;
  };
  const submitservicecategory = async () => {
    if (validData()) {
      console.log("servicecategory", servicecategory);

      try {
        const response = await axios
          .post("/servicecategories", { name: servicecategory })
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
    await submitservicecategory();
  };

  return (
    <div className="body" id="properties">
      <AdminHeader />
      <div className="row">
        <AdminSidebar />
        <div className=" adminContent">
          <h3>Service Categories </h3>
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
                <strong>Add service category </strong>
              </span>
              {formError ? <div className="has-error">{formError}</div> : null}
              <div className={classnames("form-group", { "has-error": error })}>
                {error.servicecategory ? (
                  <span className="help-block">{error.servicecategory}</span>
                ) : (
                  <label>servicecategory Type</label>
                )}
                <br />
                <input
                  name="servicecategory"
                  type="text"
                  value={servicecategory}
                  onChange={handleChange}
                  style={{ width: "300px" }}
                />
                <button
                  type="button"
                  onClick={() => onSubmitAdd()}
                  style={{ clear: "left" }}
                >
                  Submit
                </button>
              </div>
            </div>
          ) : null}
          <AdminServiceCategoriesList />
        </div>
      </div>
    </div>
  );
};

export default AdminServiceCategoryPage;
