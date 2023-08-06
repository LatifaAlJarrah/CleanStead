import React from "react";

import image from "../assest/image.png";
import iconSmall from "../assest/iconSmall.jpg";

import '../css/styles.css';

export const Overview = () => {

  return (
    <div
      className="grid grid-cols-12 xl:gap-20 md:gap-10 mt-6 justify-between" >
      <div
        className="col-span-12 xl:col-span-6 lg:col-span-6 flex flex-col text-right mb-2 xl:order-first lg:order-first md:order-last sm:order-last xs:order-last">
        <div
          className="flex flex-row mt-3">
          <h3
            className="h-16 xl:text-4xl sm:text-2xl xs:text-2xl text-black font-medium leading-normal"
          >من نحن
          </h3>
          <img
            src={iconSmall}
            alt="not found"
            className="h-8 mr-2 mt-3"
          />
        </div>
        <p
          className="xl:text-2xl lg:text-2xl md:text-xl sm:text-xl xs:text-xl xl:mt-10 sm:mt-5 xs:mt-2 col-span-4 text-content font-light"
        >
          هذا النص هو مثال لنص يمكن أن يستبدل في
          نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى،
          حيث يمكنك أن تولد مثل هذا النص أو العديد من
          النصوص الأخرى .<br />إضافة إلى زيادة عدد الحروف التى يولدها التطبيق  إذا كنت
          تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
          الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية
        </p>
        <button
          className="w-32 h-10 xl:mt-28 lg:mt-14 sm:mt-9 xs:mt-6 cursor-pointer text-white rounded-3xl btn-contact"
        >تواصل معنا
        </button>
      </div>
      <img
        src={image}
        alt="Content"
        className="col-span-12 lg:col-span-6 xl:col-span-6 cursor-pointer lg:h-full xl:h-full mb-6 lg:mb-0 rounded-2xl w-full" />
    </div>
  );
};
