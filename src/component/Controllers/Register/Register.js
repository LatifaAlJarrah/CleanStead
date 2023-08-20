import React, { useState } from 'react';

import { useAuth } from '../../../Context/AuthContext';

import { useFormik } from "formik"
import * as Yup from "yup"

import './Register.css';

import {
  AiOutlineMail,
  AiOutlineLock
} from 'react-icons/ai';

import {
  IoEyeSharp,
  IoEyeOffOutline
} from 'react-icons/io5';

const initialValues = {
  email: "",
  password: ""
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email('البريد الالكتروني المدخل غير صالح!')
    .required('هذا الحقل مطلوب!'),

  password: Yup.string()
    .min(6, 'يجب أن تتكون كلمة المرور من 6 حروف على الأقل!')
    .required('هذا الحقل مطلوب!')
});

const Register = ({ onHide }) => {

  const { login, setIsLoggedIn } = useAuth();

  const onSubmit = async (values) => {
    // debugger
    try {
      const item = {
        email: values.email,
        password: values.password,
      };

      const response = await fetch("https://student.valuxapps.com/api/login", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(item),
      });

      const result = await response.json();

      if (result?.data?.token) {
        onHide()
        localStorage.setItem("authToken", result?.data?.token);
        localStorage.setItem('user-info', JSON.stringify(result));
        login(result.userData, result?.data?.token);
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  console.log("Formik Visited: ", formik.touched);

  return (
    <form method="post" className="space-y-4 text-right" onSubmit={formik.handleSubmit}>

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
        className="text-white px-4 py-2 rounded-full w-full mt-16"
        onClick={formik.handleSubmit}
      >
        دخول
      </button>
    </form>
  )
}

export default Register