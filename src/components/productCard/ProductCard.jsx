import React from "react";
import "./ProductCard.css";


export default function ProductCard({
        transformX,
        products,
        cardId,
        cartId,
        setCartId,
        cartList
    }) {

    const addToCart = (id) => {
        cartList.push(id);
        setCartId(id);
        alert('This item has been added!')
    }

    return(
        <div className="product-card-wrapper" style={{transform: `translateX(${transformX}%)`}}>
                <div className="card-inner">
                    <div className="image-wrapper">
                        <img src={products[cardId].src} alt="" />
                    </div>
                    <div className="card-info">
                        <h1> {products[cardId].name} </h1>
                        <h2> $ {products[cardId].price} </h2>
                        <button onClick={() => addToCart(products[cardId].id)} > add to cart </button>
                        <hr />
                        <p className="description"> 
                            {products[cardId].description}
                        </p>
                    </div>
                </div>
        </div>
    )
}