import React from "react";
import Link from "next/link";
import Recipe from "./banner/Recipes/index";
import img1 from "../../Resorces/Images/banner.png";
import Image from "next/image";
import { useState } from "react";
const Index = ({ Data }) => {
  const [recipeList, setRecipeList] = useState("");
  const searchFilter = (array) => {
    return array.filter((el) => el.name.toUpperCase().includes(recipeList));
  };
  const Filterd = searchFilter(Data);
  const Search = (elemnts) => {
    setRecipeList(elemnts.target.value);
  };
  return (
    <div>
      <div className="grid items-center ">
        <div className="relative">
          <Image
            src={img1}
            alt=""
            // layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="text-4xl leading-loose w-full text-center md:text-8xl absolute text-white font-title ">
          <div>Recipe</div>
        </div>
      </div>
      <div className="my-4 md:ml-24 gap-4 flex text-2xl items-center ">
        {/* <div className=" font-title"> Search :</div> */}
        <input
          onChange={Search}
          type="text"
          placeholder="Search"
          className="bg-transparent rounded border border-gray-300 focus:border-yellow-400 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out pl-4 "
        />
      </div>
      <div className="grid md:grid-cols-4 gap-2 md:gap-6">
        {Filterd?.map((val, i) => {
          return (
            <div key={i} className="my-10 flex flex-col items-center ">
              <Recipe
                img={val.image_url}
                Title={val.name}
                SubTitle={val.tagline}
                Time={val.first_brewed}
              />
              <Link href={`/Recepies/${val.id}`}>
                <div className="w-48 text-center px-4 py-2 ease-in-out duration-300 mt-2 text-md font-medium border border-orange-400 rounded-full  hover:bg-yellow-500 hover:text-white">
                  View Details
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
