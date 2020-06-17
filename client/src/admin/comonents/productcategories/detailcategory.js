import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
//import { ProductCategoryContext } from "../../../context/product-category-context";

const AdminDetailProdCategory = ({ id }) => {
  const [error, setError] = useState("");
  const [category, setCategory] = useState(""); //useContext(ProductCategoryContext);

  useEffect(() => {
    let filters = [];
    const fetchData = async () => {
      try {
        const response = await axios
          .get(`/productcategories/name?id=${id}`)
          .then((res) => {
            setCategory(res.data[0].name);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
        setError("Error cannot show the curent category");
      }
    };
    fetchData();
  }, []);

  return (
    <span>
      {category ? (
        <span>{category}</span>
      ) : (
        <span className="has-error">Not found</span>
      )}
    </span>
  );
};

export default AdminDetailProdCategory;
