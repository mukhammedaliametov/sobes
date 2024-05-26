import React from "react";
import { Link, Outlet } from "react-router-dom";
import { AiOutlineGlobal } from "react-icons/ai";
import "../App.css";

const Navbar = () => {
  return (
    <>
    <div className="bg-white fixed w-full flex justify-center h-[89px] shadow-sm z-20">
      <div className="max-w-[1200px] w-full flex justify-between items-center font-montserrat text-[#282828]">
        <Link to="">
          <h1 className="text-[24px]">
            <span className="bg-[#42B2FC] text-white pl-2 py-1 pr-[3px] rounded-[4px]">
              Ло
            </span>
            готип
          </h1>
        </Link>
        <ul className="flex gap-[40px]">
          <li>
            <Link to="" className="">
              Главная
            </Link>
          </li>
          <li>
            <Link to="" className="">
              Как пользоваться?
            </Link>
          </li>
          <li>
            <Link to="/" className=" text-[#42B2FC]">
              Запись к врачу
            </Link>
          </li>
          <li>
            <Link to="" className="">
              Контакты
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-[25px] ">
          <AiOutlineGlobal size={20} color="#42B2FC" cursor="pointer" />
          <Link to="" className="text-[#42B2FC]">
            Войти
          </Link>
          <Link
            to=""
            className="border-[1.5px] border-[#42B2FC] py-[10px] px-[20px] text-[#42B2FC] rounded-[8px]"
          >
            Регистрация
          </Link>
        </div>
      </div>
    </div><div className="bg-white fixed w-full flex justify-center h-[89px] shadow-md">
      <div className="max-w-[1200px] w-full flex justify-between items-center font-montserrat text-[#282828]">
        <Link to="">
          <h1 className="text-[24px]">
            <span className="bg-[#42B2FC] text-white pl-2 py-1 pr-[3px] rounded-[4px]">
              Ло
            </span>
            готип
          </h1>
        </Link>
        <ul className="flex gap-[40px]">
          <li>
            <Link to="" className="">
              Главная
            </Link>
          </li>
          <li>
            <Link to="" className="">
              Как пользоваться?
            </Link>
          </li>
          <li>
            <Link to="/" className=" text-[#42B2FC]">
              Запись к врачу
            </Link>
          </li>
          <li>
            <Link to="" className="">
              Контакты
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-[25px] ">
          <AiOutlineGlobal size={20} color="#42B2FC" cursor="pointer" />
          <Link to="" className="text-[#42B2FC]">
            Войти
          </Link>
          <Link
            to=""
            className="border-[1.5px] border-[#42B2FC] py-[10px] px-[20px] text-[#42B2FC] rounded-[8px]"
          >
            Регистрация
          </Link>
        </div>
      </div>
    </div>
    <Outlet />
    </>
  );
};

export default Navbar;
