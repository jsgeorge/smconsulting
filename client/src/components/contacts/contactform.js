import React, { useState, useContext } from "react";
import axios from "axios";

const ContactForm = () => {
  const [email, setemail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const submitSignup = async () => {
    setError("");
    setSuccessMessage("");
    if (email) {
      try {
        await axios
          .post("/emailist", email)
          .then((res) => {
            setSuccessMessage(
              "Thank you. You have sucessfully signed up for our mailing list"
            );
            setemail("");
          })
          .catch((err) => {
            setError("Invlid/missing email or network problem");
          });
      } catch (err) {
        setError("Invlid/missing email or network problem");
      }
    }
  };

  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    await submitSignup();
  };
  return (
    <section className="container-fluid content-section" id="contacts">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <form
              onSubmit={(e) => handleSubmitSignup(e)}
              className="emailsignupform"
            >
              <h4>SIGN UP FOR UPDATES</h4>
              {error ? <p className="has-error">{error}</p> : null}
              <input
                type="email"
                className="form-control"
                id="contactEmail"
                name="email"
                placeholder="Email"
                onChange={(e) => setemail(e.target.value)}
              />

              <button type="submit" className="button">
                Signup
              </button>

              {successMessage ? (
                <p className="has-success">{successMessage}</p>
              ) : null}
            </form>
          </div>

          <div className="col-md-4 col-sm-4" id="footer-contacts">
            <h4>Our Location</h4>
            <p>
              3200 Provicial Rd <br /> Santa Clara, CA 94993
            </p>
            <div id="foot_phones">
              <div className="foot_phone_label">Sales</div>
              <div className="foot_phone">(800) 939-9999 </div>
              <div className="foot_phone_label">Advertising</div>
              <div className="foot_phone">(800) 939-9933 </div>
              <div className="foot_phone_label">Support</div>
              <div className="foot_phone">(800) 939-9997</div>
            </div>
            <p>
              Email: <strong>sales@smconsulting.com</strong>
            </p>
          </div>

          <div className="col-md-4 col-sm-4">
            <h4>KEEP IN TOUCH</h4>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
