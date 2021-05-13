import { Pagetransiton, transition } from "components/Pageroutes";
import { motion } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";

const GalleryStyle = styled(motion.div)`
    color: ${(props) => props.theme.main.textColor};
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-auto-rows: 240px;
    gap: 0.5em;
    padding: 1em;
    padding-top: 0.5em;
    min-height: 100vh;
`;

const Wrapper = styled.div`
    background-position: center;
    background-size: 200%;
    background-repeat: no-repeat;
    background-color: ${(props) => props.theme.main.bg};
    border-radius: 10px;
    &.card-tall {
        grid-row: span 2 / auto;
    }
    &.card-wide {
        grid-column: span 2 / auto;
    }
`;

const Gallery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <GalleryStyle variants={Pagetransiton} initial="init" animate="show" exit="hidden" transition={transition}>
            <Wrapper></Wrapper>
            <Wrapper className="card-tall card-wide"></Wrapper>
            <Wrapper></Wrapper>
            <Wrapper className="card-tall "></Wrapper>
            <Wrapper></Wrapper>
            <Wrapper></Wrapper>
            <Wrapper className="card-tall "></Wrapper>
            <Wrapper></Wrapper>
            <Wrapper className="card-wide "></Wrapper>
            <Wrapper></Wrapper>
            <Wrapper className="card-wide "></Wrapper>
            <Wrapper className="card-wide card-tall"></Wrapper>
            <Wrapper className="card-tall"></Wrapper>
            <Wrapper className="card-wide "></Wrapper>
            <Wrapper></Wrapper>
            <Wrapper></Wrapper>
        </GalleryStyle>
    );
};

export default Gallery;
