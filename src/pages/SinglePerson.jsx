import React, { useState } from "react";
import Data from "../../server.json";
import { Link, useParams } from "react-router-dom";
import { createSlug } from "../components/KrilToLatin";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import {FaArrowRightLong} from 'react-icons/fa6';

const SinglePerson = () => {
  const { person } = useParams();
  const dataFind = Data.find((item) => createSlug(item.name) === person);

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const initialData = dataFind.times.slice(0, 3);
  const hiddenData = dataFind.times.length - initialData.length;

  const [slice, setSlice] = useState(false);
  const personFilter = Data.filter((item) => item.jobtitle === dataFind.jobtitle)

  return (
    <div className="pt-[110px] w-full flex justify-center">
      <div className="max-w-[1200px] w-full ">
        <p className="flex items-center gap-[10px] font-roboto mb-[30px]">
          <Link to="/" className="text-[#A3A3A3]">
            Главная
          </Link>{" "}
          <FaAngleRight color="#A3A3A3" />{" "}
          <Link to="/" className="text-[#A3A3A3]">
            Запись к врачу
          </Link>
          <FaAngleRight color="#A3A3A3" /> <span>{dataFind.name}</span>
        </p>
        <div className="flex items-center gap-[24px] my-[20px] font-montserrat">
          <img
            src={dataFind.img}
            alt="doctor"
            className="w-[486px] rounded-[20px]"
          />
          <div className="flex flex-col gap-[14px]">
            <h1 className="text-[32px]">{dataFind.name}</h1>
            <p className="text-[16px]">
              <span className="text-[#717171] text-[14px]">Должность:</span>
              <br /> {dataFind.jobtitle}
            </p>
            <p className="text-[16px]">
              <span className="text-[#717171] text-[14px]">
                Мед. учреждение:
              </span>
              <br /> {dataFind.honey}
            </p>
            <p className="text-[16px]">
              <span className="text-[#717171] text-[14px]">Адрес:</span>
              <br /> {dataFind.address}
            </p>
            <p className="text-[16px]">
              <span className="text-[#717171] text-[14px]">Специальность:</span>
              <br /> {dataFind.speciality}
            </p>
          </div>
        </div>
        <div className="font-montserrat">
          {(show ? dataFind.times : initialData).map((item) => {
            return (
              <div>
                <p className="text-[#263238] text-[20px]">
                  {item.day} {item.month}, {item.week}
                </p>
                <div className="grid grid-cols-12 gap-[10px] py-4">
                  {item.clock.map((item) => (
                    <button className="bg-[#E1F1FF] text-[20px] text-[#575757] rounded-[5px] py-[6px] px-[18px] text-center">
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
          {!show && (
            <button
              onClick={handleClick}
              className="bg-transparent text-[#42B2FC] py-2 flex items-center gap-2"
            >
              Еще {hiddenData} дня <FaAngleDown />
            </button>
          )}
          <div>
            <button disabled className="bg-[#42B2FC] py-[15px] px-[25px] text-white rounded-[8px] my-6 opacity-[50%]">Выберите время приема</button>
          </div>
        </div>
        <h1 className="text-[32px] mb-6 font-montserrat">Другие врачи</h1>
        <div className="grid grid-cols-3 gap-[25px] my-6">
          {(slice ? personFilter : personFilter.slice(0,3)).map((item, index) => {
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
                    to={createSlug(item.name)}
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
          {!slice && (
            <button
              onClick={() => setSlice(true)}
              className="bg-[#42B2FC] py-[10px] px-[25px] text-white rounded-[8px] text-center font-montserrat"
            >
              Показать еще
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePerson;
