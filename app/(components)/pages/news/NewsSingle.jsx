import React from "react";
import MaxWidth from "../../shared_components/MaxWidth";
import Image from "next/image";
import Link from "next/link";

const NewsSingle = ({ data, relatedData, dataLang, id, slug }) => {
  return (
    <main>
      <section className="my-[8rem] xl:my-[6rem] lg:text-[3rem] md:my-[2.5rem]">
        <MaxWidth customClass="xl:max-w-none xl:mx-[3.5rem] lg:mx-[2.5rem] md:mx-[1.5rem]">
          <div className="mb-[4rem] xl:mb-[3.5rem] lg:mb-[2rem]">
            <h3 className="text-[3.6rem] xl:text-[3rem] lg:text-[2.5rem] md:text-[2rem] font-[700] text-[#011E41]">
              {data?.name}
            </h3>
          </div>
          <div className="flex flex-row lg:flex-col gap-[2.4rem]">
            <div className="flex flex-col w-full">
              <div>
                <Image
                  src={"/img/news/news-single-cover-img.png"}
                  width={792}
                  height={380}
                  alt={data?.name}
                  className="mb-[4rem] xl:mb-[3.5rem] lg:mb-[2rem] lg:w-full"
                />

                <div
                  className="text-[1.6rem] md:text-[1.3rem] text-[#011E41] font-[200]"
                  dangerouslySetInnerHTML={{ __html: data?.text }}
                />
              </div>
            </div>

            <div className="flex flex-col border-[1px] border-[#D5BA8C] rounded-[0.4rem]">
              <p className="text-[2.4rem] lg:text-[2rem] md:text-[1.8rem] text-[#011E41] font-[700] border-b-[1px] border-b-[#D5BA8C] p-[2rem]">
                {dataLang?.similar_news}
              </p>
              {relatedData?.map((item) => {
                return (
                  <div
                    key={item?.id}
                    className="flex flex-col gap-[2rem] p-[2rem] border-b-[1px] border-b-[#D5BA8C]"
                  >
                    <span className="text-[1.4rem] text-[#D5BA8C] font-[400]">
                      {item?.date}
                    </span>
                    <p className="text-[1.8rem] lg:text-[1.6rem] text-[#011E41]">
                      {item?.name}
                    </p>
                    <Link
                      className="flex flex-row items-center text-[1.6rem] text-[#D5BA8C] font-[400] gap-[1.2rem]"
                      href={`${id}/${slug}`}
                    >
                      {"Ətraflı oxu"}
                      <Image
                        src={"/img/homepage/services/arrow-up-right-ico.svg"}
                        width={24}
                        height={24}
                        alt={item?.name}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </MaxWidth>
      </section>
    </main>
  );
};

export default NewsSingle;
