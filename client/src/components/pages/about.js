import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../contacts/contactform";

const AboutPage = () => {
  return (
    <div className="page-wrapper" id="top">
      <section className="container-fluid content-section pageHeader">
        <div className="container">
          <div className="row">
            <ol className="breadcrumb">
              <li>
                <Link to="/">HOME</Link>
              </li>

              <li className="activenav">ABOUT</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="container-fluid content-section" id="whoweare">
        <div className="container">
          <h1>Who We Are</h1>

          <div className="row">
            <div className="col-md-6 col-sm-6 ">
              <img src="images/about.png" id="img_med" />
            </div>
            <div className="col-md-6 col-sm-6 ">
              <h3>ESTABLISHING YOUR BRAND</h3>
              <p>
                It is the best among the variety of the competing ones. We
                provide you with tons of information on various aspects of our
                business. Our team of professionals will happily help you to
                deal with any issue. Client is our first priority and a great
                amount of positive testimonials can prove this.
              </p>
              <p>
                We can offer you a vast range of consulting and supportive
                services – from creating a business plan to suggesting key
                improvements that will positively influence your company. We
                continue to broaden the range of our services and today we also
                give a chance to those who are interested in studying the main
                principles and fundamentals of our work in the School of SM
                Consulting.
              </p>
              <p>
                <Link to="/item" className="btnLink">
                  <strong>READ MORE >></strong>
                </Link>
              </p>
            </div>
          </div>
          {/* end row */}
        </div>
        {/*container */}
      </section>

      <section
        className="container-fluid content-section text-center"
        id="parallax4"
        data-speed="6"
        data-type="background"
      >
        <div className="container">
          <div className="row">
            <h1>Improve Your Business</h1>
            <h4>
              We can satisfy clients with different requirements. So don`t waste
              your precious time on hesitations.
            </h4>
          </div>
        </div>
      </section>

      <section className="container-fluid content-section" id="whatwedo">
        <div className="container">
          <div className="row">
            <h1>WHAT WE DO</h1>

            <div className="col-md-4  col-sm-4">
              <h3>MISSION STATEMENT</h3>
              <p>
                Be aware that the CSS for these layouts is heavily commented. If
                you do most of your work in Design view, have a peek at the code
                to get tips on working with the CSS for the fixed layouts. You
                can remove these comments before you launch your site. To learn
                more about the techniques used in these CSS Layouts, read this
                article at Adobe's Developer Center{" "}
              </p>
            </div>
            {/* end col left features*/}

            <div className="col-md-4  col-sm-4">
              <h3>COMMITMENTS</h3>
              <p>
                Be aware that the CSS for these layouts is heavily commented. If
                you do most of your work in Design view, have a peek at the code
                to get tips on working with the CSS for the fixed layouts. You
                can remove these comments before you launch your site. To learn
                more about the techniques used in these CSS Layouts, read this
                article at Adobe's Developer Cen
              </p>
            </div>
            {/* end features col img*/}
            <div className="col-md-4  col-sm-4">
              <h3>OUR PROCESS</h3>
              <p>
                Be aware that the CSS for these layouts is heavily commented. If
                you do most of your work in Design view, have a peek at the code
                to get tips on working with the CSS for the fixed layouts. You
                can remove these comments before you launch your site. To learn
                more about the techniques used in these CSS Layouts, read this
                article at Adobe's Developer Cen
              </p>
            </div>
            {/* end features col img*/}
            <div className="col-md-4  col-sm-4">
              <h3>SUSTAINIBILITY</h3>
              <p>
                Be aware that the CSS for these layouts is heavily commented. If
                you do most of your work in Design view, have a peek at the code
                to get tips on working with the CSS for the fixed layouts. You
                can remove these comments before you launch your site. To learn
                more about the techniques used in these CSS Layouts, read this
                article at Adobe's Developer Center{" "}
              </p>
            </div>
            {/* end col left features*/}

            <div className="col-md-4  col-sm-4">
              <h3>STUDIO CULTURE</h3>
              <p>
                Be aware that the CSS for these layouts is heavily commented. If
                you do most of your work in Design view, have a peek at the code
                to get tips on working with the CSS for the fixed layouts. You
                can remove these comments before you launch your site. To learn
                more about the techniques used in these CSS Layouts, read this
                article at Adobe's Developer Cen
              </p>
            </div>
            {/* end features col img*/}
            <div className="col-md-4  col-sm-4">
              <h3>OUR PROFILE</h3>
              <p>
                Be aware that the CSS for these layouts is heavily commented. If
                you do most of your work in Design view, have a peek at the code
                to get tips on working with the CSS for the fixed layouts. You
                can remove these comments before you launch your site. To learn
                more about the techniques used in these CSS Layouts, read this
                article at Adobe's Developer Cen
              </p>
            </div>
            {/* end features col img*/}
          </div>
          {/* end row */}
        </div>
        {/*container */}
      </section>

      <section className="container content-section" id="download">
        <div className="row">
          <div className="col-md-6 col-sm-6 imgDownload1">
            <img src="images/download.png" className="img-responsive" />
          </div>
          <div className="col-md-6 col-sm-6">
            <h1>Case studies</h1>
            <h3>
              LEARN HO TO GIVE YOU COMPANY A SIGNIFICANT IMPACT ON DEVELEPMENT{" "}
            </h3>
            <p>
              Be aware that the CSS for these layouts is heavily commented. If
              you do most of your work in Design view, have a peek at the code
              to get tips on working with the CSS for the fixed layouts. You can
              remove these comments before you launch your site. To learn more
              about the techniques used in these CSS Layouts, read this article
              at Adobe's Developer Cen
            </p>
          </div>
        </div>
        {/* end row */}
      </section>

      <section
        className="container-fluid content-section text-center"
        id="parallax5"
        data-speed="6"
        data-type="background"
      >
        <div className="container">
          <div className="row">
            <h1>Any Solution at Hand</h1>
            <h3>
              Our clients first, we work hard to exceed your expectations.
            </h3>
          </div>
        </div>
      </section>
      <section className="container-fluid content-section" id="ourservices">
        <div className="container">
          <h1>Our Advantages</h1>
          <div className="row">
            {/* <ServicesList show={"featured"} /> */}
            <div className="col-md-4" id="service">
              <img src="images/advantages1.png" id="img_med" alt="img" />

              <h3>OPPORTUINITES WITH INCREDIBLE MONEY MAKING POTENTIAL</h3>
              <br />
              <p>
                We provide our clients with exclusive financial and
                psychological recommendations that help to improve their company
                status and increase profits. They are based on deep study of our
                clients` companies and are designed to raise the interest of
                potential customers to your company`s products.
              </p>
              <Link to={`/model/service/OPPORTUINITES`} id="btnLink">
                Show More
              </Link>
            </div>
            <div className="col-md-4" id="service">
              <img src="images/advantages2.png" id="img_med" alt="img" />

              <h3>A WIDE RANGE OF GLOBAL BUSINESS INFORMATION</h3>

              <p>
                Our experience lets us easily orient in the world of modern
                business. Whether you run a company whose main goal is providing
                high quality hospitality services or medical aid, our
                recommendations will be useful for your commercial success.
              </p>

              <Link to={`/model/service/OPPORTUINITES`} id="btnLink">
                Show More
              </Link>
            </div>
            <div className="col-md-4" id="service">
              <img src="images/advantages3.png" id="img_med" alt="img" />

              <h3>OPPORTUINITES WITH INCREDIBLE MONEY MAKING POTENTIAL</h3>
              <br />
              <p>
                We provide our clients with exclusive financial and
                psychological recommendations that help to improve their company
                status and increase profits. They are based on deep study of our
                clients` companies and are designed to raise the interest of
                potential customers to your company`s products.
              </p>
              <Link to={`/model/service/OPPORTUINITES`} id="btnLink">
                Show More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <a href="#top" className="topPage">
        Top
      </a>
    </div>
  );
};

export default AboutPage;
