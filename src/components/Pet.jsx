import { IoShield } from "react-icons/io5";
import { FaSuitcase } from "react-icons/fa";
import { IoPawSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { ImCross } from "react-icons/im";
import { IoReloadOutline } from "react-icons/io5";

const Pet = () => {
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  const handleTab = (tab) => {
    setSelectedTab(tab);
    console.log(tab);
  };
  const [selectedTab, setSelectedTab] = useState("likes");

  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME"
    )
      .then((response) => {
        return response.json();
      })
      .then((articulos) => {
        setArticulos(articulos);
      });
  }, []);

  return (
    <div className="flex col-5 w-full h-screen absolute   ">
      <div className="flex flex-col w-1/4 min-w-64 bg-[#0e1013] col-span-1  max-md:hidden border-r border-[#a0a8b1] ">
        <div className="flex w-full justify-between items-center  py-6 px-4 bg-gradient-to-tr from-[#fd2878] to-[#ff5c3b]">
          <div className="font-bold"> Usuario </div>
          <div className="rounded-full flex gap-y-1 gap-x-4 ">
            <div className="rounded-full bg-[#3e1c1f] p-2 flex">
              <IoPawSharp className="text-2xl text-white transition-colors duration-300 hover:text-red-500 " />
            </div>
            <div className="rounded-full bg-[#3e1c1f] p-2 flex">
              <FaSuitcase className="text-2xl transition-colors duration-300 hover:text-red-500 " />
            </div>
            <div className="rounded-full bg-[#3e1c1f] p-2 flex">
              <IoShield className="text-2xl  transition-colors duration-300 hover:text-[#2a9eff]" />
            </div>
          </div>
        </div>
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
      </div>
      <div className="flex w-full bg-[#000000] col-span-1 items-center justify-center">
        {articulos.map((art) => {
          return (
            <div
              key={art.id}
              className=" flex vh-100 items-center justify-center shadow-2xl shadow-white "
            >
              <TinderCard
                className="absolute "
                key={art.id}
                onSwipe={onSwipe}
                onCardLeftScreen={() => onCardLeftScreen("fooBar")}
                preventSwipe={["up", "down"]}
              >
                <div className="w-full md:w-96  ">
                  <img
                    className="rounded-2xl "
                    src={art.url}
                    alt={art.url}
                    style={{ height: 800, width: "100%", objectFit: "cover" }}
                  ></img>{" "}
                  <div className="px-5 fixed  bottom-0 h-52  right-0 left-0 text-4xl bg-gradient-to-b from-transparent via-black to-black  ">
                    {art.id}
                  </div>
                </div>
                <div className="flex flex-col w-full fixed bottom-0 bg-black p-5">
                  <div className="flex gap-4 justify-center items-center text-4xl">
                    <button className="border rounded-full p-2 border-red-500">
                      <ImCross className="text-red-500"></ImCross>
                    </button>
                    <button className="border rounded-full p-2 border-blue-500">
                      <IoReloadOutline className="text-blue-500 transform scale-x-[-1]"></IoReloadOutline>
                    </button>
                    <button className="border rounded-full p-2 border-green-500">
                      <IoPawSharp className="text-green-500 "></IoPawSharp>
                    </button>
                  </div>
                </div>
              </TinderCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pet;
