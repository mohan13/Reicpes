import React from "react";
import Layout from "../../HOC/Layout";
import Details from "../../Components/PageComponents/RecipeDetails/index";
export const getStaticPaths = async () => {
  const res = await fetch("https://api.punkapi.com/v2/beers");
  const Data = await res.json();
  const paths = Data.map((val) => {
    return {
      params: { id: val.id.toString() },
    };
  });
  console.log("data", Data);
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://api.punkapi.com/v2/beers/" + id);
  const Data = await res.json();
  console.log("data", Data);
  return {
    props: {
      Data,
    },
  };
};
const index = ({ Data }) => {
  return (
    <Layout>
      <Details Details={Data} />
    </Layout>
  );
};

export default index;
