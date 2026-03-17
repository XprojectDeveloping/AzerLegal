import MaxWidth from "@/app/(components)/shared_components/MaxWidth";
import Image from "next/image";
import React from "react";
import HomeForm from "../components/HomeForm";

const HomeContact = ({ Form, FormContactData, code }) => {
  return (
    <section className="my-[8rem]">
      <MaxWidth>
        <div className="grid grid-cols-12 gap-[4rem]">
          <div className="col-span-5">
            <Image
              width={486}
              height={421}
              src={"/img/homepage/form/form-img.png"}
              alt="form-img"
            />
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
