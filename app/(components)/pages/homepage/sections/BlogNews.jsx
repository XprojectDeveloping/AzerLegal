import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import Image from "next/image";
import Link from "next/link";

const BloqNews = ({ data, lang }) => {
  return (
    <section className="my-[8rem] xl:my-[6rem] lg:my-[3rem] md:my-[2.5rem]">
      <MaxWidth customClass="xl:mx-[3.5rem] lg:mx-[2.5rem] md:mx-[1.5rem]">
        <div className="mb-[8rem] xl:my-[6rem] lg:my-[3rem] md:my-[2.5rem]">
          <div className="flex justify-between items-center mb-[4rem] xl:mb-[2rem] md:mb-[1.5rem]">
            <h2 className="text-[4.8rem] xl:text-[3.8rem] md:text-[2.8rem] sm:text-[2.5rem] text-[#011E41] font-[700]">
              {lang?.blog_news}
            </h2>
            <div>
              <Link
                className="flex items-center gap-[1.2rem] sm:gap-[rem] text-[1.4rem] md:text-[1.2rem] font-[500] border-[1px] border-[#011E41] rounded-[0.4rem] py-[1.3rem] px-[4rem] sm:p-[1.5rem]"
                href={"/xeberler"}
              >
                {lang?.all}
                <Image
                  src={"/img/homepage/services/title-arrow-up-right.svg"}
                  width={24}
                  height={24}
                  alt="blognews-arrow"
                />
              </Link>
            </div>
          </div>
          <div
            className="text-[1.4rem] text-[#AAB5B8] font-[400]"
            dangerouslySetInnerHTML={{ __html: lang?.blog_news_alt_text }}
          />
        </div>
        <div className="flex flex-row lg:flex-col gap-[2.4rem]">
          <div className="flex flex-col gap-[2.4rem]">
            {data?.map((item) => {
              return (
                <div
                  key={item?.id}
                  className="border-[1px] border-[#011E41] rounded-[0.8rem] p-[2rem]"
                >
                  <div className="flex justify-between items-center gap-[4rem]">
                    <h3 className="text-[2.4rem] md:text-[2rem] text-[#011E41] font-[500]">
                      {item?.name}
                    </h3>
                    <Link
                      href={"/"}
                      className="text-[1.6rem] text-[#011E41] bg-[#F4F6F6] rounded-[5rem] px-[2.1rem] py-[0.8rem] sm:p-[1rem]"
                    >
                      {lang?.blog_text}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <Image
              width={690}
              height={480}
              alt="newsblog-cover"
              src={"/img/homepage/newsblog/newsblog-img.png"}
              className="lg:w-full"
            />
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default BloqNews;
