const Message = () => {
  return (
    <div className="flex">
      <div className=" px-6 py-3 flex justify-center items-center">
        <img
          className="rounded-full"
          style={{
            width: "80px",
            height: "80px",
          }}
          alt="Usuario"
          src="https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0bWFufGVufDB8fDB8fHww"
        ></img>
        <div className="flex px-4 flex-col ">
          <p className="font-bold text-xl">Usuario</p>
          <p className="text-[#69727e]">Hola p mascota</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
