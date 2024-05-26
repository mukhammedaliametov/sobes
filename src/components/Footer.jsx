import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#42B2FC] text-white flex justify-center font-montserrat items-center h-[232px] py-[40px] px-[0px]">
      <div className="max-w-[1200px] w-full">
        <div className="border-b flex items-center justify-between gap-[25px]">
          <ul className="flex items-center h-[90px] gap-[25px]">
            <li>
              <Link to="">Главная</Link>
            </li>
            <li>
              <Link to="">Как пользоваться</Link>
            </li>
            <li>
              <Link to="">Политика конфиденциальности</Link>
            </li>
            <li>
              <Link to="">Условия использования</Link>
            </li>
            <li>
              <Link to="">Контакты</Link>
            </li>
            <select disabled className="bg-transparent">
              <option disabled hidden selected>
                Еще
              </option>
            </select>
          </ul>
          <div className="flex gap-[20px]">
            <Link to="">Войти</Link>
            <Link to="">Регистрация</Link>
          </div>
        </div>
        <div className="flex items-center justify-between h-[90px]">
          <Link to="">
            <h1 className="text-[24px]">
              <span className="bg-white text-[#42B2FC] pl-2 py-1 pr-[3px] rounded-[4px]">
                Ло
              </span>
              готип
            </h1>
          </Link>
          <span>&copy; 2010-2023 Все права защищены</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
