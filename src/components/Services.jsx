import React from "react";
import Image from "next/image";
import Services1 from "@/assets/services1.svg";
import Services2 from "@/assets/services2.svg";
import Services3 from "@/assets/services3.svg";
import Services4 from "@/assets/services4.svg";
import Services5 from "@/assets/services5.svg";
import ServicesImage from "@/assets/services_image.png";

const Services = () => {
  const servicesItem = [
    {
      name: "Домофония",
      info: "Позволяет на этапе звонка точно определить, кто к вам пришёл и позвать на помощь в случае необходимости",
      icon: Services4,
    },
    {
      name: "Умные замки",
      info: "Надёжность и высокая степень защиты от взлома выгодно отличает умные замки от обычных механических",
      icon: Services5,
    },
    {
      name: "Видеонаблюдение",
      info: "Позволяет обеспечить безопасность прав человека, частной и государственной собственности",
      icon: Services2,
    },
    {
      name: "Системы распознавания лиц",
      info: "Идентификации личности при помощи сканирования лица",
      icon: Services3,
    },
    {
      name: "Видеосистемы для спецтехники",
      info: "Позволяют решить задачи, связанные с работами при ведении строительства, монтажа и производства.",
      icon: Services1,
    },
  ];

  return (
    <div className="max-w-[1160px] mx-auto bg-white rounded-[20px] p-[10px] md:p-[20px]">
      <div className="flex flex-col md:flex-row items-left md:items-center justify-between fon-inter">
        <h2 className="text-[25px]/[30px] lg:text-[40px]/[45px] font-semibold mb-[10px] md:mb-0">
          УСЛУГИ <br /> ARSHIN TECH
        </h2>
        <div className="font-inter">
          <p className="bg-secondary-blue text-white py-[5px] px-[10px] rounded-[30px] inline-block m-[5px] font-[400] text-[14px] md:text-[16px]">видеонаблюдение</p>
          <p className="bg-secondary-blue text-white py-[5px] px-[10px] rounded-[30px] inline-block m-[5px] font-[400] text-[14px] md:text-[16px]">домофония</p>
          <p className="bg-secondary-blue text-white py-[5px] px-[10px] rounded-[30px] inline-block m-[5px] font-[400] text-[14px] md:text-[16px]">умные замки</p>
          <br className="hidden md:block" />
          <p className="bg-secondary-blue text-white py-[5px] px-[10px] rounded-[30px] inline-block m-[5px] font-[400] text-[14px] md:text-[16px]">распознавание лиц</p>
          <p className="bg-secondary-blue text-white py-[5px] px-[10px] rounded-[30px] inline-block m-[5px] font-[400] text-[14px] md:text-[16px]">видеосистемы для спецтехники</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-top gap-[30px] mt-[40px] justify-center">
        <div className="flex flex-col gap-[30px]">
          {servicesItem.slice(0, 3).map((item, idx) => (
            <div key={idx} className="bg-secondary-blue px-[10px] py-[5px] overflow-hidden text-white rounded-[20px] flex flex-col justify-between gap-[20px] w-full md:w-[460px]">
              <div className="flex justify-between items-center">
                <p className="text-[20px] font-[600] font-inter" >{item.name}</p>
                <Image src={item.icon} alt="icon" />
              </div>
              <p className="font-[400] font-inter">{item.info}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[30px]">
          {servicesItem.slice(3, 6).map((item, idx) => (
            <div key={idx} className="bg-secondary-blue px-[10px] font-inter py-[5px] overflow-hidden text-white rounded-[20px] flex flex-col justify-between gap-[20px] h-[200px] w-full md:w-[280px]">
              <div className="flex justify-between items-center">
                <p className="text-[20px] font-[600]">{item.name}</p>
                <Image src={item.icon} alt="icon" />
              </div>
              <p>{item.info}</p>
            </div>
          ))}
        </div>
        <Image src={ServicesImage} alt="" className="hidden xl:block w-[320px] h-[435px]" />
      </div>
    </div>
  );
};

export default Services;
