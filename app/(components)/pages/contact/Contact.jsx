import Image from "next/image";
import MaxWidth from "../../shared_components/MaxWidth";
import ContactForm from "./components/ContactForm";

const Contact = ({ data, dataLang }) => {
  const dataContactImg = [
    {
      id: 1,
      src: "/img/contact/contact-phone-call.svg",
      alt: dataLang?.phone_number,
      title: data?.number,
    },
    {
      id: 2,
      src: "/img/contact/contact-mail.svg",
      alt: dataLang?.email,
      title: data?.email,
    },
    {
      id: 3,
      src: "/img/contact/contact-mail.svg",
      alt: dataLang?.email,
      title: data?.adresslang,
    },
  ];
  return (
    <main>
      <section className="my-[8rem]">
        <MaxWidth>
          <div className="mb-[8rem] text-center">
            <h2 className="text-[4.8rem] text-[#011E41] font-[700] mb-[4rem]">
              {dataLang?.contact_us_page}
            </h2>
            <p className="text-[1.4rem] text-[#011E41] font-[400]">
              {dataLang?.contact_alt_text}
            </p>
          </div>
          <div className="max-w-[1024px] m-auto bg-[#F4F6F6] rounded-[1.2rem] py-[1.2rem] mb-[8rem]">
            <div className="flex justify-center gap-[10rem] relative top-[-4rem]">
              {dataContactImg?.map((item) => {
                return (
                  <div
                    className="flex items-center flex-col gap-[3.8rem]"
                    key={item?.id}
                  >
                    <div className="bg-[#D5BA8C] p-[1.2rem] rounded-[3rem]">
                      <Image
                        width={24}
                        height={24}
                        src={item?.src}
                        alt={item?.alt}
                      />
                    </div>

                    <p className="text-[1.4rem] text-[#011E41] font-[600]">
                      {item?.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-row gap-[6rem]">
            <div>
              <h3 className="text-[4.8rem] text-[#011E41] font-[700] mb-[2rem]">
                {dataLang?.have_a_question}
              </h3>
              <p className="text-[1.4rem] text-[#AAB5B8] font-[400] mb-[4rem]">
                {dataLang?.business_advisor}
              </p>

              <ContactForm formContactData={data} formTranslate={dataLang} />
            </div>
            <div>
              <Image
                width={1074}
                height={643}
                src={"/img/contact/contact-img.png"}
                alt={dataLang?.contact_us}
              />
            </div>
          </div>
        </MaxWidth>
      </section>
    </main>
  );
};

export default Contact;
