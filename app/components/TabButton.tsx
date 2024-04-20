import React, {memo, useEffect, useState} from 'react';
import { motion } from "framer-motion";

function TabButton({active,selectTab,children} : any) {
    const variants = {
        default: { width: 0 },
        active: { width: "calc(100% - 1rem)" },
    };
    const buttonClasses = active ? 'text-white' : 'text-[#adb7be]'

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>{children}</p>
            <motion.div
                animate={active ? "active" : "default"}
                variants={variants}
                className="h-1 bg-primary-500 mt-2 mr-4"
            ></motion.div>
        </button>
    );
}

export default memo(TabButton);