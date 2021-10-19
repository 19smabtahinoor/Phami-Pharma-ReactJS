import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

const OrderProvider = ({children}) => {
    const [orders, setOrders] = useState([]);

    //handle cart 
    const handleCart = (products) => {
        setOrders(prev => {
            return [
                ...prev,
                products
            ]
        });
    }

    //remove product
    const removeProduct = (id) => {
        setOrders((prev) => {
            return prev.filter(item => {
                return item.id !== id
            })
        })
    }

    const value = {
        orders, 
        handleCart,
        removeProduct
    }
    return (
        <OrderContext.Provider value={value}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderProvider
