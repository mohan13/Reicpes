import React from "react";

const icons = ({ Icon, Download, Remarks }) => {
  return (
    <div className="flex justify-center ease-in-out duration-300 rounded-md hover:bg-yellow-400 border hover:cursor-pointer hover:text-white border-yellow-400 p-1 md:px-6 md:py-2 gap-2">
      <div className="h-10 w-10 md:h-14 md:w-14">{Icon}</div>
      <div>
        <div className="text-lg md:text-2xl font-medium">{Download}</div>
        <div className="text-sm ">{Remarks}</div>
      </div>
    </div>
  );
};

export default icons;
