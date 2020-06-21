import React, { useState, useEffect } from "react";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import "./App.css";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
//contexts
import { AuthContext } from "./context/auth-context";
import { ProductContext } from "./context/product-context";
import { ProductCategoryContext } from "./context/product-category-context";
import { ServiceCategoryContext } from "./context/service-category-context";
import { ServiceContext } from "./context/service-context";
import { UserContext } from "./context/user-context";
//
export default function App() {
  const [isloggedin, setisloggedin] = useState(false);
  const [isadmin, setisadmin] = useState(false);
  const [productcategories, setproductcategories] = useState([]);
  const [products, setproducts] = useState([]);
  const [servicecategories, setservicecategories] = useState([]);
  const [services, setServices] = useState([]);
  const [user, setUser] = useState({});
  useEffect(() => {
    if (localStorage.jwtToken) setisloggedin(true);
    else setisloggedin(false);
  }, []);
  console.log("App.js isadmin", isadmin, "isloggedin", isloggedin);
  return (
    <div className="App">
      <AuthContext.Provider
        value={{ isloggedin, setisloggedin, isadmin, setisadmin }}
      >
        <UserContext.Provider value={{ user, setUser }}>
          <ServiceCategoryContext.Provider
            value={{ servicecategories, setservicecategories }}
          >
            <ProductCategoryContext.Provider
              value={{ productcategories, setproductcategories }}
            >
              <ServiceContext.Provider value={{ services, setServices }}>
                <ProductContext.Provider value={{ products, setproducts }}>
                  <BrowserRouter>
                    {!isadmin ? <Header /> : null};
                    <Routes />
                    {!isadmin ? <Footer /> : null};
                  </BrowserRouter>
                </ProductContext.Provider>
              </ServiceContext.Provider>
            </ProductCategoryContext.Provider>
          </ServiceCategoryContext.Provider>
        </UserContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

//export default App;
