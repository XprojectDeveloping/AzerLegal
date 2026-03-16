import Image from "next/image";

const Process = ({
  ProcessTitle,
  ProcessText,
  ProcessCardImg,
  ProcessCardTitle,
  ProcessCardText,
}) => {
  const processCards = [
    {
      id: 1,
      title: ProcessCardTitle?.label1,
      text: ProcessCardText?.stat2,
      img: ProcessCardImg?.icon1,
    },
    {
      id: 2,
      title: ProcessCardTitle?.label2,
      text: ProcessCardText?.stat3,
      img: ProcessCardImg?.icon2,
    },
    {
      id: 3,
      title: ProcessCardTitle?.label3,
      text: ProcessCardText?.stat3,
      img: ProcessCardImg?.icon3,
    },
    {
      id: 4,
      title: ProcessCardTitle?.label4,
      text: ProcessCardText?.stat4,
      img: ProcessCardImg?.icon3,
    },
  ];
  console.log("====================================");
  console.log(processCards);
  console.log("====================================");
  return (
    <section className="my-[8rem]">
      <div>
        <h2 className="text-[4.8rem] text-[#011E41] font-[700] leading-[100%] mb-[4rem]">
          {ProcessTitle?.title}
        </h2>

        <div
          className="text-[1.4rem] text-[#AAB5B8] font-[400]"
          dangerouslySetInnerHTML={{ __html: ProcessText?.description }}
        />
      </div>

      <div className="grid grid-cols-12 my-[12rem] gap-[2.4rem]">
        {processCards.map((item) => {
          return (
            <div
              className="col-span-3 relative items-center justify-center bg-[#F4F6F6] rounded-[0.8rem] transition hover:bg-[#011E4133]"
              key={item.id}
            >
              <div className="absolute left-[2rem] top-[-5rem] bg-[#D5BA8C] rounded-[5rem] p-[2rem]">
                <Image
                  width={40}
                  height={40}
                  src={`${process.env.NEXT_PUBLIC_PICTURE}/${item?.img}`}
                ></Image>
              </div>
              <div className="flex items-center pb-[2rem] pl-[2rem] pt-[6rem]">
                <div className="flex items-center gap-[3.9rem]">
                  <p className="text-[4.8rem] text-[#011E41] font-[700]">
                    {item.text}
                  </p>
                  <p className="text-[1.6rem] text-[#011E41] font-[400]">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Process;
