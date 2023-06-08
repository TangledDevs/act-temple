import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Hero = () => {
  return (
    <div className="p-4 md:p-10">
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        
      >
        <div className="lg:h-[70vh]">
          <img src={image1} alt="image1" className="object-contain"/>
        </div>
        <div className="lg:h-[70vh]">
          <img src={image2} alt="image2"/>
        </div>
        <div className="lg:h-[70vh]">
          <img src={image3} alt="image3"/>
        </div>
        <div className="lg:h-[70vh]">
          <img src={image4} alt="image4"/>
        </div>
        
      </Carousel>
      
    </div>
  );
};

export default Hero;
