import React from "react";
import NavItems from "../NavItems/index";
const index = () => {
  return (
    <div className="flex fixed bg-gray-800 text-white w-52 md:w-60 h-screen ">
      <NavItems from="sidebar" />
    </div>
  );
};

export default index;
