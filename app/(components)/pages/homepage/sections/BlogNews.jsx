import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import Image from "next/image";
import Link from "next/link";

const BloqNews = ({ data, lang }) => {
  return (
    <section className="my-[8rem]">
      <MaxWidth>
        <div className="mb-[8rem]">
          <div className="flex justify-between items-center mb-[4rem]">
            <h3 className="text-[4.8rem] text-[#011E41] font-[700]">
              {lang?.blog_news}
            </h3>
            <div>
              <Link
                className="flex items-center gap-[1.2rem] text-[1.4rem] font-[500] border-[1px] border-[#011E41] rounded-[0.4rem] py-[1.3rem] px-[4rem]"
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
        <div className="flex flex-row gap-[2.4rem]">
          <div className="flex flex-col gap-[2.4rem]">
            {data?.map((item) => {
              return (
                <div
                  key={item?.id}
                  className="border-[1px] border-[#011E41] rounded-[0.8rem] p-[2rem]"
                >
                  <div className="flex justify-between items-center gap-[4rem]">
                    <h4 className="text-[2.4rem] text-[#011E41] font-[500]">
                      {item?.name}
                    </h4>
                    <p className="text-[1.6rem] text-[#011E41] bg-[#F4F6F6] rounded-[5rem] px-[2.1rem] py-[0.8rem]">
                      {lang?.blog_text}
                    </p>
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
            />
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default BloqNews;
