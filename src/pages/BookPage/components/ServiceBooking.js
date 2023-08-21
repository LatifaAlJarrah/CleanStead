import React, { useState, useContext } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { ServicesClassification } from "./ServicesClassification";
import { CleaningOptionsProvider } from "./CleaningOptionsContext";

import { GlobalStateContext, GlobalStateProvider } from "./GlobalStateProvider";

import iconSmall from "../../../assest/iconSmall.jpg";

import "./ServiceBooking.css";

export const ServiceBooking = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleContinue = () => {
    if (currentStep === 1) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 2) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 3) {
    }
  };

  const handleCountinueBooking = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousBooking = () => {
    setCurrentStep(currentStep - 1);
  };

  const BookingDate = () => {
    const { state, dispatch } = useContext(GlobalStateContext);
    const selectedDate = state.selectedDate;

    console.log(state);

    const handleOptionChange = (event) => {
      dispatch({ type: "SET_SELECTED_OPTION", payload: event.target.value });
    };

    const handleDateChange = (event) => {
      dispatch({ type: "SET_SELECTED_DATE", payload: event.target.value });
    };

    const selectedOption = state.selectedOption;

    const validationSchema = Yup.object({
      serviceRepetition: Yup.string().required(
        "Please select a repetition option"
      ),
      selectedDate: Yup.date().required("Please select a date and time"),
    });

    return (
      <Formik
        initialValues={{
          serviceRepetition: "",
          selectedDate: "",
        }}
        validationSchema={validationSchema}
      >
        <Form className="booking-list p-4">
          <div className="font-medium xl:text-xl sm:text-base h-8">
            اختر موعد الحجز
          </div>

          <div className=" py-2">
            <p className="font-normal text-xl h-8 mt-4">تكرار الخدمة</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-3">
              <label className="booking-date p-3 rounded-xl color-booking-date flex items-center">
                <Field
                  type="radio"
                  value="option1"
                  name="serviceRepetition"
                  checked={selectedOption === "option1"}
                  onChange={handleOptionChange}
                  className="w-6 h-6 form-input ml-2"
                />
                مرة واحدة
              </label>
              <label className="booking-date p-3 rounded-xl color-booking-date flex items-center">
                <Field
                  type="radio"
                  value="option2"
                  name="serviceRepetition"
                  checked={selectedOption === "option2"}
                  onChange={handleOptionChange}
                  className="w-6 h-6 form-input ml-2"
                />
                يوميا
              </label>
              <label className="booking-date p-3 rounded-xl color-booking-date flex items-center">
                <Field
                  type="radio"
                  value="option3"
                  name="serviceRepetition"
                  checked={selectedOption === "option3"}
                  onChange={handleOptionChange}
                  className="w-6 h-6 form-input ml-2"
                />
                اسبوعيا
              </label>
              <label className="booking-date p-3 rounded-xl color-booking-date flex items-center">
                <Field
                  type="radio"
                  value="option4"
                  name="serviceRepetition"
                  checked={selectedOption === "option4"}
                  onChange={handleOptionChange}
                  className="w-6 h-6 form-input ml-2"
                />
                شهريا
              </label>
            </div>

            {selectedOption === null && (
              <ErrorMessage
                name="serviceRepetition"
                component="div"
                className="error-message"
              />
            )}
          </div>

          <div>
            <p className="font-normal xl:text-xl sm:text-base h-8 mt-10">
              التاريخ و الوقت
            </p>
            <div className="flex">
              <label className="booking-date p-3 rounded-xl color-booking-date flex w-72 h-12 items-center justify-between">
                {selectedDate
                  ? new Date(selectedDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                    })
                  : "التاريخ و الوقت"}
                <Field
                  type="datetime-local"
                  name="selectedDate"
                  id="selectedDate"
                  value={selectedDate || ""}
                  onChange={handleDateChange}
                  className="w-6 h-6 form-input border-none outline-none text-transparent"
                />
              </label>
            </div>

            <ErrorMessage
              name="selectedDate"
              component="div"
              className="error-message"
            />
          </div>
        </Form>
      </Formik>
    );
  };

  const UserInformation = () => {
    const { state, dispatch } = useContext(GlobalStateContext);

    console.log(state);

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      dispatch({
        type: "SET_USER_INFORMATION",
        payload: {
          ...state.userInformation,
          [name]: value,
        },
      });
    };
    const userInformation = state.userInformation;

    const validationSchema = Yup.object({
      name: Yup.string().required("هذا الحقل مطلوب!"),
      phone: Yup.string().required("هذا الحقل مطلوب!"),
      address: Yup.string().required("هذا الحقل مطلوب!"),
      detailedAddress: Yup.string().required("هذا الحقل مطلوب!"),
    });

    return (
      <Formik
        initialValues={{
          name: "",
          phone: "",
          address: "",
          detailedAddress: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          localStorage.setItem("userName", values.name);
          localStorage.setItem("userPhone", values.phone);
          localStorage.setItem("userAddress", values.address);
          localStorage.setItem("userDetailedAddress", values.detailedAddress);
        }}
      >
        <div className="booking-list p-4">
          <div className="flex">
            <div className="font-medium xl:text-xl sm:text-base h-8">
              أدخل معلوماتك
            </div>
            <div className="font-normal xl:text-xl sm:text-base sign-up-text mr-6 cursor-pointer">
              تسجيل الدخول
            </div>
          </div>

          <Form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-normal xl:text-xl sm:text-base h-8 mt-4 pr-3">
                  الاسم
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  value={userInformation.name}
                  onChange={handleInputChange}
                  className="w-full h-14 booking-date p-3 rounded-xl color-booking-date form-input user-info"
                  placeholder="الاسم"
                />

                <ErrorMessage
                  name="name"
                  component="div"
                  className="error-message"
                />
              </div>

              <div>
                <label className="font-normal xl:text-xl sm:text-base h-8 mt-4 pr-3">
                  رقم الجوال
                </label>
                <Field
                  type="text"
                  name="phone"
                  id="phone"
                  value={userInformation.id}
                  onChange={handleInputChange}
                  className="w-full h-14 booking-date p-3 rounded-xl color-booking-date form-input user-info"
                  placeholder="رقم الجوال"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="error-message"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-normal xl:text-xl sm:text-base h-8 mt-4 pr-3">
                  العنوان
                </label>
                <Field
                  type="text"
                  name="address"
                  id="address"
                  value={userInformation.address}
                  onChange={handleInputChange}
                  className="w-full h-14 booking-date p-3 rounded-xl color-booking-date form-input user-info"
                  placeholder="العنوان"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="error-message"
                />
              </div>

              <div>
                <label className="font-normal xl:text-xl sm:text-base h-8 mt-4 pr-3">
                  العنوان التفصيلي
                </label>
                <Field
                  type="text"
                  name="detailedAddress"
                  id="detailedAddress"
                  value={userInformation.detailedAddress}
                  onChange={handleInputChange}
                  className="w-full h-14 booking-date p-3 rounded-xl color-booking-date form-input user-info"
                  placeholder="العنوان التفصيلي"
                />
                <ErrorMessage
                  name="detailedAddress"
                  component="div"
                  className="error-message"
                />
              </div>
            </div>
          </Form>
        </div>
      </Formik>
    );
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

            {currentStep === 1 && (
              <ServicesClassification onContinue={handleContinue} />
            )}
            {currentStep === 2 && <BookingDate onContinue={handleContinue} />}
            {currentStep === 3 && (
              <UserInformation onContinue={handleContinue} />
            )}

            <div className="flex booking-list p-4 rounded-b-3xl justify-between">
              {currentStep > 1 && currentStep < 4 && (
                <button
                  className="text-center px-4 py-2 lg:font-medium rounded-3xl lg:w-32 lg:h-12 ml-2 btn-back"
                  onClick={handlePreviousBooking}
                >
                  الرجوع
                </button>
              )}

              <div className="relative">
                
              </div>
              {currentStep < 3 && (
                <button
                  className="btn-booking text-center px-4 py-2 lg:font-medium rounded-3xl lg:w-32 lg:h-12"
                  onClick={handleCountinueBooking}
                  // disabled={!isValid || !dirty}
                >
                  استمرار
                </button>
              )}

              {currentStep === 3 && (
                <button className="btn-booking text-center px-4 py-2 lg:font-medium rounded-3xl lg:w-32 lg:h-12">
                  ارسال
                </button>
              )}
            </div>
            
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
                <p className="text-xl">55 $</p>
              </div>
            </div>
          </div>
        </div>
      </GlobalStateProvider>
    </CleaningOptionsProvider>
  );
};
