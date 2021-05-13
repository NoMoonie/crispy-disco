import { motion } from "framer-motion";
import styled from "styled-components";
import React, { FC } from "react";
import Header from "components/pagesComponets/projektPage/Header";

export interface Itemprops {
    item?: any;
    selected?: any;
    setSelected?: any;
}

const ItemCardStyle = styled(motion.div)<Itemprops>`
    background: ${(props) => props.theme.card.bg};
    width: initial;
    height: initial;
    padding: ${(props) => props.theme.card.padding};
    border-radius: 10px;
    cursor: pointer;
`;

const ItemCard: FC<Itemprops> = ({ item, selected, setSelected, children }) => {
    return (
        <ItemCardStyle key={item.id} layoutId={item.id} onClick={() => setSelected(item)}>
            <Header selected={selected} title={item.title} subtitle={item.category} />
        </ItemCardStyle>
    );
};

export default ItemCard;
