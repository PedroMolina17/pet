import PropTypes from "prop-types";

const Tab = ({ selectedTab, handleTab }) => {
  return (
    <div className="flex text-white col-span-4  px-8 py-3 ">
      <ul className="flex gap-4 justify-between items-center">
        <li
          onClick={() => handleTab("Likes")}
          className={`cursor-pointer ${
            selectedTab === "Likes" ? "border-b-2 border-[#ff4458]" : ""
          }`}
        >
          Likes
        </li>
        <li
          onClick={() => handleTab("Mensajes")}
          className={`cursor-pointer ${
            selectedTab === "Mensajes" ? "border-b-2 border-[#ff4458]" : ""
          }`}
        >
          Mensajes
        </li>
        <li
          onClick={() => handleTab("Expirado")}
          className={`cursor-pointer ${
            selectedTab === "Expirado" ? "border-b-2 border-[#ff4458]" : ""
          }`}
        >
          Expirado
        </li>
      </ul>
    </div>
  );
};

Tab.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  handleTab: PropTypes.func.isRequired,
};

export default Tab;
