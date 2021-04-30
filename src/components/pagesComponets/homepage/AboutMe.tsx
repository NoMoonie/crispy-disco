import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import styled from "styled-components";

interface aboutmeinterface {
    open: boolean;
}

const Box2inner = styled.div`
    /* background-color: ${(porps) => porps.theme.main.sc}; */
    border: ${(porps) => porps.theme.main.border};
    border-radius: 10px;
    padding: 1em;
    h1 {
        color: ${(porps) => porps.theme.main.scbg};
        margin-top: 1em;
    }
    p {
        padding-top: 1em;
        line-height: 1.5em;
        a {
            color: ${(porps) => porps.theme.main.scbg};
        }
    }
    position: absolute;
    width: 450px;
    bottom: 30px;
    left: 520px;
`;

const motions = {
    hidden: {
        opacity: 0,
        y: -50,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
    removed: {
        opacity: 0,
        y: -50,
    },
};

const AboutMe: FC<aboutmeinterface> = ({ open }) => {
    return (
        <AnimatePresence>
            {open && (
                <motion.div variants={motions} initial="hidden" animate="visible" exit="removed">
                    <Box2inner>
                        <h1>Who am i?!</h1>
                        <p>Yes! whom am i. I'm a 22 year old guy from sweden i'm kind and creative.</p>
                        <p>
                            Things i'm most passionate about is web develepment In terms of the work. Love to code it's
                            fun to make things that have funktionality, or figureout how stuff works/funktions.
                        </p>
                        <p>
                            I'm currently looking for work/intership as a junior web developer to get myself more
                            professional experience.
                        </p>
                        <h1>Hobbies!</h1>
                        <p>Programming, playing games and making games, cooking food and drawing.</p>
                    </Box2inner>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AboutMe;
