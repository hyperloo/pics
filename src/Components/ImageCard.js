import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", () => {
      this.setState({
        spans: Math.ceil(this.imageRef.current.clientHeight / 10)
      });
    });
  }
  render() {
    const { description, urls } = this.props.image;
    return (
      <div
        style={{
          gridRowEnd: `span ${this.state.spans}`
        }}
      >
        <img
          style={{ width: "100%", height: "auto" }}
          ref={this.imageRef}
          alt={description}
          src={urls.regular}
        />
      </div>
    );
  }
}

export default ImageCard;
