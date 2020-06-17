import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ServiceCategoryContext } from "../../../context/service-category-context";
//import AdminpropertyForm from "../servcategories/form";

export default function AdminservcategoriesList() {
  const [error, setError] = useState("");
  const [formError, setFormError] = useState("");

  const { servicecategories, setservicecategories } = useContext(
    ServiceCategoryContext
  );
  const [editing, setEditing] = useState(0);
  const [edited, setEdited] = useState({
    name: "",
  });

  const fetchData = async () => {
    // try {
    await axios
      .get("/servicecategories")
      .then((res) => {
        setservicecategories(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setError(
          "Error cannont retrieve project servcategories.Network propblem"
        );
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const toggleEdit = (property) => {
    if (editing != property._id) {
      setEdited(property);
      setEditing(property._id);
    } else {
      console.log("id", property._id, "edited", edited);
      axios
        .post(`/servcategories/update?id=${property._id}`, edited)
        .then((res) => {
          //setservicecategories(res.data);
          setEditing(0);
          fetchData();
        })
        .catch((err) => console.log(err));
    }
  };

  const deleteproperty = (id) => {
    try {
      axios
        .delete(`/servcategories?id=${id}`)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
          setFormError("Could delete document from file, Unknown error");
        });
    } catch (error) {
      setFormError("Could not delete document from file, Unknown error");
      console.log(error);
      //flashErrorMessage(dispatch, error);
    }
  };

  const handleChange = (e) => {
    setEdited({ ...edited, [e.target.name]: e.target.value });
  };

  if (error) return <div className="projects-wrapper">{error}</div>;

  return (
    <div className="projects-wrapper">
      {servicecategories ? (
        <div>
          {formError ? <div className="has-error">{formError}</div> : null}

          <div>
            {servicecategories.map((p) => {
              return (
                <div className="long_pod_admin2" key={p._id}>
                  {editing === p._id ? (
                    <input
                      type="text"
                      name="name"
                      value={edited.name}
                      onChange={handleChange}
                    />
                  ) : (
                    <>
                      {p.name} {p.description}
                    </>
                  )}
                  <span style={{ float: "right" }}>
                    <button onClick={() => toggleEdit(p)}>
                      {editing === p._id ? "Submit" : "Edit"}{" "}
                    </button>
                    {editing === p._id ? (
                      <button onClick={() => setEditing(0)}>Cancel</button>
                    ) : null}
                    <button onClick={() => deleteproperty(p._id)}>
                      Delete
                    </button>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <p>NO Current servcategories</p>
      )}
    </div>
  );
}
