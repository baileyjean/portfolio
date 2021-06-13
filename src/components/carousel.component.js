import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function CarouselComponent() {
  return (
    <div className="carousel-wrapper">
      <Carousel infiniteLoop useKeyboardArrows autoPlay stopOnHover swipeable showThumbs = {false}>
        <div>
          <img src="../dogecoin500px.png" alt="Dogecoin the Game Logo"/>
          <p>Dogecoin the Game</p>
        </div>
        <div>
          <img src="../transform500px.png" alt="Butterfly emerging from its coccoon"/>
          <p>This is acting as placeholder text for now</p>
        </div>
        <div>
          <img src="../pride500px.png" alt="Pride Heart with a super cute danger noodle"/>
          <p>Wooo! More placeholder text</p>
        </div>
      </Carousel>
    </div>
  );
}