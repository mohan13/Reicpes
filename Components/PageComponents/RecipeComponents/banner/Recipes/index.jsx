import React from "react";
// import Image from "next/image";
import Link from "next/link";
// import recipeDetails from "../../../RecipeDetails/index";
const Index = ({ img, Title, SubTitle, Time, description }) => {
  return (
    <div className="flex flex-col text-center items-center gap-2 md:gap-4">
      <div className="h-52">
        <img src={img} alt="" className="h-full w-full" />
      </div>
      <div className="text-2xl font-title font-semibold ">{Title}</div>
      <div className="grid text-md font-normal">
        <div>{SubTitle}</div>
        <div>First brewed : {Time}</div>
      </div>
    </div>
  );
};

export default Index;
