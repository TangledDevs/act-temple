import { members } from "../data/Members";

const Committee = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center p-4 md:p-10">
      <h2 className="text-red-800 font-bold text-4xl text-center">
        Temple Committee
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:justify-between w-full">
        {members.map((member, index) => {
          return (
            <div key={index} className="p-3 bg-slate-50 rounded-md hover:scale-105  duration-500">
              {/* Image div */}
              <div className="flex justify-center">
                <img src={member.image} alt={member.name} className="w-52 h-52 rounded-full" />
              </div>
              {/* Details div */}
              <div className="flex flex-col justify-center p-4">
                <p>{member.name}</p>
                <p>{member.position}</p>
                <p>{member.contact}</p>
                <p>{member.address}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Committee;
