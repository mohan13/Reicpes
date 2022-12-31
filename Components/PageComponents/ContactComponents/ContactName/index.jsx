import React from "react";
import { ContactName } from "./ContactNames";
const index = () => {
  return (
    <div className="flex flex-col items-center gap-4 md:py-8 mt-8 md:mt-0">
      {ContactName?.map((val, i) => {
        return (
          <div key={i} className='flex items-center gap-4'>
            <div className="h-8 w-8">{val.icon1}</div>
            <div className="flex flex-col font-title">
              <div className="text-xl md:text-2xl">{val.Name}</div>
              <div className="text-base md:text-lg">{val.address}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default index;
