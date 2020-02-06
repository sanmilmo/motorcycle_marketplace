import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Price = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    return (
      <div className="item-detail">
        <Link to={"/detail/" + this.props.contents.model}>
          <img
            height="150px"
            width="210px"
            src={this.props.contents.frontendPath}
          />
        </Link>
        <Price>
          <div>{this.props.contents.model}</div>
          <div>$ {this.props.contents.price}</div>
        </Price>
      </div>
    );
  };
}
export default Post;
