import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import './ReactCarousel.css';


export default function ReactCarousel() {

    return (


        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/5669655/pexels-photo-5669655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Lawyer"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/8112118/pexels-photo-8112118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Second slide"
                />


            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Third slide"
                />


            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/5673483/pexels-photo-5673483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    )
}