import styled from "styled-components";
import { FC } from "react";
interface Listinterface {
    loading: boolean;
}

const Box2Inner = styled.div<{ loading: boolean }>`
    display: grid;
    place-content: ${(props) => (props.loading ? "center" : "")};
    gap: 1em;
    margin-top: 1em;
    overflow-x: hidden;
`;

const List: FC<Listinterface> = ({ children, loading }) => {
    return <Box2Inner loading={loading}>{children}</Box2Inner>;
};

export default List;
