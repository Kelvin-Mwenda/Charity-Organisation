import {Carousel, Image} from 'react-bootstrap';

export default function CarouselPage(){
    return(
        <div className="carousel">
            <Carousel>
                <Carousel.Item style={{backgroundImage : 'url(../src/assets/wildlife.jpg)'}}>
                    <Carousel.Caption>
                        <Image src="../src/assets/wildlife.jpg" rounded />
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{backgroundImage : 'url(../src/assets/wildlife.jpg)'}}>
                    <Carousel.Caption>
                        <Image src="../src/assets/wildlife.jpg" rounded />
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{backgroundImage : 'url(../src/assets/wildlife.jpg)'}}>
                    <Carousel.Caption>
                        <Image src="../src/assets/wildlife.jpg" rounded />
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}