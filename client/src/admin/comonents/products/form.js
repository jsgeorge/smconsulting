import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import FileUpload from "../../utils/fileupload";
import classnames from "classnames";
import axios from "axios";
import SelectCategories from "../productcategories/selectcategory";
//import { flashErrorMessage } from "../layout/flash-message";

const AdminProductForm = ({ id }) => {
  const [errors, setErrors] = useState({});

  //fields definition
  const [featured, setFeatured] = useState(false);
  const [projname, setProjname] = useState();
  const [category, setcategory] = useState("");
  const [projdescription, setProjdescription] = useState("");
  const [error, setError] = useState("");
  const [edited, setEdited] = useState({});
  const [header, setHeader] = useState("");
  const [header2, setHeader2] = useState("");

  //form operations
  const [formSuccess, setFormSucess] = useState(false);
  const [formError, setFormError] = useState(false);
  const [images, setImages] = useState({});
  const [redirect, setRedirect] = useState(false);

  const fetchData = async () => {
    console.log("id", id);
    try {
      const response = await axios
        .get(`/products/article?id=${id}`)
        .then((res) => {
          setEdited(res.data[0]);
          console.log("product", res.data[0]);
        })
        .catch((err) => {
          setError(
            "Error cannont retrieve product properties.Network propblem"
          );
          console.log(err);
        });
    } catch (error) {
      console.log(error);
      setError("Error cannot show the curent product");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setEdited({ ...edited, [e.target.name]: e.target.value });
  };

  const validData = () => {
    let errs = {};
    setErrors({});
    const { name, category } = edited;
    if (!name) {
      errs.name = "Inalid/Missing iem name";
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
  const submitproduct = async () => {
    if (category) {
      edited.category = category;
    }

    if (images) {
      edited.images = images;
    }

    if (validData()) {
      let projdata = {};

      projdata = {
        name: edited.name,
        category: edited.category,
        description: edited.description,

        images: edited.images,
      };

      console.log("projdata", projdata);
      try {
        const response = await axios
          .post(`/products/update?id=${id}`, projdata)
          .then((res) => {
            setRedirect(true);
          })
          .catch((err) => {
            setFormError("Could not update document to file, Unknown error");
            console.log(err);
          });
      } catch (error) {
        setFormError("Could not update document to file, Unknown error");
        console.log(error);
        //flashErrorMessage(dispatch, error);
      }
    }
  };
  const updateFeatured = () => {
    let rec = {
      ...edited,
      featured: !featured,
    };
    try {
      axios
        .post(`/products/feature?id=${id}`, rec)
        .then((res) => {
          setRedirect(true);
        })
        .catch((err) => {
          setFormError("Could not update document to file, Unknown error");
          console.log(err);
        });
    } catch (error) {
      setFormError("Could not update document to file, Unknown error");
      console.log(error);
      //flashErrorMessage(dispatch, error);
    }
  };
  const onSubmit = async () => {
    await submitproduct();
  };

  if (redirect) {
    return <Redirect to={`/admin/products/${id}/detail`} />;
  }

  //if (!edited) return <div>Unable to retrieve edit product document</div>;
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
                <label>product Name</label>
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
                className="form-control2"
                value={edited.description}
                onChange={handleChange}
                rows="10"
              />
            </div>
          </div>
          <div className="col-md-5 pull-right">
            <div className="form-group">
              <label>product Image</label>
              <br />
              {edited.images &&
              edited.images.length > 0 &&
              edited.images[0].url ? (
                <img src={edited.images[0].url} id="img_lrg" alt="No Image" />
              ) : (
                <span className="has-error">NO Image</span>
              )}
              {/* <FileUpload
          imagesHandler={(images) => imagesHandler(images)}
          reset={formSuccess}
        /> */}
              <FileUpload
                images={images}
                setImages={setImages}
                reset={formSuccess}
              />{" "}
            </div>
          </div>
        </div>
        <div className="row">
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
  );
};

export default AdminProductForm;
