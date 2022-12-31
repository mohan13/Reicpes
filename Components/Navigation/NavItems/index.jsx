import React from "react";
import { navList } from "../NavData";
import NavItem from "../NavItem/index";
const index = ({from}) => {
  return (
    <div
      className={`flex items-left gap-10 py-10 pl-8 ${
        from === "sidebar" ? "flex-col" : null
      } `}
    >
      {navList?.map((val, i) => {
        return (
          <div key={i} className="text-md md:text-lg font-medium">
            <NavItem path={val.path} title={val.title} />
          </div>
        );
      })}
    </div>
  );
};

export default index;
