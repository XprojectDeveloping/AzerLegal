import BlogNewsCards from "../../shared_components/BlogNewsCards";
import MaxWidth from "../../shared_components/MaxWidth";
import MyPagination from "../../shared_components/MyPagination";

const News = ({ data, pagination, code, datalang }) => {
  return (
    <main>
      <section className="my-[8rem] xl:my-[6rem] lg:my-[3rem] md:my-[2.5rem]">
        <MaxWidth customClass="xl:max-w-none xl:mx-[3.5rem] lg:mx-[2.5rem] md:mx-[1.5rem]">
          <div className="mb-[8rem] xl:my-[6rem] lg:my-[3rem] md:my-[2.5rem] text-center">
            <h2 className="text-[4.8rem] xl:text-[3.8rem] lg:text-[3.5rem] md:text-[2.8rem] text-[#011E41] font-[700] mb-[4rem] lg:mb-[2.5rem] md:mb-[2rem]">
              {datalang?.news_page}
            </h2>

            <p className="text-center text-[1.4rem] md:text-[1.2rem] text-[#011E41] font-[400]">
              {datalang?.sertifikatlar_long}
            </p>
          </div>
          <BlogNewsCards dataCard={data} code={code} lang={datalang} />
          {pagination && pagination?.last_page > 1 && (
            <MyPagination
              totalPage={pagination?.last_page}
              currentPage={pagination?.current_page}
              basePath={`/${code}/xeberler`}
            />
          )}
        </MaxWidth>
      </section>
    </main>
  );
};

export default News;
