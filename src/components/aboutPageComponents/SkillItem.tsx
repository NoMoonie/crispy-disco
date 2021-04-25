import { FC } from "react";
import styled from "styled-components";

interface ProcentBarInterface {
    procent: string;
    name: string;
}

const Div = styled.div`
    height: 1.1em;
    border-radius: 10px;
    background-color: ${(props) => props.theme.main.bgAccent};
`;

const Div1 = styled.div<{ procent: string }>`
    display: grid;
    place-content: center;
    height: 100%;
    width: ${(props) => props.procent};
    border-radius: 10px;
    background-color: ${(props) => props.theme.main.scbg};
`;

const ProcentBar: FC<ProcentBarInterface> = ({ procent, name }) => {
    return (
        <>
            <p>{name}</p>
            <Div>
                <Div1 procent={procent}>
                    <p>{procent}</p>
                </Div1>
            </Div>
        </>
    );
};

export default ProcentBar;
