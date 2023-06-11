import aboutImage from "../assets/aboutImage.png";
const About = () => {
  return (
    <div className="flex flex-col-reverse  md:mt-4 lg:grid lg:grid-cols-2 items-center" id="about">
      {/* image div */}
      <div className="p-8">
        <img src={aboutImage} alt="aboutImage" className="w-full md:scale-90" />
      </div>
      {/* Info div */}
      <div>
        <h2 className="text-red-800 font-bold text-4xl text-center">About Temple</h2>
      <p className="px-8 py-4 md:text-lg text-center">  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
      ad ab placeat qui vel ea ipsa sit quasi odit illum deleniti fugiat
        numquam cum, illo officia in molestiae explicabo ex libero voluptas
        porro sint modi error? Excepturi voluptatem asperiores non, ipsa labore
        cum fugit debitis dolore quisquam iusto nostrum incidunt ullam unde?
        Culpa quidem excepturi tempora aliquid, ad provident quam, ipsam
        architecto sunt ipsa labore blanditiis assumenda molestiae possimus nemo
       
        </p>
        
      </div>
    </div>
  );
};

export default About;
