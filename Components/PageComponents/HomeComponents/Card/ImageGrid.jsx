import React from "react";
import Image from "next/image";

const ImageGrid = ({ image1, image3, image2 }) => {
  return (
    <div className="grid  place-content-center">
      <Image src={image1} alt="" />
      <div className="absolute hidden md:grid grid-cols-2 ">
        <div className="mt-14">
          <Image src={image2} />
        </div>
        <div className="mt-80 ml-6">
          <Image src={image3} />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
