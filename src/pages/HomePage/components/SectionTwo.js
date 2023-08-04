import React from 'react'

import image1 from '../assest/image1.png';
import image2 from '../assest/image2.png';
import image3 from '../assest/image3.png';
import image4 from '../assest/image4.png';
import image5 from '../assest/image5.png';
import image6 from '../assest/image6.png';
import iconSmall from '../assest/iconSmall.jpg';
import imageReverse from '../assest/imageReverse.jpg';

import '../css/MainContent.css';

export const SectionTwo = () => {

    const section = [
        { "name": "تنظيف المنازل" },
        { "name": "التنظيف التجاري" },
        { "name": "تنظيف السجاد" },
        { "name": "تنظيف النوافذ" },
        { "name": "تنظيف السيارات" },
        { "name": "تنظيف بعد البناء" }
    ]

    const images = [
        { imageName: image1 },
        { imageName: image2 },
        { imageName: image3 },
        { imageName: image4 },
        { imageName: image5 },
        { imageName: image6 },
    ]

    return (
        <div
            className="grid grid-cols-1 mt-10">
            <div
                className="col-span-12 justify-center flex">
                <img
                    src={imageReverse}
                    alt='not found'
                    className="w-6 h-9 mt-1 ml-1"
                />
                <p
                    className="h-16 text-4xl font-medium leading-10 mx-1"
                >الخدمات التي نقدمها
                </p>
                <img
                    src={iconSmall}
                    alt='not found'
                    className="w-6 h-9  mt-1 mr-1"
                />
            </div>

            <div
                className="grid grid-cols-12 gap-8 md:gap-4 mt-8 justify-between">
                {
                    section.map((section, index) => (
                        <div
                            className="col-span-6 xl:col-span-4 lg:col-span-4 md:col-span-4 p-3 my-10 rounded-3xl inner-div relative xl:h-72 2 lg:h-72 sm:h-48 xs:h-56"
                            key={index}>

                            <p
                                className="absolute text-2xl font-extrabold xl:left-12 xl:top-8 lg:left-8 lg:top-8 sm:top-6 xs:top-16 md:left-2 sm:left-14 xs:left-14 sm:text-base xs:text-base section-color ">
                                {
                                    section.name
                                }
                            </p>

                            <img
                                src={
                                    images[index].imageName
                                }
                                alt={
                                    `ImageIndex ${index + 1}`
                                }
                                className="xl:w-32 xl:h-32 lg:w-32 lg:h-32 sm:w-28 xs:w-28 sm:h-28 xs:h-28 rounded-full absolute image xs:right-9"
                            />

                            <p
                                className="absolute xl:top-28 lg:top-28 sm:top-16 xs:top-28 border-r-[3px] border-solid border-r-bubble-gum pr-2 xl:w-72 xl:h-16 xl:text-lg lg:w-56 lg:h-16 lg:text-lg md:text-base md:w-38 sm:w-48 sm:text-sm xs:w-48 xs:text-sm"
                            >ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها تحتاج..
                            </p>
                            <p
                                className="absolute xl:top-56 lg:top-56 text-color md:top-40 sm:top-36 xs:top-48 cursor-pointer">
                                رؤية المزيد &gt;
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
