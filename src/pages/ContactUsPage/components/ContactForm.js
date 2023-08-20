import React from "react";

import { useFormik } from "formik"
import * as Yup from "yup"

import image from "../../../assest/image.png";
import iconSmall from "../../../assest/iconSmall.jpg";

import './ContactForm.css'

const initialValues = {
    name: "",
    phone: "",
    message: "",
}

const validationSchema = Yup.object({
    service: Yup.string()
    .required('هذا الحقل مطلوب!'),

    name: Yup.string()
    .required('هذا الحقل مطلوب!')
    .test('wordCount', 'يجب أن يتكون الاسم على الأقل من 3 كلمات', value => {
      if (value) {
        const words = value.split(' ').filter(word => word !== '');
        return words.length >= 3;
      }
      return false;
    }),

    phone: Yup.string()
    .matches(/^059[98752]{1}[0-9]{6}$/g,
      "رقم الهاتف غير صحيح")
    .required('هذا الحقل مطلوب!'),

    message: Yup.string()
    .required('هذا الحقل مطلوب!')
    .test('wordCount', 'يجب أن تتكون الرسالة على الأقل من 10 كلمات', value => {
      if (value) {
        const words = value.split(' ').filter(word => word !== '');
        return words.length >= 10;
      }
      return false;
    }),
});

export const ContactForm = () => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            try {
              const response = await fetch('https://student.valuxapps.com/api/contacts', {
                method: 'POST',
                body: JSON.stringify(values),
              });
      
              if (response.ok) {
                console.log('Data sent successfully');
              } else {
                console.error('Failed to send data');
              }
            } catch (error) {
              console.error('Error:', error);
            }
          },
    });

    console.log("Formik Visited: ", formik.touched);

    return (
        <div
            className="grid grid-cols-12 xl:gap-20 md:gap-10 mt-6 justify-between" >
            <div
                className="col-span-12 xl:col-span-6 lg:col-span-6 flex flex-col text-right mb-2 xl:order-first lg:order-first md:order-last sm:order-last xs:order-last">
                <div
                    className="flex flex-row mt-3">
                    <h3
                        className="h-16 xl:text-4xl sm:text-2xl xs:text-2xl text-black font-medium leading-normal"
                    >تواصل معنا
                    </h3>
                    <img
                        src={iconSmall}
                        alt="not found"
                        className="h-8 mr-2 mt-1"
                    />
                </div>
                <form
                    onSubmit={formik.handleSubmit}
                    method="POST"
                    className="xl:text-2xl lg:text-2xl md:text-xl sm:text-xl xs:text-xl xl:mt-5 sm:mt-5 xs:mt-2 col-span-4 text-content font-light"
                >
                    <form className="space-y-4" onSubmit={formik.handleSubmit}>
                        <div className="relative">
                            <label htmlFor="service" className="text-lg mr-2">
                                الخدمة
                            </label>

                            <select name="service" id="service"
                                className="py-2 border rounded-md text-gray-800 focus:outline-none focus:ring focus:border-blue-300 w-full"
                                {...formik.getFieldProps('service')}
                            >
                                <option value="">اختار الخدمة</option>
                                <option value="1">الخدمة 1</option>
                                <option value="2">الخدمة 2</option>
                                <option value="3">الخدمة 3</option>
                                <option value="4">الخدمة 4</option>
                            </select>
                            {formik.touched.service && formik.errors.service ? <div className="error">{formik.errors.service}</div> : null}
                        </div>

                        <div className="grid grid-cols-2 w-full gap-6">
                            <div className="flex flex-col items-start col-span-1">
                                <label htmlFor="name" className="text-lg mb-1">
                                    الاسم
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="الاسم"
                                    className="py-2 px-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
                                    {...formik.getFieldProps('name')}
                                />
                                {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
                            </div>

                            <div className="flex flex-col items-start col-span-1">
                                <label htmlFor="phone" className="text-lg mb-1">
                                    رقم الجوال
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    placeholder="رقم الجوال"
                                    className="py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
                                    {...formik.getFieldProps('phone')}
                                />
                                {formik.touched.phone && formik.errors.phone ? <div className="error">{formik.errors.phone}</div> : null}

                            </div>
                        </div>

                        <div className="relative">
                            <label htmlFor="message" className="text-lg mr-2">
                                الرسالة
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                placeholder="أكتب رسالتك هنا"
                                className="py-2 pr-5 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring focus:border-blue-300 w-full h-40 resize-none"
                                {...formik.getFieldProps('message')}
                            >
                            </textarea>
                            {formik.touched.message && formik.errors.message ? <div className="error">{formik.errors.message}</div> : null}

                        </div>
                    </form>
                </form>
                <button
                    type="submit"
                    className="w-32 h-10 xl:mt-10 lg:mt-14 sm:mt-9 xs:mt-6 cursor-pointer text-white rounded-3xl btn-contact"
                    onClick={formik.handleSubmit}
                >أرسل
                </button>
            </div>
            <img
                src={image}
                alt="Content"
                className="col-span-12 lg:col-span-6 xl:col-span-6 cursor-pointer lg:h-full xl:h-full mb-6 lg:mb-0 rounded-2xl w-full" />
        </div>
    );
};
