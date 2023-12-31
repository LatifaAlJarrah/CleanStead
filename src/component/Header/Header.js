import React, { useState } from "react";

import { Link } from "react-router-dom";

import logo from "../../assest/logo.png";
import burgerMenuIcon from "../../assest/burgerMenuIcon.png";

import Modal from "../Controllers/Modal";

import "./Header.css";

import { useAuth } from "../../Context/AuthContext";

export const Header = () => {
  const [isOpenHomePage, setIsOpenHomePage] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);

  const { isLoggedIn, login } = useAuth();

  const handleSignInButtonClick = () => {
    if (!isLoggedIn) {
      setShowSignInModal(!showSignInModal);
    } else {
      login();
    }
  };

  const handleMenuToggle = () => {
    setIsOpenHomePage(!isOpenHomePage);
  };

  const linkes = [
    { name: "الرئيسية", linkPage: "/" },
    { name: "الخدمات", linkPage: "/service" },
    { name: "من نحن", linkPage: "/about" },
    { name: "اتصل بنا", linkPage: "/contact" },
  ];

  return (
    <nav>
      <div className="flex flex-wrap justify-between items-center">
        <a href="/" className="flex columns-2 no-underline">
          <img src={logo} alt="Website Logo" />

          <span className="text-xl font-semibold ml-1 clean-text-color">
            كلين
          </span>

          <span className="text-xl font-semibold text-logo">ستيد</span>
        </a>

        <div className="flex lg:order-2 columns-2 items-center">
          {!isLoggedIn && (
            <button
              className="btn-sign text-center px-4 py-2 lg:font-medium rounded-3xl lg:w-32 lg:h-12 ml-2"
              onClick={handleSignInButtonClick}
            >
              دخول
            </button>
          )}
          
          <Link to="/booking">
            <button className="btn-booking text-center px-4 py-2 lg:font-medium rounded-3xl lg:w-32 lg:h-12">
              احجز الآن
            </button>
          </Link>

          <div className="relative lg:hidden">
            <button
              className="bg-[url] bg-cover bg-center bg-no-repeat px-2 py-2 text-center mr-3"
              onClick={handleMenuToggle}
              style={{ backgroundImage: `url(${burgerMenuIcon})` }}
            >
              <span
                className={`bg-gray-800 h-1 w-6 block ${
                  isOpenHomePage ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`bg-gray-800 h-1 w-6 block my-1 ${
                  isOpenHomePage ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`bg-gray-800 h-1 w-6 block ${
                  isOpenHomePage ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </button>

            {isOpenHomePage && (
              <ul className="list-none absolute top-12 left-2 w-48 p-4 shadow-lg rounded-lg bg-white z-10">
                {linkes.map((link, index) => (
                  <li className="py-2 cursor-pointer no-underline" key={index}>
                    <a href={link.linkPage}>{link.name}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div
          class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 columns-4"
          id="mobile-menu-2"
        >
          <ul class="list-none flex flex-col mt-4 lg:flex-row lg:mt-0 w-96 h-8 justify-between">
            {linkes.map((link, index) => (
              <li
                key={index}
                className="block border-b lg:border-0 lg:p-0 item-list"
              >
                <a
                  href={link.linkPage}
                  className="leading-8 text-center text-base items-list-color item-list no-underline"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Modal show={showSignInModal} onHide={handleSignInButtonClick} />
    </nav>
  );
};
