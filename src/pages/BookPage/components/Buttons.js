import React from "react";
import SharedButton from "./SharedButton";

const Buttons = ({
  currentStep,
  handlePreviousBooking,
  handleCountinueBooking,
  isUserInfoFormValid,
}) => {
  return (
    <div className="flex booking-list p-4 rounded-b-3xl justify-between">
      {currentStep > 1 && currentStep < 4 && (
        <SharedButton label="الرجوع" type="back" onClick={handlePreviousBooking} />
      )}

      <div className="relative"></div>

      {currentStep < 3 && (
        <SharedButton label="استمرار" type="continue" onClick={handleCountinueBooking} />
      )}

      {currentStep === 3 && (
        <SharedButton label="ارسال" type="send" disabled={!isUserInfoFormValid} />
      )}
    </div>
  );
};

export default Buttons;
