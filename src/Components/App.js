import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImagesList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos?page=5&per_page=50&", {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div
        className="ui container"
        style={{ marginTop: "10px", height: "100%" }}
      >
        App
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImagesList images={this.state.images} />
      </div>
    );
  }
}

export default App;
