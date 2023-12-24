import React, { useRef } from "react";
import "./Content.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion, useScroll, useTransform } from "framer-motion";


export default function Content() {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["1 0", "1.1 1"],
    });

    const transformProgress = useTransform(scrollYProgress, [1, 0], [0.5, 100]);

    return(
        <motion.div className="content" 
        ref={ref}
        style={{
            opacity: scrollYProgress,
            translateY: transformProgress,
        }}
        >
            <div>
                <h1> Welcome to Killerspin equipment store. See what you can purchase below. </h1>
                <AnchorLink href="#products"> <button> view all </button> </AnchorLink>
            </div>
        </motion.div>
    )
}