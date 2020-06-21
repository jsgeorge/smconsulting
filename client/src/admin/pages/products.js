import React, { useState, useEffect, useContext } from "react";
import "../../admin-styles.css";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { ProductContext } from "../../context/product-context";
import { ProductCategoryContext } from "../../context/product-category-context";
import AdminHeader from "../layout/header";
import AdminSidebar from "../layout/sidebar";
import AdminCommandLine from "../layout/cmdline";
import AdminProductList from "../comonents/products";
import SelectCategories from "../comonents/productcategories/selectcategory";

const AdminProductsPage = () => {
  const [srch, setSrch] = useState("");
  const [error, setError] = useState("");
  const { products, setproducts } = useContext(ProductContext);
  const { productcategories, setproductcategories } = useContext(
    ProductCategoryContext
  );
  const [redirect, setRedirect] = useState(false);
  const [header, setHeader] = useState("");
  const [defaultlist, setDefaultlist] = useState(false);
  const [category, setcategory] = useState("");

  useEffect(() => {
    if (!localStorage.jwtToken) setRedirect(true);
    // const fetchProperties = async () => {
    //   try {
    //     const response = await axios
    //       .get("/productcategories")
    //       .then((res) => {
    //         setproductcategories(res.data);
    //       })
    //       .catch((err) => {
    //         setError("Error. could not retrieve categories. Network error");
    //         console.log(err);
    //       });
    //   } catch (err) {
    //     setError("Error. could not retrieve categories. Network error");
    //     console.log(err);
    //   }
    // };
    // fetchProperties();

    let filters = [];
    let limit = { limit: 5000 };

    const fetchData = async () => {
      const response = await axios
        .post("/products/view", limit)
        .then((res) => {
          setproducts(res.data.articles);
        })
        .catch((err) => {
          setError("Error cannot show products, Network Error");
          console.log(err);
        });
    };
    fetchData();
  }, []);

  const searchproducts = (srchby, id) => {
    setHeader(srch);
    console.log(srchby, id);
    let filters = [];
    if (srchby == "byname") filters = { filters: [{ name: srch }] };
    else if (srchby == "byid") filters = { filters: [{ id: srch }] };
    else if (srchby == "byctgry") {
      filters = { filters: [{ category: id }] };
    }
    axios
      .post("/products/view", filters)
      .then((res) => {
        setproducts(res.data.articles);
        setDefaultlist(true);
      })
      .catch((err) => {
        setError("Error cannot show products, Network Error");
        console.log(err);
      });
  };
  const defaltproducts = () => {
    setHeader("");
    setSrch("");
    setDefaultlist(false);
    axios
      .post("/products/view")
      .then((res) => {
        setproducts(res.data.articles);
      })
      .catch((err) => {
        setError("Error cannot show products, Network Error");
        console.log(err);
      });
  };

  const handleChangeProp = (e) => {
    //console.log(e.target.value);
    //setProjproperty(e.target.value);
    searchproducts("byprop", e.target.value);
  };
  const onFilterCategory = () => {
    searchproducts("byctgry", category);
  };
  if (redirect) return <Redirect to="/admin" />;
  return (
    <div className="bodyadmin" id="products">
      <AdminHeader />
      <div className="row">
        <AdminSidebar />
        <div className="adminContent">
          <h3>Products</h3>
          <div className="cmd-line">
            <Link to="/admin" className="btnLinkadmin">
              Close
            </Link>
            <Link to="/admin/products/add" className="btnLinkadmin">
              Add
            </Link>
            {defaultlist ? (
              <button onClick={() => defaltproducts()} className="btnLink2">
                Default
              </button>
            ) : null}
            <div className="cmd-form-srch">
              <label style={{ width: "60px" }}>Search</label>
              <input
                type="text"
                value={srch}
                placeholder=""
                onChange={(e) => setSrch(e.target.value)}
              />
              {/* <Link to={`/admin/products/search/${srchstr}`}>GO</Link> */}
              <button onClick={() => searchproducts("byname")}>byName</button>
              {/* <button onClick={() => searchproducts("byid")}>byId</button> */}
            </div>
            {/* <div className="cmd-form">
              Filer Category
              <select>
                <option>Select</option>
              </select>
            </div> */}
            <SelectCategories
              label="Filter Category"
              formtype="cmd-form"
              category={category}
              setcategory={setcategory}
            />
            <button onClick={() => onFilterCategory()}>GO</button>
          </div>
          <div style={{ clear: "left", marginTop: "30px" }}>
            {" "}
            {header ? <h3>Search Products: {header}</h3> : null}
          </div>
          {error ? (
            <div className="has-error">{error}</div>
          ) : (
            <AdminProductList products={products} />
          )}
          <div className="row" />
        </div>
      </div>
    </div>
  );
};

export default AdminProductsPage;
