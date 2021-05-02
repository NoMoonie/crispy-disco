import { Pagetransiton, transition } from "components/Pageroutes";
import { motion } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";

const ProjektsStyle = styled(motion.div)`
    color: ${(props) => props.theme.main.textColor};
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    grid-template-rows: 1fr 5fr 1fr;
    height: 100vh;
`;

const Box1 = styled.div`
    grid-column: 2/2;
    grid-row: 2/2;
    background-color: ${(props) => props.theme.main.bg};
    display: grid;
    place-items: center;
    text-align: center;
`;

const Projekts = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <ProjektsStyle variants={Pagetransiton} initial="init" animate="show" exit="hidden" transition={transition}>
            <Box1>
                <h1>
                    Projekts <br /> Comming soon!
                </h1>
            </Box1>
        </ProjektsStyle>
    );
};

export default Projekts;
