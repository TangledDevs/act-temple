import { members } from "../data/Members";

const Committee = ({language}) => {
  return (
    <div className="p-4 md:p-10">
      <h2 className="text-red-800 font-bold text-3xl md:text-4xl text-center">
      {language==="Telugu" ? "ఆలయ కమిటీ":"Temple Committee"}
      </h2>
      <div className="p-2 py-8 grid md:grid-cols-2 justify-center items-center rounded-md h-full">
        {/* Image div */}
        <div className="m-auto w-1/2">
          <img src={members[0].image} alt={members[0].name} className="w-full h-full rounded-full" />
        </div>
        {/* Details div */}
        {language === "Telugu" ? <div className="flex flex-col text-2xl md:text-3xl gap-4 justify-center items-center pt-8 md:pt-0">
          <p>కిరణ్ కుమార్</p>
          <p>చైర్మన్</p>
          <p>+91 1122334455</p>
          <p>గుంటూరు, ఆంధ్రప్రదేశ్</p>
        </div> : <div className="flex flex-col text-3xl gap-4 justify-center">
          <p>{members[0].name}</p>
          <p>{members[0].position}</p>
          <p>{members[0].contact}</p>
          <p>{members[0].address}</p>
        </div>}
        
      </div>
    </div>
  );
};

export default Committee;
