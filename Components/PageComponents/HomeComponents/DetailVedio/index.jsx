import React from "react";
import { recipeVideo } from "./recipeVideo";
import HeroGrid from "../Card/heroGrid";
import Images from "../Card/ImageGrid";
const detail = () => {
  return (
    <div >
      {recipeVideo?.map((val, i) => {
        return (
          <div key={i} className="grid gap-10 md:grid-cols-2 py-14">
            <HeroGrid
              Title={val.title}
              vdo={val.vedio}
              SubTitle={val.subTitle}
              Paragraph={val.paragraph}
              subParagraph={val.para}
            />
            <Images image1={val.img} image3={val.img2} image2={val.img3} />
          </div>
        );
      })}
    </div>
  );
};

export default detail;
