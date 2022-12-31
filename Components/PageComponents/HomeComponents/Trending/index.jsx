import React from "react";
import Card from "../Card/TrendGrid";
const index = ({ Trending }) => {
  const Details = () => {
    return alert("working");
  };
  return (
    <div className="items-center text-center md:flex grid justify-evenly gap-10 ">
      {Trending?.slice(0,4).map((val, i) => {
        return (
          <div key={i}>
            <Card
              img={val.image_url}
              Title={val.name}
              SubTitle={val.tagline}
            />
            <button
              onClick={Details}
              className="px-4 py-2 ease-in-out duration-300 mt-6 text-md font-medium border border-orange-400 rounded-full  hover:bg-yellow-500 hover:text-white"
            >
             View Full Recipe
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default index;
