import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Like = () => {
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
    <div
      className="grid grid-cols-3 gap-5 px-2 py-4"
      style={{
        overflow: "scroll",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {articulos.map((art) => {
        return (
          <Link
            key={art.id}
            className="rounded-xl relative hover:scale-110 hover:transition-transform hover:duration-700"
          >
            <div
              className="rounded-xl"
              style={{
                background: `url(${art.url})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "120px",
                opacity: 0.5,
              }}
            />
            <div key={art.id} className="absolute bottom-4 left-0 right-0   ">
              <div className="flex mx-1 ">
                <p className="font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                  {art.id}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Like;
