import React from "react";
import "./MovingBlock.css";
import { useState, useRef } from 'react';
import Info from "../info/Info";
import Cart from "../shoppingCart/Cart";
import ProductCard from "../productCard/ProductCard";
import Account from "../account/Account";


export default function MovingBlock({
    products,
    transformX,
    setTransformX,
    blockInner,
    setBlockInner,
    cardId
    }) {


    const [cartId, setCartId] = useState(0);
    const [cartList, setCartList] = useState([]);

    const myRef = useRef(null);


    const closeInfo = () => {
        if(myRef.current.classList.contains('blur')) {
            setTransformX(100);
        } else {
            setTransformX(0);
        }
    }

    return (
        <div className="moving-block" style={{transform: `translateX(${transformX}%)`}}>
            <div className='blur' ref={myRef} onClick={closeInfo} style={{transform: `translateX(${transformX}%)`}}></div>


        { blockInner == "info" ? <Info/> : null}
        { blockInner == "cart" ? 
            <Cart
                products={products}
                cartId={cardId}
                cartList={cartList}
            /> : null}
        { blockInner == "account" ? <Account/> : null}
        { blockInner == "card" ? 
            <ProductCard 
                products={products} 
                cardId={cardId}
                cartId={cartId}
                setCartId={setCartId}
                cartList={cartList}
                /> : null}
        </div>
    )
}