import CountUp from 'react-countup';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
const PartyCard = ({ title, numberOfVotes, link, imgUrl }) => {
  return (
    <div className="bg-white  h-[25vh] shadow-md rounded-md">
      <div className="flex flex-col justify-between items-start p-4">
        <div className="flex items-center gap-2 w-full">
          <img src={imgUrl} className="object-contain w-[80px] h-[60px]" />
          <h2 className=" text-slate-600 text-lg font-semibold">{title}</h2>
        </div>
        <div className="flex flex-col mt-2">
          <h3 className="text-sm text-slate-500 font-semibold">Tirada Codka</h3>

          <div className="text-slate-600 text-xl font-semibold">
            <CountUp
              start={0}
              end={numberOfVotes}
              duration={2.75}
              separator=","
              decimal=","
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end px-4 ">
        <NavLink className="text-gray-500 text-sm" to={link}>
          View All
        </NavLink>
      </div>
    </div>
  );
};

export default PartyCard;
