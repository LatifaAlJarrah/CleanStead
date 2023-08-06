import React from 'react'

import iconSmall from '../../../assest/iconSmall.jpg';
import imageReverse from '../../../assest/imageReverse.jpg';
import image7 from '../../../assest/image7.png';
import icon1 from '../../../assest/icon1.png';
import icon2 from '../../../assest/icon2.png';
import icon3 from '../../../assest/icon3.png';
import icon4 from '../../../assest/icon4.png';

export const Advantages = () => {

    const whyChooseUsList = [
        { imageUrl: icon1, benefitName: "الموثقية" },
        { imageUrl: icon2, benefitName: "الحجز اونلاين" },
        { imageUrl: icon3, benefitName: "خصومات دائمة" },
        { imageUrl: icon4, benefitName: " دعم متواصل" }
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
                >لماذا تختارنا
                </p>
                <img
                    src={iconSmall}
                    alt='not found'
                    className="w-6 h-9  mt-1 mr-1"
                />
            </div>

            <div
                className="grid grid-cols-12 gap-4 lg:gap-6 justify-between">
                <div
                    className="col-span-12 lg:col-span-6">
                    <img
                        src={image7}
                        alt="not found"
                        className="w-full h-full rounded-3xl"
                    />
                </div>

                <div
                    className="col-span-12 lg:col-span-6 space-y-8 lg:space-y-6 my-auto">
                    {
                        whyChooseUsList.map((image, index) => (
                            <div
                                className="flex flex-col lg:flex-row  md:flex-row sm:flex-row xs:flex-row lg:items-center"
                                key={index}>
                                <div>
                                    <img
                                        src={image.imageUrl}
                                        alt="not found"
                                        className="background-color rounded-2xl p-7"
                                    />
                                </div>

                                <div className="mx-3 my-auto">
                                    <p
                                        className="text-xl font-extrabold section-color">
                                        {
                                            image.benefitName
                                        }
                                    </p>

                                    <p
                                        className="text-xl font-light section-content-color">
                                        ندرك صعوبة القيام بتنظيف السجاد من قبل النساء
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
