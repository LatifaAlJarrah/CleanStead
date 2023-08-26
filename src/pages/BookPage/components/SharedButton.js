import React from "react";

const SharedButton = ({ label, onClick, type }) => {
  let buttonClassName = "btn-booking text-center px-4 py-2 lg:font-medium rounded-3xl lg:w-32 lg:h-12";

  if (type === "continue" || type === "send") {
    buttonClassName += " ml-2";
  } else if (type === "back") {
    buttonClassName = "text-center px-4 py-2 lg:font-medium rounded-3xl lg:w-32 lg:h-12 ml-2 btn-back";
  }

  return (
    <button
      className={buttonClassName}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default SharedButton;
