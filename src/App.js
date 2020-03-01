import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList";
import Index from "./components/Index";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Details from "./components/Details";
import Cart from "./components//Cart/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";

class App extends Component {
  render() {
    return (
        <Fragment>
          <Navbar />
          <div className="content">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/men" render={() => <ProductList category="men" />}/>
            <Route exact path="/women" render={() => <ProductList category="women" />}/>
            <Route exact path="/kids" render={() => <ProductList category="kids" />}/>
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route component={Default} />
          </Switch>
          </div>
          <Footer />
          <Modal />
        </Fragment>
    );
  }
}

export default App;
