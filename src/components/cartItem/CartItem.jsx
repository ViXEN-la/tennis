import React from "react";
import './CartItem.css';

export default function CartItem({
    cartList,
    id,
    name,
    srcPreview,
    alt,
    price,
}) {

    const removeItem = (id) => {
        event.preventDefault();
    }
    return (
            <div className="cart-inner">
                <img src={srcPreview} alt={alt} />

                <div className="short-info">
                    <h3> {name} </h3>
                    <p> 1 x $ {price}</p>
                    <button className="remove-btn" onClick={() => removeItem(id)}>Remove</button>
                </div>

            </div>
)}