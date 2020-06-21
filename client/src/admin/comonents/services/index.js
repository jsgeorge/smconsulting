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
          <div className="cols_head">
            <div className="col id">ID</div>
            <div className="col name">Service</div>
            <div className="col ctgry">Category</div>
            <div className="col desc">Descrtiption</div>
            <div className="col img">Image</div>
            <div className="col cmds">Cmds</div>
          </div>

          {services.map((p) => {
            return (
              <div className="long_pod_admin" key={p._id}>
                {editing === p._id ? (
                  <span>
                    <div className="col id">{p._id}</div>
                    <div className="col name">
                      <input
                        type="text"
                        name="name"
                        id="input"
                        value={edited.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col ctgry">
                      <SelectProperties
                        servicecategory={servicecategory}
                        setservicecategory={setservicecategory}
                        editctgry={edited.category}
                        errors={errors.category}
                      />
                    </div>
                    <div className="col desc">
                      <textarea
                        type="text"
                        name="description"
                        value={edited.description}
                        onChange={handleChange}
                        rows={5}
                      />
                    </div>
                    <div className="col img">
                      {edited.images &&
                      edited.images.length > 0 &&
                      edited.images[0].url ? (
                        <img src={edited.images[0].url} id="img_smalladmin" />
                      ) : (
                        <img
                          src={"/images/noimage.png"}
                          id="img_smalladmin"
                          alt="img"
                        />
                      )}
                      <FileUpload
                        images={images}
                        setImages={setImages}
                        reset={formSuccess}
                      />{" "}
                    </div>
                  </span>
                ) : (
                  <span>
                    <div className="col id">{p._id}</div>
                    <div className="col name">{p.name}</div>
                    <div className="col ctgry">
                      <AdminDetailServCategory id={p.category} />
                    </div>
                    <div className="col desc">
                      {p.description ? (
                        p.description
                      ) : (
                        <span className="has-error">not enterd</span>
                      )}
                    </div>
                    <div className="col img">
                      {p.images && p.images.length > 0 && p.images[0].url ? (
                        <img src={p.images[0].url} id="img_smalladmin" />
                      ) : (
                        <img
                          src={"/images/noimage.png"}
                          id="img_smalladmin"
                          alt="img"
                        />
                      )}
                    </div>
                  </span>
                )}
                <div className="col cmds">
                  <button onClick={() => toggleEdit(p)}>
                    {editing === p._id ? "Submit" : "Edit"}{" "}
                  </button>
                  {editing === p._id ? (
                    <button onClick={() => setEditing(0)}>Cancel</button>
                  ) : null}
                  <button onClick={() => deleteService(p._id)}>Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>NO Current services</p>
      )}
    </div>
  );
}
