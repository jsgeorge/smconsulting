import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { ProductCategoryContext } from "../../../context/product-category-context";
import classnames from "classnames";
const SelectCategories = ({
  label,
  formtype,
  category,
  setcategory,
  editctgry,
  errors,
}) => {
  const { productcategories, setproductcategories } = useContext(
    ProductCategoryContext
  );
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios
          .get("/productcategories")
          .then((res) => {
            setproductcategories(res.data);
            // console.log("selcatgry res.data", res.data);
          })
          .catch((err) => {
            setError(
              "Error Cannot retrieve product categoryies. Network Error"
            );

            console.log(err);
          });
      } catch (err) {
        setError("Error Cannot retrieve product categoryies. Network Error");

        console.log(err);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    //console.log(e.target.value);
    setcategory(e.target.value);
  };
  //console.log("selectcategory editctgry", editctgry);
  if (!productcategories || error)
    return (
      <div className={formtype}>
        <label>{label}</label>
        <br />
        <span className="has-error">{error}</span>
      </div>
    );
  return (
    <div className={classnames(formtype, { "has-error": errors })}>
      {errors ? (
        <span className="help-block" style={{ marginLeft: "120px" }}>
          {errors}
        </span>
      ) : null}
      <label>{label}</label>
      {productcategories ? (
        <select
          name="category"
          style={{ float: "left" }}
          id="category-input"
          onChange={handleChange}
          style={{ color: "#111" }}
        >
          <option value={0}>No Category selected</option>
          {/* <option value={1} selected>Option 1</option>
          <option value={2} >Option 2</option>
          <option vlaue={3}> Option 3</option> */}
          {productcategories &&
            productcategories.map((c) =>
              editctgry && c._id === editctgry._id ? (
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
        <span className="has-error">No categories setup or Error</span>
      )}
    </div>
  );
};

export default SelectCategories;
