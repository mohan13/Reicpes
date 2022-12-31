import React from "react";
import { bannerList } from "../banner/BannerData";
import Image from "next/image";
const index = () => {
  return (
    <div>
      {bannerList?.map((val, i) => {
        return (
          <div key={i} className="grid items-center">
            <div className="relative">
              <Image
                src={val.Image}
                alt=""
                // layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="text-4xl leading-loose w-full text-center md:text-8xl absolute text-white font-title ">
              <div>{val.Title}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default index;
