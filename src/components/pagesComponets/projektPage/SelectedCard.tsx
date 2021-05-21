import { motion } from "framer-motion";
import React, { FC } from "react";
import styled from "styled-components";
import Header from "components/pagesComponets/projektPage/Header";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.25,
        },
    },
};

interface cardporps {
    selected: any;
}

const SelectedCardStyle = styled(motion.div)<cardporps>`
    background: ${(props) => props.theme.main.bg};
    width: 75vw;
    height: 80vh;
    padding: ${(props) => props.theme.card.padding};
    border-radius: 10px;
    color: ${(props) => props.theme.main.textColor};
    overflow: auto;
    @media (max-width: 310px) {
        width: 140vw;
        height: 140vh;
    }
`;

const Content = styled(motion.div)``;

const SelectedCard: FC<cardporps> = ({ selected }) => {
    return (
        <SelectedCardStyle
            selected={selected}
            layoutId={selected.id}
            initial="hidden"
            animate="show"
            variants={container}
        >
            <Header title={selected.title} subtitle={selected.category} />
            <Content> {selected.body} </Content>
        </SelectedCardStyle>
    );
};

export default SelectedCard;
