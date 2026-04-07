import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import Image from "next/image";
import React from "react";
import HomeForm from "../components/HomeForm";

const HomeContact = ({ data, lang, code }) => {
  return (
    <section className="my-[8rem] xl:my-[6rem] lg:my-[3rem] md:my-[2.5rem]">
      <MaxWidth customClass="xl:max-w-none xl:mx-[3.5rem] lg:mx-[2.5rem] md:mx-[1.5rem]">
        <div className="grid grid-cols-12 sm:grid-cols-6 items-center gap-[10rem] xl:gap-[6rem]">
          <div className="col-span-5 lg:col-span-full relative lg:hidden">
            <Image
              width={1000}
              height={500}
              src={"/img/homepage/form/form-img.png"}
              alt="form-img"
              className="w-[inital]"
            />

            <div className="absolute top-[50%] translate-y-[-50%] right-[-9%] z-[1000] bg-[#d5ba8c] p-[2.2rem] rounded-[50%]">
              <Image
                width={50}
                height={50}
                src={"/img/homepage/form/form-ico.svg"}
                alt="contact-img"
              />
            </div>
          </div>

          <div className="flex flex-col col-span-7 lg:col-span-full">
            <div className="mb-[4rem] xl:mb-[2rem]">
              <h2 className="text-[4.8rem] xl:text-[3.8rem] md:text-[2.8rem] sm:text-[2.5rem] text-[#011E41] font-[700] mb-[1rem]">
                {lang?.contact_us}
              </h2>
              <div
                className="text-[1.4rem] text-[#AAB5B8] font-[400]"
                dangerouslySetInnerHTML={{ __html: lang?.business_advisor }}
              />
            </div>
            <div>
              <HomeForm
                formTranslate={lang}
                formContactData={data}
                code={code}
              />
            </div>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default HomeContact;
