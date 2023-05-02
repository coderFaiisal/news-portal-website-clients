import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

const News = () => {
  useTitle("News");
  const news = useLoaderData();
  const { _id, image_url, details, title, category_id } = news;
  console.log(news);
  return (
    <div>
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Button variant="outline-success">
            <Link to={`/category/${category_id}`}>Related News...</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
