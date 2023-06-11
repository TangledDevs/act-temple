import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import { BsFillCircleFill } from "react-icons/bs";
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
const Donation = () => {
  return (
    <div className="mt-4 lg:grid lg:grid-cols-2 items-center" id="about">
      {/* image div */}
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
          <div className="lg:h-[60vh]">
            <img src={image1} alt="image1" className="object-contain" />
          </div>
          <div className="lg:h-[60vh]">
            <img src={image2} alt="image2" />
          </div>
          <div className="lg:h-[60vh]">
            <img src={image3} alt="image3" />
          </div>
          <div className="lg:h-[60vh]">
            <img src={image4} alt="image4" />
          </div>
        </Carousel>
      </div>
      {/* Info div */}
      <div className="flex justify-center flex-col">
        <h2 className="text-red-800 font-bold text-4xl text-center">
          Donation
        </h2>
        <p className="px-8 py-4 md:text-lg text-center">
          {" "}
          Help us continue our mission of serving the community and fostering
          spiritual growth. Your donations make a difference in maintaining the
          temple, organizing events, and supporting charitable initiatives.
        </p>
        <ul className="flex justify-center flex-col mx-10 my-4">
          <li className="flex gap-x-4 mt-2 items-center">
            <BsFillCircleFill />
            Maintain the temple premises.
          </li>
          <li className="flex gap-x-4 mt-2 items-center">
            <BsFillCircleFill />
            Organize religious ceremonies and festivals.
          </li>
          <li className="flex gap-x-4 mt-2 items-center">
            <BsFillCircleFill />
            Offer educational programs for spiritual growth.
          </li>
          <li className="flex gap-x-4 mt-2 items-center">
            <BsFillCircleFill />
            Support community outreach initiatives.
          </li>
          <li className="flex gap-x-4 mt-2 items-center">
            <BsFillCircleFill />
            Enhance the temple experience.
          </li>
        </ul>
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="bg-orange-500 text-white font-bold p-3 rounded-md w-32"
          >
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donation;
