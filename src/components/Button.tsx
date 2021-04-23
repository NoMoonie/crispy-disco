import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled.div<{ fontsize?: string; width?: string; height?: string }>`
    background-color: ${(props) => props.theme.button.bg};
    color: ${(props) => props.theme.button.textColor};
    width: ${(props) => (props.width ? props.width : "200px")};
    height: ${(props) => (props.height ? props.height : "100px")};
    font-size: ${(props) => (props.fontsize ? props.fontsize : "20pt")};
    font-weight: bolder;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: background ${(props) => props.theme.navbar.speed} ease-out;
    &:hover {
        background-color: ${(props) => props.theme.button.hover};
    }
    a {
        display: grid;
        place-items: center;
        height: 100%;
        width: 100%;
        color: ${(props) => props.theme.button.textColor};
    }
`;

const Button: FC<any> = ({ link, children }) => {
    return (
        <ButtonStyle>
            <Link to={link}>{children}</Link>
        </ButtonStyle>
    );
};

export default Button;
