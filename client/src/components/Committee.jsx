import { members } from "../data/Members";

const Committee = ({ language }) => {
  return (
    <div className="mt-6">
      <h2 className="text-red-800 font-bold text-3xl md:text-4xl text-center">
        {language === "Telugu" ? "ఆలయ కమిటీ" : "Temple Committee"}
      </h2>
      <div className="p-2 py-8 grid md:grid-cols-2 justify-center items-center rounded-md h-full gap-6">
        {/* Image div */}
        <div className="m-auto">
          <img
            src={"/photo.png"}
            alt={members[0].name}
            className="w-full h-full"
          />
        </div>
        {/* Details div */}
        <div className="flex items-center justify-center">
          <p className="px-2 py-6  font-medium  text-center leading-loose">
            {language === "Telugu"
              ? `షుమారు మూడు దశాబ్దాలుగా నిస్వార్థంగా సేవలందిస్తున్న అమ్మ ఛారిటబుల్ ట్రస్ట్, గుంటూరు బాబా గారి ఆశీస్సులతో వారి సేవకులు కొంతమంది కలిసి గుంటూరు జిల్లా, ఫిరంగిపురం మండలం, వేమవరం గ్రామంలో  కోటి లింగాల క్షేత్రాన్ని నిర్మించాలని సంకల్పించి శంకుస్థాపన కాబడి, నిర్మాణం జరుగుతూ ఉంది.
          ఈ క్షేత్రంలో 101 అడుగుల ఎత్తు గల రాతి శివలింగం, 33 అడుగులు ఎత్తు, 50 అడుగులు పొడవు గల అతి సుందరమైన నంది, దాదాపు 200 కిలోల బరువు గల మరకత శివలింగం, నాగ సాధువలచే ప్రతిష్టించిన బ్రహ్మసూత్రం గల 500 సం॥ల పురాతన నల్లరాతి శివలింగం, భక్తులు స్వయంగా అభిషేకించుకునేవిధంగా 108 శ్రీ చక్రాల మందిరం, 10 వేల ఏకశిల పాలరాతి శివలింగాలతో శివుని మందిరం భూగర్భంలో దాదాపు నాలుగు అంతస్థుల లోతులో పాతాల కాళి అమ్మవారి మందిరం, కోటి లింగాలు నిర్మాణం జరుగుతూ ఉంది .`
              : `Amma Charitable Trust, which has been serving selflessly for about three decades, with the blessings of Guntur Baba, some of their servants decided to build a crore linga field in Vemavaram village, Guntur district, Firangipuram mandal, and the foundation stone was laid and the construction is underway.The temple has 101 feet high stone Shivalinga, 33 feet high, 50 feet long beautiful Nandi, nearly 200 kg emerald Shivalinga, 
          500 years old black stone Shivalinga with Brahmasutra installed by Naga saints, 108 Sri Chakra mandirs where devotees can anoint themselves, With 10,000 monolithic marble Shiva lingams, the temple of Lord Shiva is under construction at a depth of about four storeys.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Committee;
