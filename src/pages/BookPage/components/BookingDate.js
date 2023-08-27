import React, { useContext } from "react";
import { GlobalStateContext } from "./GlobalStateProvider";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const BookingDate = () => {
    const { state, dispatch } = useContext(GlobalStateContext);
    const selectedDate = state.selectedDate;

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
                    {selectedDate === null && (
                        <ErrorMessage
                            name="selectedDate"
                            component="div"
                            className="error-message"
                        />
                    )}
                </div>
            </Form>
        </Formik>
    );
};