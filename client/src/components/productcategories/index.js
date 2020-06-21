import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ProductCategoryContext } from "../../context/product-category-context";

const ProductCategoryList = () => {
  const [error, setError] = useState("");
  const { productcategories, setproductcategories } = useContext(
    ProductCategoryContext
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios
          .get("/productcategories")
          .then((res) => {
            setproductcategories(res.data);
          })
          .catch((err) => {
            setError(
              "Error. could not retrieve productcategories. Network error"
            );
            console.log(err);
          });
      } catch (err) {
        setError("Error. could not retrieve productcategories. Network error");
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
    <div>
      {productcategories && productcategories.length > 0 ? (
        <span>
          <Link to={`/listings/filterproducts/all`}>Show All</Link>
          {"  /  "}
          {productcategories.map((c) => (
            <span key={c._id}>
              <Link
                style={{ margin: "0 10px", color: "green" }}
                to={`/listings/filterproducts/${c.name}/${c._id}`}
              >
                {c.name}
              </Link>
              {"  /  "}
            </span>
          ))}
        </span>
      ) : (
        <p className="no-items">No current categeories</p>
      )}
    </div>
  );
};

export default ProductCategoryList;
