import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import ServicesCards from "@/app/(components)/shared_components/ServicesCards";
import Image from "next/image";
import Link from "next/link";

const Services = ({ data, lang, code }) => {
  return (
    <section className="bg-[#011E41]">
      <MaxWidth customClass="xl:mx-[3.5rem] lg:mx-[2.5rem] md:mx-[1.5rem]">
        <div className="py-[8rem] xl:py-[6rem] lg:py-[3rem] md:py-[2.5rem]">
          <div className="flex flex-row items-center justify-between mb-[4rem] xl:mb-[2rem]">
            <h3 className="text-[4.8rem] xl:text-[3.8rem] md:text-[2.8rem] sm:text-[2.5rem] text-[#D5BA8C] font-[700] ">
              {lang?.xidmetler_page}
            </h3>
            <div>
              <Link
                className="flex items-center text-[1.4rem] md:text-[1.2rem] text-[#011E41] font-[500] gap-[1.2rem] py-[1.3rem] px-[4rem] bg-[#D5BA8C] rounded-[0.4rem]"
                href={"/xidmetler"}
              >
                {lang?.services_text3}
                <Image
                  src={"/img/homepage/services/title-arrow-up-right.svg"}
                  width={24}
                  height={24}
                  alt="services-arrow"
                />
              </Link>
            </div>
          </div>
          <div
            className="text-[1.4rem] text-[#AAB5B8] font-[400]"
            dangerouslySetInnerHTML={{ __html: lang?.services_text2 }}
          />
        </div>

        <ServicesCards dataCard={data} code={code} lang={lang} />
      </MaxWidth>
    </section>
  );
};

export default Services;
