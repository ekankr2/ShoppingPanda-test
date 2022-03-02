import React, {FC, useState} from 'react';
import {Carousel} from "react-bootstrap";

const items = [
    {
        image: "https://images.pexels.com/photos/4603831/pexels-photo-4603831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title: "첫짤",
        subTitle: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
        alt: "First slide"
    },
    {
        image: "https://images.pexels.com/photos/1475896/pexels-photo-1475896.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title: "두째짤",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        alt: "Second slide"
    },
    {
        image: "https://images.pexels.com/photos/3073708/pexels-photo-3073708.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title: "셋째짤",
        subTitle: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
        alt: "Third slide"
    },
]

const Homepage: FC = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number, e: any) => {
        setIndex(selectedIndex);
    };

    const handleClick = (e: any) => {
        console.log(e.target.src)
    }

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect} className="carousel">
                {
                    items.map((item, index: number) =>
                        <Carousel.Item key={index} className="carousel-item">
                            <img
                                onClick={handleClick}
                                className="d-block w-100 carousel-image"
                                src={item.image}
                                alt={item.alt}
                            />
                            <Carousel.Caption>
                                <h3>{item.title}</h3>
                                <p>{item.subTitle}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                }
            </Carousel>

        </div>
    );
}

export default Homepage;
