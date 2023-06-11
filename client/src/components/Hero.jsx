import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
    <div className="p-4 md:p-10 w-full h-full">
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
        <div className="lg:h-[85vh]">
          <img src={"hero/image1.png"} alt="image1" className="object-contain"/>
        </div>
        <div className="lg:h-[85vh]">
          <img src={"hero/image2.png"} alt="image2"/>
        </div>
        <div className="lg:h-[85vh]">
          <img src={"hero/image3.png"} alt="image3"/>
        </div>
        <div className="lg:h-[85vh]">
          <img src={"hero/image4.png"} alt="image4"/>
        </div>
        
      </Carousel>
      
    </div>
  );
};

export default Hero;
