import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import Rating from 'react-rating';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
import useOrder from '../../hooks/useOrder';
import Button from '../Form/Button';

const Product = (props) => {
    const [disabled, setDisabled] = useState(false);
    const { title, image, description, price, reviews, rating } = props;
    const history = useHistory();
    const { handleCart, orders } = useOrder();
    const { user } = useAuth();

    return (
        <div className="flex flex-col justify-center items-center space-y-3 bg-white border border-gray-200 hover:shadow-xl transition duration-700 ease-in-out transform hover:scale-105 p-4 box-border rounded-xl">
            <img className="w-full h-72" src={image} alt={title} />
            <h1 className="text-gray-600 poppins text-lg text-center">{title}</h1>
            <p className="text-gray-500 text-center flex-grow">{description.slice(0, 70)}</p>

            {/* price  */}
            <h2 className="text-gray-900 text-center font-bold poppins text-3xl">${price}</h2>
            {/* rating  */}
            <div className="flex items-center space-x-2">
                <Rating
                    emptySymbol={<AiOutlineStar className="text-gray-600 text-xl" />}
                    fullSymbol={<AiFillStar className="text-yellow-400 text-xl" />}
                    initialRating={`${rating}`}
                    readonly
                />
                <span className="text-gray-600">({reviews})</span>
            </div>
            <div>

            </div>
            {/* buttons */}
            <div className="flex items-center space-x-3">
                {user.displayName && (
                    <>
                        <button disabled={disabled} className={` ${disabled} && "opacity-30" w-36 btn-primary py-3 px-4 poppins text-sm flex items-center justify-center space-x-3 text-center`} onClick={() => {
                            handleCart(props);
                            setDisabled(true)
                            swal("Wow!!!", "Your order has added to the cart", "success")

                        }}>
                            <BsCart2 />
                            <span>{orders.find(item => item.id === props.id) || disabled ? "Added" : "Add To Cart"}</span>
                        </button>
                    </>
                )}
               
                <Button className="w-36 btn-primary py-3 px-2 poppins text-sm" text="View" onClick={() => history.push(`/products/${title}`)} />
            </div>

        </div>

    )
}

export default Product
