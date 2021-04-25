import styled from "styled-components";
import { FC } from "react";
interface Listinterface {}

const Box2Inner = styled.div`
    border-top: ${(props) => props.theme.main.border};
    padding: 2em;
    display: grid;
    gap: 2em;
`;

const List: FC<Listinterface> = ({ children }) => {
    return <Box2Inner>{children}</Box2Inner>;
};

export default List;
