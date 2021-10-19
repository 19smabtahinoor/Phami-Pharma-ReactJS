import { useContext } from 'react';
import { OrderContext } from '../contexts/OrderProvider';

const useOrder = () => {

    return useContext(OrderContext);
}

export default useOrder
