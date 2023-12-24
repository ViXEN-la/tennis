import React from "react";
import "./Cart.css";
import CartItem from "../cartItem/CartItem";

export default function Cart({
    transformX,
    products,
    cartId,
    cartList
    }) {

    const buyProduct = (event) => {
        event.preventDefault();
        alert('Congrats! You\'ve purchased this!');
    }

    return (
        <div id="cart" className="cart-wrapper" style={{transform: `translateX(${transformX}%)`}}>

                <div className="cart">
                    <h1>Your Shopping Cart</h1>

                    { (cartList.length == 0) ? <p> It's empty here. Go shopping! </p> :  
                    
                    <div className="items-list">
                    {
                        cartList.map(addedId => {
                            return(
                            <CartItem
                                cartList={cartList}
                                products={products}
                                id={products[addedId - 1].id}
                                name={products[addedId - 1].name}
                                srcPreview={products[addedId - 1].srcPreview}
                                alt={products[addedId - 1].alt}
                                price={products[addedId - 1].price}
                                key={products[addedId - 1].id}
                            />)
                        })
                    }
                </div>
                    
                    
                    }
                    <button className="buy-btn" onClick={buyProduct} disabled={ cartList.length == 0 ? true : false } > Buy </button>
                </div>
        </div>
    )
}