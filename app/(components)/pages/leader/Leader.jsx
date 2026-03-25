import Image from "next/image";
import MaxWidth from "../../shared_components/MaxWidth";

const Leader = ({ data, datalang }) => {
  return (
    <main>
      <section className="py-24 bg-[#f8f9fa]">
        <MaxWidth>
          <div className="mb-16 text-center">
            <h2 className="text-[4.8rem] text-[#011E41] font-[700]">
              {datalang?.leaders_address}
            </h2>
          </div>

          <div className=" bg-[#F4F6F6] rounded-[0.8rem] overflow-hidden relative mb-[8rem]">
            <div className="flex justify-center pt-10">
              <Image
                src={`${process.env.NEXT_PUBLIC_PICTURE}/${data?.image}`}
                alt="Leader"
                width={420}
                height={320}
                className="rounded-2xl shadow-2xl object-cover"
                priority
              />
            </div>

            <div className="flex justify-center -mt-[7rem] mb-[8rem] relative z-10">
              <Image
                src="/img/homepage/leader/leader-img.svg"
                alt="quote"
                width={180}
                height={120}
                className="drop-shadow-sm"
              />
            </div>

            <div className="px-12 pb-16 text-center">
              <div
                className="text-[2.4rem] font-[700] text-[#011E41]"
                dangerouslySetInnerHTML={{ __html: data?.title }}
              />
            </div>
          </div>

          <div className="text-center mb-[8rem]">
            <div
              className="text-[1.6rem] text-[#011E41] font-[400]"
              dangerouslySetInnerHTML={{ __html: data?.text1 }}
            />
          </div>

          <div className="text-center">
            <div
              className="text-[2.4rem] text-[#011E41] font-[600]"
              dangerouslySetInnerHTML={{ __html: data?.text2 }}
            />
          </div>
        </MaxWidth>
      </section>
    </main>
  );
};

export default Leader;
