import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import Caroulsel from "../components/Caroulsel";

const Partners = ({ data, lang }) => {
  return (
    <section className="my-[8rem]">
      <MaxWidth>
        <div className="my-[8rem]">
          <h3 className="text-[4.8rem] text-[#011E41] font-[700] mb-[4rem]">
            {"Tərəfdaşlarımız"}
          </h3>
          <div
            className="text-[1.4rem] text-[#AAB5B8] text-[400]"
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
