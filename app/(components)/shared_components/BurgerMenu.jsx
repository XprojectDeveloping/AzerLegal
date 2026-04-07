"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const BurgerMenu = ({ items = [] }) => {
  const [open, setOpen] = useState();
  const pathName = usePathname();
  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);
  return (
    <>
      <button onClick={toggleMenu} className="">
        <Image
          width={32}
          height={32}
          src={"/img/header/header-burger-menu.svg"}
          alt="burger-header"
        />
      </button>
      {open && (
        <div onClick={closeMenu} className="fixed inset-0 bg-black/40 z-1000" />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-[250px] bg-[#ffffff]
        p-[3rem] flex flex-col gap-[2rem]
        z-[2000] transition-transform duration-300
        text-[2rem]
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <button className="flex justify-end" onClick={closeMenu}>
          <Image
            width={32}
            height={32}
            alt="burger-close"
            src={"/img/header/header-burger-close-menu.svg"}
          />
        </button> 
        <div className="flex flex-col justify-center items-center gap-[3rem]">
          {items.map((item) => {
            return (
              <Link
                key={item?.id}
                href={item?.href}
                className={`hover:text-[#D5BA8C] transition ${
                  pathName === `${item?.href}`
                    ? "font-[600] text-[#D5BA8C]"
                    : ""
                }`}
              >
                {item?.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
