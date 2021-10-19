import React from 'react'

const NavBrand = () => {
    return (
        <div className="flex items-center space-x-4">
            <img className="w-12 select-none" src="../../assets/favicon.png" alt="logo" />
            <h1 className="text-3xl font-semibold text-blue-600 brand-font select-none">Phami Pharma</h1>
        </div>
    )
}

export default NavBrand
