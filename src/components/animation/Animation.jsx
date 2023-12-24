import React, { useState } from "react";
import "./Animation.css";

export default function Animation({
    products,
    isShown,
    srcImage,
    altImage
    }) {

      return (
        <div className="animation">
            {
                isShown ? (<div> 
                        <img className="product-preview" src={srcImage} alt={altImage} />
                    </div>) : 
                    (<div> <img className="product-preview" src={products[0].src} alt="" /> </div>)
            }
            </div>
      )
}