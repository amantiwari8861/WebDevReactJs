import React from 'react'
import { Carousel } from 'react-bootstrap'
import logo from '../logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <ExampleCarouselImage text="First slide" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage text="Second slide" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage text="Third slide" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider

const ExampleCarouselImage = () => {
    return (
        <img src={logo} alt="" style={{ backgroundColor: "black" }} height={"300px"} className='d-block w-100'/>
    );
}