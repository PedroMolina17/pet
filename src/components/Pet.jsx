import { IoShield } from "react-icons/io5";
import { FaSuitcase } from "react-icons/fa";
import { IoPawSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";

const Pet = () => {
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
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
    <div className="flex col-5 w-full h-screen">
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
            <li>Likes</li>
            <li>Mensajes</li>
            <li>Expirado</li>
          </ul>
        </div>
      </div>
      <div className="flex w-full bg-[#000000] col-span-1">
        {articulos.map((art) => {
          return (
            <TinderCard
              className="absolute w-96 h-96"
              key={art.id}
              onSwipe={onSwipe}
              onCardLeftScreen={() => onCardLeftScreen("fooBar")}
              preventSwipe={["up", "down"]}
            >
              <img
                src={art.url}
                alt={art.url}
                width={200}
                height={200}
                className=""
              ></img>{" "}
              <div className="relative top-0">aaaaaaaaaaa</div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
};

export default Pet;
