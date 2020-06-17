import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import FileUpload from "../../utils/fileupload";
import axios from "axios";
import SelectCategories from "../productcategories/selectcategory";
//import { flashErrorMessage } from "../layout/flash-message";
import classnames from "classnames";

const AdminAddProductForm = () => {
  const [errors, setErrors] = useState({});

  //fields definition
  const [prodname, setprodname] = useState("");
  const [category, setcategory] = useState("");
  const [proddescription, setproddescription] = useState("");
  const [error, setError] = useState("");
  //editedd filds
  const [edited, setEdited] = useState({
    name: "",
    category: "",
    description: "",
    images: [],
  });

  //form operations
  const [formSuccess, setFormSucess] = useState(false);
  const [formError, setFormError] = useState(false);
  const [images, setImages] = useState({});
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {});

  const handleChange = (e) => {
    setEdited({ ...edited, [e.target.name]: e.target.value });
  };

  const validData = () => {
    let errs = {};
    setErrors({});
    const { name, category } = edited;
    if (!name) {
      errs.name = "Inalid/Missing product name";
    }

    if (!category) {
      errs.category = "inalid/missing category";
    }

    //console.log(errs);
    if (!name || !category) {
      setErrors(errs);
      return false;
    }
    //console.log(errors);
    //if (errors) return false;

    return true;
  };
  const submitProduct = async () => {
    if (category) {
      edited.category = category;
    }

    if (images) {
      edited.images = images; //[images];
    }
    //let h = edited.headline;
    //if (!edited.headline) h = projheadline;

    if (validData()) {
      // let projdata = {
      //   name: edited.name,
      //   category: edited.category,
      //   property: edited.property,
      //   location: edited.location,
      //   city: edited.city,
      //   state: edited.state,
      //   area: edited.area,
      //   cost: edited.cost,
      //   headline: edited.headline,
      //   description: edited.description,
      //   images: edited.images,
      // };

      //console.log("projdata", edited);

      try {
        const response = await axios
          .post("/products/add", edited)
          .then((res) => {
            setRedirect(true);
          })
          .catch((err) => {
            console.log(err);
            setFormError("Could add update document to file, Unknown error");
          });
      } catch (error) {
        setFormError("Could not add document to file, Unknown error");
        console.log(error);
        //flashErrorMessage(dispatch, error);
      }
    }
  };
  const onSubmit = async () => {
    await submitProduct();
  };

  if (redirect) {
    return <Redirect to={`/admin/products`} />;
  }

  return (
    <div className="admin-edit-project">
      <div className="form">
        {formError ? <div className="has-error">{formError}</div> : null}
        {error ? <div className="has-error">{error}</div> : null}
        <div className="row">
          <div className="col-md-6">
            <div className={classnames("form-group", { "has-error": errors })}>
              {errors.name ? (
                <span className="help-block">{errors.name}</span>
              ) : (
                <label>Product Name</label>
              )}
              <input
                name="name"
                type="text"
                value={edited.name}
                onChange={handleChange}
              />
            </div>
            <SelectCategories
              category={category}
              setcategory={setcategory}
              editctgry={edited.category}
              errors={errors.category}
            />{" "}
            <br />
            <div className="form-group">
              <label>Description</label>

              <textarea
                name="description"
                className="form-control"
                value={edited.description}
                onChange={handleChange}
              
                rows="12"
              />
            </div>
          </div>
          <div className="col-md-5 pull-right">
            <label>Product Images</label>
            <div className="edit-image-wrapper">
              {edited.images && images.length > 0 ? (
                images.map((i) => (
                  <img src={i.url} id="img_sm" alt="No Image" />
                ))
              ) : (
                <span>NO Image</span>
              )}
            </div>
            <div className="form-group">
              <FileUpload
                images={images}
                setImages={setImages}
                reset={formSuccess}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-group2">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onSubmit()}
              style={{ clear: "left" }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAddProductForm;
