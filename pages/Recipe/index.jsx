import React from "react";
import Layout from "../../HOC/Layout";
import Recipe from "../../Components/PageComponents/RecipeComponents/index";
export const getServerSideProps = async () => {
  const res = await fetch(
    'https://api.punkapi.com/v2/beers'
  );
  const Data = await res.json();
  console.log('data',Data)
  return {
    props: {
      Data,
    },
  };
};
const index = ({ Data }) => {
  return (
    <Layout>
      <Recipe Data={Data} />
    </Layout>
  );
};

export default index;
