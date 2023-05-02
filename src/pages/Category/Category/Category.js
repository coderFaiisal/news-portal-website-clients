import { useLoaderData, useParams } from "react-router-dom";
import NewsSummaryCard from "../../Shared/NewsSummaryCard/NewsSummaryCard";
import { useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";

const Category = () => {
  const categoryNews = useLoaderData();
  useTitle("Category")
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://news-portal-website-server.vercel.app/news-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const nameOfCategory = categories.find((cate) => cate.id === id);

  return (
    <div>
      <h6>
        {nameOfCategory?.name} has {categoryNews.length} {categoryNews.length > 1 ? "articles" : "article"}
      </h6>
      {categoryNews.map((news) => (
        <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>
      ))}
    </div>
  );
};

export default Category;
