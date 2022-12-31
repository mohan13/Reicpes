import React from "react";
import Layout from "../../HOC/Layout";
import RecipeVedio from "../../Components/PageComponents/HomeComponents/DetailVedio";
import Trend from "../../Components/PageComponents/HomeComponents/Trending/index";
import Banner from "../../Components/PageComponents/HomeComponents/banner/index";
import Birthday from "../../Components/PageComponents/HomeComponents/BirthdayCake/index";
import Feedback from "../../Components/PageComponents/HomeComponents/Feedbacks/index";
import Download from "../../Components/PageComponents/HomeComponents/DownloadApp/index";

const index = ({Data}) => {
  return (
    <Layout>
      <div className="flex flex-col gap-14">
        <Banner />
        <Trend Trending={Data} />
        <RecipeVedio />
        <Birthday Data={Data}/>
        <Download />
        <Feedback />
      </div>
    </Layout>
  );
};

export default index;
