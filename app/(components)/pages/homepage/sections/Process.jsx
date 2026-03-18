import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import Image from "next/image";

const Process = ({ Process }) => {
  const processCards = [
    {
      id: 1,
      title: Process?.label1,
      text: Process?.stat2,
      img: Process?.icon1,
    },
    {
      id: 2,
      title: Process?.label2,
      text: Process?.stat3,
      img: Process?.icon2,
    },
    {
      id: 3,
      title: Process?.label3,
      text: Process?.stat3,
      img: Process?.icon3,
    },
    {
      id: 4,
      title: Process?.label4,
      text: Process?.stat4,
      img: Process?.icon3,
    },
  ];
  return (
    <section className="my-[8rem]">
      <MaxWidth>
        <div>
          <h2 className="text-[4.8rem] text-[#011E41] font-[700] leading-[100%] mb-[4rem]">
            {Process?.title}
          </h2>

          <div
            className="text-[1.4rem] text-[#AAB5B8] font-[400]"
            dangerouslySetInnerHTML={{ __html: Process?.description }}
          />
        </div>

        <div className="grid grid-cols-12 my-[12rem] gap-[2.4rem]">
          {processCards.map((item) => {
            return (
              <div
                className="col-span-3 relative items-center justify-center bg-[#F4F6F6] rounded-[0.8rem] transition process-card"
                key={item.id}
              >
                <div className="absolute left-[2rem] top-[-5rem] bg-[#D5BA8C] rounded-[5rem] p-[2rem]">
                  <Image
                    width={40}
                    height={40}
                    alt="process"
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
      </MaxWidth>
    </section>
  );
};

export default Process;
