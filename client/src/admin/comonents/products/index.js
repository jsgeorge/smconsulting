import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import { ProductContext } from "../../../context/product-context";
import AdminProductItem from "./item";
import AdminDetailProdCategory from "../productcategories/detailcategory";

export default function AdminProductList({ products, srch, error }) {
  // const [error, setError] = useState("");
  // const { products, setproducts } = useContext(ProductContext);
  // const { header, setHeader } = useState("");
  // useEffect(() => {
  //   console.log("products index page", show, srchstr);
  //   let limit = { limit: 5000 };

  //   let filters = [];
  //   const fetchData = async () => {
  //     // try {
  //     if (srchstr) {
  //       filters = { filters: [{ name: srchstr }] };
  //       const response = await axios
  //         .post("/products/view", filters)
  //         .then((res) => {
  //           setproducts(res.data.articles);
  //         })
  //         .catch((err) => {
  //           setError("Error cannot show products, Network Error");
  //           console.log(err);
  //         });
  //     } else if (category) {
  //       filters = { filters: [{ category: id }] };
  //       const response = await axios
  //         .post("/products/view", filters)
  //         .then((res) => {
  //           setproducts(res.data.articles);
  //         })
  //         .catch((err) => {
  //           setError("Error cannot show products, Network Error");
  //           console.log(err);
  //         });
  //     } else {
  //       const response = await axios
  //         .post("/products/view", limit)
  //         .then((res) => {
  //           setproducts(res.data.articles);
  //         })
  //         .catch((err) => {
  //           setError("Error cannot show products, Network Error");
  //           console.log(err);
  //         });
  //     }
  //   };
  //   fetchData();
  // }, []);
  // if (error)
  //   return (
  //     <div className="has-error">{error} Contact you system asministrator</div>
  //   );
  return (
    <div className="admin-products-wrapper">
      {/* {category ? <h2> {category}</h2> : <h2> Recent products</h2>} */}
      <table>
        <tr>
          <th width="100">#ID</th>
          <th width="300">Product</th>
          <th>Category</th>
          <th>Image</th>
          <th>Commands</th>
        </tr>

        {products ? (
          products.map((p) => (
            <tr key={p._id}>
              <td>{p._id}</td>
              <td>{p.name}</td>

              <td>
                {p.category ? (
                  <span>
                    <AdminDetailProdCategory id={p.category} />
                  </span>
                ) : (
                  <span className="has-error">Not selected</span>
                )}
              </td>

              <td>
                {p.images && p.images.length > 0 && p.images[0].url ? (
                  <img src={p.images[0].url} id="img_small" />
                ) : (
                  "no image"
                )}
              </td>
              <td>
                <Link
                  to={`/admin/products/${p._id}/detail`}
                  className="btnLink"
                >
                  Edit
                </Link>
              </td>
            </tr>
            //  <AdminProductItem key={p._id} project={p} />
          ))
        ) : (
          <tr>NO Current products</tr>
        )}
      </table>
    </div>
  );
}
