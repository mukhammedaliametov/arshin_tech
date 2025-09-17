import React from "react";
import Image from "next/image";
import Advantages1 from '@/assets/advantages1.svg';
import Advantages2 from '@/assets/advantages2.svg';
import Advantages3 from '@/assets/advantages3.svg';
import Advantages4 from '@/assets/advantages4.svg';

const Advantages = () => {
  return (
    <div className="max-w-[1160px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-[30px] my-[70px]">
      <div className="col-span-1 row-span-2 bg-white flex flex-col justify-between p-[20px] rounded-[20px] font-inter">
        <div>
          <p className="inline-block mb-[50px] bg-secondary-blue text-white py-[5px] px-[10px] rounded-[30px]">преимущества</p>
          <h3 className="text-[42px] font-semibold mb-[30px]">ПОЧЕМУ НАС ВЫБИРАЮТ?</h3>
          <p className="font-semibold">
            Наша компания проектирует, поставляет оборудование и реализует
            проекты любой сложности на протяжении 5 лет.
          </p>
          <p className="font-semibold">
            Мы используем только современное оборудование и выполняем монтаж в
            рамках индивидуального запроса клиента.{" "}
          </p>
        </div>
        <button className="bg-primary-blue p-[10px] rounded-[15px] text-white mt-[30px] cursor-pointer opacity-90 hover:opacity-100 duration-300">Смотреть презентации</button>
      </div>
      <div className="bg-secondary-blue rounded-[20px] p-[20px] text-white font-inter flex justify-between flex-col font-[300] text-[18px] gap-[20px]">
        <Image src={Advantages1} alt="card" />
        <p>Подбор и монтаж системы видеонаблюдения <b>в короткие сроки</b></p>
      </div>
      <div className="bg-secondary-blue rounded-[20px] p-[20px] text-white font-inter flex justify-between flex-col font-[300] text-[18px] gap-[20px]">
        <Image src={Advantages2} alt="card" />
        <p>Оборудование <b>nот надёжных брендов</b> систем безопасности <b>с гарантией от 3-х лет</b></p>
      </div>
      <div className="bg-secondary-blue rounded-[20px] p-[20px] text-white font-inter flex justify-between flex-col font-[300] text-[18px] gap-[20px]">
        <Image src={Advantages3} alt="card" />
        <p>Обязательный выезд специалиста на объект до начала работ, <b>для точного расчёта стоимости</b></p>
      </div>
      <div className="bg-secondary-blue rounded-[20px] p-[20px] text-white font-inter flex justify-between flex-col font-[300] text-[18px] gap-[20px]">
        <Image src={Advantages4} alt="card" />
        <p>Чистый монтаж на объектах  с готовым ремонтом! В работе <b>используем промышленные пылесосы</b></p>
      </div>
    </div>
  );
};

export default Advantages;
