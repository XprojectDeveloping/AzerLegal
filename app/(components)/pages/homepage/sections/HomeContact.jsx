import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import Image from "next/image";
import React from "react";
import HomeForm from "../components/HomeForm";

const HomeContact = ({ Form, FormContactData, code }) => {
  return (
    <section className="my-[8rem]">
      <MaxWidth>
        <div className="grid grid-cols-12 items-center gap-[10rem]">
          <div className="col-span-5 relative">
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

          <div className="flex flex-col col-span-7">
            <div className="mb-[4rem]">
              <h3 className="text-[4.8rem] text-[#011E41] font-[700]">
                {Form?.contact_us}
              </h3>
              <div
                className="text-[1.4rem] text-[#AAB5B8] font-[400]"
                dangerouslySetInnerHTML={{ __html: Form?.business_advisor }}
              />
            </div>
            <div>
              <HomeForm
                FormTranslate={Form}
                FormContactData={FormContactData}
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
