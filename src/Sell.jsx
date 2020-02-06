import React, { Component } from "react";
import styled from "styled-components";

const ImagePreview = styled.div`
  width: 350px;
  height: 250px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

class Sell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "",
      model: "",
      year: "",
      price: "",
      displacement: "",
      cylinders: "",
      cooling: "",
      power: "",
      torque: "",
      seatHeight: "",
      weight: "",
      file: "",
      description: "",
      file: "",
      previewImg: null
    };
  }
  handleSubmit = evt => {
    evt.preventDefault();
    const data = new FormData();
    data.append("img", this.state.file);
    data.append("brand", this.state.brand);
    data.append("model", this.state.model);
    data.append("year", this.state.year);
    data.append("price", this.state.price);
    data.append("displacement", this.state.displacement);
    data.append("cylinders", this.state.cylinders);
    data.append("cooling", this.state.cooling);
    data.append("power", this.state.power);
    data.append("torque", this.state.torque);
    data.append("seatHeight", this.state.seatHeight);
    data.append("weight", this.state.weight);
    data.append("description", this.state.description);
    fetch("/new-post", { method: "POST", body: data });
    alert("Your item uploaded success");
    this.props.history.push("/");
  };

  fileChangeHandler = event => {
    this.setState({
      file: event.target.files[0],
      previewImg: URL.createObjectURL(event.target.files[0])
    });
  };

  eventChangeHandler = (event, name) => {
    this.setState({ [name]: event.target.value });
  };

  render = () => {
    const inputName = [
      "brand",
      "model",
      "year",
      "price",
      "displacement",
      "cylinders",
      "cooling",
      "power",
      "torque",
      "seatHeight",
      "weight",
      "description"
    ];
    return (
      <form className="form-sell" onSubmit={this.handleSubmit}>
      {inputName.map(name => {
        return (
          <div>
            <span>{name} : </span>
            <input onChange={e => this.eventChangeHandler(e, name)} />
          </div>
        );
      })}

      <div>
        <input type="file" onChange={this.fileChangeHandler} />
        <ImagePreview>
                  <img
                    height="250px"
                    src={this.state.previewImg}
                    className="image-preview__image"
                  />
        </ImagePreview>
      </div>
      <input type="submit" className="upload-pic" value="UPLOAD" />
    </form>
    );
  };
}
export default Sell;
