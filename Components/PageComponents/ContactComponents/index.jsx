import React from "react";
import img1 from "../../Resorces/Images/banner.png";
import ContactList from "../ContactComponents/Conacts/listContact";
import ContacName from "./ContactName/index";
import Image from "next/image";
const index = () => {
  return (
    <div>
      <div className="grid items-center">
        <div className="relative">
          <Image
            src={img1}
            alt=""
            // layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="text-4xl leading-loose w-full text-center md:text-8xl absolute text-white font-title ">
          <div>Conatct Us</div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 p-5">
        <div className="border px-8">
          <ContactList />
        </div>
        <div>
          <ContacName />
        </div>
      </div>
    </div>
  );
};

export default index;
