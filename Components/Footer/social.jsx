import Link from "next/link";
import React from "react";
import { socialMedia } from "./FooterList";
const social = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center md:justify-between mt-4 text-white text-lg">
      <div className="flex gap-2">
        Copyright ©2022 All rights reserved | This template is made with by
        <div className="text-yellow-400">Mohan Gurung</div>
      </div>
      <div className="flex gap-4">
        {socialMedia?.map((val, i) => {
          return (
            <div key={i}>
              <Link href={""}>
                <div className="h-8 w-8 ">{val.Social}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default social;
