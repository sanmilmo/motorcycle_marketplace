import React, { Component } from "react";
import styled from "styled-components";

const DetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  padding: 20px;
  border-style: outset;
`;
const Image = styled.div`
  margin: 20px;
  margin-left: 0;
`;
const Spec = styled.div`
  margin-right: 0px;
`;
const Desc = styled.div`
  display: grid;
  font-weight: 800;
  div {
    padding: 5px;
  }
`;
const Desc2 = styled.div`
  display: grid;
  font-weight: 900;
  div {
    padding: 5px;
  }
  margin-left: 10px;
`;
const Price = styled.div`
  background-color: #7a9262;
  color: white;
  padding: 5px 5px;
  text-align: center;
  font-size: 20px;
  font-family: "Times New Roman", Times, serif;
  border: 2px solid black;
  border-radius: 10px;
  width: 50%;
`;
class Details extends Component {
  addToCart = () => {
    this.props.addToCart(this.props.model);
  };
  render() {
    const {
      brand,
      model,
      year,
      price,
      displacement,
      cylinders,
      cooling,
      power,
      torque,
      seatHeight,
      weight,
      description,
      frontendPath
    } = this.props.model;
    return (
      <DetailWrapper>
        <Image>
          <img height="500px" src={frontendPath} />
        </Image>

        <Spec>
          <h1>{model}</h1>
          <Price> {price}$</Price>
          <DetailWrapper>
            <Desc>
              <div>BRAND</div>
              <div>YEAR</div>
              <div>DISPLACEMENT</div>
              <div>CYCLINDERS</div>
              <div>COOLING</div>
              <div>POWER</div>
              <div>TORQUE</div>
              <div>SEAT HEIGHT</div>
              <div>WEIGHT</div>
              <div>DESCRIPTION</div>
            </Desc>
            <Desc2>
              <div> {brand}</div>
              <div> {year}</div>
              <div> {displacement}cc</div>
              <div> {cylinders}</div>
              <div> {cooling}</div>
              <div> {power}hp</div>
              <div> {torque}Nm</div>
              <div> {seatHeight}mm</div>
              <div> {weight}kg</div>
              <div> {description}</div>
            </Desc2>
          </DetailWrapper>
          <div>
            <button onClick={this.addToCart} className="addToCart">
              Add To Cart
            </button>
          </div>
        </Spec>
      </DetailWrapper>
    );
  }
}

export default Details;
