import styled from "styled-components";
import { FC } from "react";
interface Listinterface {
    loading: boolean;
}

const Box2Inner = styled.div<{ loading: boolean }>`
    border-top: ${(props) => props.theme.main.border};
    padding: 2em;
    display: grid;
    place-content: ${(props) => (props.loading ? "center" : "")};
    gap: 2em;
    overflow: auto;
    max-height: 50vh;
`;

const List: FC<Listinterface> = ({ children, loading }) => {
    return <Box2Inner loading={loading}>{children}</Box2Inner>;
};

export default List;
