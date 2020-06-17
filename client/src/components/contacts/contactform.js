import React from "react";

const ContactForm = () => {
  return (
    <section className="container-fluid content-section" id="contacts">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <form action="email.php" method="post">
              <h4>SIGN UP FOR UPDATES</h4>

              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="contactEmail"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <button type="submit" className="button">
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-4 col-sm-4" id="footer-contacts">
            <h4>Our Location</h4>
            <p>
              3200 Provicial Rd <br /> Santa Clara, CA 94993
            </p>
            <table>
              <tr>
                <td>Sales</td>
                <td> (800) 939-9999</td>
              </tr>
              <tr>
                {" "}
                <td>Advertising </td>
                <td>(800) 939-9933</td>
              </tr>
              <tr>
                {" "}
                <td> Support </td>
                <td>(800) 939-9997</td>
              </tr>
            </table>
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
