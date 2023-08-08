import React, { useState } from 'react';

import SignUp from './SignUp/SignUp';
import Register from './Register/Register';

import { AiOutlineClose } from 'react-icons/ai';

const Modal = () => {
    
    const [activeTab, setActiveTab] = useState('signup');
    // const [isModalOpen, setIsModalOpen] = useState(true);

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    const handleCloseModal = () => {
        const modal = document.getElementById('modal');
        modal.classList.remove('open');
    };
    

    return (
        <div
            id="modal"
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-10">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4 text-center flex justify-center">
                    <AiOutlineClose 
                        className="w-5 h-5 ml-2 mt-1"
                        onClick={handleCloseModal}
                    />
                    من فضلك قم بتسجيل الدخول للإستمرار
                </h2>
                <div className="flex justify-center mb-6 max-w-full">
                    <div
                        className={`px-4 py-2 cursor-pointer ${activeTab === 'signup'
                                ? 'tab'
                                : 'text-gray-600'
                            }`}
                        onClick={() => handleTabChange('signup')}
                    >
                        انشاء حساب
                    </div>
                    <div
                        className={`px-4 py-2 cursor-pointer ${activeTab === 'register'
                                ? 'tab'
                                : 'text-gray-600'
                            }`}
                        onClick={() => handleTabChange('register')}
                    >
                        تسجيل دخول
                    </div>
                </div>
                <div 
                    className={`p-4 border-t ${activeTab === 'register' ? 'block' : 'hidden'}`}
                >
                    { <Register /> }
                </div>
                <div 
                    className={`p-4 border-t ${activeTab === 'signup' ? 'block' : 'hidden'}`}
                >
                    { <SignUp />}
                </div>
            </div>
        </div>
    );
};

export default Modal;

