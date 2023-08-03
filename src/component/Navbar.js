import React, { useState } from "react";

import { useLocation } from "react-router-dom";

import logo from "../assest/logo.png";
import burgerMenuIcon from "../assest/burgerMenuIcon.png";

import '../css/Navbar.css';

export const Navbar = () => {

  const location = useLocation();
  const isHomePage = location.pathname === "/"; 

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const linkes = [
    { name: "الرئيسية" },
    { name: "الخدمات" },
    { name: "من نحن" },
    { name: "اتصل بنا" }
  ];

  return (
    <nav>
      <div 
        className="flex flex-wrap justify-between items-center">
        <a 
          href="/" 
          className="flex columns-2">

          <img 
            src={logo} 
            alt="Website Logo" />

          <span 
            className="text-xl font-semibold ml-1"
            >كلين
          </span>

          <span 
            className="text-xl font-semibold text-logo"
            >ستيد
          </span>
        </a>

        <div 
          className="flex lg:order-2 columns-2 items-center">
          {
            isHomePage && (
              <a
                href="/"
                class="btn-sign text-center px-4 py-2 text-white lg:font-medium rounded-3xl lg:w-32 lg:h-12 ml-2"
              >دخول
              </a>
            )
          }

          <a
            href="/"
            class="btn text-center px-4 py-2 text-white lg:font-medium rounded-3xl lg:w-32 lg:h-12"
          >احجز الآن
          </a>

          <div className="relative lg:hidden">
            <button
              className="bg-[url] bg-cover bg-center bg-no-repeat px-2 py-2 text-center mr-3"
              onClick={handleMenuToggle}
              style={{ backgroundImage: `url(${burgerMenuIcon})` }}
            >
              <span
                className={`bg-gray-800 h-1 w-6 block ${isOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
              ></span>
              <span
                className={`bg-gray-800 h-1 w-6 block my-1 ${isOpen ? "opacity-0" : ""
                  }`}
              ></span>
              <span
                className={`bg-gray-800 h-1 w-6 block ${isOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
              ></span>
            </button>

            {
              isOpen && (
              <ul 
                className="absolute top-12 left-2 w-48 p-4 shadow-lg rounded-lg bg-white z-10">
                {
                  linkes.map((link, index) => (
                    <li 
                      className="py-2 cursor-pointer" 
                      key={index}>
                      {
                        link.name
                      }
                    </li>
                  ))
                }
              </ul>
            )}
          </div>
        </div>

        <div
          class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 columns-4"
          id="mobile-menu-2"
        >
          <ul class="flex flex-col mt-4 lg:flex-row lg:mt-0 w-96 h-8 justify-between">
            {
              linkes.map((link, index) => (
              <li
                key={index}
                className="block border-b lg:border-0 lg:p-0 item-list"
              >
                <a href="/" className="leading-8 text-center text-base items-list-color item-list"> 
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
