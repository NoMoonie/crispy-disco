import ButtonWrapper from "components/pagesComponets/homepage/ButtonWrapper";
import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import styled from "styled-components";

interface Homepage {
    open: boolean;
    setOpen: Function;
}

const Box1 = styled.div`
    border-radius: 10px;
    grid-row: 2/2;
    display: grid;
    place-content: center;
    cursor: default;
`;

const Box1inner = styled(motion.span)`
    font-size: 25pt;
    p {
        font-size: 12pt;
        color: ${(props) => props.theme.main.bgAccent};
        margin-top: 1em;
    }
    span {
        color: ${(props) => props.theme.main.scbg};
    }
`;

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
            delayChildren: 0.2,
        },
    },
};

const stagerdItems = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
};

const transitions = {
    type: "spring",
    duration: 0.5,
};

const Intro: FC<Homepage> = ({ open, setOpen }) => {
    return (
        <Box1>
            <AnimatePresence>
                <Box1inner variants={container} initial="hidden" animate="show">
                    <motion.h1 transition={transitions} variants={stagerdItems}>
                        Hi,
                    </motion.h1>
                    <motion.h1 transition={transitions} variants={stagerdItems}>
                        I´m <span>Emil</span>,
                    </motion.h1>
                    <motion.h1 transition={transitions} variants={stagerdItems}>
                        web developer.
                    </motion.h1>
                    <p>Back end Debeloper / Front end Developer / React / Electronjs / Wordpress </p>
                </Box1inner>
            </AnimatePresence>
            <ButtonWrapper open={open} setOpen={setOpen} />
        </Box1>
    );
};

export default Intro;
