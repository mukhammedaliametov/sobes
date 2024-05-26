import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Select = () => {
  const [show, setShow] = useState(0);
  const handleClick = () => setShow(!show);

  const [selectedValue, setSelectedValue] = useState('Все');
  const handleSelect = (value) => {
    setSelectedValue(value);
    setShow(false);
  }

  return (
    <div className="flex items-center gap-[25px]">
      <h1 className="text-[40px] font-montserrat text-[#282828]">Врачи</h1>
      <div
        className={
          show
            ? "relative py-[10px] mt-[5px] bg-white px-[15px] rounded-[24px] font-montserrat border border-[#42B2FC]"
            : "relative py-[10px] mt-[5px] bg-white px-[15px] rounded-[24px] font-montserrat border"
        }
      >
        <div className="cursor-pointer">
          <div onClick={handleClick} className="flex items-center gap-3">
            {selectedValue} {show ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          <div
            className={
              show ? "absolute bg-white z-10 left-0 right-0 w-[200%] text-[12px] shadow-md flex flex-col overflow-scroll rounded-[8px] top-[45px] h-[246px]" : "hidden"
            }
          >
            <div className="hover:bg-slate-200 py-2 px-4" onClick={() => handleSelect('Все')}>Все</div>
            <div className="hover:bg-slate-200 py-2 px-4" onClick={() => handleSelect('Инфекционист')}>Инфекционист</div>
            <div className="hover:bg-slate-200 py-2 px-4" onClick={() => handleSelect('Офтальмолог')}>Офтальмолог</div>
            <div className="hover:bg-slate-200 py-2 px-4" onClick={() => handleSelect('Педиатр')}>Педиатр</div>
            <div className="hover:bg-slate-200 py-2 px-4" onClick={() => handleSelect('Онколог')}>Онколог</div>
            <div className="hover:bg-slate-200 py-2 px-4" onClick={() => handleSelect('Гинеколог')}>Гинеколог</div>
            <div className="hover:bg-slate-200 py-2 px-4" onClick={() => handleSelect('Стоматолог')}>Стоматолог</div>
            <div className="hover:bg-slate-200 py-2 px-4" onClick={() => handleSelect('Хирург')}>Хирург</div>
            <div className="hover:bg-slate-200 py-2 px-4" onClick={() => handleSelect('Эндоскопист')}>Эндоскопист</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
