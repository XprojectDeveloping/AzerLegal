import Image from "next/image";
import Link from "next/link";

const ServicesCards = ({ dataCard, code, lang, border = "" }) => {
  return (
    <div className="grid grid-cols-12 gap-[2.4rem] pb-[8rem]">
      {dataCard &&
        dataCard?.map((item) => {
          return (
            <div
              className={`col-span-4 ${border} flex flex-col justify-between gap-[2rem] bg-[#ffffff] hover:bg-[#D0B281] p-[2rem] rounded-[0.8rem] relative overflow-hidden group transition-colors duration-300`}
              key={item?.id}
            >
              <Image
                src={"/img/homepage/services/hover-bg-img.svg"}
                alt="bg"
                fill
                className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply"
              />

              <div>
                <h3 className="text-[1.8rem] text-[#011E41] font-[700] min-h-[4.2rem] line-clamp-2 relative z-10 transition-colors duration-300">
                  {item?.title}
                </h3>

                <div
                  className="services-text text-[1.4rem] text-[#011E41] line-clamp-4 relative z-10 transition-colors duration-300 mt-[1rem]"
                  dangerouslySetInnerHTML={{ __html: item?.text }}
                />
              </div>

              {item.slug ? (
                <Link
                  className="text-[1.6rem] text-[#D5BA8C] group-hover:text-[#FFFFFF] flex flex-row items-center gap-[1.2rem] mt-auto relative z-[60] transition-colors duration-300"
                  href={`${code}/xidmetler/${item?.id}/${item.slug}`}
                >
                  {lang?.read_more}
                  <Image
                    height={24}
                    width={24}
                    src={"/img/homepage/services/arrow-up-right-ico.svg"}
                    alt="services-arrow"
                    className="filter-none group-hover:[filter:invert(1%)_sepia(93%)_saturate(27%)_hue-rotate(94deg)_brightness(100%)_contrast(106%)]  transition-all duration-300"
                  />
                </Link>
              ) : (
                <></>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default ServicesCards;
