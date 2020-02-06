import React, { Component } from "react";
import Post from "./Post.jsx";
import styled from "styled-components";

const Search = styled.div`
  text-align: left;
  margin-left: 20px;
  margin-bottom: 10px;
`;

const AllItem = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  margin-left: 10px;
`;
const Wrapper = styled.div`
  margin-top: 10;
  display: flix;
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [],visiblePosts:[],filter:"all"};
  }

  componentDidMount = async () => {
    let response = await fetch("/all-posts");
    let body = await response.text();
    console.log("/all-posts response", body);
    body = JSON.parse(body);
    this.setState({ posts: body });
    this.setState({ visiblePosts: body });
  }
  handleQuery = event => {
    let query = event.target.value;
    this.setState({
      visiblePosts: this.state.posts.filter(item => {
        return item.brand.includes(query) || item.model.includes(query);
      })
    });
  };
  loadAll = () => {
    this.setState({ filter: "all" });
  };
  changeFilter = (filterName) => {
    this.setState({ filter: filterName });
  };

  render() {
    const filteredResult = this.state.filter === "all" ? this.state.visiblePosts : this.state.visiblePosts.filter(post => post.brand === this.state.filter)

    return (
      <Wrapper>
        <div className="button">
          <button onClick={() => this.changeFilter("all")}> SHOW ALL </button>
          <button onClick={() => this.changeFilter("honda")}> HONDA </button>
          <button onClick={() => this.changeFilter("ducati")}> DUCATI </button>
          <button onClick={() => this.changeFilter("harley-davidson")}> YAMAHA </button>
          <button onClick={() => this.changeFilter("yamaha")}> SUZUKI </button>
          <button onClick={() => this.changeFilter("suzuki")}> APRILIA </button>
          <button onClick={() => this.changeFilter("aprilia")}> BMW </button>
          <button onClick={() => this.changeFilter("bmw")}> KAWASAKI </button>
          <button onClick={() => this.changeFilter("kawasaki")}>HALRLEY</button>{" "}
        </div>
        <div>
          <Search>
            <div>
              <input
                type="text"
                className="custom-file-input"
                placeholder="Search"
                onChange={this.handleQuery}
              ></input>
            </div>
          </Search>
          <AllItem>
            {filteredResult.map(p => (
              <Post key={p._id} contents={p} />
            ))}
          </AllItem>
        </div>
      </Wrapper>
    );
  }
}
export default Home;
