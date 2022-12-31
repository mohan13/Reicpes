import React from "react";
import Image from "next/image";
const TrendGrid = ({ img, SubTitle, Title, Time }) => {
  return (
    <div className="flex flex-col items-center gap-2 md:gap-6">
      <div className="h-48 w-48">
        <Image src={img} alt="" className="h-full w-full" />
      </div>
      <div className="text-2xl font-title font-semibold ">{Title}</div>
      <div className="grid text-md font-normal">
        <div>{SubTitle}</div>
        <div>{Time}</div>
      </div>
    </div>
  );
};

export default TrendGrid;
