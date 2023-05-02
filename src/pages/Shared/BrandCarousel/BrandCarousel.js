import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Brand1 from "../../../assets/images/Brand1.jpg";
import Brand2 from "../../../assets/images/Brand2.png";

function BrandCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={Brand1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Brand2} alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default BrandCarousel;
