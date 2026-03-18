import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import Image from "next/image";
import Link from "next/link";

const Services = ({ Services, Services2 }) => {
  return (
    <section className="bg-[#011E41]">
      <MaxWidth>
        <div className="py-[8rem]">
          <div className="flex flex-row items-center justify-between">
            <h3 className="text-[4.8rem] text-[#D5BA8C] font-[700] mb-[4rem]">
              {Services2?.xidmetler_page}
            </h3>
            <div>
              <Link
                className="flex items-center text-[1.4rem] text-[#011E41] font-[500] gap-[1.2rem] py-[1.3rem] px-[4rem] bg-[#D5BA8C] rounded-[0.4rem] transition hover:bg-[#808080] hover:text-[#ffffff]"
                href={"/xidmetler"}
              >
                {Services2?.services_text3}
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
            dangerouslySetInnerHTML={{ __html: Services2?.services_text2 }}
          />
        </div>
        <div className="grid grid-cols-12 gap-[2.4rem] pb-[8rem]">
          {Services &&
            Services?.map((item) => {
              return (
                <div
                  className="col-span-4 flex flex-col justify-between gap-[2rem] bg-[#ffffff] hover:bg-[#D0B281] p-[2rem] rounded-[0.8rem] relative overflow-hidden group transition-colors duration-300"
                  key={item?.id}
                >
                  <Image
                    src={"/img/homepage/services/hover-bg-img.svg"}
                    alt="bg"
                    fill
                    className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply"
                  />

                  <h3 className="text-[1.8rem] text-[#011E41] font-[700] min-h-[4.2rem] line-clamp-2 relative z-10 transition-colors duration-300">
                    {item?.title}
                  </h3>

                  <div
                    className="services-text text-[1.4rem] text-[#011E41] line-clamp-4 relative z-10 transition-colors duration-300"
                    dangerouslySetInnerHTML={{ __html: item?.text }}
                  />

                  <Link
                    className="text-[1.6rem] text-[#D5BA8C] group-hover:text-[#FFFFFF] flex flex-row items-center gap-[1.2rem] mt-auto relative z-10 transition-colors duration-300"
                    href={`/services/${item?.id}`}
                  >
                    {Services2?.read_more}
                    <Image
                      height={24}
                      width={24}
                      src={"/img/homepage/services/arrow-up-right-ico.svg"}
                      alt="services-arrow"
                      className="filter-none group-hover:[filter:invert(1%)_sepia(93%)_saturate(27%)_hue-rotate(94deg)_brightness(100%)_contrast(106%)]  transition-all duration-300"
                    />
                  </Link>
                </div>
              );
            })}
        </div>
      </MaxWidth>
    </section>
  );
};

export default Services;
