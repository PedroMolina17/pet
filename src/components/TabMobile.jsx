import { TbMessageCircle2Filled } from "react-icons/tb";
import { PiStarFill } from "react-icons/pi";
import { FaUserAlt } from "react-icons/fa";
import { IoPawSharp } from "react-icons/io5";
import PropTypes from "prop-types";
const TabMobile = ({ tabmobile, handleTabMobile }) => {
  return (
    <div className="bg-[#0e1013] py-3 px-10 md:hidden">
      <div className="flex justify-between items-center text-2xl ">
        <IoPawSharp
          onClick={() => handleTabMobile("home")}
          className={`cursor-pointer ${
            tabmobile === "home" ? " text-red-500" : ""
          }`}
        ></IoPawSharp>
        <TbMessageCircle2Filled
          onClick={() => handleTabMobile("message")}
          className={`cursor-pointer ${
            tabmobile === "message" ? " text-red-500" : ""
          }`}
        ></TbMessageCircle2Filled>
        <PiStarFill
          onClick={() => handleTabMobile("likes")}
          className={`cursor-pointer ${
            tabmobile === "likes" ? " text-red-500" : ""
          }`}
        ></PiStarFill>
        <FaUserAlt
          onClick={() => handleTabMobile("expired")}
          className={`cursor-pointer ${
            tabmobile === "expired" ? " text-red-500" : ""
          }`}
        ></FaUserAlt>
      </div>
    </div>
  );
};

export default TabMobile;
TabMobile.propTypes = {
  tabmobile: PropTypes.string.isRequired,
  handleTabMobile: PropTypes.func.isRequired,
};
