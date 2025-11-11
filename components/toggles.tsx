"use client"

import { motion, AnimatePresence } from "framer-motion";
import { FC, useEffect } from "react";

type ToggleProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Toogle: FC<ToggleProps> = ({ children, isOpen, onClose }) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        }
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc)
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="containers absolute top-30 -ml-[600px] w-full p-5 text-white bg-black"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                    >
                        {children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default Toogle