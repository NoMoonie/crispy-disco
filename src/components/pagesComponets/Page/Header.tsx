import { motion } from "framer-motion";
import React, { FC } from "react";
import styled from "styled-components";

interface contentprop {
    title: string;
    subtitle: string;
    selected?: any;
}

const SubTitle = styled(motion.span)`
    color: ${(props) => props.theme.card.bgAccent};
`;

const Title = styled(motion.h3)`
    color: ${(props) => props.theme.card.scbg};
`;

const Header: FC<contentprop> = ({ title, subtitle, selected }) => {
    return (
        <motion.section
            animate={{
                visibility: selected ? "hidden" : "visible",
            }}
        >
            <SubTitle> {subtitle} </SubTitle>
            <Title> {title} </Title>
        </motion.section>
    );
};

export default Header;
