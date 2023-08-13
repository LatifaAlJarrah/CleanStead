import React, { useState } from 'react';

import { Modal as BSModal } from "react-bootstrap";

import SignUp from './SignUp/SignUp';
import Register from './Register/Register';

import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ show, onHide }) => {

    const [activeTab, setActiveTab] = useState('signup')

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    }

    return (
        <BSModal show={show} onHide={onHide}>
            <BSModal.Body>
                <div
                    className="w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-10">
                    <div className="bg-white p-8">
                        <h2 className="text-xl font-bold mb-4 text-center flex justify-center">
                            من فضلك قم بتسجيل الدخول للإستمرار
                            <button className="w-5 h-5 ml-4 mt-1 cursor-pointer"
                                onClick={onHide}>
                                <AiOutlineClose />
                            </button>
                        </h2>
                        <div className="flex justify-evenly mb-6 w-full border-b-2 border-b-tahiti">
                            <div
                                className={`px-4 py-2 cursor-pointer ${activeTab === 'register'
                                    ? 'tab'
                                    : 'text-gray-600'
                                    }`}
                                onClick={() => handleTabChange('register')}
                            >
                                تسجيل دخول
                            </div>
                            <div
                                className={`px-4 py-2 cursor-pointer border-l-tahiti ${activeTab === 'signup'
                                    ? 'tab'
                                    : 'text-gray-600'
                                    }`}
                                onClick={() => handleTabChange('signup')}
                            >
                                إنشاء حساب
                            </div>         
                        </div>
                        <div
                            className={`p-4 ${activeTab === 'signup' ? 'block' : 'hidden'}`}
                        >
                            {<SignUp />}
                        </div>
                        <div
                            className={`p-4 ${activeTab === 'register' ? 'block' : 'hidden'}`}
                        >
                            {<Register />}
                        </div>
                        
                    </div>
                </div>
            </BSModal.Body>
        </BSModal>
    )
}

export default Modal