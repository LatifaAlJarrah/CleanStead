import React from "react";
import SharedButton from "./SharedButton";

export const Buttons = ({
  currentStep,
  handlePreviousBooking,
  handleCountinueBooking,
  isUserInfoFormValid,
  onClick,
  disabled
}) => {
  const currentButtonComponent = {
    '1': <SharedButton label="الرجوع" type="back" onClick={onClick} />, //handlePreviousBooking
    '2': <SharedButton label="استمرار" type="continue" onClick={onClick} />, //handleCountinueBooking
    '3': <SharedButton label="ارسال" type="send" disabled={disabled} />, //disabled={!isUserInfoFormValid}
    '4': <SharedButton label="الرجوع" type="back" onClick={onClick} />, //onClick={handlePreviousBooking}
  }
  return (
    <div className="flex booking-list p-4 rounded-b-3xl justify-between">
      {currentButtonComponent[currentStep]}
    </div>
  );
};
