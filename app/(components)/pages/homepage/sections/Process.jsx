import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import Image from "next/image";

const Process = ({ data }) => {
  const processCards = [
    {
      id: 1,
      title: data?.label1,
      text: data?.stat2,
      img: data?.icon1,
    },
    {
      id: 2,
      title: data?.label2,
      text: data?.stat3,
      img: data?.icon2,
    },
    {
      id: 3,
      title: data?.label3,
      text: data?.stat3,
      img: data?.icon3,
    },
    {
      id: 4,
      title: data?.label4,
      text: data?.stat4,
      img: data?.icon3,
    },
  ];
  return (
    <section className="my-[8rem] xl:my-[6rem] lg:my-[3rem] md:my-[2.5rem]">
      <MaxWidth customClass="xl:mx-[3.5rem] lg:mx-[2.5rem] md:mx-[1.5rem]">
        <div>
          <h2 className="text-[4.8rem] xl:text-[3.8rem] md:text-[2.8rem] sm:text-[2.5rem] text-[#011E41] font-[700] leading-[100%] mb-[4rem] xl:mb-[2rem]">
            {data?.title}
          </h2>

          <div
            className="text-[1.4rem] text-[#AAB5B8] font-[400]"
            dangerouslySetInnerHTML={{ __html: data?.description }}
          />
        </div>

        <div className="grid grid-cols-12 lg:grid-cols-6 my-[12rem] xl:my-[8rem] lg:my-[6rem] md:my-[3.5rem] gap-[2.4rem] xl:gap-[5.5rem]">
          {processCards?.map((item) => {
            return (
              <div
                className="col-span-3 xl:col-span-6 relative items-center justify-center bg-[#F4F6F6] rounded-[0.8rem] transition process-card"
                key={item.id}
              >
                <div className="absolute left-[2rem] top-[-5rem] lg:top-[-3rem] bg-[#D5BA8C] rounded-[5rem] p-[2rem] lg:p-[1rem]">
                  <Image
                    width={40}
                    height={40}
                    alt="process"
                    src={`${process.env.NEXT_PUBLIC_PICTURE}/${item?.img}`}
                  ></Image>
                </div>
                <div className="flex items-center pb-[2rem] pl-[2rem] pt-[6rem]">
                  <div className="flex items-center gap-[3.9rem] xl:gap-[1.9rem]">
                    <p className="text-[4.8rem] xl:text-[3.8rem] text-[#011E41] font-[700]">
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
