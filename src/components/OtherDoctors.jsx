import React, { useState } from "react";
import Data from "../../server.json";
import { FaArrowRightLong } from "react-icons/fa6";
import { useParams, Link } from "react-router-dom";
import { createSlug } from "../components/KrilToLatin";

const OtherDoctors = () => {
  const { person } = useParams();
  const dataFind = Data.find((item) => createSlug(item.name) === person);
  const [slice, setSlice] = useState(false);
  const personFilter = Data.filter(
    (item) => item.jobtitle === dataFind.jobtitle
  );
  return (
    <div>
      <h1 className="text-[32px] mb-6 font-montserrat">Другие врачи</h1>
      <div className="grid grid-cols-3 gap-[25px] my-6">
        {(slice ? personFilter : personFilter.slice(0, 3)).map(
          (item, index) => {
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
                    to={`/${createSlug(item.name)}`}
                    className="my-[8px] text-[#42B2FC] group flex items-center"
                  >
                    Записаться на прием{" "}
                    <FaArrowRightLong className="ml-2 group-hover:ml-4 duration-300" />
                  </Link>
                </div>
              </div>
            );
          }
        )}
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
  );
};

export default OtherDoctors;
