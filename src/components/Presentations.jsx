import React from "react";
import { BsArrowDownRightCircleFill } from "react-icons/bs";
import { MdDownloadForOffline } from "react-icons/md";

const Presentations = () => {
  return (
    <div className="max-w-[1160px] mx-auto hidden md:flex justify-between items-top p-[20px] my-[60px] bg-secondary-blue rounded-[20px] text-white">
      <div className="flex justify-between flex-col gap-[20px]">
        <div className="flex items-center">
          <p className="bg-white text-primary-blue py-[5px] px-[10px] rounded-[30px] inline-block m-[5px] font-[400] text-[14px] md:text-[16px]">видеонаблюдение</p>
          <p className="bg-white text-primary-blue py-[5px] px-[10px] rounded-[30px] inline-block m-[5px] font-[400] text-[14px] md:text-[16px]">домофония</p>
          <p className="bg-white text-primary-blue py-[5px] px-[10px] rounded-[30px] inline-block m-[5px] font-[400] text-[14px] md:text-[16px]">Novicam</p>
        </div>
        <div>
          <h2 className="text-[35px] font-semibold font-inter">ПРЕЗЕНТАЦИИ</h2>
          <p className="mt-[40px] mb-[60px] font-inter font-[400] w-full md:w-[366px]">
            Ознакомьтесь с презентациями, чтобы понять какие проблемы мы поможем
            вам решить
          </p>
        </div>
        <div>
          <button className="flex items-center gap-[10px] bg-white text-[#173483] font-[500] text-[18px] py-[6px] px-[16px] rounded-[20px] cursor-pointer">
            Оставить заявку{" "}
            <BsArrowDownRightCircleFill className="text-[28px]" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[30px]">
        <div className="col-span-2 w-[640px] h-[126px] p-[20px] bg-white group hover:bg-primary-blue duration-300 cursor-pointer hover:text-white rounded-[20px] text-black flex flex-col justify-between">
            <p className="font-[400]">.PDF</p>
            <div className="flex justify-between items-center">
                <p className='font-semibold'>Как следить за порядком в подёезде?</p>
                <MdDownloadForOffline className="text-primary-blue text-[32px] group-hover:text-white duration-300" />
            </div>
        </div>
        <div className="w-[300px] h-[250px] p-[20px] bg-white group hover:bg-primary-blue duration-300 cursor-pointer hover:text-white rounded-[20px] text-black flex flex-col justify-between">
            <p className="font-[400]">.PDF</p>
            <div>
                <p className='font-semibold'>Видеонаблюдение во дворе</p>
                <MdDownloadForOffline className="text-primary-blue text-[32px] group-hover:text-white duration-300" />
            </div>
        </div>
        <div className="w-[300px] h-[250px] p-[20px] bg-white group hover:bg-primary-blue duration-300 cursor-pointer hover:text-white rounded-[20px] text-black flex flex-col justify-between">
            <p className="font-[400]">.PDF</p>
            <div className="flex justify-between items-center">
                <p className='font-semibold'>Домофония novicam</p>
                <MdDownloadForOffline className="text-primary-blue text-[32px] group-hover:text-white duration-300" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Presentations;
