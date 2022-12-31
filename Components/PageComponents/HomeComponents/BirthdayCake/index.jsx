import React from "react";
import { BdayList } from "./birthdayList";
import Card from "../Card/TrendGrid";
const index = () => {
  return (
    <div className=" items-center text-center md:flex grid justify-evenly gap-10">
      {BdayList?.map((val, i) => {
        return (
          <div key={i} className='grid border p-8'>
            <Card img={val.image} Title={val.Title} Time={val.paragraph} />
          </div>
        );
      })}
    </div>
  );
};

export default index;
