import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../img/course-7.jpg';
import slide2 from '../../img/cat-3.jpg';
import slide3 from '../../img/course-4.jpg';

function Slide() {
  return (
    <Carousel>
      <Carousel.Item>
     <img src={slide1} style={{width:"100%",height:"500px"}}/>
        <Carousel.Caption>
          <h3>Welcome in AI DIV</h3>
          <p>Space for Learning and development</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide2} style={{width:"100%",height:"500px"}} />
        <Carousel.Caption>
          <h3>Upgrade Your Skills</h3>
          <p>Learn new subjects</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide3} style={{width:"100%",height:"500px"}} />
        <Carousel.Caption>
          <h3>Upgrade Your Skills</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;