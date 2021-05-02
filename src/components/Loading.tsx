import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

const LoadingStyle = styled.div`
    .motions-div {
        width: 5rem;
        height: 2rem;
        display: flex;
        justify-content: space-around;
    }
    .motions-span {
        display: block;
        width: 1rem;
        height: 1rem;
        background-color: ${(props) => props.theme.main.scbg};
        border-radius: 0.5rem;
    }
`;

const varientWrapper = {
    start: {
        transition: {
            staggerChildren: 0.2,
        },
    },
    end: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const varientCircle = {
    start: {
        y: "50%",
    },
    end: {
        y: "150%",
    },
};

const loadingCircleTransition = {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeInOut",
};

const Loading = () => {
    return (
        <LoadingStyle>
            <AnimatePresence>
                <motion.div variants={varientWrapper} initial="start" animate="end" className="motions-div">
                    <motion.span
                        variants={varientCircle}
                        transition={loadingCircleTransition}
                        className="motions-span"
                    ></motion.span>
                    <motion.span
                        variants={varientCircle}
                        transition={loadingCircleTransition}
                        className="motions-span"
                    ></motion.span>
                    <motion.span
                        variants={varientCircle}
                        transition={loadingCircleTransition}
                        className="motions-span"
                    ></motion.span>
                </motion.div>
            </AnimatePresence>
        </LoadingStyle>
    );
};

export default Loading;
