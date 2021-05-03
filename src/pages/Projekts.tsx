import { Pagetransiton, transition } from "components/Pageroutes";
import ProjektItem from "components/pagesComponets/Page/ProjektItem";
import { AnimateSharedLayout, motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";

const ProjektsStyle = styled(motion.div)`
    color: ${(props) => props.theme.main.textColor};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    grid-auto-rows: 300px;
    gap: 0.5em;
    min-height: 100vh;
    margin-top: 4em;
    margin-bottom: 1em;
    margin-left: 10em;
    margin-right: 10em;
`;

const Projekts = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <ProjektsStyle variants={Pagetransiton} initial="init" animate="show" exit="hidden" transition={transition}>
            <AnimateSharedLayout>
                <ProjektItem></ProjektItem>
                <ProjektItem></ProjektItem>
                <ProjektItem></ProjektItem>
                <ProjektItem></ProjektItem>
                <ProjektItem></ProjektItem>
                <ProjektItem></ProjektItem>
                <ProjektItem></ProjektItem>
            </AnimateSharedLayout>
        </ProjektsStyle>
    );
};

export default Projekts;
