import React from "react";
import Image from "next/image";
import Img from "../../Resorces/Images/banner.png";

const index = ({ Details }) => {
  console.log("details", Details);
  return (
    <div>
      <div className="grid items-center">
        <div className>
          <Image src={Img} alt="" className="h-full" />
        </div>
        <div className="text-4xl leading-loose w-screen text-center md:text-8xl absolute text-white font-title ">
          <div>Recipe Details</div>
        </div>
      </div>
      <div className="p-4">
        {Details?.map((val, i) => {
          return (
            <div key={i}>
              <div className="grid grid-cols-2">
                <div className="w-24 mx-auto">
                  <img src={val.image_url} className="w-full h-full" alt="" />
                </div>
                <div className="flex flex-col px-32 justify-center gap-4">
                  <div className="font-title text-4xl">{val.name}</div>
                  <div>
                    <div className="flex text-base gap-2">
                      Volume:<div>{val.volume.value}</div>
                      <div>{val.volume.unit}</div>
                    </div>
                    <div>Time: {val.first_brewed}</div>
                    <div>Ratings:{val.abv}</div>
                    <div>Contributed by:{val.contributed_by}</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <h2 className="font-title  text-xl ">Descriptions</h2>
                  {val.description}
                </div>
                <div className="grid gap-4">
                  <div>
                    <div className="font-title text-xl">Brewers Tips</div>
                    <div className="md:text-md leading-normal">
                      {val.brewers_tips}
                    </div>
                  </div>
                  <div>
                    <div className="font-title text-xl">
                      Drink these foods for more fun
                    </div>
                    {val.food_pairing}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;
