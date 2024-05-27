import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const SignUp = (props) => {
  const [success, setSuccess] = useState(false);
  const [lname, setLname] = useState('');
    const [fname, setFname] = useState('');
    const [tel, setTel] = useState('');
    const [id, setId] = useState('');
    const [msg, setMsg] = useState('');
    const [agree, setAgree] = useState(false);
  const handleGreat = (e) => {
    e.preventDefault();
    setSuccess(!success);
    console.log('Last Name:', lname);
        console.log('First Name:', fname);
        console.log('Phone Number:', tel);
        console.log('ID:', id);
        console.log('Message:', msg);
        console.log('Agree to terms:', agree);
  };

  return (
    <>
      <div
        className={
          success
            ? "hidden"
            : "bg-white flex flex-col gap-[28px] p-[32px] rounded-[15px] font-montserrat w-[595px]"
        }
      >
        <div className="flex justify-between items-center">
          <h1 className="text-[24px]">Запись к врачу</h1>
          <IoClose onClick={props.closeForm} size={26} cursor="pointer" />
        </div>
        <div className="text-[14px] relative">
          <p>Врач: {props.doctorName}</p>
          <p>Дата: {props.selectedTime}</p>
          <button
            onClick={props.closeForm}
            className="absolute bottom-0 right-[220px] text-[#42B2FC]"
          >
            Изменить
          </button>
        </div>
        <form className="flex flex-col text-[16px] gap-4" onSubmit={handleGreat}>
            <div className="flex flex-col">
                <label htmlFor="lname">
                    Ваше фамилия <span className="text-[#FF0000]">*</span>
                </label>
                <input
                    type="text"
                    id="lname"
                    required
                    className="bg-[#F5F7FA] outline-none py-[9px] px-[13px] rounded-md"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="fname">
                    Ваше имя <span className="text-[#FF0000]">*</span>
                </label>
                <input
                    type="text"
                    required
                    id="fname"
                    className="bg-[#F5F7FA] outline-none py-[9px] px-[13px] rounded-md"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                />
            </div>
            <div className="flex items-center gap-3">
                <div className="w-full">
                    <label htmlFor="tel">
                        Номер телефона <span className="text-[#FF0000]">*</span>
                    </label>
                    <div className="flex items-center bg-[#F5F7FA] rounded-md overflow-hidden">
                        <p className="py-[9px] px-[13px] bg-[#42B2FC] text-white">
                            +998
                        </p>
                        <input
                            required
                            type="tel"
                            id="tel"
                            className="outline-none ml-2 bg-[#F5F7FA]"
                            value={tel}
                            onChange={(e) => setTel(e.target.value)}
                        />
                    </div>
                </div>
                <div className="w-full">
                    <label htmlFor="id">
                        Серия и номер паспорта <span className="text-[#FF0000]">*</span>
                    </label>
                    <input
                        type="text"
                        required
                        id="id"
                        className="bg-[#F5F7FA] w-full outline-none py-[9px] px-[13px] rounded-md"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex flex-col">
                <label htmlFor="msg">Что вас беспокоит?</label>
                <textarea
                    id="msg"
                    className="bg-[#F5F7FA] outline-none py-[9px] px-[13px] rounded-md"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                ></textarea>
            </div>
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <input 
                        type="checkbox" 
                        required 
                        id="check"
                        checked={agree}
                        onChange={(e) => setAgree(e.target.checked)}
                    />
                    <label htmlFor="check" className="cursor-pointer">
                        Я согласен(а){" "}
                        <a href="#" className="underline text-[#42B2FC]">
                            с правилами пользования
                        </a>
                    </label>
                </div>
                <button type="button" className="text-[#FF0000]" onClick={() => {
                    setLname('');
                    setFname('');
                    setTel('');
                    setId('');
                    setMsg('');
                    setAgree(false);
                }}>
                    Очистить
                </button>
            </div>
            <button type="submit" className="bg-[#42B2FC] text-white rounded-md py-[9px] px-[13px]">
                Записаться
            </button>
        </form>
      </div>
      <div
        className={
          success
            ? "bg-white flex flex-col gap-[28px] p-[32px] rounded-[15px] font-montserrat w-[595px]"
            : "hidden"
        }
      >
        <div className="flex justify-between items-center">
          <h1 className="text-[24px]">Запись к врачу</h1>
          <IoClose onClick={props.closeForm} size={26} cursor="pointer" />
        </div>
        <div className="flex justify-center flex-col text-center gap-4">
          <IoMdCheckmarkCircleOutline className="text-[4.5rem] w-full text-[#01B569]" />
          <h1 className="text-[32px]">Вы успешно записались!</h1>
          <p>Желаем вам крепкого здоровья</p>
          <div>
            <p>Врач: {props.doctorName}</p>
            <p>Дата: {props.selectedTime}</p>
          </div>
          <Link
            to="/"
            className="bg-[#42B2FC] text-white rounded-md py-[9px] px-[13px]"
          >
            Закрыть
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
