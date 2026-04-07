import Image from "next/image";
import MaxWidth from "../../shared_components/MaxWidth";
import ServiceForm from "./component/ServiceForm";
import Link from "next/link";

const ServicesSingle = ({ data, relatedData, code, lang }) => {
  return (
    <section className="my-[8rem] xl:my-[6rem] lg:my-[3rem] md:my-[2.5rem]">
      <MaxWidth customClass="xl:max-w-none xl:mx-[3.5rem] lg:mx-[2.5rem] md:mx-[1.5rem]">
        <div className="mb-[4rem] lg:mb-[2.5rem]">
          <h2 className="text-[4.8rem] xl:text-[3.8rem] lg:text-[2.8rem] md:text-[2.5rem] text-[#011E41] font-[700]">
            {data?.title}
          </h2>
        </div>
        <div className="flex flex-row lg:flex-col gap-[2.4rem] mb-[4rem] md:mb-[2rem]">
          <div>
            <div className="mb-[4rem] md:mb-[2rem]">
              <Image
                width={690}
                height={309}
                alt={lang?.xidmetler_page}
                src={"/img/services/services-single.png"}
                className="lg:w-full"
              />
            </div>
            <div
              className="text-[1.6rem] md:text-[1.3rem] text-[#011E41] font-[400]"
              dangerouslySetInnerHTML={{ __html: data?.text }}
            />
          </div>
          <div>
            <ServiceForm
              formTranslate={lang}
              formContactData={data}
              code={code}
            />

            <div className="flex items-center justify-center gap-[2rem] text-[2.4rem] md:text-[1.8rem] text-[#011E41] font-[600] mt-[4rem] md:mt-[2rem] download py-[4.9rem] lg:py-[2.9rem] md:py-[1.9rem] rounded-[1.2rem]">
              <Image
                width={40}
                height={40}
                alt={lang?.xidmetler_page}
                src={"/img/services/download-awwor.svg"}
              />
              <a href={"/"} download={data?.pdf_file}>
                {"Download Catalogue"}
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 lg:grid-cols-3 gap-[2.4rem] mb-[8rem] xl:mb-[6rem] lg:mb-[3rem] md:mb-[2.5rem]">
          {data.cards?.map((item, index) => {
            return (
              <div
                key={item?.id || index}
                className="col-span-4 bg-[#011E41] p-[2rem] rounded-[1.2rem]"
              >
                <h4 className="text-[1.6rem] md:text-[1.3rem] text-[#FFFFFF] font-[700] mb-[2rem]">
                  {item?.title}
                </h4>
                <p className="text-[1.4rem] md:text-[1.2rem] text-[#FFFFFF] font-[400]">
                  {item?.description}
                </p>
              </div>
            );
          })}
        </div>
        <div>
          <div className="flex justify-between items-center mb-[8rem] xl:mb-[6rem] lg:mb-[3rem] md:mb-[2.5rem]">
            <h3 className="text-[4.8rem] xl:text-[3.8rem] lg:text-[2.8rem] md:text-[2.5rem] text-[#011E41] font-[700]">
              {lang?.other_services}
            </h3>
            <Link
              href={"/xidmetler"}
              className="flex items-center gap-[1.2rem] text-[1.4rem] md:text-[1.2rem] font-[600] bg-[#D5BA8C] text-[#011E41] py-[1.3rem] px-[4rem] rounded-[0.4rem] hover:bg-[#808080] hover:text-[#ffffff] transition"
            >
              {lang?.services_text3}
              <img
                src="/img/services/arrow-up-single-.svg"
                alt={lang?.xidmetler_page}
              />
            </Link>
          </div>
          <div className="grid grid-cols-12 lg:grid-cols-3 gap-[2.4rem]">
            {relatedData.map((item) => {
              return (
                <div
                  className="col-span-4 p-[2rem] rounded-[0.8rem] related-card"
                  key={item?.id}
                >
                  <h3 className="mb-[2rem] text-[2.4rem] md:text-[1.8rem] text-[#011E41] font-[700]">
                    {item?.title}
                  </h3>
                  <div
                    className="services-single-text text-[1.4rem] md:text-[1.2rem] text-[#011E41]"
                    dangerouslySetInnerHTML={{ __html: item?.text }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default ServicesSingle;
