import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import Image from "next/image";

const Banner = ({ data, lang }) => {
  return (
    <section className="my-[8rem] xl:my-[6rem] lg:my-[3rem] md:my-[2.5rem]">
      <MaxWidth customClass="xl:max-w-none xl:mx-[3.5rem] lg:mx-[2.5rem] md:mx-[1.5rem]">
        <div className="mb-[8rem] xl:mb-[6rem] lg:my-[3rem] md:my-[2.5rem] text-center">
          <h2 className="text-[4.8rem] xl:text-[3.8rem] lg:text-[3.5rem] md:text-[2.8rem]  text-[#011E41] font-[700]">
            {lang?.about_page}
          </h2>
        </div>
        <div>
          <Image
            width={1200}
            height={500}
            alt="about-banner"
            src={`${process.env.NEXT_PUBLIC_PICTURE}/${data?.image}`}
          />
        </div>
        <div className="relative max-w-[792px] lg:max-w-none lg:mx-[4rem] md:mx-[2.5rem] sm:mx-[1.5rem] m-auto bottom-[7rem] lg:bottom-[3rem]">
          <div
            className="text-[2.4rem] lg:text-[1.8rem] md:text-[1.6rem] bg-[#D5BA8C] text-center text-[#011E41] font-[600] p-[4rem] lg:p-[2.5rem] sm:p-[1.8rem] rounded-[0.8rem]"
            dangerouslySetInnerHTML={{ __html: data?.title }}
          />
        </div>

        <div className="max-w-[996px] m-auto lg:max-w-none lg:mx-[4rem] md:mx-[2.5rem] sm:mx-[1.5rem]">
          <div
            className="text-[1.6rem] lg:text-[1.4rem] sm:text-[1.2rem] text-center text-[#011E41] font-[400]"
            dangerouslySetInnerHTML={{ __html: data?.text }}
          />
        </div>
      </MaxWidth>
    </section>
  );
};

export default Banner;
