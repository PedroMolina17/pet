import { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { IoShield, IoPawSharp, IoReloadOutline } from "react-icons/io5";
import { FaSuitcase } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Tab from "./Tab";
import Message from "./Message";
import Like from "./Like";
import Expired from "./Expired";
import TabMobile from "./TabMobile";
const Pet = () => {
  const [selectedTab, setSelectedTab] = useState("likes");
  const [tabmobile, setTabMobile] = useState("home");

  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  const handleTabMobile = (tabmobile) => {
    setTabMobile(tabmobile);
  };

  const handleTab = (tab) => {
    setSelectedTab(tab);
  };

  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTabMobile(tabmobile);
      } else {
        setTabMobile("home");
      }
    };

    fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME"
    )
      .then((response) => {
        return response.json();
      })
      .then((articulos) => {
        setArticulos(articulos);
      });

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [tabmobile, setTabMobile]);

  return (
    <>
      <div className="flex col-5 w-full h-screen absolute bg-[#0e1013] overflow-hidden">
        <div className="flex flex-col w-1/4 min-w-72 bg-[#0e1013] col-span-1  max-md:hidden border-r border-[#a0a8b1] ">
          <div className="flex w-full justify-between items-center  py-6 px-4 bg-gradient-to-tr from-[#fd2878] to-[#ff5c3b]">
            <button
              className="font-bold"
              onClick={() => handleTabMobile("home")}
            >
              {" "}
              Usuario{" "}
            </button>
            <div className="rounded-full flex gap-y-1 gap-x-4 ">
              <div className="rounded-full bg-[#3e1c1f] p-2 flex">
                <IoPawSharp className="text-2xl text-white transition-colors duration-300 hover:text-red-500" />
              </div>
              <div className="rounded-full bg-[#3e1c1f] p-2 flex">
                <FaSuitcase className="text-2xl transition-colors duration-300 hover:text-red-500 " />
              </div>
              <div className="rounded-full bg-[#3e1c1f] p-2 flex">
                <IoShield className="text-2xl  transition-colors duration-300 hover:text-[#2a9eff]" />
              </div>
            </div>
          </div>
          <Tab selectedTab={selectedTab} handleTab={handleTab}></Tab>
          {selectedTab === "likes" && <Like />}
          {selectedTab === "message" && <Message />}
          {selectedTab === "expired" && <Expired />}
        </div>

        <div className="flex w-full bg-[#000000] max-md:bg-[#0e1013]  md:justify-center flex-col md:items-center  ">
          <div
            className="bg-[#0e1013] text-white p-2  w-full md:hidden flex gap-1"
            style={{ zIndex: 2 }}
          >
            <IoPawSharp className="text-red-500 text-4xl inline" />
            <span className="inline  text-xl font-bold text-red-500 ">Pet</span>
          </div>
          <div className="flex flex-col md:justify-center md:items-center overflow-hidden h-screen">
            <div className="md:hidden">
              {tabmobile === "likes" && <Like />}
              {tabmobile === "message" && <Message />}
              {tabmobile === "expired" && <Expired />}
            </div>
            {tabmobile === "home" &&
              articulos.map((art) => {
                return (
                  <div
                    key={art.id}
                    className=" flex  md:items-center md:justify-center shadow-2xl shadow-white  flex-col"
                  >
                    <TinderCard
                      className="absolute "
                      key={art.id}
                      onSwipe={onSwipe}
                      onCardLeftScreen={() => onCardLeftScreen("fooBar")}
                      preventSwipe={["up", "down"]}
                    >
                      <div
                        className="w-full md:w-96 h-full"
                        style={{ height: 800, zIndex: 0 }}
                      >
                        <img
                          className="rounded-2xl h-full"
                          src={art.url}
                          alt={art.url}
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                          }}
                        ></img>{" "}
                        <div className="px-5 fixed  bottom-0 h-52  right-0 left-0 text-4xl bg-gradient-to-b from-transparent via-black to-black  ">
                          {art.id}
                        </div>
                      </div>
                      <div className="flex flex-col w-full fixed bottom-0 bg-black p-5 rounded-br-xl rounded-bl-xl">
                        <div className="flex gap-4 justify-center items-center text-4xl">
                          <button className="border rounded-full p-2 border-red-500">
                            <ImCross className="text-red-500 "></ImCross>
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
          <TabMobile
            tabmobile={tabmobile}
            handleTabMobile={handleTabMobile}
          ></TabMobile>
        </div>
      </div>
    </>
  );
};

export default Pet;
