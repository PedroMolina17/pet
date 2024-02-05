const Message = () => {
  const messages = [
    {
      id: 1,
      usuario: "Batman asssssssssss a asasasasaaaaaaaaaaaaaaaaaaaaaaa",
      message: "Hello",
      imgUrl:
        "https://i.pinimg.com/736x/9e/9e/09/9e9e0991f0b21217ecb0633eb09bc0af.jpg",
    },
    {
      id: 2,
      usuario: "Alf",
      message:
        "Quiero uno aas   aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasaas Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem dolorum voluptates, architecto nemo amet unde repellendus quia fuga voluptatem ut perferendis ex cum accusantium enim facilis quibusdam distinctio animi mollitia! ",
      imgUrl:
        "https://www.eltiempo.com/files/image_640_428/uploads/2018/08/02/5b63381d9ba8e.jpeg",
    },
    {
      id: 4,
      usuario: "Homero",
      message:
        "Quiero cerveza   aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasaas Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem dolorum voluptates, architecto nemo amet unde repellendus quia fuga voluptatem ut perferendis ex cum accusantium enim facilis quibusdam distinctio animi mollitia! ",
      imgUrl:
        "https://elcomercio.pe/resizer/YinMdQrGxPswT-sEZFo72Lo421s=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/LPW4JMM3MZG3DJA5RN5DGY44HU.jpeg",
    },
    {
      id: 5,
      usuario: "Homero",
      message:
        "Quiero cerveza   aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasaas Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem dolorum voluptates, architecto nemo amet unde repellendus quia fuga voluptatem ut perferendis ex cum accusantium enim facilis quibusdam distinctio animi mollitia! ",
      imgUrl:
        "https://elcomercio.pe/resizer/YinMdQrGxPswT-sEZFo72Lo421s=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/LPW4JMM3MZG3DJA5RN5DGY44HU.jpeg",
    },
    {
      id: 6,
      usuario: "Homero",
      message:
        "Quiero cerveza   aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasaas Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem dolorum voluptates, architecto nemo amet unde repellendus quia fuga voluptatem ut perferendis ex cum accusantium enim facilis quibusdam distinctio animi mollitia! ",
      imgUrl:
        "https://elcomercio.pe/resizer/YinMdQrGxPswT-sEZFo72Lo421s=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/LPW4JMM3MZG3DJA5RN5DGY44HU.jpeg",
    },
    {
      id: 7,
      usuario: "Homero",
      message:
        "Quiero cerveza   aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasaas Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem dolorum voluptates, architecto nemo amet unde repellendus quia fuga voluptatem ut perferendis ex cum accusantium enim facilis quibusdam distinctio animi mollitia! ",
      imgUrl:
        "https://elcomercio.pe/resizer/YinMdQrGxPswT-sEZFo72Lo421s=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/LPW4JMM3MZG3DJA5RN5DGY44HU.jpeg",
    },
    {
      id: 8,
      usuario: "Homero",
      message:
        "Quiero cerveza   aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasaas Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem dolorum voluptates, architecto nemo amet unde repellendus quia fuga voluptatem ut perferendis ex cum accusantium enim facilis quibusdam distinctio animi mollitia! ",
      imgUrl:
        "https://elcomercio.pe/resizer/YinMdQrGxPswT-sEZFo72Lo421s=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/LPW4JMM3MZG3DJA5RN5DGY44HU.jpeg",
    },
    {
      id: 9,
      usuario: "Homero",
      message:
        "Quiero cerveza   aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasaas Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem dolorum voluptates, architecto nemo amet unde repellendus quia fuga voluptatem ut perferendis ex cum accusantium enim facilis quibusdam distinctio animi mollitia! ",
      imgUrl:
        "https://elcomercio.pe/resizer/YinMdQrGxPswT-sEZFo72Lo421s=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/LPW4JMM3MZG3DJA5RN5DGY44HU.jpeg",
    },
    {
      id: 10,
      usuario: "Homero",
      message:
        "Quiero cerveza   aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasaas Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem dolorum voluptates, architecto nemo amet unde repellendus quia fuga voluptatem ut perferendis ex cum accusantium enim facilis quibusdam distinctio animi mollitia! ",
      imgUrl:
        "https://elcomercio.pe/resizer/YinMdQrGxPswT-sEZFo72Lo421s=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/LPW4JMM3MZG3DJA5RN5DGY44HU.jpeg",
    },
    {
      id: 11,
      usuario: "Homero",
      message:
        "Quiero cerveza   aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasaas Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem dolorum voluptates, architecto nemo amet unde repellendus quia fuga voluptatem ut perferendis ex cum accusantium enim facilis quibusdam distinctio animi mollitia! ",
      imgUrl:
        "https://elcomercio.pe/resizer/YinMdQrGxPswT-sEZFo72Lo421s=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/LPW4JMM3MZG3DJA5RN5DGY44HU.jpeg",
    },
    {
      id: 12,
      usuario: "Homero",
      message:
        "Quiero cerveza   aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasaas Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem dolorum voluptates, architecto nemo amet unde repellendus quia fuga voluptatem ut perferendis ex cum accusantium enim facilis quibusdam distinctio animi mollitia! ",
      imgUrl:
        "https://elcomercio.pe/resizer/YinMdQrGxPswT-sEZFo72Lo421s=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/LPW4JMM3MZG3DJA5RN5DGY44HU.jpeg",
    },
  ];
  return (
    <div
      className="flex "
      style={{
        overflow: "scroll",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <div className="flex flex-col w-full ">
        {messages.map((message) => {
          return (
            <div
              key={message.id}
              className=" px-6 py-3 w-full flex  items-center hover:border-r-4 hover:border-red-500"
            >
              <img
                className="rounded-full"
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                }}
                alt="Usuario"
                src={message.imgUrl}
              ></img>
              <div className="flex mx-4 flex-col  ">
                <p className="font-bold text-xl overflow-hidden h-8 ">
                  {message.usuario}
                </p>
                <p className="text-[#69727e]  overflow-hidden h-6 ">
                  {message.message}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Message;
