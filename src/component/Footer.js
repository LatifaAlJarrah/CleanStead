import React from 'react'

import '../css/Footer.css';

import logo from "../assest/logo.png";

import { FaGoogle, FaInstagram, FaWhatsapp, FaYoutube, FaTwitter, FaFacebook, FaPhone, FaEnvelope } from "react-icons/fa";

export const Footer = () => {

  const listIcons = [
    <FaGoogle />,
    <FaInstagram />,
    <FaWhatsapp />,
    <FaYoutube />,
    <FaTwitter />,
    <FaFacebook />,
  ];

  const linkes = [
    { "name": "تنظيف المنازل" },
    { "name": "التنظيف التجاري" },
    { "name": "تنظيف السجاد" },
    { "name": "تنظيف النوافذ" },
    { "name": "تنظيف السيارات" },
    { "name": "تنظيف بعد البناء" }
  ];

  return (
    <div 
      className="parent mt-7 pt-6 px-6 rounded-tl-lg rounded-tr-lg">
      <div 
        className="grid grid-cols-12 justify-between text-right sm:text-center xs:text-center">

        <div 
          className="col-span-12 lg:col-span-3 md:col-span-6">
          <a 
            href="/" 
            className="flex columns-2 sm:justify-center xs:justify-center">
            <span
              className="text-xl font-semibold ml-1"
            >كلين
            </span>
            <span 
              className="text-xl font-semibold text-logo ml-1"
            >ستيد
            </span>
            <img 
              src={logo} 
              alt="Logo" 
            />
          </a>
          <p 
            className="items-color xl:w-60 lg:w-50 tracking-wide md:tracking-wider lg:text-lg  mt-2 sm:text-base"
          >
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة ، لقد تم توليد هذا النص من مولد النص العربى،
            حيث يمكنك
            أن تولد مثل هذا النص
          </p>
        </div>

        <div 
          className='col-span-12 xl:col-span-2 lg:col-span-3 md:col-span-6 xs:mt-4'>
          <p
          >خدماتنا
          </p>
          <ul 
            className="items-color mt-2 ">
            {
              linkes.map((link, index) => (
                <li 
                  key={index} 
                  className="my-1 list-items">
                  <a 
                    href="/">
                    {link.name}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>

        <div 
          className='col-span-12 xl:col-span-4 lg:col-span-3 lg:mx-auto md:col-span-6 xs:mt-4'>
          <p
          >تواصل معنا
          </p>

          <div 
            className="flex flex-row mt-2 xs:justify-center">
            <i 
              className="ml-2 mt-2">
              <a href='/'>
                <FaPhone />
              </a>
            </i>
            <p 
              className="items-color xs:text-base lg:text-base xl:text-lg">
              0592700722
            </p>
          </div>

          <div 
            className="flex flex-row mt-2 xl:ml-6 sm:justify-center xs:justify-center">
            <i 
              className="ml-2 mt-2">
              <a href='/'>
                <FaEnvelope />
              </a>
            </i>
            <p 
              className="items-color xs:text-base lg:text-base xl:text-lg">
              eng.mohammadalhabil@gmail.com
            </p>
          </div>
        </div>

        <div 
          className='col-span-12 lg:col-span-3 md:col-span-6  xs:mt-4'>
          <p>
            تابعنا على
          </p>
          <ul 
            className="flex flex-row justify-between xl:w-60 lg:w-48 mt-4">
            {
              listIcons.map((iconItem, index) => (
                <li
                  key={index}
                >
                  <a href='/'> {iconItem} </a>
                </li>
              ))
            }
          </ul>
        </div>

      </div>
      <hr 
        className="mt-2 text-white" />
      <div 
        className="text-center mt-2 pb-3">
        جميع الحقوق محفوظة &copy; 2022
      </div>
    </div>
  )
}
