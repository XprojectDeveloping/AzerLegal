import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import ServicesCards from "@/app/(components)/shared_components/ServicesCards";
import Image from "next/image";
import Link from "next/link";

const Services = ({ data, lang, code }) => {
  return (
    <section className="bg-[#011E41]">
      <MaxWidth>
        <div className="py-[8rem]">
          <div className="flex flex-row items-center justify-between">
            <h3 className="text-[4.8rem] text-[#D5BA8C] font-[700] mb-[4rem]">
              {lang?.xidmetler_page}
            </h3>
            <div>
              <Link
                className="flex items-center text-[1.4rem] text-[#011E41] font-[500] gap-[1.2rem] py-[1.3rem] px-[4rem] bg-[#D5BA8C] rounded-[0.4rem] transition hover:bg-[#808080] hover:text-[#ffffff]"
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
