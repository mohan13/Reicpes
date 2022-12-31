import React from "react";
import { footerList } from "./FooterList";
import Social from "./social";
const Index = () => {
  return (
    <div className="w-screen p-6 md:p-32 grid bg-black">
      <div className="gap-14 grid md:grid-cols-5 text-white">
        {footerList?.map((val, i) => {
          return (
            <div key={i}>
              <div className="font-title font-medium mb-8 md:mb-14 text-2xl">
                {val.Title}
              </div>
              <div className="grid gap-6">
                <div className="hover:text-yellow-400">{val.list1}</div>
                <div className="hover:text-yellow-400">{val.list2}</div>
                <div className="hover:text-yellow-400">{val.list3}</div>
                <div className="hover:text-yellow-400">{val.list4}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <Social />
      </div>
    </div>
  );
};

export default Index;
