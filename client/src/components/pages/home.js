import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Banner from "../layout/banner";
import ContactForm from "../contacts/contactform";
import ProductList from "../products";

const HomePage = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [mobile, setMobile] = useState("");
  useEffect(() => {
    if (window.screen.width > 500) {
      setMobile(false);
    } else {
      setMobile(true);
      //if (showMenu) setShowMenu(false);
    }
  });
  return (
    <div className="page-wrapper" id="top">
      <section class="intro">
        <div class="container-fluid">
          <div class="row" slyle={{ margin: "0", padding: "0" }}>
            <Banner />
          </div>
        </div>
      </section>
      <section class="container-fluid content-section" id="about">
        <div class="container">
          <div class="row" id="front1">
            <div class="col-md-4 col-sm-6 aboutBox">
              <Link to="/about">
                <h2 class="text-center">CONSULTING</h2>
                <img src="images/aboutImg2.png" alt="img" id="img_small" />
                <p>
                  Be aware that the CSS for these layouts is heavily commented.
                  If you do most of your work in Design view, have a peek at the
                  code to get tips{" "}
                </p>
                <p>
                  <strong>READ MORE >></strong>
                </p>
              </Link>
            </div>

            <div class="col-md-4 col-sm-6 aboutBox">
              <Link to="/about">
                <h2 class="text-center">TECHNOLOGY</h2>
                <img src="images/aboutImg1.png" alt="img" id="img_small" />

                <p>
                  Be aware that the CSS for these layouts is heavily commented.
                  If you do most of your work in Design view, have a peek at the
                  code to get tips{" "}
                </p>
                <p>
                  <strong>READ MORE >></strong>
                </p>
              </Link>
            </div>

            <div class="col-md-4  col-sm-6  aboutBox">
              <Link to="/about">
                <h2 class="text-center">INNOVATION</h2>
                <img src="images/aboutImg3.png" alt="img" id="img_small" />

                <p>
                  Be aware that the CSS for these layouts is heavily commented.
                  If you do most of your work in Design view, have a peek at the
                  code to get tips{" "}
                </p>
                <p>
                  <strong>READ MORE >></strong>
                </p>
              </Link>
            </div>
          </div>
          {/* end row */}
        </div>
        {/*container */}
      </section>{" "}
      {/* end about */}
      <section class="container-fluid content-section" id="news">
        <div class="container">
          <div class="row">
            <h1>News</h1>

            <div class="col-md-4  col-sm-4">
              <h4>
                <i class="fa fa-calendar"></i> December 03, 2015
              </h4>
              <h3>NEW BUSINESS MODEL FOR YOU BUSINESS</h3>
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

            <div class="col-md-4  col-sm-4">
              <h4>
                <i class="fa fa-calendar"></i> December 02, 2015
              </h4>
              <h3>UNIQUE BUSINESS IDEAS</h3>
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
            <div class="col-md-4  col-sm-4">
              <h4>
                <i class="fa fa-calendar"></i> December 01, 2015
              </h4>
              <h3>LESS IS MORE</h3>
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
        {/* end container  */}
      </section>
      <section
        class="container-fluid content-section text-center"
        id="parallax"
        data-speed="6"
        data-type="background"
      >
        <div class="container">
          <div class="row">
            <h1>Success!</h1>
            <h4>
              Developing a small company into a successful one may seem
              problematic. But we know how to achieve it.
            </h4>
          </div>
        </div>
      </section>
      <section class="container-fluid content-section" id="whatwedo">
        <div class="container">
          <div class="row">
            <h1>WHAT WE DO</h1>

            <div class="col-md-4  col-sm-4 whatbox">
              <h4>ESTABLISHING YOUR BRAND</h4>
              <p>
                Be aware that the CSS for these layouts is heavily commented. If
                you do most of your work in Design view, have a peek at the code
                to get tips on working with the CSS for the fixed layouts. You
                can remove these comments before you launch your site
              </p>
            </div>
            {/* end col left features*/}

            <div class="col-md-4  col-sm-4 whatbox">
              <h4>CONNECTING WITH YOUR CUSTOMERS</h4>
              <p>
                Be aware that the CSS for these layouts is heavily commented. If
                you do most of your work in Design view, have a peek at the code
                to get tips on working with the CSS for the fixed layouts. You
                can remove these comments before you launch your site.n
              </p>
            </div>
            {/* end features col img*/}
            <div class="col-md-4  col-sm-4 whatbox">
              <h4>MARKETTING STRATEGIES</h4>
              <p>
                Be aware that the CSS for these layouts is heavily commented. If
                you do most of your work in Design view, have a peek at the code
                to get tips on working with the CSS for the fixed layouts.n
              </p>
            </div>
            {/* end features col img*/}
            <div class="col-md-4  col-sm-4 whatbox">
              <h4>INFORMATION TECHNOLOGY</h4>
              <p>
                Be aware that the CSS for these layouts is heavily commented. If
                you do most of your work in Design view, have a peek at the code
                to get tips on working with the CSS for the fixed layouts.{" "}
              </p>
            </div>
            {/* end col left features*/}

            <div class="col-md-4  col-sm-4 whatbox">
              <h4>ADVANCED ADVERTISING</h4>
              <p>
                Be aware that the CSS for these layouts is heavily commented. If
                you do most of your work in Design view, have a peek at the code
                to get tips on working with the CSS for the fixed layouts.{" "}
              </p>
            </div>
            {/* end features col img*/}
            <div class="col-md-4  col-sm-4 whatbox">
              <h4>ESTABLISHING YOUR BUSINESS</h4>
              <p>
                Be aware that the CSS for these layouts is heavily commented. If
                you do most of your work in Design view, have a peek at the code
                to get tips on working with the CSS for the fixed layouts.
              </p>
            </div>
            {/* end features col img*/}
          </div>
          {/* end row */}
        </div>
        {/*container */}
      </section>{" "}
      {/* end about */}
      <section class="container-fluid content-section" id="casestudies">
        <div className="container">
          <div class="row">
            <div class="col-md-6  imgDownload1">
              <img src="images/index-4.jpg" class="img-responsive" />
            </div>
            <div class="col-md-6">
              <h1>Case studies</h1>
              <h3>
                LEARN HO TO GIVE YOU COMPANY A SIGNIFICANT IMPACT ON DEVELEPMENT{" "}
              </h3>
              <p>
                Be aware that the CSS for these layouts is heavily commented. If
                you do most of your work in Design view, have a peek at the code
                to get tips on working with the CSS for the fixed layouts. You
                can remove these comments before you launch your site. To learn
                more about the techniques used in these CSS Layouts, read this
                article at Adobe's Developer Cen
              </p>
              <Link to="/item" className="btnLink">
                View All
              </Link>
            </div>
          </div>
          {/* end row */}
        </div>
      </section>{" "}
      {/* end blog */}
      <section
        class="container-fluid content-section text-center"
        id="parallax2"
        data-speed="6"
        data-type="background"
      >
        <div class="container">
          <div class="row">
            <h1>Leadership</h1>
            <h4>
              We will build a unique business development strategy based on the
              complex study of your company.
            </h4>
          </div>
        </div>
      </section>{" "}
      {/* end serivces */}
      <section className="container-fluid content-section" id="mgmtsolutions">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <img src="images/aboutImg1.png" alt="img" className="leftImage" />
              <h3>
                Get to know key traits of a real company leader - experts of SM
                Consulting reveal the fundamentals of running your own business.
              </h3>
              <p>
                Running business is not an easy task. Moreover, people often
                think that it is impossible if you don`t have a certain talent.
                But the truth about it is somewhere in the middle - if you have
                a strong desire for business and time to improve yourself, you
                can become a true leader of modern company. Tasha Rodgers, a
                member of SM Consulting team, will reveal some of the dominant
                features of modern business and give you some important advice
                on running your own business.
              </p>
            </div>
            <div className="col-md-4">
              <Link to="/item" className="btnLinkLarge" id="btnGreen">
                Free Delivery
              </Link>

              <Link to="/item" className="btnLinkLarge" id="btnBlue">
                Hot Offers
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section class="container-fluid content-section" id="front2">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-6 aboutBox">
              <Link to="/about">
                <img src="images/aboutImg1.png" id="img_small" alt="img" />
                <h2 class="text-center">OUR PRIORITIES</h2>
                <p>
                  Be aware that the CSS for these layouts is heavily commented.
                  If you do most of your work in Design view, have a peek at the
                  code to get tips{" "}
                </p>
                <p>
                  <Link to="/item" className="btnLink">
                    READ MORE >>
                  </Link>
                </p>
              </Link>
            </div>

            <div class="col-md-4 col-sm-6  aboutBox">
              <Link to="/about">
                <img src="images/aboutImg2.png" id="img_small" alt="img" />
                <h2 class="text-center">PROMOTIONS</h2>

                <p>
                  Be aware that the CSS for these layouts is heavily commented.
                  If you do most of your work in Design view, have a peek at the
                  code to get tips{" "}
                </p>
                <p>
                  <Link to="/item" className="btnLink">
                    READ MORE >>
                  </Link>
                </p>
              </Link>
            </div>

            <div class="col-md-4  col-sm-6  aboutBox">
              <Link to="/about">
                <img src="images/aboutImg3.png" id="img_small" alt="img" />

                <h2 class="text-center">INNOVATION</h2>

                <p>
                  Be aware that the CSS for these layouts is heavily commented.
                  If you do most of your work in Design view, have a peek at the
                  code to get tips{" "}
                </p>
                <p>
                  <Link to="/item" className="btnLink">
                    READ MORE >>
                  </Link>
                </p>
              </Link>
            </div>
          </div>
          {/* end row */}
        </div>
        {/*container */}
      </section>{" "}
      <section
        class="container-fluid content-section text-center"
        id="parallax6"
        data-speed="6"
        data-type="background"
      >
        <div class="container">
          <div class="row">
            <h1>Strategy</h1>
            <h4>
              We will build a unique business development strategy based on the
              complex study of your company.
            </h4>
          </div>
        </div>
      </section>{" "}
      <section class="container-fluid content-section" id="latestproducts">
        <div class="container">
          <h3>Our Products</h3>
          <ProductList show="gallery" />
        </div>
      </section>
      <section
        class="container-fluid content-section text-center"
        id="parallax7"
        data-speed="6"
        data-type="background"
      >
        <div class="container">
          <div class="row">
            <h1>Business Growth</h1>
            <h4>
              We will build a unique business development strategy based on the
              complex study of your company.
            </h4>
          </div>
        </div>
      </section>{" "}
      <section class="container-fluid content-section" id="testimonials">
        <div class="row">
          <div class="container">
            <div class="col-md-6 col-sm-6 ">
              <p>
                <i class="fa fa-quote-left fa-4x"></i>
                Be aware that the CSS for these layouts is heavily commented. If
                you do most of your work in Design view, have a peek at the code
                to get tips on working with the CSS for the fixed layouts. You
                can remove these comments before you launch your site. To learn
                more about the techniques used in these CSS Layouts, read this
                article at Adobe's Developer Cen
                <i class="fa fa-quote-right fa-4x"></i>
              </p>
              <h3>Jason Smith, Lockeed Corpoation</h3>
            </div>
            <div class="col-md-6 col-sm-6">
              <p>
                <i class="fa fa-quote-left fa-4x"></i>Be aware that the CSS for
                these layouts is heavily commented. If you do most of your work
                in Design view, have a peek at the code to get tips on working
                with the CSS for the fixed layouts. You can remove these
                comments before you launch your site. To learn more about the
                techniques used in these CSS Layouts, read this article at
                Adobe's Developer Cen<i class="fa fa-quote-right fa-4x"></i>
              </p>
              <h3>Jason Smith, Lockeed Corpoation</h3>
            </div>
          </div>
        </div>
        {/* end container --
			</div>{/* end row */}
      </section>{" "}
      <section class="container-fluid content-section" id="clients">
        <div class="container">
          <div class="row"></div>
        </div>
      </section>
      <ContactForm />
      <a href="#top" className="topPage">
        Top
      </a>
    </div>
  );
};

export default HomePage;
