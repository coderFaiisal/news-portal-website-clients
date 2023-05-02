import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
  const { _id, title, details, author, image_url, rating, total_view } = news;
  const { img, published_date, name } = author;
  return (
    <div>
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <Image
              className="me-2"
              roundedCircle
              style={{ width: "80px" }}
              src={img}
              alt=""
            />
            <div className="ml-2">
              <p className="mb-0">{name}</p>
              <p>{published_date}</p>
            </div>
          </div>
          <div>
            <FaBookmark className="me-2" />
            <FaShareAlt />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details?.length > 200 ? (
              <p>
                {details?.slice(0, 200) + "..."}
                <Link to={`/news/${_id}`}>Read More</Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-mute d-flex justify-content-between">
          <div>
            <FaStar className="text-warning me-2" />
            {rating?.number}
          </div>
          <div>
            <FaEye className="me-2" />
            {total_view}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummaryCard;
