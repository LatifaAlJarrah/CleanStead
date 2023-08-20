import React from "react";

import image from "../../../assest/image.png";
import iconSmall from "../../../assest/iconSmall.jpg";
import room from "../../../assest/room.png";

import './CleaningService.css';

import { Link } from 'react-router-dom';

export const CleaningService = () => {

  return (
      <div
        className="grid grid-cols-12 xl:gap-20 md:gap-10 mt-6 justify-between" >
        <div
          className="col-span-12 xl:col-span-6 lg:col-span-6 flex flex-col text-right mb-2 xl:order-first lg:order-first md:order-last sm:order-last xs:order-last">
          <div
            className="flex flex-row mt-3">
            <h3
              className="h-16 xl:text-4xl sm:text-2xl xs:text-2xl text-black font-medium leading-normal"
            >تنظيف المنازل
            </h3>
            <img
              src={iconSmall}
              alt="not found"
              className="h-8 mr-2"
            />
          </div>
          <p
            className="xl:text-2xl lg:text-2xl md:text-xl sm:text-xl xs:text-xl xl:mt-10 sm:mt-5 xs:mt-2 col-span-4 text-content font-light"
          >
            هذا النص هو مثال لنص يمكن أن يستبدل في<br /> نفس المساحة، لقد تم توليد هذا النص من مولد <br />النص العربى، حيث يمكنك أن تولد مثل هذا النص أو<br /> العديد من النصوص الأخرى إضافة إلى زيادة عدد <br />الحروف التى يولدها التطبيق.  <br />
            إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك <br />مولد النص العربى زيادة عدد الفقرات كما تريد، <br />النص لن يبدو مقسما ولا يحوي أخطاء لغوية
          </p>
        <Link to="/booking" className="w-32 h-10 xl:mt-28 lg:mt-14 sm:mt-9 xs:mt-6 cursor-pointer text-white rounded-3xl btn-contact flex items-center justify-center no-underline">
          احجز الآن
        </Link>
        </div>
        <img
          src={image}
          alt="Content"
          className="col-span-12 lg:col-span-6 xl:col-span-6 cursor-pointer lg:h-full xl:h-full mb-6 lg:mb-0 rounded-2xl w-full" 
        />
        <div className="grid grid-cols-12 xl:gap-20">
          <p
            className="col-span-12 w-96 h-9 font-medium text-3xl text-right"
          >الخدمات المتوفرة في تنظيف المنازل
          </p>

          <div className="grid grid-cols-12 gap-24 justify-between">
            <div className="col-span-3 flex w-72 h-20 rounded-xl room p-1">
              <img 
                src= {room}
                alt="not found"
                className="rounded-xl"
              />
              <p
                className="font-light text-lg mr-4 my-auto"
              >غرفة النوم
              </p>
            </div>
            <div className="col-span-3 flex w-72 h-20 rounded-xl room p-1">
              <img 
                src= {room}
                alt="not found"
                className="rounded-xl"
              />
              <p
                className="font-light text-lg mr-4 my-auto"
              >غرفة النوم
              </p>
            </div>
            <div className="col-span-3 flex w-72 h-20 rounded-xl room p-1">
              <img 
                src= {room}
                alt="not found"
                className="rounded-xl"
              />
              <p
                className="font-light text-lg mr-4 my-auto"
              >غرفة النوم
              </p>
            </div>
            <div className="col-span-3 flex w-72 h-20 rounded-xl room p-1">
              <img 
                src= {room}
                alt="not found"
                className="rounded-xl"
              />
              <p
                className="font-light text-lg mr-4 my-auto"
              >غرفة النوم
              </p>
            </div>
            <div className="col-span-3 flex w-72 h-20 rounded-xl room p-1">
              <img 
                src= {room}
                alt="not found"
                className="rounded-xl"
              />
              <p
                className="font-light text-lg mr-4 my-auto"
              >غرفة النوم
              </p>
            </div>
            <div className="col-span-3 flex w-72 h-20 rounded-xl room p-1">
              <img 
                src= {room}
                alt="not found"
                className="rounded-xl"
              />
              <p
                className="font-light text-lg mr-4 my-auto"
              >غرفة النوم
              </p>
            </div>
            <div className="col-span-3 flex w-72 h-20 rounded-xl room p-1">
              <img 
                src= {room}
                alt="not found"
                className="rounded-xl"
              />
              <p
                className="font-light text-lg mr-4 my-auto"
              >غرفة النوم
              </p>
            </div>
            <div className="col-span-3 flex w-72 h-20 rounded-xl room p-1">
              <img 
                src= {room}
                alt="not found"
                className="rounded-xl"
              />
              <p
                className="font-light text-lg mr-4 my-auto"
              >غرفة النوم
              </p>
            </div>
          </div>

        </div>

      </div>
    );
}

export default CleaningService