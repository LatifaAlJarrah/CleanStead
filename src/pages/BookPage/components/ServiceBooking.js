import React from 'react'

import iconSmall from "../../../assest/iconSmall.jpg";

import './ServiceBooking.css'

export const ServiceBooking = () => {
  return (
    <div className='grid grid-cols-12 xl:gap-20 md:gap-10 mt-6 justify-between'>
      <div className='col-span-12'>
        <div
          className="flex flex-row">
          <h3
            className="h-16 xl:text-4xl sm:text-2xl xs:text-2xl text-black font-medium leading-normal"
          >إحجز الآن
          </h3>
          <img
            src={iconSmall}
            alt="not found"
            className="h-8 mr-2 mt-2"
          />
        </div>
      </div>

      <div 
        className='col-span-8 bg-container'
      >
        <div className='booking-list p-4 pb-0 rounded-t-3xl mb-1'>
          <div className='flex justify-between'>
            <div className='flex flex-row'>
              <span
                className='num-step w-8 h-8 rounded-3xl p-2 text-white text-lg font-light ml-2 flex justify-center items-center'
              >
                1
              </span>
              <p>اختر الخدمات</p>
            </div>

            <hr className=' w-28 h-4 line-color' />

            <div className='flex flex-row text-center'>
              <span
                className='num-step w-8 h-8 rounded-3xl p-2 text-white text-lg font-light ml-2 flex justify-center items-center'
              >
                2
              </span>
              <p>التاريخ والوقت</p>
            </div>

            <hr className=' w-28 h-4 line-color' />
            
            <div className='flex flex-row'>
              <span
                className='num-step w-8 h-8 rounded-3xl p-2 text-white text-lg font-light ml-2 flex justify-center items-center'
              >
                3
              </span>
              <p>معلوماتك</p>
            </div>
          </div>
        </div>

        <div className='booking-list p-4 mb-1'>
          <div className=' font-medium text-xl h-8 w-2/3'>
            اختر الخدمات التي تحتاج تنظيفها من أي تصنيف تريده
          </div>
          <div className='service-container p-3 rounded-3xl mt-4 flex justify-between'>
            <p
              className='font-medium text-lg'
            >
              تنظيف المنازل
            </p>

            <select
              className="py-2 text-tahiti"
            >
              <option value="">رؤية الخدمات</option>
              <option value="1">الخدمة 1</option>
              <option value="2">الخدمة 2</option>
              <option value="3">الخدمة 3</option>
              <option value="4">الخدمة 4</option>
            </select>
          </div>

          <div className='service-container p-3 rounded-3xl mt-4 flex justify-between'>
            <p
              className='font-medium text-lg'
            >
              التنظيف التجاري
            </p>

            <select
              className="py-2 text-tahiti"
            >
              <option value="" className='dropdown-menu'>رؤية الخدمات</option>
              <option value="1">الخدمة 1</option>
              <option value="2">الخدمة 2</option>
              <option value="3">الخدمة 3</option>
              <option value="4">الخدمة 4</option>
            </select>
          </div>

          <div className='service-container p-3 rounded-3xl mt-4 flex justify-between'>
            <p
              className='font-medium text-lg'
            >
              تنظيف النوافذ
            </p>

            <select
              className="py-2 text-tahiti"
            >
              <option value="" className='dropdown-menu'>رؤية الخدمات</option>
              <option value="1">الخدمة 1</option>
              <option value="2">الخدمة 2</option>
              <option value="3">الخدمة 3</option>
              <option value="4">الخدمة 4</option>
            </select>
          </div>

          <div className='service-container p-3 rounded-3xl mt-4 flex justify-between'>
            <p
              className='font-medium text-lg'
            >
              تنظيف النوافذ
            </p>

            <select
              className="py-2 text-tahiti"
            >
              <option value="" className='dropdown-menu'>رؤية الخدمات</option>
              <option value="1">الخدمة 1</option>
              <option value="2">الخدمة 2</option>
              <option value="3">الخدمة 3</option>
              <option value="4">الخدمة 4</option>
            </select>
          </div>
        </div>

        <div className='flex booking-list p-4 rounded-b-3xl justify-between'>
          <button
            className='text-center px-4 py-2 lg:font-medium rounded-3xl lg:w-32 lg:h-12 ml-2 btn-back'
          >
            الرجوع
          </button>

          <button
            className='btn-booking text-center px-4 py-2 lg:font-medium rounded-3xl lg:w-32 lg:h-12'
          >
            استمرار
          </button>
        </div>
      </div>

      <div
        className='col-span-4 h-96'
      >
        <div
          className='summery rounded-t-3xl'
        >
          <div
            className=' font-medium text-2xl p-3'
          >
            ملخص
          </div>
        </div>

        <div
          className='summery rounded-b-3xl mt-1 p-4'
        >
          <div>
            <p className='text-lg text-color'>الخدمة</p>
            <p className='text-xl'>تنظيف المنازل</p>
          </div>

          <div>
            <p className='text-lg text-color'>العناصر المختارة</p>
            <p className='text-xl'>تنظيف المنازل (1)</p>
          </div>

          <div>
            <p className='text-lg text-color'>اجمالي السعر</p>
            <p className='text-xl'>55 $</p>
          </div>
        </div>
      </div>
    </div>

  )
}
