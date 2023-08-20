import React, { useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import './SignUp.css';

import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineLock,
} from 'react-icons/ai';

import {
  IoEyeSharp,
  IoEyeOffOutline
} from 'react-icons/io5';

const initialValues = {
  name: "",
  email: "",
  phone: "",
  password: ""
}

const validationSchema = Yup.object({
  name: Yup.string()
    .required('هذا الحقل مطلوب!')
    .test('wordCount', 'يجب أن يتكون الاسم على الأقل من 3 كلمات', value => {
      if (value) {
        const words = value.split(' ').filter(word => word !== '');
        return words.length >= 3;
      }
      return false;
    }),

  email: Yup.string()
    .email('البريد الالكتروني المدخل غير صالح!')
    .required('هذا الحقل مطلوب!'),

  phone: Yup.string()
    .matches(/^059[98752]{1}[0-9]{6}$/g,
      "رقم الهاتف غير صحيح")
    .required('هذا الحقل مطلوب!'),

  password: Yup.string()
    .min(6, 'يجب أن تتكون كلمة المرور من 6 خانات على الأقل!')
    .required('هذا الحقل مطلوب!')
})

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch('https://student.valuxapps.com/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
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
  })

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  console.log("Formik Visited: ", formik.touched);

  return (
    <form method="POST" className="space-y-2 text-right" onSubmit={formik.handleSubmit}>
      <div className="relative">
        <label htmlFor="name" className="text-sm mr-2">
          الاسم
        </label>

        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="أدخل اسمك"
            className="py-2 px-12 border border-gray-300 rounded-full text-gray-800 focus:outline-none focus:ring focus:border-blue-300 w-full text-right"
            {...formik.getFieldProps('name')}
          />

          <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <AiOutlineUser className="w-5 h-5" />
          </span>
        </div>
        {formik.touched.name && formik.errors.name ?
          <div className="error">{formik.errors.name}</div>
          : null}

      </div>

      <div className="relative">
        <label htmlFor="email" className="text-sm block mb-1">
          البريد الإلكتروني
        </label>

        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="أدخل البريد الإلكتروني"
            className="py-2 px-10 h-10 border border-gray-300 rounded-full text-gray-800 focus:outline-none focus:ring focus:border-blue-300 w-full text-right"
            {...formik.getFieldProps('email')}
          />

          <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <AiOutlineMail className="w-5 h-5" />
          </span>
        </div>
      </div>

      {formik.touched.email && formik.errors.email ? (
        <div className="error mt-2">
          {formik.errors.email}
        </div>
      ) : null}

      <div className="relative w-full">
        <label htmlFor="phone" className="text-sm mr-2">
          رقم الهاتف
        </label>

        <div className="relative">
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="أدخل رقم هاتفك"
            className="py-2 px-12 border border-gray-300 rounded-full text-gray-800 focus:outline-none focus:ring focus:border-blue-300 w-full text-right"
            {...formik.getFieldProps('phone')}
          />

          <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <AiOutlinePhone className="w-5 h-5" />
          </span>
        </div>

        {formik.touched.phone && formik.errors.phone ?
          <div className="error">{formik.errors.phone}</div>
          : null}
      </div>

      <div className="relative">
        <label htmlFor="password" className="text-sm mr-2">
          كلمة المرور
        </label>

        <div className="relative">
          <span
            className="absolute inset-y-0 left-0 flex items-center ml-3 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <IoEyeOffOutline className="w-5 h-5" />
            ) : (
              <IoEyeSharp className="w-5 h-5" />
            )}
          </span>

          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="أدخل كلمة المرور"
            className="py-2 px-12 border border-gray-300 rounded-full text-gray-800 focus:outline-none focus:ring focus:border-blue-300 w-full text-right"
            {...formik.getFieldProps('password')}
          />

          <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <AiOutlineLock className="w-5 h-5" />
          </span>
        </div>

        {formik.touched.password && formik.errors.password ? (
          <div className="error mt-2">{formik.errors.password}</div>
        ) : null}
      </div>

      <button
        type="submit"
        className="text-white px-4 py-2 rounded-full w-full mt-4"
        onClick={formik.handleSubmit}
      >
        إنشاء حساب
      </button>
    </form>
  );
}

export default SignUp