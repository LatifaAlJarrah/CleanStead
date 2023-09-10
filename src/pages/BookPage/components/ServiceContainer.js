import React from "react";
import { Buttons } from "./Buttons";
import { useFormik } from "formik";

export const ServiceContainer = ({
  currentStep,
  handlePreviousBooking,
  handleCountinueBooking,
  isBookingDateFormValid,
  isClassificationOptionValid,
  isUserInfoFormValid,
  total,
  children,
  formik,
}) => {
  const SubmitFunctions = {
    1: handleCountinueBooking,
    2: handlePreviousBooking,
    3: () => {},
  };

  const onSubmit = () => {
    formik.handleSubmit();
    // SubmitFunctions[currentStep]();
  };

  // add all validation schema

  // const validationSchema1 = {}
  // const validationSchema2 = {};
  // const validationSchema3 = {};
  // const activeValidationSchema = {
  //   1: validationSchema1,
  //   2: validationSchema2,
  //   3: validationSchema3,
  // };
  // const formik = useFormik({
  //   initialValues: {
  //   },
  //   validationSchema: activeValidationSchema[currentStep],
  //   onSubmit: () => {
  //     SubmitFunctions[currentStep]();
  //   },
  // });

  return (
    <>
      <div className="col-span-8 bg-container">
        <div className="booking-list p-4 pb-0 rounded-t-3xl mb-1">
          <div className="flex justify-between">
            <div className="flex flex-row">
              <span className="num-step-one w-8 h-8 rounded-full text-white text-lg font-light ml-2 flex justify-center items-center">
                1{/* ✔ */}
              </span>
              <p>اختر الخدمات</p>
            </div>

            <hr className="xl:w-28 sm:w-16 h-4 line-color" />

            <div className="flex flex-row">
              <span className="num-step-two num-step-two:focus-visible w-8 h-8 rounded-3xl p-2 text-lg font-light ml-2 flex justify-center items-center">
                2
              </span>
              <p className="text-step-two cursor-pointer">التاريخ والوقت</p>
            </div>

            <hr className=" xl:w-28 sm:w-16 h-4 line-color" />

            <div className="flex flex-row cursor-pointer">
              <span className="num-step-three w-8 h-8 rounded-3xl p-2 text-lg font-light ml-2 flex justify-center items-center">
                3
              </span>
              <p className="text-step-three">معلوماتك</p>
            </div>
          </div>
        </div>
        {children}
        <Buttons
          currentStep={currentStep}
          onClick={onSubmit}
          disabled={
            !!formik.isValid &&
            currentStep === 3 &&
            isClassificationOptionValid &&
            isBookingDateFormValid &&
            isUserInfoFormValid
          }
        />
      </div>
      <div className="col-span-4 h-96">
        <div className="summery rounded-t-3xl">
          <div className=" font-medium text-2xl p-3">ملخص</div>
        </div>

        <div className="summery rounded-b-3xl mt-1 p-4">
          <div>
            <p className="text-lg text-color">الخدمة</p>
            <p className="text-xl">تنظيف المنازل</p>
          </div>

          <div>
            <p className="text-lg text-color">العناصر المختارة</p>
            <p className="text-xl">تنظيف المنازل (1)</p>
          </div>

          <div>
            <p className="text-lg text-color">اجمالي السعر</p>
            <p className="text-xl">{total}$</p>
          </div>
        </div>
      </div>
    </>
  );
};
