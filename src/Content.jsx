import React, { Component } from "react";
import { Route, BrowserRouter, Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Details from "./Details.jsx";
import Sell from "./Sell.jsx";
import Cart from "./Cart.jsx";
import Checkout from "./Checkout.jsx";
import Home from "./Home.jsx";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { totalCost: 0, cart: [], allPosts: [] };
  }
  componentDidMount = async () => {
    let response = await fetch("/all-posts");
    let body = await response.text();
    console.log("/all-posts response", body);
    body = JSON.parse(body);
    this.setState({ allPosts: body });
   
  };
  addToCart = item => {
    this.setState({
      totalCost: this.state.totalCost + parseInt(item.price, 10),
      cart: this.state.cart.concat(item)
    });
  };
  removeItem = (item, idx) => {
    const cartCopy = this.state.cart.slice();
    cartCopy.splice(idx, 1);
    this.setState({ cart: cartCopy });
    this.setState({
      totalCost: this.state.totalCost - parseInt(item.price, 10)
    });
  };
  renderItemDetails = routerData => {
    const modelName = routerData.match.params.model;
    const model = this.state.allPosts.find(e => e.model === modelName);
    if (model === undefined) {
      return <div>Can not find model</div>;
    }
    return <Details model={model} addToCart={this.addToCart} />;
  };
  renderSell = routerData => {
    return <Sell history={routerData.history} />;
  };
  renderCart = () => {
    return (
      <Cart
        cart={this.state.cart}
        removeItem={this.removeItem}
        total={this.state.totalCost}
      />
    );
  };
  renderCheckout = routerData => {
    return (
      <Checkout
        totalCost={this.state.totalCost}
        history={routerData.history}
        clearToCart={this.clearToCart}
      />
    );
  };
  clearToCart = () => {
    this.setState({ cart: [], totalCost: 0 });
  };
  renderAllItems = () => {
    return (
      <Home
        allPosts={this.state.allPosts}
        addToCart={this.addToCart}
        renderItemDetails={this.renderItemDetails}
      />
    );
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar cartSize={this.state.cart.length} />
          <Route exact={true} path="/" render={this.renderAllItems} />
          <Route exact={true} path="/cart" render={this.renderCart} />
          <Route exact={true} path="/checkout" render={this.renderCheckout} />
          <Route exact={true} path="/sell" render={this.renderSell} />
          <Route
            exact={true}
            path="/detail/:model"
            render={this.renderItemDetails}
          />
        </div>
      </BrowserRouter>
    );
  }
}
export default Content;
