import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const PageTitle = (props) => {
  return (
    <div>
      <p className="flex items-center gap-[10px] font-roboto">
        <Link to="javascript:void(0)" className="text-[#A3A3A3]">
          Главная
        </Link>{" "}
        <FaAngleRight color="#A3A3A3" />{" "}
        <Link to={props.url}>{props.name}</Link>
      </p>
    </div>
  );
};

export default PageTitle;
