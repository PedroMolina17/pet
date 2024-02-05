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
      className="grid grid-cols-3 gap-4 mx-2"
      style={{
        overflow: "scroll",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {articulos.map((art) => {
        return (
          <Link key={art.id}>
            <div key={art.id} className=" border rounded-xl">
              <img
                className="rounded-sm "
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  textAlign: "center",
                }}
                src={art.url}
                alt={art.url}
              ></img>
              <div className="flex mx-4  whitespace-nowrap overflow-hidden text-ellipsis ">
                <p className="font-bold   ">{art.id}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Like;
