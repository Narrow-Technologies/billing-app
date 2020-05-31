import React from "react";
import { SideLinks } from "./TheContext";
import SideBar from "./sidebar";
import Header from "./head";
import Dashboard from "./components/dashboard";
import Sales from "./components/new/sales/sales";
import New from "./components/new/new";
import Add from "./components/add/add";
import VendorList from "./components/add/vendorlist";
import ClientList from "./components/add/clientlist";
import ProductList from "./components/add/productlist";
import StockList from "./components/add/stocklist";
import History from "./components/history";
import NewPurchase from "./components/new/newpurchase";
import SalesReturn from "./components/new/salesreturn";
import PurchaseReturn from "./components/new/purchasereturn";
import Business from "./components/new/sales/business";
import Customer from "./components/new/sales/customer";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <SideLinks>
        <div className='App'>
          <SideBar className='SideBar' />
          <div className='container'>
            <Header />
            <Switch>
              <Route path='/' exact component={Dashboard} />
              <Route path='/components/dashboard' exact component={Dashboard} />
              <Route
                path='/components/new/sales/sales'
                exact
                component={Sales}
              />
              <Route path='/components/new/new' exact component={New} />
              <Route path='/components/add/add' exact component={Add} />
              <Route path='/components/history' exact component={History} />
              <Route
                path='/components/new/newpurchase'
                exact
                component={NewPurchase}
              />
              <Route
                path='/components/new/salesreturn'
                exact
                component={SalesReturn}
              />
              <Route
                path='/components/new/purchasereturn'
                exact
                component={PurchaseReturn}
              />
              <Route
                path='/components/add/vendorlist'
                exact
                component={VendorList}
              />
              <Route
                path='/components/add/clientlist'
                exact
                component={ClientList}
              />
              <Route
                path='/components/add/productlist'
                exact
                component={ProductList}
              />
              <Route
                path='/components/add/stocklist'
                exact
                component={StockList}
              />
              <Route
                path='/components/new/sales/business'
                exact
                component={Business}
              />
              <Route
                path='/components/new/sales/customer'
                exact
                component={Customer}
              />
              <Route path='/' render={() => <div>404</div>} />
            </Switch>
          </div>
        </div>
      </SideLinks>
    </Router>
  );
}

// const Home = () => (
//   <div>
//     <h1> Choose the pages </h1>
//   </div>
// );

export default App;
