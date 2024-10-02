import CountUp from 'react-countup';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
const PartyCard = ({ title, numberOfVotes, link, imgUrl, shape, bgColor }) => {
  // Add a shape prop to dynamically apply different card shapes
  const shapeStyles = {
    rounded: "rounded-md", // Default rounded corners
    full: "rounded-full", // Circular card
    sharp: "rounded-none", // No rounded edges
    topRounded: "rounded-t-md", // Top corners only
    diagonal: "clip-path-[polygon(0_0,_100%_0,_100%_90%,_0_100%)]", // Diagonal corners
    hexagon: "clip-path-[polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]" // Hexagonal
  };

  return (
    <div className={`h-[25vh] shadow-md ${shapeStyles[shape]} ${bgColor} transition-all duration-300`}>
      <div className="flex flex-col justify-between items-start p-4">
        <div className="flex items-center gap-2 w-full">
          <img src={imgUrl} className="object-contain w-[80px] h-[60px]" />
          <h2 className=" text-white text-lg font-semibold">{title}</h2> {/* Text color white for visibility */}
        </div>
        <div className="flex flex-col mt-2">
          <h3 className="text-sm text-white font-semibold">Tirada Codka</h3>

          <div className="text-white text-xl font-semibold">
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
        <NavLink className="text-gray-200 text-sm" to={link}>
          View All
        </NavLink>
      </div>
    </div>
  );
};

export default PartyCard;
