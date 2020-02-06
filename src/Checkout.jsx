import React, { Component } from "react";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = { yearlyCost: 0, terms: 1, rate: 0.0099 };
  }
  componentDidMount() {
    this.setState({
      yearlyCost:
        (this.props.totalCost *
          Math.pow(1 + this.state.rate, this.state.terms) *
          this.state.rate) /
        (Math.pow(1 + this.state.rate, this.state.terms) - 1)
    });
  }
  termHandler = event => {
    this.setState({ terms: parseInt(event.target.value, 10) });
  };
  rateHandler = event => {
    this.setState({ rate: parseFloat(event.target.value, 10) });
  };
  submitHandler = () => {
    event.preventDefault();
    this.setState({
      yearlyCost:
        (this.props.totalCost *
          Math.pow(1 + this.state.rate, this.state.terms) *
          this.state.rate) /
        (Math.pow(1 + this.state.rate, this.state.terms) - 1)
    });
  };
  proceedToCheckout = () => {
    this.props.clearToCart();
    alert("Thank you for your order");
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="checkout">
        <div className="inside-check">
        <h2  className="price">Total Price : $ {this.props.totalCost} </h2>
        <form onSubmit={this.submitHandler}>
          <div>
            <div>
              <h4>Terms</h4>
              <select onChange={this.termHandler}>
                <option value="1">12 Months</option>
                <option value="2">24 Months</option>
                <option value="3">36 Months</option>
                <option value="4">48 Months</option>
                <option value="5">60 Months</option>
                <option value="6">72 Months</option>
              </select>
            </div>
            <div>
              <h4>Rate</h4>
              <select onChange={this.rateHandler}>
                <option value="0.0099">0.99 %</option>
                <option value="0.0199">1.99 %</option>
                <option value="0.0299">2.99 %</option>
                <option value="0.0399">3.99 %</option>
                <option value="0.0499">4.99 %</option>
                <option value="0.0599">5.99 %</option>
              </select>
            </div>
            <input type="submit" value="Calculate" />
          </div>
        </form>
        <h3>Estimated Payment : </h3>
        <h2 className="price">
          {" "}
          $ {Math.round((this.state.yearlyCost * 100) / 12) / 100} / month
        </h2>
        </div>
        <div className="card-info">
          <form onSubmit={this.submitHandler}>
            <h4>Credit Card</h4>
            <div><input placeholder="Card Number"/></div>
            <div><input placeholder="MM"/></div>
            <div><input placeholder="YY"/></div>
            <div><input placeholder="CVV"/></div>
          </form>
        </div>
        <button className="button-check" onClick={this.proceedToCheckout}>Checkout</button>
      </div>
    );
  }
}

export default Checkout;
