import React from 'react';

import { useFormik } from "formik"
import * as Yup from "yup"

import './SignUp.css';

import { AiOutlineUser, AiOutlineMail, AiOutlinePhone, AiOutlineLock } from 'react-icons/ai';

const initialValues = {
  name: "",
  email: "",
  phone: "",
  password: ""
}
    
const onSubmit = values => {
  console.log("Form Data: ", values)
}

const validationSchema = Yup.object({
  name: Yup.string().required('Required!'),
  email: Yup.string().email('Invalid email format').required('Required'),
  phone: Yup.string().required('Required'),
  password: Yup.string().required('Required')
})

const SignUp = () => {

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })

  console.log("Formik Visited: ", formik.touched);

  return (
    <form className="space-y-4" onSubmit={formik.handleSubmit}>
      <div className="relative">
        <label htmlFor="name" className="text-sm mr-2">
          الاسم
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="أدخل اسمك"
          className="py-2 px-4 pr-10 border rounded-full text-gray-800 focus:outline-none focus:ring focus:border-blue-300 w-full"
          {... formik.getFieldProps('name')} 
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <AiOutlineUser className="w-5 h-5 mt-5" />
        </span>
        {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}

      </div>

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
        <label htmlFor="phone" className="text-sm mr-2">
          رقم الهاتف
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="أدخل رقم هاتفك"
          className="py-2 px-4 pr-10 border border-gray-300 rounded-full text-gray-800 focus:outline-none focus:ring focus:border-blue-300 w-full"
          {... formik.getFieldProps('phone')}
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <AiOutlinePhone className="w-5 h-5 mt-5" />
        </span>
        {formik.touched.phone && formik.errors.phone ? <div className="error">{formik.errors.phone}</div> : null}

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
        إنشاء حساب          
      </button>
    </form>
  );
};

export default SignUp;


// import './SignUp.css';

// 
  
// function SignUp() {

//     const formik = useFormik({
//         initialValues,
//         onSubmit,
//         validationSchema
//       })
    
//       console.log("Formik Visited: ", formik.touched);

//   return (
//     <form className="form-container" onSubmit={formik.handleSubmit}>
//        <div className="flex justify-center min-h-screen">
//         <div className="relative">
//           <label htmlFor="name">الاسم:</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="ادخل الاسم" 
//               className="py-2 px-6 pr-10 border border-gray-300 rounded-full text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
//               {... formik.getFieldProps('name')}     
//             />
//               <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//                 <a href='/' className="w-5 h-5">{<FaUser />}</a>
//               </span>
//             {/* <input type="text"  />
//             <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//                 <img src="icon-for-name.png" alt="Icon for Name" className="w-5 h-5" />
//             </span> */}
//         </div>
//     </div>
//     <div>
//       <img />
//       <p>من فضلك قم بتسجيل الدخول للاستمرار</p>
//     </div>
//         <div>
//             <label htmlFor="name">الاسم:</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               {... formik.getFieldProps('name')}     
//             />
            
//             {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
//         </div>

//         <div>
//             <label htmlFor="email">البريد الإلكتروني:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               {... formik.getFieldProps('email')}
//             />
//             {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}

//             <img src={<FaEnvelope />} alt="Icon for Email" />
//         </div>

//         <div>
//             <label htmlFor="phone">رقم الهاتف:</label>
//             <input
//               type="text"
//               id="phone"
//               name="phone"
//               {... formik.getFieldProps('phone')}
//             />
//             {formik.touched.phone && formik.errors.phone ? <div className="error">{formik.errors.phone}</div> : null}
//             <img src={FaPhone} alt="Icon for Phone" />
//         </div>

//         <div>
//             <label htmlFor="password">كلمة المرور:</label>

//             <input
//               type="password"
//               id="password"
//               name="password"
//               {... formik.getFieldProps('password')}
//             />
//             {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}

//             <img src="icon-for-password.png" alt="Icon for Password" />
//         </div>

//         <button type="submit">تسجيل الدخول</button>
//     </form>
//   )
// }

// export default SignUp;