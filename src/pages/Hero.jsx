import React, { useState } from "react";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";
import Data from "../../server.json";
import Select from "../components/Select";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {

    const [slice, setSlice] = useState(false);
    const initialPerson = Data.slice(0, 9);
    
  return (
    <div className="pt-[110px] w-full flex justify-center">
      <div className="max-w-[1200px] w-full ">
        <PageTitle name="Запись к врачу" url="/" />
        <Select />
        <div className="grid grid-cols-3 gap-[25px] my-6">
          {(slice ? Data : initialPerson).map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-[15px] overflow-hidden group"
              >
                <div className="overflow-hidden relative">
                  <img
                    src={item.img}
                    alt="doctor"
                    className="group-hover:scale-105 duration-300"
                  />
                  <div className="absolute w-full h-full top-0 left-0 bg-[#00000048] group-hover:hidden"></div>
                </div>
                <div className="py-[15px] px-[20px] flex flex-col gap-[5px] font-montserrat">
                  <h1 className="text-[20px]">{item.name}</h1>
                  <p className="text-[14px]">
                    <span className="text-[#717171]">Должность:</span>{" "}
                    {item.job}
                  </p>
                  <p className="text-[14px]">
                    <span className="text-[#717171]">Мед. учреждение:</span>{" "}
                    {item.honey}
                  </p>
                  <p className="text-[14px]">
                    <span className="text-[#717171]">Адрес:</span>{" "}
                    {item.address}
                  </p>
                  <p className="text-[14px]">
                    <span className="text-[#717171]">Специальность:</span>{" "}
                    {item.speciality}
                  </p>
                  <Link
                    to=""
                    className="my-[8px] text-[#42B2FC] group flex items-center"
                  >
                    Записаться на прием{" "}
                    <FaArrowRightLong className="ml-2 group-hover:ml-4 duration-300" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center w-full mb-20">
          {!slice && <button onClick={() => setSlice(true)} className="bg-[#42B2FC] py-[10px] px-[25px] text-white rounded-[8px] text-center font-montserrat">
            Показать еще
          </button>}
        </div>
      </div>
    </div>
  );
};

export default Hero;
