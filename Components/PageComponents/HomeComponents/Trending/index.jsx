import React from "react";
import { TrendData } from "./TrendData";
import Card from "../Card/TrendGrid";
const index = () => {
  const Details = () => {
    return alert("working");
  };
  return (
    <div 
    className="items-center text-center md:flex grid justify-evenly gap-10 "
    >
      {TrendData?.map((val, i) => {
        return (
          <div key={i}>
            <Card
              img={val.image}
              Title={val.Title}
              SubTitle={val.subTitle}
              Time={val.Time}
            />
            <button
              onClick={Details}
              className="px-4 py-2 ease-in-out duration-300 mt-6 text-md font-medium border border-orange-400 rounded-full  hover:bg-yellow-500 hover:text-white"
            >
              {val.btn}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default index;
