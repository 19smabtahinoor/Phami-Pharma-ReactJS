import React from 'react';
import { useHistory } from 'react-router-dom';

const ErrorScreen = () => {
    const history = useHistory();

    return (
        <main className=" h-screen banner">
            <div className="max-w-screen-xl py-20 mx-auto px-6">
                <div className="flex flex-col items-center justify-center h-3/4 pt-24">
                    <img className="w-96 object-contain" src="../../assets/error.png" alt="error" />

                    <button className="btn-primary px-8 py-2 poppins rounded-full mt-10" onClick={() => history.push('/')}>Go back to home</button>
                </div>
            </div>
        </main>
    )
}

export default ErrorScreen
