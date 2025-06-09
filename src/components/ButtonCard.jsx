import React from "react";

const ButtonCard = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-[130px] h-[33px] bg-[rgb(255,108,108)] hover:bg-[rgb(235,88,88)] text-white text-[18px] rounded-[16px] cursor-pointer p-[2px] flex items-center justify-center gap-[11px] border-none outline-none transition duration-200"
    >
      {name}
    </button>
  );
};

export default ButtonCard;
