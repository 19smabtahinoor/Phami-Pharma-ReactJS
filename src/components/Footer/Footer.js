import React from 'react';
import Fade from 'react-reveal/Fade';
import NavBrand from '../Navbar/NavBrand';

const Footer = () => {

    const footerLink = [
        { id: 1, text: 'Monday to Sunday' },
        { id: 2, text: '7 am to 9 pm' },
        { id: 3, text: '45 Hudson Street' },
        { id: 4, text: 'Villa Rica, GA 30180' },
        { id: 5, text: 'Pharmacy Help Line' },
        { id: 6, text: 'Prescribing Tools' },
        { id: 7, text: 'Specialty Medications' },
        { id: 8, text: 'Pharmacy Claims' },
        { id: 9, text: '+ (713)534-2319' },
        { id: 10, text: '+ (733)364-5123' },
        { id: 11, text: '+ (265)445-1158' },
        { id: 12, text: '+ (713)534-2319' },
    ]
    return (
        <Fade left>
        <footer className="text-gray-600 poppins bg-gray-100">
            <div className="max-w-screen-xl px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <NavBrand />
                </div>
                <div className="flex-grow flex justify-end flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="poppins text-gray-900 text-base mb-3 font-semibold">Working Hours</h2>
                        <nav className="list-none mb-10 flex flex-col space-y-2">
                            {/* list  */}
                            {
                                footerLink.slice(0, 4).map(item => (
                                    <a href="http://github.com/19smabtahinoor" target="_blank" rel="noopener noreferrer" key={item.id} className="text-sm hover:underline">{item.text}</a>
                                ))
                            }
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="poppins text-gray-900 text-base mb-3 font-semibold">Services</h2>
                        <nav className="list-none mb-10 flex flex-col space-y-2">
                            {/* list  */}
                            {
                                footerLink.slice(4, 8).map(item => (
                                    <a href="http://github.com/19smabtahinoor" target="_blank" rel="noopener noreferrer" key={item.id} className="text-sm hover:underline">{item.text}</a>
                                ))
                            }
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="poppins text-gray-900 text-base mb-3 font-semibold">Contact</h2>
                        <nav className="list-none mb-10 flex flex-col space-y-2">
                            {/* list  */}
                            {
                                footerLink.slice(8, 12).map(item => (
                                    <a href="http://github.com/19smabtahinoor" target="_blank" rel="noopener noreferrer" key={item.id} className="text-sm hover:underline">{item.text}</a>
                                ))
                            }
                        </nav>
                    </div>

                </div>
            </div>
            <div className="bg-blue-700">
                <div className="max-w-screen-xl mx-auto py-4 px-5 flex flex-wrap flex-col justify-center sm:flex-row">
                    <p className="text-white text-sm text-center sm:text-left">© 2021 Developed by —
                        <a href="https://github.com/19smabtahinoot" rel="noopener noreferrer" className="text-white ml-1" target="_blank">S.M.Abtahi Noor</a>
                    </p>
                </div>
            </div>
        </footer>
        </Fade>
    )
}

export default Footer
