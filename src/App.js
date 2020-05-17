import React from "react";
import { SideLinks } from "./TheContext";
import SideBar from "./sidebar";
import Header from "./head";
import Dashboard from "./components/dashboard";
import Sales from "./components/sales/sales";
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
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <SideLinks>
        <div className='App'>
          <SideBar />
          <div className='container'>
            <Header />
            <Switch>
              <Route path='/' exact component={Dashboard} />
              <Route path='/components/dashboard' component={Dashboard} />
              <Route path='/components/sales/sales' component={Sales} />
              <Route path='/components/new/new' component={New} />
              <Route path='/components/add/add' component={Add} />
              <Route path='/components/history' component={History} />
              <Route
                path='/components/new/newpurchase'
                component={NewPurchase}
              />
              <Route
                path='/components/new/salesreturn'
                component={SalesReturn}
              />
              <Route
                path='/components/new/purchasereturn'
                component={PurchaseReturn}
              />
              <Route path='/components/add/vendorlist' component={VendorList} />
              <Route path='/components/add/clientlist' component={ClientList} />
              <Route
                path='/components/add/productlist'
                component={ProductList}
              />
              <Route path='/components/add/stocklist' component={StockList} />
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
