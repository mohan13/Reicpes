import React from "react";
const heroGrid = ({ Title, SubTitle, Paragraph, subParagraph, vdo }) => {
  const PlayVideo = () => {
    return alert("Play video");
  };
  return (
    <div>
      <div className="grid gap-4 px-4 md:px-24 ">
        <div className="text-4xl font-title font-medium md:text-6xl ">
          {Title}
        </div>
        <div className="leading-loose text-xl font-sans">{Paragraph}</div>
        <div className="flex items-center gap-2">
          <div className="h-24 w-24 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-400 hover:border bg-yellow-400 ">
            <div onClick={PlayVideo} className="h-14 w-14">
              {vdo}
            </div>
          </div>
          <div className="grid gap-2">
            <div className="text-2xl font-medium font-title">{SubTitle}</div>
            <div className="text-md">{subParagraph}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default heroGrid;
