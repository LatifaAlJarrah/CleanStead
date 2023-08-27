import React, { useContext } from "react";
import { GlobalStateContext } from "./GlobalStateProvider";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const UserInformation = () => {
    const { state, dispatch } = useContext(GlobalStateContext);

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
