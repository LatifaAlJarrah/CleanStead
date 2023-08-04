import React from 'react'

import personOne from '../assest/personOne.png';
import personTwo from '../assest/personTwo.png';
import personThree from '../assest/personThree.png';
import iconDown from '../assest/iconDown.png';
import iconTop from '../assest/iconTop.png';
import iconSmall from '../assest/iconSmall.jpg';
import imageReverse from '../assest/imageReverse.jpg';

const Person = ({ person }) => {
    return <div
        className="col-span-12 xl:col-span-4 lg:col-span-4 ms:col-span-3 p-3 my-10 md:my-14 sm:my-14 xs:my-14 rounded-3xl inner-div relative xl:h-72 2 lg:h-72 sm:h-48 xs:h-56 xl:w-80 lg:w-64 md:w-80 sm:w-80 xs:w-80"
        key={index}
    >
        <img
            src={iconTop}
            alt='not found'
            className="absolute icon-top"
        />
        <img
            src={person.person}
            alt='not found'
            className="absolute right-auto start-1/4 bottom-3/4"
        />
        <img
            src={iconDown}
            alt='not found'
            className="absolute icon-down"
        />
        <div className="text-center">
            <p
                className="absolute top-1/3 xl:right-5 lg:right-0 xl:w-64 lg:w-56 h-16 text-xl font-light"
            >ندرك صعوبة القيام بتنظيف السجاد من قبل النساء
            </p>
            <p
                className="absolute top-3/4 right-1/3 font-medium leading-6 person-name"
            >محمد أحمد
            </p>
        </div>
    </div>
}

export const SectionFour = () => {
    const persons = [
        { person: personThree },
        { person: personTwo },
        { person: personOne }
    ];

    return (
        <div className="grid grid-cols-1 mt-10">
            <div className="col-span-12 justify-center flex">
                <img
                    src={imageReverse}
                    alt='not found'
                    className="w-6 h-9 mt-1 ml-1"
                />
                <p
                    className="h-16 text-4xl font-medium leading-10 mx-1"
                >ماذا يقول عملائنا
                </p>
                <img
                    src={iconSmall}
                    alt='not found'
                    className="w-6 h-9  mt-1 mr-1"
                />
            </div>

            <div
                className="grid grid-cols-12 xl:gap-28 lg:gap-x-5 mt-14 mb-10 justify-between xl:mx-auto sm:mx-auto xs:mx-auto">
                {
                    persons.map((person, index) => (
                        <Person person={person} key={index} />
                    ))
                }
            </div>
        </div>
    )
}
