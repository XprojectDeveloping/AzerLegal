import MaxWidth from "../../shared_components/MaxWidth";
import MyPagination from "../../shared_components/MyPagination";
import ServicesCards from "../../shared_components/ServicesCards";

const Services = ({ data, pagination, code, lang }) => {
  return (
    <main>
      <section className="my-[8rem]">
        <MaxWidth>
          <div className="mb-[8rem] text-center">
            <h2 className="text-[4.8rem] text-[#011E41] font-[700] mb-[4rem]">
              {lang?.xidmetler_page}
            </h2>

            <p className="text-center text-[1.4rem] text-[#011E41] font-[400]">
              {lang?.sertifikatlar_long}
            </p>
          </div>
          <ServicesCards
            dataCard={data}
            code={code}
            lang={lang}
            border="border-card"
          />
          {pagination && pagination?.last_page > 1 && (
            <MyPagination
              totalPage={pagination?.last_page}
              currentPage={pagination?.current_page}
              basePath={`/${code}/xidmetler`}
            />
          )}
        </MaxWidth>
      </section>
    </main>
  );
};

export default Services;
