import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../../Shared/NewsSummaryCard/NewsSummaryCard";
import useTitle from "../../../hooks/useTitle";

const Home = () => {
  useTitle("Home")
  const allNews = useLoaderData();
  return (
    <div>
      <h6>News : {allNews.length}</h6>
      {allNews.map((news) => (
        <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>
      ))}
    </div>
  );
};

export default Home;
