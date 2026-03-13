"use client";

import { useCallback, useState } from "react";
import Lang from "../Lang/Lang";
import MaxWidth from "../shared_components/MaxWidth";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = ({ dataHeaderLogo, dataHeaderNav, code }) => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  let language;
  if (typeof window !== "undefined") {
    language = localStorage.getItem("azerlegal");
  }

  const langSwitcher = async () => {
    setOpen(false);
  };
  const langs = ["az", "en", "ru"];

  const langChecker = useCallback((lang = "az") => {
    if (typeof localStorage !== "undefined") {
      return lang !== localStorage.getItem("azerlegal");
    }
  }, []);

  const myLang = langs?.filter(langChecker);
  return (
    <header className="bg-[#F4F6F6] py-[4rem]">
      <MaxWidth customClass="flex items-center justify-between">
        <div className="flex items-center gap-[1.1rem]">
          <img src="/img/header/header-logo.svg" alt="" />
        </div>
        <div className="">
          <nav className="flex gap-[3.2rem]">
            {dataHeaderNav?.menus &&
              dataHeaderNav?.menus?.map((item) => {
                return (
                  <Link
                    className={`text-[#011E41] text-[1.4rem] font-[400] leading-[100%] ${pathName === `${item.slug_url}` ? "font-[600] text-[#D5BA8C]" : ""}`}
                    key={item?.id}
                    href={item?.slug_url}
                  >
                    {item?.name}
                  </Link>
                );
              })}
          </nav>
        </div>

        <div className="flex items-center gap-[2.4rem]">
          <div className="bg-[#EAEDED] p-[0.8rem] cursor-pointer">
            <img src={"/img/header/header-search.svg"} alt="" />
          </div>
          <Lang
            toggle={() => setOpen(!open)}
            langs={langs}
            switchLang={
              open && (
                <div className="absolute cursor-pointer mt-6 right-[10px] top-6 h-[50px] flex flex-col gap-[1rem] text-left items-center justify-center">
                  {myLang?.map((lang, index) => (
                    <button
                      className="z-[200] text-[1.4rem] transitions overflow-hidden px-6 py-1 rounded-lg bg-[#EAEDED] "
                      key={index}
                      onClick={() => langSwitcher(lang)}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )
            }
          />
        </div>
      </MaxWidth>
    </header>
  );
};

export default Header;
