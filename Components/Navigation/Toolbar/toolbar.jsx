import Image from "next/image";
import React, { useState } from "react";
import Sidebar from "../SideBar/index";
import { FaSistrix, FaBars } from "react-icons/fa";
import Logo from "../../Resorces/Images/logo.png";
import NavLink from "../NavItems/index";
const Toolbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  let model;
  if (showMenu) {
    model = (
      <div
        onClick={() => setShowMenu(false)}
        style={{
          background: "rgb(0,0,0,0.5)",
        }}
        className="w-screen h-screen z-20 absolute top-0 left-0"
      >
        <Sidebar />
      </div>
    );
  }
  const Search = () => {
    alert("Searching");
  };
  return (
    <div className="flex bg-black md:bg-inherit flex-wrap w-screen md:absolute z-20 justify-between md:justify-evenly p-5 items-center">
      {model}
      <div className="text-red-500 h-10 w-10 md:h-24 md:w-24 font-medium text-4xl font-serif">
        <Image src={Logo} alt="" className="h-full w-full" />
      </div>
      <div
        onClick={() => setShowMenu(true)}
        className="text-white md:hidden  h-8 w-8 md:h-10 md:w-10 "
      >
        <FaBars className="h-full w-full" />
      </div>
      <div className="hidden md:block mt-4">
        <NavLink />
      </div>
      <div

      
        // onClick={Search}
        // className="md:inline-flex h-8 w-8 md:h-10 md:w-10 border-yellow-400 items-center hidden  bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
      >
        <input
          type="text"
          placeholder='Search'
          className="mt-4 md:mt-0 bg-transparent rounded border text-white border-gray-300 focus:border-yellow-400 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out pl-4 "
        />
      </div>
    </div>
  );
};

export default Toolbar;
