import PropTypes from "prop-types";
const Tab = ({ selectedTab, handleTab }) => {
  return (
    <div className="flex text-white col-span-4  px-8 py-3 ">
      <ul className="flex gap-4 justify-between items-center">
        <button
          onClick={() => handleTab("likes")}
          className={`cursor-pointer ${
            selectedTab === "likes" ? "border-b-2 border-[#ff4458]" : ""
          }`}
        >
          Likes
        </button>
        <button
          onClick={() => handleTab("message")}
          className={`cursor-pointer ${
            selectedTab === "message" ? "border-b-2 border-[#ff4458]" : ""
          }`}
        >
          Mensaje
        </button>
        <button
          onClick={() => handleTab("expired")}
          className={`cursor-pointer ${
            selectedTab === "expired" ? "border-b-2 border-[#ff4458]" : ""
          }`}
        >
          Expirado
        </button>
      </ul>
    </div>
  );
};

Tab.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  handleTab: PropTypes.func.isRequired,
};

export default Tab;
