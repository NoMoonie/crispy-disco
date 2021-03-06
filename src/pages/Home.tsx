import styled from "styled-components";
import { ReactComponent as Logo } from "img/logo.svg";
import { useState } from "react";
import Intro from "components/pagesComponets/homepage/Intro";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Pagetransiton, transition } from "components/Pageroutes";

const HomeStyle = styled(motion.div)`
    color: ${(props) => props.theme.main.textColor};
    background-position: center;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    grid-template-rows: 1fr 2fr 1fr;
    height: 100vh;
    overflow: hidden;
    margin: 1em;
    gap: 1em;
`;

const Box2 = styled.div`
    position: relative;
    grid-row: 2/2;
    display: grid;
    place-content: left;
    svg {
        position: absolute;
        bottom: 1em;
        transform: rotate(-15deg) scale(1.5);
        z-index: -1;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

const Home = () => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <HomeStyle variants={Pagetransiton} initial="init" animate="show" exit="hidden" transition={transition}>
            <Intro open={open} setOpen={setOpen} />
            <Box2>
                <Logo />
            </Box2>
        </HomeStyle>
    );
};

export default Home;
