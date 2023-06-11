import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsFillCircleFill } from "react-icons/bs";

const responsive = {
  superLargeDesktop: {
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
    <div className="mt-4 lg:grid lg:grid-cols-2 items-center" id="donations">
      <div className="p-6 md:p-10">
        <Carousel
          swipeable
          draggable={false}
          showDots
          responsive={responsive}
          ssr={false}
          infinite
          autoPlay
          autoPlaySpeed={5000}
          keyBoardControl
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-30-px"
        >
          <div className="flex justify-center">
            <img src={"donation/image1.png"} alt="image1" className="object-fill" />
          </div>
          <div className="flex justify-center">
            <img src={"donation/image2.png"} alt="image2" className="object-fill" />
          </div>
          <div className="flex justify-center">
            <img src={"donation/image3.png"} alt="image3" className="object-fill" />
          </div>
          <div className="flex justify-center">
            <img src={"donation/image4.png"} alt="image4" className="object-fill" />
          </div>
        </Carousel>
      </div>
      <div className="flex justify-center flex-col">
        <h2 className="text-red-800 font-bold text-4xl text-center">
          Donation
        </h2>
        <p className="px-8 py-4 md:text-lg text-center">
          Help us continue our mission of serving the community and fostering spiritual growth. Your donations make a difference in maintaining the temple, organizing events, and supporting charitable initiatives.
        </p>
        <ul className="flex justify-center flex-col mx-10 my-4">
          <li className="mt-2 flex items-center">
            <BsFillCircleFill className="inline mr-2" size={14} />
            Maintain the temple premises.
          </li>
          <li className="mt-2 flex items-center">
            <BsFillCircleFill className="inline mr-2" size={14}/>
            Organize religious ceremonies and festivals.
          </li>
          <li className="mt-2 flex items-center">
            <BsFillCircleFill className="inline mr-2" size={14}/>
            Offer educational programs for spiritual growth.
          </li>
          <li className="mt-2 flex items-center">
            <BsFillCircleFill className="inline mr-2" size={14} />
            Support community outreach initiatives.
          </li>
          <li className="mt-2 flex items-center">
            <BsFillCircleFill className="inline mr-2" size={14} />
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
