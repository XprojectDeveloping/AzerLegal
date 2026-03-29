import Image from "next/image";

const BlogNewsCards = ({ dataCard, code, lang }) => {
  return (
    <div className="grid grid-cols-12 gap-[2.4rem]">
      {dataCard.map((item) => {
        return (
          <div
            key={item.id}
            className="col-span-4 bg-[#F4F6F6] p-[2rem] rounded-[0.8rem]"
          >
            <Image
              width={380}
              height={240}
              src={"/img/news/news-img.png"}
              alt={lang?.news_text}
              className="mb-[2rem]"
            />
            <h3 className="text-[2rem] text-[#011E41] font-[700] mb-[2.3rem]">
              {item?.name}
            </h3>

            {item.slug ? (
              <Link
                className="text-[1.6rem] text-[#D5BA8C] group-hover:text-[#FFFFFF] flex flex-row items-center gap-[1.2rem] mt-auto relative z-[60] transition-colors duration-300"
                href={`${code}/xeberler/${item?.id}/${item.slug}`}
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

export default BlogNewsCards;
