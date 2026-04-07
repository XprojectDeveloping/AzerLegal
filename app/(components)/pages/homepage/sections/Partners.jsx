import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import Caroulsel from "../components/Caroulsel";

const Partners = ({ data, lang }) => {
  return (
    <section className="my-[8rem] xl:my-[6rem] lg:my-[3rem] md:my-[2.5rem]">
      <MaxWidth customClass="xl:max-w-none xl:mx-[3.5rem] lg:mx-[2.5rem] md:mx-[1.5rem]">
        <div className="my-[8rem] xl:my-[6rem] lg:my-[3rem] md:my-[2.5rem]">
          <h2 className="text-[4.8rem] xl:text-[3.8rem] md:text-[2.8rem] sm:text-[2.5rem] text-[#011E41] font-[700] mb-[4rem] xl:mb-[2rem] md:mb-[1.5rem]">
            {"Tərəfdaşlarımız"}
          </h2>
          <div
            className="text-[1.4rem] font-[400] text-[#AAB5B8]"
            dangerouslySetInnerHTML={{ __html: lang?.blog_news_alt_text }}
          />
        </div>
        <div>
          <Caroulsel items={data} />
        </div>
      </MaxWidth>
    </section>
  );
};

export default Partners;
