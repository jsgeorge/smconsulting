import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="carousel-wrapper">
      <div
        id="carousel-example-generic"
        className="carousel slide"
        data-ride="carousel"
      >
        {/* Indicators  */}
        <ol className="carousel-indicators">
          <li
            data-target="#carousel-example-generic"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>

        {/* Wrapper for slides */}
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img src="images/slider/img1.png" alt="1Grand tetons" />
            <div className="carousel-caption">
              <h1>Think Big!</h1>{" "}
              <h4>
                We can offer you a vast range of consulting and supportive
                services – from creating a business plan to suggesting key
                improvements that will positively influence your company. We
                continue to broaden the range of our services and today we also
                give a chance to those who are
              </h4>
              <p>
                <Link to="/about" className="btn btn-default clickHere">
                  click here >>
                </Link>
              </p>
            </div>
          </div>
          {/* end slide1*/}

          <div className="item">
            <img src="images/slider/img2.png" alt="2Grand tetons" />
            <div className="carousel-caption">
              <h1>Succeed With US!</h1>
              <h4>
                Our comapany's vast range of consulting and supportive services
                – from creating a business plan to suggesting key improvements
                that will positively influence your company. We continue to
                broaden the range of our services and today we also give a
                chance to those who are
              </h4>
              <p>
                <Link to="/about" className="btn btn-default clickHere">
                  click here >>
                </Link>
              </p>
            </div>
          </div>
          {/* end slide2*/}

          <div className="item">
            <img src="images/slider/img3.png" alt="3Grand tetons" />
            <div className="carousel-caption">
              <h1>Let's Coopeate!</h1>{" "}
              <h4>
                We can offer you a vast range of consulting and supportive
                services – from creating a business plan to suggesting key
                improvements that will positively influence your company. We
                continue to broaden the range of our services and today we also
                give a chance to those who are
              </h4>{" "}
              <p>
                <Link to="/about" className="btn btn-default clickHere">
                  click here >>
                </Link>
              </p>
            </div>
          </div>
          {/* end slide3*/}
        </div>

        {/* Controls */}
        <a
          className="left carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="prev"
        >
          <span
            className="glyphicon glyphicon-chevron-left"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="next"
        >
          <span
            className="glyphicon glyphicon-chevron-right"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Banner;
