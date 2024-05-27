import React, { useState } from "react";
import Data from "../../server.json";
import { Link, useParams } from "react-router-dom";
import { createSlug } from "../components/KrilToLatin";
import { FaAngleDown, FaAngleRight, FaAngleUp } from "react-icons/fa";

const SinglePerson = () => {
  const { person } = useParams();
  const dataFind = Data.find((item) => createSlug(item.name) === person);

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const initialData = dataFind.times.slice(0, 3);
  const hiddenData = dataFind.times.length - initialData.length;

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
        </div>
      </div>
    </div>
  );
};

export default SinglePerson;
