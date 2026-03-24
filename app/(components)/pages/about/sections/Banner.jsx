import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import Image from "next/image";

const Banner = ({ data, lang }) => {
  return (
    <section className="my-[8rem]">
      <MaxWidth>
        <div className="mb-[8rem] text-center">
          <h2 className="text-[4.8rem] text-[#011E41] font-[700]">
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
        <div className="relative max-w-[792px] m-auto bottom-[7rem]">
          <div
            className="text-[2.4rem] bg-[#D5BA8C] text-center text-[#011E41] font-[600] p-[4rem] rounded-[0.8rem]"
            dangerouslySetInnerHTML={{ __html: data?.title }}
          />
        </div>

        <div className="max-w-[996px] m-auto">
          <div
            className="text-[1.6rem] text-center text-[#011E41] font-[400]"
            dangerouslySetInnerHTML={{ __html: data?.text }}
          />
        </div>
      </MaxWidth>
    </section>
  );
};

export default Banner;
