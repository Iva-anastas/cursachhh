import React, {Component} from 'react';
import CarouselBox from "../Component/CarouselBox";
import {Carousel} from "react-bootstrap";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/imagge.jpg";

class GalleryPicture extends Component {
  render() {
    return(
        <Carousel id={'why'}>
          <Carousel.Item>
            <img
                className='d-block w-100'
                src={image1}
            />
            <Carousel.Caption>
              <h3 >Бухгалтерія фото 1</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
                // width='100%'
                className='d-block w-100'
                src={image2}
            />
            <Carousel.Caption>
              <h3>Бухгалтерія фото 2</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
                className='d-block w-100'
                src={image3}
            />
            <Carousel.Caption>
              <h3>Бухгалтерія фото 3</h3>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
                className='d-block w-100'
                src={image4}
            />
            <Carousel.Caption>
              <h3>Бухгалтерія фото 4</h3>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    );
  }
}

export default GalleryPicture;
