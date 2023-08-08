import React from 'react';

import { useFormik } from "formik"
import * as Yup from "yup"

import './Register.css';

import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';

const initialValues = {
  email: "",
  password: ""
}

const onSubmit = values => {
  console.log("Form Data: ", values)
}

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string().required('Required')
})

const Register = () => {

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log("Formik Visited: ", formik.touched);

  return (
    <form className="space-y-4" onSubmit={formik.handleSubmit}>
      <div className="relative">
        <label htmlFor="email" className="text-sm mr-2">
          البريد الإلكتروني
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="أدخل البريد الإلكتروني"
          className="py-2 px-4 pr-10 border border-gray-300 rounded-full text-gray-800 focus:outline-none focus:ring focus:border-blue-300 w-full"
          {... formik.getFieldProps('email')}
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <AiOutlineMail className="w-5 h-5 mt-5" />
        </span>
        {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
      </div>

      <div className="relative">
        <label htmlFor="password" className="text-sm mr-2">
          كلمة المرور
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="أدخل كلمة المرور"
          className="py-2 px-4 pr-10 border border-gray-300 rounded-full text-gray-800 focus:outline-none focus:ring focus:border-blue-300 w-full"
          {... formik.getFieldProps('password')}
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <AiOutlineLock className="w-5 h-5 mt-5" />
        </span>
        {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
      </div>

      <button
        type="submit"
        className="text-white px-4 py-2 rounded-full w-full mt-4"
      >
        دخول         
      </button>
    </form>
  )
}

export default Register