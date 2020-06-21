import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ProductCategoryContext } from "../../../context/product-category-context";
//import AdminCategoryForm from "../productcategories/form";

export default function AdminProductCategoriesList() {
  const [error, setError] = useState("");
  const { productcategories, setproductcategories } = useContext(
    ProductCategoryContext
  );
  const [editing, setEditing] = useState(0);
  const [edited, setEdited] = useState({
    name: "",
  });

  const fetchData = async () => {
    // try {
    await axios
      .get("/productcategories")
      .then((res) => {
        setproductcategories(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setError(
          "Error cannont retrieve project productcategories.Network propblem"
        );
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const toggleEdit = (category) => {
    if (editing != category._id) {
      setEdited(category);
      setEditing(category._id);
    } else {
      console.log("id", category._id, "edited", edited);
      axios
        .post(`/productcategories/update?id=${category._id}`, edited)
        .then((res) => {
          //setproductcategories(res.data);
          setEditing(0);
          fetchData();
        })
        .catch((err) => console.log(err));
    }
  };

  const deleteCategory = (id) => {};

  const handleChange = (e) => {
    setEdited({ ...edited, [e.target.name]: e.target.value });
  };

  if (error) return <div className="projects-wrapper">{error}</div>;

  return (
    <div className="projects-wrapper">
      {productcategories ? (
        <div>
          <div>
            {productcategories.map((p) => {
              return (
                <div className="long_pod_admin2" key={p._id}>
                  {editing === p._id ? (
                    <div className="col ctgryname">
                      <input
                        type="text"
                        name="name"
                        value={edited.name}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <div className="col ctgryname">{p.name}</div>
                  )}
                  <span>
                    <button onClick={() => toggleEdit(p)}>
                      {editing === p._id ? "Submit" : "Edit"}{" "}
                    </button>
                    {editing === p._id ? (
                      <button onClick={() => setEditing(0)}>Cancel</button>
                    ) : null}
                    <button onClick={() => deleteCategory(p._id)}>
                      Delete
                    </button>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <p>NO Current productcategories</p>
      )}
    </div>
  );
}
