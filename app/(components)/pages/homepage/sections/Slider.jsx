import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import Image from "next/image";
import Link from "next/link";

const Slider = ({ data }) => {
  return (
    <section className="my-[8rem] xl:my-[6rem] lg:my-[3rem] md:my-[2.5rem]">
      <MaxWidth customClass="xl:max-w-none xl:mx-[3.5rem] lg:mx-[2.5rem] md:mx-[1.5rem]">
        <div className="mb-[8rem] xl:my-[6rem] lg:my-[3rem] md:my-[2.5rem]">
          <h1 className="mb-[4rem] md:mb-[2rem] text-[4.8rem] xl:text-[3.8rem] lg:text-[2.8rem] md:text-[2.5rem] text-[#011E41] font-[700] leading-[100%]">
            {data?.title}
          </h1>
          <div
            className="text-[1.4rem] text-[#011E41] font-[400]"
            dangerouslySetInnerHTML={{ __html: data?.text }}
          />
        </div>

        <div className="relative">
          <div className="bg-[#011E41] right-[10.2rem] top-[-8rem] xl:top-[-7rem] rounded-[9rem] py-[5.5rem] xl:py-[4.5rem] px-[3.2rem] xl:px-[2.3rem] absolute lg:hidden">
            <Image
              width={100}
              height={100}
              src={`${process.env.NEXT_PUBLIC_PICTURE}/${data?.logo}`}
              alt="logo"
            />
          </div>
          <div className="absolute">
            <img
              src={`${process.env.NEXT_PUBLIC_PICTURE}/${data?.video_background}`}
              alt="video"
            />
            <Link href={data?.video_url} target="_blank">
              <div className="absolute top-[44%] sm:top-[32%] left-[46%] sm:left-[41%] bg-[#D5BA8C] py-[2.8rem] xl:py-[1.8rem] px-[2.8rem] xl:px-[1.8rem] rounded-[8rem] shadow-gold">
                <Image
                  width={24}
                  height={24}
                  src={"/img/homepage/slider/slider-play.svg"}
                  alt="play"
                  className="xs:max-w-[1.5rem]"
                />
              </div>
            </Link>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default Slider;
