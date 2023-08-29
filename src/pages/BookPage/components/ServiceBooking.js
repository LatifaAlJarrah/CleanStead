import React, { useState } from "react";
import { CleaningOptionsProvider } from "./CleaningOptionsContext";
import { GlobalStateProvider } from "./GlobalStateProvider";
import { useTotalPriceContext } from "./TotalPriceContext";
import {
  ServiceContainer,
  ServicesClassification,
  BookingDate,
  UserInformation,
} from ".";
import iconSmall from "../../../assest/iconSmall.jpg";

import "./ServiceBooking.css";

export const ServiceBooking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { service1Total, service2Total } = useTotalPriceContext();
  const total = service1Total + service2Total;

  const [isBookingDateFormValid, setIsBookingDateFormValid] = useState(false);
  const [isUserInfoFormValid, setIsUserInfoFormValid] = useState(false);

  const handleContinue = () => {
    setCurrentStep((currentState) => {
      if (currentState === 3) {
        return 3;
      } else {
        return currentState + 1;
      }
    });
  };

  const handleCountinueBooking = () => {
    handleContinue();
  };

  const handlePreviousBooking = () => {
    setCurrentStep((currentState) => {
      if (currentState === 1) {
        return 1;
      } else {
        return currentState - 1;
      }
    });
  };

  const currentStepComponent = {
    1: <ServicesClassification onContinue={handleContinue} />,
    2: (
      <BookingDate
        onContinue={handleContinue}
        setIsBookingDateFormValid={setIsBookingDateFormValid}
      />
    ),
    3: (
      <UserInformation
        onContinue={handleContinue}
        setIsUserInfoFormValid={setIsUserInfoFormValid}
      />
    ),
  };

  return (
    <CleaningOptionsProvider>
      <GlobalStateProvider>
        <div className="grid grid-cols-12 xl:gap-20 md:gap-10 mt-6 justify-between">
          <div className="col-span-12">
            <div className="flex flex-row">
              <h3 className="h-16 xl:text-4xl sm:text-2xl xs:text-2xl text-black font-medium leading-normal">
                إحجز الآن
              </h3>

              <img src={iconSmall} alt="not found" className="h-8 mr-2 mt-2" />
            </div>
          </div>
          <ServiceContainer
            currentStep={currentStep}
            handlePreviousBooking={handlePreviousBooking}
            handleCountinueBooking={handleCountinueBooking}
            isBookingDateFormValid={isBookingDateFormValid}
            isUserInfoFormValid={isUserInfoFormValid}
            total={total}
          >
            {currentStepComponent[currentStep]}
          </ServiceContainer>
        </div>
      </GlobalStateProvider>
    </CleaningOptionsProvider>
  );
};
