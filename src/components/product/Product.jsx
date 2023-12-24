import React from "react";
import './Product.css';


export default function Product({
        name,
        id, 
        srcPreview, 
        alt,
        shortDescription,
        showImage,
        hideImage,
        setBlockInner,
        setTransformX,
        cardId,
        setCardId
        }) {
     
            const openCard = (id) => {
                setTransformX(0);
                setBlockInner('card');
                setCardId(id - 1);
            }

    return(
        <div onClick={() => openCard(id)} className="product-wrapper">
            <div className="product" key={id} onMouseEnter={showImage} onMouseLeave={hideImage} >
                <div className="image-box">
                    <img src={srcPreview} alt={alt} />
                </div>
                <div className="short-info">
                    <p className="title">{name}</p>
                    <p className="short-description"> {shortDescription} </p>
                </div>
            </div>
        </div>
    )
}