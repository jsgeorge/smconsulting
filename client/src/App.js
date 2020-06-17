import React, { useState } from "react";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import "./App.css";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
//contexts
import { GlobalContext } from "./context/global-settings-context";
import { ProductContext } from "./context/product-context";
import { ProductCategoryContext } from "./context/product-category-context";
import { ServiceCategoryContext } from "./context/service-category-context";
import { ServiceContext } from "./context/service-context";
import { UserContext } from "./context/user-context";
//
function App() {
  const [globalsettings, setglobalsettings] = useState([]);
  const [productcategories, setproductcategories] = useState([]);
  const [products, setproducts] = useState([]);
  const [servicecategories, setservicecategories] = useState([]);
  const [services, setServices] = useState([]);
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <GlobalContext.Provider value={{ globalsettings, setglobalsettings }}>
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
                    {!globalsettings.isAdmin ? <Header /> : null};
                    <Routes />
                    <Footer />
                  </BrowserRouter>
                </ProductContext.Provider>
              </ServiceContext.Provider>
            </ProductCategoryContext.Provider>
          </ServiceCategoryContext.Provider>
        </UserContext.Provider>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
