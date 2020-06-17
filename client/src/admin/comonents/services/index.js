import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ServiceContext } from "../../../context/service-context";
import AdminDetailServCategory from "../servicecategories/detailproperty";
import AdminSelectProperties from "../servicecategories/selectproperty";
import SelectProperties from "../servicecategories/selectproperty";
import FileUpload from "../../utils/fileupload";

export default function AdminServicesList() {
  const [errors, setErrors] = useState({});
  const [servicecategory, setservicecategory] = useState("");
  const [images, setImages] = useState({});

  const [error, setError] = useState("");
  const [formSuccess, setFormSucess] = useState(false);
  const [formError, setFormError] = useState("");
  const { services, setServices } = useContext(ServiceContext);
  const [editing, setEditing] = useState(0);
  const [edited, setEdited] = useState({
    name: "",
    description: "",
    category: "",
    longdesc: "",
    images: [],
  });

  const fetchData = async () => {
    // try {
    await axios
      .get("/services")
      .then((res) => {
        setServices(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setError("Error cannont retrieve  services.Network propblem");
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const toggleEdit = (Service) => {
    if (editing != Service._id) {
      setEdited(Service);
      setEditing(Service._id);
    } else {
      console.log("id", Service._id, "edited", edited);
      if (images) {
        edited.images = images; //[images];
      }
      console.log("edited", edited);
      axios
        .post(`/services/update?id=${Service._id}`, edited)
        .then((res) => {
          //setservices(res.data);
          setEditing(0);
          fetchData();
        })
        .catch((err) => console.log(err));
    }
  };

  const deleteService = (id) => {
    try {
      axios
        .delete(`/services?id=${id}`)
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
    <div className="admin-products-wrapper">
      {services ? (
        <div>
          {formError ? <div className="has-error">{formError}</div> : null}
          <table>
            <tr>
              <th width="50">Service</th>
              <th width="200">Category</th>
              <th width="200">Description</th>
              <th width="200">Image</th>
            </tr>
            {services.map((p) => {
              return (
                <tr key={p._id}>
                  {editing === p._id ? (
                    <span>
                      <td>
                        <input
                          type="text"
                          name="name"
                          id="input"
                          value={edited.name}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <SelectProperties
                          servicecategory={servicecategory}
                          setservicecategory={setservicecategory}
                          editctgry={edited.category}
                          errors={errors.category}
                        />
                      </td>
                      <td>
                        <textarea
                          type="text"
                          name="description"
                          value={edited.description}
                          onChange={handleChange}
                          rows={5}
                        />
                      </td>
                      <td>
                        {edited.images &&
                        edited.images.length > 0 &&
                        edited.images[0].url ? (
                          <img
                            src={edited.images[0].url}
                            id="img_small"
                            style={{ marginLeft: "30px" }}
                          />
                        ) : (
                          <img
                            src={"/images/noimage.png"}
                            id="img_small"
                            alt="img"
                          />
                        )}
                        <FileUpload
                          images={images}
                          setImages={setImages}
                          reset={formSuccess}
                        />{" "}
                      </td>
                    </span>
                  ) : (
                    <span>
                      <td width={450}>{p.name}</td>
                      <td width={300}>
                        <AdminDetailServCategory id={p.category} />
                      </td>
                      <td width={300}>
                        {p.description ? (
                          p.description
                        ) : (
                          <span className="has-error">not enterd</span>
                        )}
                      </td>
                      <td width={200}>
                        {p.images && p.images.length > 0 && p.images[0].url ? (
                          <img src={p.images[0].url} id="img_small2" />
                        ) : (
                          <img
                            src={"/images/noimage.png"}
                            id="img_small2"
                            alt="img"
                          />
                        )}
                      </td>
                    </span>
                  )}
                  <td>
                    <button onClick={() => toggleEdit(p)}>
                      {editing === p._id ? "Submit" : "Edit"}{" "}
                    </button>
                    {editing === p._id ? (
                      <button onClick={() => setEditing(0)}>Cancel</button>
                    ) : null}
                    <button onClick={() => deleteService(p._id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      ) : (
        <p>NO Current services</p>
      )}
    </div>
  );
}
