import BlogNewsCards from "../../shared_components/BlogNewsCards";
import MaxWidth from "../../shared_components/MaxWidth";
import MyPagination from "../../shared_components/MyPagination";

const News = ({ data, pagination, code, lang }) => {
  return (
    <section className="my-[8rem]">
      <MaxWidth>
        <div className="mb-[8rem] text-center">
          <h2 className="text-[4.8rem] text-[#011E41] font-[700] mb-[4rem]">
            {lang?.news_page}
          </h2>

          <p className="text-center text-[1.4rem] text-[#011E41] font-[400]">
            {lang?.sertifikatlar_long}
          </p>
        </div>
        <BlogNewsCards dataCard={data} code={code} lang={lang} />
        {pagination && pagination?.last_page > 1 && (
          <MyPagination
            totalPage={pagination?.last_page}
            currentPage={pagination?.current_page}
            basePath={`/${code}/xeberler`}
          />
        )}
      </MaxWidth>
    </section>
  );
};

export default News;
