import React from "react";
// import { BdayList } from "./birthdayList";
import Card from "../Card/TrendGrid";
const index = ({Data}) => {
  return (
    <div className="grid-cols-1 mx-6 md:grid-cols-3 items-center text-center md:flex grid justify-evenly gap-10">
      {Data?.slice(0,4).map((val, i) => {
        return (
          <div key={i}>
            <Card img={val.image_url} Title={val.name} SubTitle={val.tagline} Time={val.first_brewed} />
          </div>
        );
      })}
    </div>
  );
};

export default index;
