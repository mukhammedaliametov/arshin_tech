import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="max-w-[1160px] mx-auto bg-white rounded-[20px] py-10 px-6">
      <div>
        <div className="flex flex-col md:flex-row items-top justify-between mb-[20px]">
          <div className="w-[120px] md:w-[200px] lg:w-[250px] h-auto">
            <Image src={Logo} alt="logo" className="w-full" />
            <div className="pt-[15px]">
              <p className="text-sm text-[#333]">idea@arshin-tech.ru</p>
              <p className="text-sm text-[#333] font-semibold">
                +7 (843) 253-22-81
              </p>
            </div>
          </div>
          <div className="mt-[20px] md:mt-0">
            <Link
              href="#"
              className="bg-gray-200 rounded-full px-4 py-1 text-sm hover:bg-gray-300 mx-[5px]"
            >
              Услуги
            </Link>
            <Link
              href="#"
              className="bg-gray-200 rounded-full px-4 py-1 text-sm hover:bg-gray-300 mx-[5px]"
            >
              Схема работы
            </Link>
            <Link
              href="#"
              className="bg-gray-200 rounded-full px-4 py-1 text-sm hover:bg-gray-300 mx-[5px]"
            >
              Контакты
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-between">
          <p className="text-xs text-gray-500">Политика конфиденциальности</p>
          <p className="font-bold text-lg md:text-xl lg:text-2xl text-black leading-snug">
            Казань, Бондаренко, 26, <br /> офис 5, цокольный этаж
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
