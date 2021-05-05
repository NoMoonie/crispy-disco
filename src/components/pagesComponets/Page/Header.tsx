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
    z-index: 1;
`;

const Title = styled(motion.h3)`
    color: ${(props) => props.theme.card.scbg};
    z-index: 1;
`;

const Wrapper = styled(motion.section)``;

const Header: FC<contentprop> = ({ title, subtitle, selected }) => {
    return (
        <Wrapper
            animate={{
                visibility: selected ? "hidden" : "visible",
            }}
        >
            <SubTitle> {subtitle} </SubTitle>
            <Title> {title} </Title>
        </Wrapper>
    );
};

export default Header;
