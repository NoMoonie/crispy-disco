import { AnimatePresence, motion } from "framer-motion";
import React, { FC, useState } from "react";
import styled from "styled-components";

const Box1 = styled(motion.div)`
    background-color: ${(props) => props.theme.main.bg};
    border-radius: 10px;
    padding: 0.5em;
    overflow: hidden;
`;
const Img = styled(motion.div)`
    height: 70%;
`;

const H1 = styled(motion.h1)`
    color: ${(props) => props.theme.main.scbg};
`;
const Body = styled(motion.p)``;

const Content = () => {
    return (
        <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Body layout>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Body>
        </motion.div>
    );
};

const ProjektItem: FC = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    return (
        <Box1 layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
            <Img />
            <H1 layout>Title</H1>
            <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
        </Box1>
    );
};

export default ProjektItem;
