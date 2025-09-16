"use client";
import React, { useState } from "react";
import Logo from "@/assets/logo.svg";
import Image from "next/image";
import { IoClose, IoMenu } from "react-icons/io5";
import { MdPhone } from "react-icons/md";

const Header = () => {
  const [nav, setNav] = useState(0);
  const handleClick = () => setNav(!nav);
  return (
    <div className="relative max-w-[1160px] mx-auto flex items-center justify-between bg-[#FFFFFF] my-[10px] py-[15px] px-[30px] rounded-[20px] font-inter z-999">
      <a href="#">
        <Image src={Logo} alt="logo" />
      </a>
      <nav className="hidden md:flex items-center gap-[20px]">
        <a href="#" className="py-[5px] px-[15px] rounded-full bg-flash-white">
          Услуги
        </a>
        <a href="#" className="py-[5px] px-[15px] rounded-full bg-flash-white">
          Схема работы
        </a>
        <a href="#" className="py-[5px] px-[15px] rounded-full bg-flash-white">
          Контакты
        </a>
      </nav>
      <div className="hidden md:block">
        <a href="tel: +7 (843) 253-22-81" className="text-[20px] font-bold">
          +7 (843) 253-22-81
        </a>
      </div>
      <div onClick={handleClick} className="block md:hidden text-[30px]">
        {nav ? <IoClose /> : <IoMenu />}
      </div>
      <nav
        className={`absolute bg-white top-[70px] flex flex-col gap-[35px] left-0 w-full px-[30px] rounded-b-[20px] overflow-hidden duration-500 z-[-1] mt-[-20px] ${
          nav ? "h-[300px]" : "h-0"
        }`}
      >
        <a href="#" className="pt-[55px]">
          Услуги
        </a>
        <a href="#" className="">
          Схема работы
        </a>
        <a href="#" className="">
          Контакты
        </a>
        <a
          href="tel: +7 (843) 253-22-81"
          className="flex items-center gap-[5px] font-semibold"
        >
          <MdPhone className="text-[24px]" />
          +7 (843) 253-22-81
        </a>
      </nav>
    </div>
  );
};

export default Header;
