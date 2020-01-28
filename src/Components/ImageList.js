import React from "react";
import ImageCard from "./ImageCard";

const ImageList = props => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px,1fr))",
        gridGap: "0 10px"
      }}
    >
      {props.images.map(image => (
        <ImageCard image={image} key={image.id} />
      ))}
    </div>
  );
};

export default ImageList;
