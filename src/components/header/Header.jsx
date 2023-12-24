import React from "react";
import "./Header.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Header({
    setTransformX,
    blockInner,
    setBlockInner,
    }) {

    const openBlock = () => {
        setTransformX(0);
    }

    const openInfo = () => {
        setBlockInner('info');
    }

    const openCart = () => {
        setBlockInner('cart');
    }

    const openAccount = () => {
        setBlockInner('account');
    }

    return (
            <div className="header" id="header">
                <a href="/"> <img src="./assets/killerspin-logo.svg" alt="logo" /> </a>
                <nav>
                    <ul className="menu">
                        <li> <AnchorLink href="#products"> Products </AnchorLink> </li>
                        <li> <a href="#info" onClick={ () => {openBlock(); openInfo()}}> About us </a> </li>
                        <li> <a href="#cart" onClick={ () => {openBlock(); openCart()}}> Shopping cart </a> </li>
                        <li> <a href="#account" onClick={ () => {openBlock(); openAccount()}}> Login / Register </a> </li>
                    </ul>
                </nav>
            </div>
    )
}