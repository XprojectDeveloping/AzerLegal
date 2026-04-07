import MaxWidth from "../../shared_components/MaxWidth";
import MyPagination from "../../shared_components/MyPagination";
import ServicesCards from "../../shared_components/ServicesCards";

const Services = ({ data, pagination, code, lang }) => {
  return (
    <main>
      <section className="my-[8rem] xl:my-[6rem] lg:my-[3rem] md:my-[2.5rem]">
        <MaxWidth customClass="xl:max-w-none xl:mx-[3.5rem] lg:mx-[2.5rem] md:mx-[1.5rem]">
          <div className="mb-[8rem] xl:my-[6rem] lg:my-[3rem] md:my-[2.5rem] text-center">
            <h2 className="text-[4.8rem] lg:text-[3.8rem] md:text-[2.5rem] text-[#011E41] font-[700] mb-[4rem] lg:mb-[2.5rem] md:mb-[1.8rem]">
              {lang?.xidmetler_page}
            </h2>

            <p className="text-center text-[1.4rem] md:text-[1.2rem] text-[#011E41] font-[400]">
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
