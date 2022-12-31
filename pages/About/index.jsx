import React from "react";
import Layout from "../../HOC/Layout";
import DetailVedio from "../../Components/PageComponents/HomeComponents/DetailVedio/index";
import DownloadAPP from "../../Components/PageComponents/HomeComponents/DownloadApp/index";
import Feedback from "../../Components/PageComponents/HomeComponents/Feedbacks/index";

import Heading from "../../Components/PageComponents/AboutComponents/Heading/index";
import About from "../../Components/PageComponents/AboutComponents/banner/index";
const index = () => {
  return (
    <Layout>
      <div>
        <About />
        <Heading />
        <DetailVedio />
        <DownloadAPP />
        <Feedback />
      </div>
    </Layout>
  );
};

export default index;
