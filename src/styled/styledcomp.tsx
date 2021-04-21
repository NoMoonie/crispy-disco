import styled from "styled-components";

export const BoxButton = styled.button<{ fontsize?: string; width?: string; height?: string }>`
    background-color: ${(props) => props.theme.button.bg};
    color: ${(props) => props.theme.button.textColor};
    width: ${(props) => (props.width ? props.width : "200px")};
    height: ${(props) => (props.height ? props.height : "100px")};
    font-size: ${(props) => (props.fontsize ? props.fontsize : "20pt")};
    font-weight: bolder;
    border-radius: 10px;
    border: none;
    cursor: pointer;
`;
