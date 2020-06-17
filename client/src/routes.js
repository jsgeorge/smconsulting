import React from "react";
import { Switch, Route } from "react-router-dom";

//Pages
//User Pages
import ModelLayoutPage from "./components/pages/modelpage";
import HomePage from "./components/pages/home";
import ProductsPage from "./components/pages/products";
import AboutPage from "./components/pages/about";
import ContactsPage from "./components/pages/contact";
import ClientsPage from "./components/pages/clients";
import DetailPage from "./components/pages/model";
import ServicesPage from "./components/pages/services";
import ListingsPage from "./components/pages/listings";
import ItemPage from "./components/pages/item";

//Adim pages
import Dashboard from "./admin/dashboard";
//Auth
import AdminLogin from "./admin/auth/login";
//pages
import AdminProductsPage from "./admin/pages/products";
import AdminProductsSearch from "./admin/pages/search";
import AdminServicesPage from "./admin/pages/services";
import AdminServiceCategoryForm from "./admin/comonents/servicecategories/form";
import AdminProductCategoriesPage from "./admin/pages/productcategories";
import AdminServiceCategoriesPage from "./admin/pages/servicecategories";
import AdminModelPage from "./admin/pages/model";
//Admin products
import AdminProductDetail from "./admin/comonents/products/detail";
import AdminAddProduct from "./admin/comonents/products/add";
import AdminEditProduct from "./admin/comonents/products/edit";
//Categories
//Properties
//Admin
import Admin from "./admin";

const Routes = () => {
  return (
    <Switch>
      {/* User Routes */}
      <Route
        path="/listings/:show/:category/:id"
        exact
        component={ListingsPage}
      />
      <Route path="/products/:id/detail" exact component={DetailPage} />
      <Route path="/listings/:show" exact component={ListingsPage} />
      <Route path="/detail/:show/:name/:id" exact component={DetailPage} />
      <Route path="/clients" exact component={ClientsPage} />
      <Route path="/contacts" exact component={ContactsPage} />
      <Route path="/blog" exact component={ModelLayoutPage} />
      <Route path="/services" exact component={ServicesPage} />
      <Route path="/products" exact component={ProductsPage} />
      <Route path="/pages/:item" exact component={ItemPage} />
      {/* Admin Routes */}
      <Route
        path="/admin/products/:id/edit"
        exact
        component={AdminEditProduct}
      />
      <Route
        path="/admin/products/:id/detail"
        exact
        component={AdminProductDetail}
      />
      <Route
        path="/admin/productcategories"
        exact
        component={AdminProductCategoriesPage}
      />
      <Route
        path="/admin/servicecategories/:id/edit"
        exact
        component={AdminServiceCategoryForm}
      />
      <Route
        path="/admin/products/search/:srchstr"
        exact
        component={AdminProductsSearch}
      />

      <Route path="/admin/products/add" exact component={AdminAddProduct} />
      <Route path="/admin/services" exact component={AdminServicesPage} />

      <Route
        path="/admin/servicecategories"
        exact
        component={AdminServiceCategoriesPage}
      />
      <Route path="/admin/products" exact component={AdminProductsPage} />
      <Route path="/admin/model" exact component={AdminModelPage} />
      <Route
        path="/admin/proudctcategories"
        exact
        component={AdminProductCategoriesPage}
      />
      <Route path="/admin/dashboard" exact component={Dashboard} />
      <Route path="/admin" exact component={Admin} />
      {/* User Pages 2 */}
      <Route path="/about" exact component={AboutPage} />
      <Route path="/modellayout" component={ModelLayoutPage} />
      <Route path="/" exact component={HomePage} />
      {/* Page Not found */}
      <Route
        render={() => (
          <div className="pageNotFound">
            {" "}
            <h3>404 Page not Found</h3>
          </div>
        )}
      />
    </Switch>
  );
};
export default Routes;
