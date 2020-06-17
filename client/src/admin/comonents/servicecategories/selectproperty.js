import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { ServiceCategoryContext } from "../../../context/service-category-context";
import classnames from "classnames";
const Selectservicecategories = ({
  category,
  setcategory,
  editctgry,
  errors,
}) => {
  const { servicecategories, setservicecategories } = useContext(
    ServiceCategoryContext
  );

  useEffect(() => {
    const fetchservicecategories = async () => {
      try {
        const response = await axios
          .get("/servicecategories")
          .then((res) => {
            setservicecategories(res.data);
            //console.log("selprops res.data", res.data);
          })
          .catch((err) => {
            console.log("error in selectservicecategories", err);
          });
      } catch (err) {
        console.log(err);
      }
    };
    fetchservicecategories();
  }, []);

  const handleChange = (e) => {
    //console.log(e.target.value);
    setcategory(e.target.value);
  };
  //console.log("selectproperty-  editctgry", editctgry);

  return (
    <div className={classnames("form-group", { "has-error": errors })}>
      {errors ? <span className="help-block">{errors}</span> : null}

      {servicecategories ? (
        <select name="category" id="property-input" onChange={handleChange}>
          <option className="has-error" value={0}>
            No property selected
          </option>
          {servicecategories &&
            servicecategories.map((c) =>
              editctgry && c._id === editctgry ? (
                <option key={c._id} value={c._id} selected>
                  {c.name}
                </option>
              ) : (
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              )
            )}
        </select>
      ) : (
        <span className="has-error">No servicecategories setup or error</span>
      )}
    </div>
  );
};

export default Selectservicecategories;
