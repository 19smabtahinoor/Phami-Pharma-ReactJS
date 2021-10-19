import React from 'react';
import Bounce from 'react-reveal/Bounce';
import ContactForm from '../components/Contact/ContactForm';

const ContactScreen = () => {
    return (
        <section className="max-w-screen-xl py-24 mx-auto px-6  overflow-y-hidden">
            {/* heading  */}
            <Bounce left>
                <div className="flex flex-col items-center space-x-2 pb-4">
                    <h1 className="text-gray-700 poppins text-3xl">Contact {" "} <span className="text-blue-600 font-semibold select-none">Us</span></h1>
                    <div className="bg-blue-600 flex items-center justify-center w-16 h-1 mt-2 rounded-full"></div>
                </div>
            </Bounce>

            {/* form  */}
                <ContactForm />
        </section>
    )
}

export default ContactScreen
