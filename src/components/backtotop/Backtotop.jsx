import React from "react";
import "./Backtotop.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';


export default function Backtotop() {
    return (
        <div className="to-top-arrow">
            <AnchorLink href="#main-info">
                up
            </AnchorLink>
        </div>
    )
}