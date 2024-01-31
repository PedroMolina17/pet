import { IoShield } from "react-icons/io5";
import { FaSuitcase } from "react-icons/fa";
import { IoPawSharp } from "react-icons/io5";

const Pet = () => {
  return (
    <div className="flex col-2 w-full h-screen">
      <div className="flex flex-col w-1/4 bg-[#0e1013] col-span-1  ">
        <div className="flex w-full justify-between items-center  py-7 px-4 bg-gradient-to-tr from-[#fd2878] to-[#ff5c3b]">
          <div> Usuario </div>
          <div className="rounded-full flex gap-y-1 gap-x-4 ">
            <div className="rounded-full bg-[#3e1c1f] p-2 flex">
              <IoPawSharp className="text-2xl text-white hover:text-[#2a9eff] hover:transition-opacity" />
            </div>
            <div className="rounded-full bg-[#3e1c1f] p-2 flex">
              <FaSuitcase className="text-2xl hover:text-[#2a9eff] hover:transition-opacity" />
            </div>
            <div className="rounded-full bg-[#3e1c1f] p-2 flex">
              <IoShield className="text-2xl hover:text-[#2a9eff] hover:transition-opacity" />
            </div>
          </div>
        </div>
        <div className="text-white flex px-8 py-3 ">
          <ul className="flex gap-4 justify-between items-center">
            <li>Likes</li>
            <li>Mensajes</li>
            <li>Expirado</li>
          </ul>
        </div>
      </div>
      <div className="flex w-full bg-white col-span-1">a</div>
    </div>
  );
};

export default Pet;
