import React, { useState } from "react";
import Data from "../../server.json";
import { Link, useParams } from "react-router-dom";
import { createSlug } from "../components/KrilToLatin";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import OtherDoctors from "../components/OtherDoctors";
import SignUp from "../components/SignUp";

const SinglePerson = () => {
  const { person } = useParams();
  const dataFind = Data.find((item) => createSlug(item.name) === person);

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const initialData = dataFind.times.slice(0, 3);
  const hiddenData = dataFind.times.length - initialData.length;

  const [selectedTime, setSelectedTime] = useState('Выберите время приема');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  
  const handleTimeSelect = (day, month, time) => {
    setSelectedTime(`Выбрать ${day} ${month}, ${time}`);
    setIsButtonDisabled(false);
  };

  const [form, setForm] = useState();
  const handleForm = () => setForm(!form);
  const closeForm = () => setForm(false);

  return (
    <div className="pt-[110px] w-full flex justify-center">
      <div className={form ? "fixed top-0 left-0 right-0 bg-[#00000071] z-20 h-screen flex justify-center items-center" : 'hidden'}>
        <SignUp closeForm={closeForm} doctorName={dataFind.name} selectedTime={selectedTime} />
      </div>
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
                  {item.clock.map((time) => (
                    <button onClick={() => handleTimeSelect(item.day, item.month, time)} className="bg-[#E1F1FF] text-[20px] text-[#575757] rounded-[5px] py-[6px] px-[18px] text-center focus:bg-[#42B2FC] focus:text-white">
                      {time}
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
            <button
            onClick={handleForm}
              disabled={isButtonDisabled}
              className={isButtonDisabled ? "bg-[#42B2FC] py-[15px] px-[25px] text-white rounded-[8px] my-6 opacity-[50%]" : "bg-[#42B2FC] py-[15px] px-[25px] text-white rounded-[8px] my-6"}
            >
              {selectedTime}
            </button>
          </div>
        </div>
        <OtherDoctors />
      </div>
    </div>
  );
};

export default SinglePerson;
