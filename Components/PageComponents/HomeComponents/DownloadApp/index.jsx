import React from "react";
import { downloadDetails } from "./DownloadDetails";
import Images from "../Card/ImageGrid";
import Icon from "../Card/icons";
const index = () => {
  const Apple = () => {
    return alert("For Apple");
  };
  const Android = () => {
    return alert("For Android");
  };
  return (
    <div>
      {downloadDetails?.map((val, i) => {
        return (
          <div key={i} className="grid md:grid-cols-2 md:px-2">
            <div>
              <Images image1={val.img} image3={val.img2} image2={val.img3} />
            </div>
            <div className="flex flex-col px-2 md:px-6 place-content-center gap-6 md:gap-24">
              <div className="text-3xl font-medium md:text-6xl font-title">
                {val.title}
              </div>
              <div className="flex bg-green gap-2 md:gap-4 ">
                <div onClick={Android}>
                  <Icon
                    Icon={val.android}
                    Download={val.Title}
                    Remarks={val.Remarks}
                  />
                </div>
                <div onClick={Apple}>
                  <Icon
                    Icon={val.apple}
                    Download={val.Title}
                    Remarks={val.Remarks1}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default index;
