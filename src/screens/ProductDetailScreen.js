import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsArrowLeft, BsCart2 } from 'react-icons/bs';
import Rating from 'react-rating';
import Fade from 'react-reveal/Fade';
import { Link, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import useFetch from '../hooks/useFetch';
import useOrder from '../hooks/useOrder';


const ProductDetailScreen = () => {
    const [disabled, setDisabled] = useState(false);
    const { title } = useParams();
    const [data] = useFetch('products');
    const { handleCart , orders } = useOrder();

    return (
        <section className="max-w-screen-xl py-24 mx-auto px-6  overflow-y-hidden">
            <div className="flex flex-col justify-center items-center pt-24">
                {data.filter(item => item.title === title).map(product => (
                    <>
                        <div key={product.id} className="p-6 box-border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                            {/* image  */}
                            <div>
                                <Fade left>
                                    <img className="w-full h-full mx-auto object-cover rounded-lg" src={product.image} alt="coverimg" />
                                </Fade>
                            </div>
                            {/* details  */}
                            <div className="flex flex-col justify-center h-full">
                                <Fade left>
                                    <div className="border-b border-gray-400 pb-4">
                                        <h1 className="poppins text-gray-800 text-3xl">{product.title}</h1>
                                        {/* rating and reviews  */}
                                        <div className="flex items-center-space-x-3 mt-4">
                                            <Rating
                                                emptySymbol={<AiOutlineStar className="text-gray-600 text-xl" />}
                                                fullSymbol={<AiFillStar className="text-yellow-400 text-xl" />}
                                                initialRating={`${product.rating}`}
                                                readonly
                                            />
                                            <span className="text-gray-600">({product.reviews} reviews)</span>
                                        </div>
                                        {/* description  */}
                                        <p className=" text-gray-400 my-4">{product.description}{product.description}{product.description}{product.description}</p>
                                    </div>
                                    <div className="flex items-center justify-between py-6">
                                        <h2 className="text-3xl text-black font-bold poppins">${product.price}</h2>
                                        <button disabled={disabled} className={` ${disabled} && "opacity-30" w-36 btn-primary py-3 px-4 poppins text-sm flex items-center space-x-3 text-center justify-center`} 
                                            onClick={() => {
                                                handleCart(product)
                                                setDisabled(true)
                                                swal("Wow!!!", "Your order has added to the cart", "success")
                                            }}
                                            
                                        >
                                            <BsCart2 />
                                            <span>{orders.filter(item => item.id === product.id) || disabled ? "Added" : "Add To Cart"}</span>
                                            
                                        </button>
                                    </div>
                                </Fade>
                            </div>
                            <Link to="/products" className="pt-4 text-blue-500 text-sm hover:underline flex items-center space-x-3"><BsArrowLeft /> <span>Back</span></Link>
                        </div>
                    </>
                ))}
            </div>
        </section>
    )
}

export default ProductDetailScreen
