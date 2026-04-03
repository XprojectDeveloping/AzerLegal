"use client";
import { useCallback, useEffect, useState } from "react";
import Lang from "../Lang/Lang";
import MaxWidth from "../shared_components/MaxWidth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import BurgerMenu from "../shared_components/BurgerMenu";

const Header = ({ dataHeaderNav }) => {
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

  const [scroll, setScroll] = useState();
  const SCROL_Y = 120;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROL_Y) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBurgerLinks = [
    {
      id: 1,
      name: "Ana Səhifə",
      href: "/",
    },
    {
      id: 2,
      name: "Haqqımızda",
      href: "/haqqimizda",
    },
    {
      id: 3,
      name: "Rəhbərin Müraciəti",
      href: "/rehberin-muracieti",
    },
    {
      id: 4,
      name: "Xidmətlər",
      href: "/xidmetler",
    },
    {
      id: 5,
      name: "Xəbərlər",
      href: "/xeberler",
    },
    {
      id: 6,
      name: "Əlaqə",
      href: "/elaqe",
    },
  ];

  return (
    <header
      className={`bg-[#F4F6F6] py-[4rem] lg:py-[2.8rem] ${scroll ? "fixed top-0 left-0 right-0 z-[2000] py-[2.5rem]" : ""}`}
    >
      <MaxWidth customClass="flex items-center justify-between xl:mx-[3.5rem] lg:mx-[2.5rem] md:mx-[1.5rem]">
        <div className="flex items-center">
          <Link href={"/"}>
            <Image
              width={282}
              height={48}
              src="/img/header/header-logo.svg"
              alt="logo"
              className="lg:max-w-[25rem] md:max-w-[20rem] sm:max-w-[15rem]"
            />
          </Link>
        </div>
        <div className="lg:hidden">
          <nav className="flex gap-[3.2rem]">
            {dataHeaderNav?.menus &&
              dataHeaderNav?.menus?.map((item) => {
                const hasChildren = item.children?.length > 0;
                return (
                  <div key={item?.id} className="relative group">
                    <Link
                      className={`flex items-center gap-1 text-[#011E41] text-[1.4rem] font-[400] leading-[100%] ${
                        pathName === `${item.slug_url}`
                          ? "font-[600] text-[#D5BA8C]"
                          : ""
                      }`}
                      href={item?.slug_url}
                    >
                      {item?.name}
                    </Link>
                    {hasChildren && (
                      <div className="absolute top-full left-0 mt-1 w-52 z-50 bg-white rounded-lg shadow-lg border border-gray-100 py-1 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                        {item.children
                          .sort((a, b) => a.sort_order - b.sort_order)
                          .map((child) => {
                            return (
                              <Link
                                key={child.id}
                                href={`/${child.slug_url}`}
                                className="block px-4 py-2 text-[1.4rem] text-[#011E41] hover:bg-gray-50 hover:text-[#D5BA8C] transition-colors"
                              >
                                {child.name}
                              </Link>
                            );
                          })}
                      </div>
                    )}
                  </div>
                );
              })}
          </nav>
        </div>

        <div className="flex items-center gap-[2.4rem] sm:gap-[1.5rem]">
          <div className="bg-[#EAEDED] p-[0.8rem] cursor-pointer sm:hidden">
            <img src={"/img/header/header-search.svg"} alt="" />
          </div>
          <Lang
            toggle={() => setOpen(!open)}
            langs={langs}
            switchLang={
              open && (
                <div className="absolute cursor-pointer mt-6 right-[10px] top-6 h-[50px] flex flex-col gap-[1rem] sm:gap-[0.9rem] text-left items-center justify-center">
                  {myLang?.map((lang, index) => (
                    <button
                      className="z-[200] text-[1.4rem] sm:text-[1.2rem] transitions overflow-hidden px-6 py-1 rounded-lg bg-[#EAEDED] "
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

          <div className="burger-hide lg:flex">
            <BurgerMenu items={headerBurgerLinks} />
          </div>
        </div>
      </MaxWidth>
    </header>
  );
};

export default Header;
