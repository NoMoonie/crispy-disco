import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

const MotionDiv = styled(motion.div)`
    width: 5rem;
    height: 2rem;
    display: flex;
    justify-content: space-around;
`;

const MotionSpan = styled(motion.span)`
    display: block;
    width: 1rem;
    height: 1rem;
    background-color: ${(props) => props.theme.main.scbg};
    border-radius: 0.5rem;
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
        <AnimatePresence>
            <MotionDiv variants={varientWrapper} initial="start" animate="end">
                <MotionSpan variants={varientCircle} transition={loadingCircleTransition} />
                <MotionSpan variants={varientCircle} transition={loadingCircleTransition} />
                <MotionSpan variants={varientCircle} transition={loadingCircleTransition} />
            </MotionDiv>
        </AnimatePresence>
    );
};

export default Loading;
