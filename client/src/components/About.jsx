import aboutImage from "../assets/about1.jpg";
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
      <p className="px-8 py-4 md:text-base font-medium text-center">
         షుమారు <span className="font-bold">మూడు</span> దశాబ్దాలుగా నిస్వార్థంగా సేవలందిస్తున్న <span className="font-bold"> అమ్మ ఛారిటబుల్ ట్రస్ట్, గుంటూరు బాబా</span> గారి ఆశీస్సులతో వారి సేవకులు కొంతమంది కలిసి<span className="font-bold"> గుంటూరు జిల్లా, ఫిరంగిపురం మండలం, వేమవరం గ్రామంలో  కోటి లింగాల క్షేత్రాన్ని </span> నిర్మించాలని సంకల్పించి శంకుస్థాపన కాబడి, నిర్మాణం జరుగుతూ ఉంది.
        ఈ క్షేత్రంలో 101 అడుగుల ఎత్తు గల రాతి శివలింగం, 33 అడుగులు ఎత్తు, 50 అడుగులు పొడవు గల అతి సుందరమైన నంది, దాదాపు 200 కిలోల బరువు గల మరకత శివలింగం, నాగ సాధువలచే ప్రతిష్టించిన బ్రహ్మసూత్రం గల 500 సం॥ల పురాతన నల్లరాతి శివలింగం, భక్తులు స్వయంగా అభిషేకించుకునేవిధంగా 108 శ్రీ చక్రాల మందిరం, 10 వేల ఏకశిల పాలరాతి శివలింగాలతో శివుని మందిరం భూగర్భంలో దాదాపు నాలుగు అంతస్థుల లోతులో పాతాల కాళి అమ్మవారి మందిరం, కోటి లింగాలు నిర్మాణం జరుగుతూ ఉంది .
       
        </p>
        
      </div>
    </div>
  );
};

export default About;
