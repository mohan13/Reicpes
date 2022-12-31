import Image from "next/image";
import React from "react";
import { feedbackDetails } from "./feedbackDetails";
const index = () => {
  return (
    <div className="my-0 md:my-24">
      <div className="mb-10 mx-4">
        <div className="sm:text-6xl mb-10 md:text-center text-4xl font-medium font-title text-gray-900">
          Feedback From Customers
        </div>
        <div className="leading-loose text-sans md:text-center ">
          inappropriate behavior is often laughed off as “boys will be boys,”
          women face higher conduct standards especially<br></br> in the
          workplace.That’s why it’s crucial that, as women.
        </div>
      </div>
      <div className="grid md:flex justify-center  md:mx-24 gap-14 ">
        {feedbackDetails?.map((val, i) => {
          return (
            <div key={i}>
              <div className="grid md:flex border p-10">
                <div className="w-24 h-24 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <Image src={val.img} />
                </div>
                <div>
                  <div className="text-gray-900 text-lg title-font font-medium">
                    {val.Name}
                  </div>
                  <div className="text-gray-900 text-md  mb-3">{val.post}</div>
                  <div className="leading-relaxed text-base">{val.details}</div>
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
