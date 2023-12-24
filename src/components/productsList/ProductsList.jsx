import React from 'react';
import './ProductsList.css';
import Product from '../product/Product';


export default function ProductsList({
    products,
    setIsShown,
    setSrcImage,
    setAltImage,
    transformX,
    setTransformX,
    setBlockInner,
    cardId,
    setCardId
    }) {

    const showImage = (event) => {
        setIsShown(true);
        let key = event._targetInst.key;
        products.filter(product => {
            if(parseInt(product.id, 10) === parseInt(key, 10)) {
                setSrcImage(product.src);
                setAltImage(product.alt)    
            }
        });
    }
    const hideImage = (event) => {
        setIsShown(false);
        if(event._targetInst.key == null) {
            products.map(product => {
                event._targetInst.key = product.id;
                setSrcImage("");
                setAltImage("");
            })

        }
    }

    return(
        <div id='products' className='products-container'>
            {
                products.map(product => {
                    return(
                        <Product 
                        setIsShown={setIsShown}
                        products={products}
                        name={product.name}
                        id={product.id}
                        srcPreview={product.srcPreview}
                        alt={product.alt}
                        price={product.price}
                        shortDescription={product.shortDescription}
                        description={product.description}
                        setSrcImage={setSrcImage}
                        setAltImage={setAltImage}
                        setBlockInner={setBlockInner}
                        setTransformX={setTransformX}
                        cardId={cardId}
                        setCardId={setCardId}
                        key={product.id}
                        {...product}

                        showImage={showImage}
                        hideImage={hideImage}
                    />
                    )

                })
            }
        </div>
    )
}