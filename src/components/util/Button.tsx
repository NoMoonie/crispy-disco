import { motion } from "framer-motion";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Buttoninterface {
    onClick?: any;
    Primary?: boolean;
    icon?: any;
}

interface LinkButtoninterface {
    link: string;
    Primary?: boolean;
    icon?: any;
}

const LinkStyle = styled.div<{ Primary?: boolean }>`
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .link {
        color: ${(props) => (props.Primary ? props.theme.main.textColor : props.theme.main.scbg)};
        border: ${(props) => (props.Primary ? props.theme.main.bgAccent : props.theme.main.scbg)} 0.01em solid;
        background-color: ${(props) => (props.Primary ? props.theme.main.bg : "none")};
        font-size: 1.5rem;
        padding: 0.25em;
        border-radius: 0.25em;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
            width: ${(props) => (props.children ? "25px" : "100px")};
            height: ${(props) => (props.children ? "25px" : "100px")};
        }
        :hover {
            border-color: ${(props) => (props.Primary ? props.theme.main.scbg : props.theme.main.scbg)};
            color: ${(props) => (props.Primary ? props.theme.main.scbg : props.theme.main.scbg)};
            filter: brightness(50%);
        }
        span {
            margin-left: 0.25em;
        }
    }
`;

const Button: FC<Buttoninterface> = ({ children, onClick, Primary, icon }) => {
    return (
        <LinkStyle Primary={Primary} onClick={onClick}>
            <div className="link">
                {icon}
                {children && <span>{children}</span>}
            </div>
        </LinkStyle>
    );
};

export const LinkButton: FC<LinkButtoninterface> = ({ children, link, Primary, icon }) => {
    return (
        <LinkStyle Primary={Primary}>
            <Link className="link" to={link}>
                {icon}
                {children && <span>{children}</span>}
            </Link>
        </LinkStyle>
    );
};

export default Button;
