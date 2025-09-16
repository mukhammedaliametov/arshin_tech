import React from "react";
import Image from "next/image";
import heroFrame from "@/assets/hero_frame.svg";
import heroImage from "@/assets/hero_image.png";
import { BsArrowDownRightCircleFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="w-full max-w-[1160px] mx-auto mt-[20px] flex flex-col md:flex-row items-top gap-[20px]">
      <div className="flex flex-col gap-[20px] w-full md:w-[60%] xl:w-[660px]">
        <div className="h-[259px] p-[20px] rounded-[20px] bg-white relative flex flex-col justify-between">
          <div className="flex items-center gap-[5px]">
            <p className="bg-[#97AAC6] py-[5px] px-[10px] rounded-full font-inter font-[400] text-white">
              видеонаблюдение
            </p>
            <p className="bg-[#97AAC6] py-[5px] px-[10px] rounded-full font-inter font-[400] text-white">
              Казань
            </p>
          </div>
          <div>
            <h1 className="text-[30px]/[35px] lg:text-[45px]/[50px] font-semibold font-roboto">
              Установка и продажа систем видеонаблюдения
            </h1>
            <p className="text-[#6B6B6B] font-semibold font-inter text-[18px] mt-[10px]">
              Понятным языком объясняем технические термины
            </p>
          </div>
          <Image
            src={heroFrame}
            alt="hero_frame"
            className="absolute top-0 right-0 m-[20px]"
          />
        </div>
        <div className="h-[309px] p-[20px] rounded-[20px] relative flex flex-col justify-between bg-[#97AAC6] text-white font-inter">
          <div>
            <h1 className="text-[35px] lg:text-[45px] font-semibold ">ARSHIN TECH</h1>
            <p className="font-[400] w-full md:w-[70%]">
              Объединение профессионалов, с большим опытом работы в сфере систем
              видеонаблюдения, контроля доступа и видеодомофонии.
            </p>
          </div>
          <div>
            <button className="flex items-center gap-[10px] bg-white text-[#173483] font-[500] text-[18px] py-[6px] px-[16px] rounded-[20px] cursor-pointer">
              Оставить заявку{" "}
              <BsArrowDownRightCircleFill className="text-[28px]" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <Image
          src={heroImage}
          alt="hero_img"
          className="w-full h-[582px]"
        />
      </div>
    </div>
  );
};

export default Hero;
