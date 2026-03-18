import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import Image from "next/image";
import Link from "next/link";

const Slider = ({ Slider }) => {
  return (
    <MaxWidth>
      <section className="my-[8rem]">
        <div className="mb-[8rem]">
          <h1 className="mb-[4rem] text-[4.8rem] text-[#011E41] font-[700] leading-[100%]">
            {Slider?.title}
          </h1>
          <div
            className="text-[1.4rem] text-[#011E41] font-[400]"
            dangerouslySetInnerHTML={{ __html: Slider?.text }}
          />
        </div>

        <div className="relative">
          <div className="bg-[#011E41] right-[10.2rem] top-[-8rem] rounded-[9rem] py-[5.5rem] px-[3.2rem] absolute">
            <Image
              width={100}
              height={100}
              src={`${process.env.NEXT_PUBLIC_PICTURE}/${Slider?.logo}`}
              alt="logo"
            />
          </div>
          <div className="abosulte">
            <img
              src={`${process.env.NEXT_PUBLIC_PICTURE}/${Slider?.video_background}`}
              alt="video"
            />
            <Link href={Slider?.video_url} target="_blank">
              <div className="absolute top-[44%] left-[46%] bg-[#D5BA8C] py-[2.8rem] px-[2.8rem] rounded-[8rem] shadow-gold">
                <Image
                  width={24}
                  height={24}
                  src={"/img/homepage/slider/slider-play.svg"}
                  alt="play"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </MaxWidth>
  );
};

export default Slider;
