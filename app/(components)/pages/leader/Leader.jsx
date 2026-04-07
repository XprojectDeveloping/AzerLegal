import Image from "next/image";
import MaxWidth from "../../shared_components/MaxWidth";

const Leader = ({ data, datalang }) => {
  return (
    <main>
      <section className="py-[8rem] xl:py-[6rem] lg:py-[3rem] md:py-[2.5rem] bg-[#f8f9fa]">
        <MaxWidth customClass="xl:max-w-none xl:mx-[3.5rem] lg:mx-[2.5rem] md:mx-[1.5rem]">
          <div className="mb-[8rem] xl:mb-[6rem] lg:mb-[3rem] md:mb-[2.5rem] text-center">
            <h2 className="text-[4.8rem] xl:text-[3.8rem] lg:text-[3.5rem] md:text-[2.8rem] text-[#011E41] font-[700]">
              {datalang?.leaders_address}
            </h2>
          </div>

          <div className="bg-[#F4F6F6] rounded-[0.8rem] overflow-hidden relative mb-[8rem] xl:mb-[6rem] lg:mb-[3rem] md:mb-[2.5rem]">
            <div className="flex justify-center pt-[1rem]">
              <Image
                src={`${process.env.NEXT_PUBLIC_PICTURE}/${data?.image}`}
                alt="Leader"
                width={420}
                height={320}
                className="rounded-2xl shadow-2xl object-cover md:max-w-[30rem]"
                priority
              />
            </div>

            <div className="flex justify-center -mt-[7rem] md:-mt-[4rem] mb-[8rem] xl:mb-[6rem] lg:mb-[3rem] md:mb-[2.5rem] relative z-10">
              <Image
                src="/img/homepage/leader/leader-img.svg"
                alt="quote"
                width={180}
                height={120}
                className="drop-shadow-sm md:max-w-[12rem]"
              />
            </div>

            <div className="px-[1.6rem] pb-[1.6rem] text-center">
              <div
                className="text-[2.4rem] md:text-[1.8rem] font-[700] text-[#011E41]"
                dangerouslySetInnerHTML={{ __html: data?.title }}
              />
            </div>
          </div>

          <div className="text-center mb-[8rem] xl:mb-[6rem] lg:mb-[3rem] md:mb-[2.5rem]">
            <div
              className="text-[1.6rem] md:text-[1.3rem] text-[#011E41] font-[400]"
              dangerouslySetInnerHTML={{ __html: data?.text1 }}
            />
          </div>

          <div className="text-center">
            <div
              className="text-[2.4rem] md:text-[1.8rem] text-[#011E41] font-[600]"
              dangerouslySetInnerHTML={{ __html: data?.text2 }}
            />
          </div>
        </MaxWidth>
      </section>
    </main>
  );
};

export default Leader;
