import React from "react";
// import Image from "next/image";
const TrendGrid = ({ img, SubTitle, Title }) => {
  return (
    <div className="border flex flex-col p-6 h-80 items-center ">
      <div className="h-48 w-24">
        <img src={img} alt="" className="h-full w-full" />
      </div>
      <div className=" flex flex-col">
        <div className="text-xl font-title w-52">{Title}</div>
        <div className="flex flex-col text-md font-normal">{SubTitle}</div>
      </div>
    </div>
  );
};

export default TrendGrid;
