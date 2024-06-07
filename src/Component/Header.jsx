import React from "react";
import Grocerylogo from "../images/Grocerylogo.png";
import menubanner from "../images/menu-banner.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <>
        <div className="border-bottom pb-5">
          <div className="bg-light py-1">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-12">
                  <span> Super Value Deals - Save more with coupons</span>
                </div>
                <div className="col-6 text-end d-none d-md-block">
                  <div className="list-inline">
                    <div className="list-inline-item">
                      <Link to="/Shop" className="text-muted position-relative">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-heart"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                          5
                          <span className="visually-hidden">
                            unread messages
                          </span>
                        </span>
                      </Link>
                    </div>
                    <div className="list-inline-item">
                      <Link
                        to="/Shop!"
                        className="text-muted"
                        data-bs-toggle="modal"
                        data-bs-target="/ShopuserModal"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-user"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx={12} cy={7} r={4} />
                        </svg>
                      </Link>
                    </div>
                    <div className="list-inline-item">
                      <Link
                        className="text-muted position-relative "
                        data-bs-toggle="offcanvas"
                        data-bs-target="/ShopoffcanvasRight"
                        to="/ShopoffcanvasExample"
                        role="button"
                        aria-controls="offcanvasRight"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-shopping-bag"
                        >
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                          <line x1={3} y1={6} x2={21} y2={6} />
                          <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                          1
                          <span className="visually-hidden">
                            unread messages
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <>
        <div className="container  displaydesign">
          <div className="row g-4">
            <div className="col-8 col-sm-4 col-lg-9 py-2 ">
              <input
                className="form-control "
                style={{ width: "100%" }}
                list="datalistOptions"
                id="exampleDataList"
                placeholder="Type to search..."
              />
            </div>
            <div className="col-4 col-sm-4 col-lg-3 py-2">
              {/* Button trigger modal */}
              {/* <button
            type="button"
            className="btn btn-primary "
            data-bs-toggle="modal"
            data-bs-target="/ShoplocationModal"
          >
            <i className="feather-icon icon-map-pin me-2" />
            Location
          </button> */}
              <div className="list-inline">
                <div className="list-inline-item">
                  <Link to="/Shop" className="text-muted position-relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-heart"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      5<span className="visually-hidden">unread messages</span>
                    </span>
                  </Link>
                </div>
                <div className="list-inline-item">
                  <Link
                    to="/Shop!"
                    className="text-muted"
                    data-bs-toggle="modal"
                    data-bs-target="/ShopuserModal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-user"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                  </Link>
                </div>
                <div className="list-inline-item">
                  <Link
                    className="text-muted position-relative "
                    data-bs-toggle="offcanvas"
                    data-bs-target="/ShopoffcanvasRight"
                    to="/ShopoffcanvasExample"
                    role="button"
                    aria-controls="offcanvasRight"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-shopping-bag"
                    >
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <line x1={3} y1={6} x2={21} y2={6} />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      1<span className="visually-hidden">unread messages</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={Grocerylogo}
              style={{ width: 200, marginBottom: 10, marginLeft: "-15px" }}
              alt="eCommerce HTML Template"
            />
          </Link>
          <input
            className="form-control responsivesearch "
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Type to search..."
            fdprocessedid="9icrif"
            style={{ width: "35%" }}
          />

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile_nav"
            aria-controls="mobile_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile_nav">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 float-md-right"></ul>
            <ul className="navbar-nav navbar-light">
              <li className="nav-item">
                <li className="nav-item dmenu dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to=""
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="me-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-grid"
                      >
                        <rect x="3" y="3" width="7" height="7"></rect>
                        <rect x="14" y="3" width="7" height="7"></rect>
                        <rect x="14" y="14" width="7" height="7"></rect>
                        <rect x="3" y="14" width="7" height="7"></rect>
                      </svg>
                    </span>{" "}
                    All Departments
                  </Link>
                  <div
                    className="dropdown-menu sm-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" to="/Shop">
                      Dairy, Bread &amp; Eggs
                    </Link>
                    <Link className="dropdown-item" to="/Shop">
                      Snacks &amp; Munchies
                    </Link>
                    <Link className="dropdown-item" to="/Shop">
                      Fruits &amp; Vegetables
                    </Link>
                    <Link className="dropdown-item" to="/Shop">
                      Cold Drinks &amp; Juices
                    </Link>
                    <Link className="dropdown-item" to="/Shop">
                      Breakfast &amp; Instant Food
                    </Link>
                    <Link className="dropdown-item" to="/Shop">
                      Bakery &amp; Biscuits
                    </Link>
                    <Link className="dropdown-item" to="/Shop">
                      Chicken, Meat &amp; Fish
                    </Link>
                  </div>
                </li>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dmenu dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  About
                </Link>
                <div
                  className="dropdown-menu sm-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <Link class="dropdown-item" to="/Blog">
                    Blog
                  </Link>
                  {/* <Link className="dropdown-item" to="pages/blog-single.html">
                    Blog Single
                  </Link> */}
                  <Link className="dropdown-item" to="/BlogCategory">
                    Blog Category
                  </Link>
                  <Link className="dropdown-item" to="/AboutUs">
                    About us
                  </Link>
                  {/* <Link className="dropdown-item" to="pages/404error.html">
                    404 Error
                  </Link> */}
                  <Link className="dropdown-item" to="/Contact">
                    Contact
                  </Link>
                </div>
              </li>

              <li className="nav-item dmenu dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Shop
                </Link>
                <div
                  className="dropdown-menu sm-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <Link className="dropdown-item" to="/Shop">
                    Shop 
                  </Link>
                  <Link className="dropdown-item" to="/ShopWishList">
                    Shop Wishlist
                  </Link>
                  <Link className="dropdown-item" to="/ShopCart">
                    Shop Cart
                  </Link>
                  <Link className="dropdown-item" to="/ShopCheckOut">
                    Shop Checkout
                  </Link>
                </div>
              </li>

              <li className="nav-item dmenu dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Stores
                </Link>
                <div
                  className="dropdown-menu sm-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <Link className="dropdown-item" to="/StoreList">
                    Store List
                  </Link>
                  {/* <Link className="dropdown-item" to="pages/store-grid.html">
                    Store Grid
                  </Link> */}
                  <Link className="dropdown-item" to="/SingleShop">
                     Single Store
                  </Link>
                </div>
              </li>
              {/* <li className="nav-item dmenu dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </Link>
                <div
                  className="dropdown-menu sm-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <Link class="dropdown-item" to="pages/blog.html">
                    Blog
                  </Link>
                  <div>
                    <Link className="dropdown-item" to="pages/blog-single.html">
                      Blog Single
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="pages/blog-category.html"
                    >
                      Blog Category
                    </Link>
                    <Link className="dropdown-item" to="pages/about.html">
                      About us
                    </Link>
                    <Link className="dropdown-item" to="pages/404error.html">
                      404 Error
                    </Link>
                    <Link className="dropdown-item" to="pages/contact.html">
                      Contact
                    </Link>
                  </div>
                </div>
              </li> */}

              <li className="nav-item dropdown megamenu-li dmenu">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/Shop"
                  id="dropdown01"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  All Services
                </Link>
                <div
                  className="dropdown-menu megamenu sm-menu border-top"
                  aria-labelledby="dropdown01"
                >
                  <div className="row">
                    <div className="col-sm-6 col-lg-3 border-right mb-4">
                      <div>
                        <h6 className="text-primary ps-3">
                          Dairy, Bread &amp; Eggs
                        </h6>
                        <Link className="dropdown-item" to="/Shop">
                          Butter
                        </Link>
                        <Link className="dropdown-item" to="/Shop">
                          Milk Drinks
                        </Link>
                        <Link className="dropdown-item" to="/Shop">
                          Curd &amp; Yogurt
                        </Link>
                        <Link className="dropdown-item" to="/Shop">
                          Eggs
                        </Link>
                        <Link className="dropdown-item" to="/Shop">
                          Buns &amp; Bakery
                        </Link>
                        <Link className="dropdown-item" to="/Shop">
                          Cheese
                        </Link>
                        <Link className="dropdown-item" to="/Shop">
                          Condensed Milk
                        </Link>
                        <Link className="dropdown-item" to="/Shop">
                          Dairy Products
                        </Link>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3 border-right mb-4">
                      <div>
                        <h6 className="text-primary ps-3">
                          Breakfast &amp; Instant Food
                        </h6>
                        <Link className="dropdown-item" to="/Shop">
                          Breakfast Cereal
                        </Link>
                        <Link className="dropdown-item" to="/Shop">
                          {" "}
                          Noodles, Pasta &amp; Soup
                        </Link>
                        <Link className="dropdown-item" to="/Shop">
                          Frozen Veg Snacks
                        </Link>
                        <Link className="dropdown-item" to="/Shop">
                          {" "}
                          Frozen Non-Veg Snacks
                        </Link>
                        <Link className="dropdown-item" to="/Shop">
                          {" "}
                          Vermicelli
                        </Link>
                        <Link className="dropdown-item" to="/Shop">
                          {" "}
                          Instant Mixes
                        </Link>
                        <Link className="dropdown-item" to="/Shop">
                          {" "}
                          Batter
                        </Link>
                        <Link className="dropdown-item" to="/Shop">
                          {" "}
                          Fruit and Juices
                        </Link>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3 mb-4">
                      <div>
                        <h6 className="text-primary ps-3">
                          Cold Drinks &amp; Juices
                        </h6>
                        <Link className="dropdown-item" to="/Shop">
                          Soft Drinks
                        </Link>
                        <Link className="dropdown-item" to="/Shop">
                          Fruit Juices
                        </Link>
                        <Link className="dropdown-item" to="/Shop">
                          Coldpress
                        </Link>
                        <Link className="dropdown-item" to="/Shop">
                          Water &amp; Ice Cubes
                        </Link>
                        <Link className="dropdown-item" to="/Shop">
                          Soda &amp; Mixers
                        </Link>
                        <Link className="dropdown-item" to="/Shop">
                          Health Drinks
                        </Link>
                        <Link className="dropdown-item" to="/Shop">
                          Herbal Drinks
                        </Link>
                        <Link className="dropdown-item" to="/Shop">
                          Milk Drinks
                        </Link>
                      </div>
                    </div>

                    {/* <div className="row"> */}
                    <div className="col-sm-6 col-lg-3 border-right mb-4">
                      <div className="card border-0">
                        <img
                          src={menubanner}
                          style={{ width: "90%" }}
                          alt="eCommerce HTML Template"
                          className="img-fluid rounded-3"
                        />
                        <div className="position-absolute ps-6 mt-8">
                          <h5 className=" mb-0 ">
                            Dont miss this <br />
                            offer today.
                          </h5>
                          <Link
                            to="/Shop"
                            className="btn btn-primary btn-sm mt-3"
                          >
                            Shop Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </div> */}
                </div>
              </li>

              <li className="nav-item dmenu dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to=""
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Account
                </Link>
                <div
                  className="dropdown-menu sm-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <div>
                    <div>
                      <Link className="dropdown-item" to="/MyAccountSignIn">
                        Sign in
                      </Link>
                      <Link className="dropdown-item" to="/MyAccountSignUp">
                        Signup
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/MyAccountForgetPassword"
                      >
                        Forgot Password
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/MyAccountOrder"
                      >
                        Orders
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/MyAccountSetting"
                      >
                        Settings
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/MyAccountAddress"
                      >
                        Address
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/MyAcconutPaymentMethod"
                      >
                        Payment Method
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/MyAcconutNotification"
                      >
                        Notification
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="">
                  Contact us
                </Link>
              </li> */}
            </ul>
          </div>
          {/* <div className="col-md-2 col-xxl-1 text-end d-none d-lg-block">
            
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
