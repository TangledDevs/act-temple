import aboutImage from "../assets/about1.jpg";
import { useRef } from "react";
import { useInView } from "framer-motion";
const About = ({ language }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref}>
    <span
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        
        transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <div
        className="flex flex-col-reverse md:mt-4 lg:grid lg:grid-cols-2 items-center"
        id="about"
        
      >
        {/* image div */}
        <div className="p-8 lg:order-2">
          <img
            src={aboutImage}
            alt="aboutImage"
            className="w-full md:scale-90"
          />
        </div>
        {/* Info div */}
        <div>
          <h2 className="text-red-800 font-bold text-4xl text-center">
            {language === "Telugu" ? "దేవాలయం గురించి" : "About Temple"}
          </h2>
          <p className="px-8 py-4 leading-loose font-medium text-center">
            {language === "Telugu"
              ? `షుమారు మూడు దశాబ్దాలుగా నిస్వార్థంగా సేవలందిస్తున్న అమ్మ ఛారిటబుల్ ట్రస్ట్, గుంటూరు బాబా గారి ఆశీస్సులతో వారి సేవకులు కొంతమంది కలిసి గుంటూరు జిల్లా, ఫిరంగిపురం మండలం, వేమవరం గ్రామంలో  కోటి లింగాల క్షేత్రాన్ని నిర్మించాలని సంకల్పించి శంకుస్థాపన కాబడి, నిర్మాణం జరుగుతూ ఉంది.
          ఈ క్షేత్రంలో 101 అడుగుల ఎత్తు గల రాతి శివలింగం, 33 అడుగులు ఎత్తు, 50 అడుగులు పొడవు గల అతి సుందరమైన నంది, దాదాపు 200 కిలోల బరువు గల మరకత శివలింగం, నాగ సాధువలచే ప్రతిష్టించిన బ్రహ్మసూత్రం గల 500 సం॥ల పురాతన నల్లరాతి శివలింగం, భక్తులు స్వయంగా అభిషేకించుకునేవిధంగా 108 శ్రీ చక్రాల మందిరం, 10 వేల ఏకశిల పాలరాతి శివలింగాలతో శివుని మందిరం భూగర్భంలో దాదాపు నాలుగు అంతస్థుల లోతులో పాతాల కాళి అమ్మవారి మందిరం, కోటి లింగాలు నిర్మాణం జరుగుతూ ఉంది .`
              : `Amma Charitable Trust, which has been serving selflessly for about three decades, with the blessings of Guntur Baba, some of their servants decided to build a crore linga field in Vemavaram village, Guntur district, Firangipuram mandal, and the foundation stone was laid and the construction is underway.The temple has 101 feet high stone Shivalinga, 33 feet high, 50 feet long beautiful Nandi, nearly 200 kg emerald Shivalinga, 
          500 years old black stone Shivalinga with Brahmasutra installed by Naga saints, 108 Sri Chakra mandirs where devotees can anoint themselves, With 10,000 monolithic marble Shiva lingams, the temple of Lord Shiva is under construction at a depth of about four storeys.`}
          </p>
        </div>
      </div>
    </span>
    </div>
  );
};

export default About;
