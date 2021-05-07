import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Buttoninterface {
    onClick?: any;
    link?: string;
    fontSize?: string;
    Primary?: boolean;
    icon?: any;
}

const LinkStyle = styled.div<{ fontSize?: string; Primary?: boolean }>`
    .link-page {
        user-select: none;
        font-size: ${(props) => (props.fontSize ? props.fontSize : "1.5rem")};
        display: inline-block;
        cursor: pointer;
        color: ${(props) => (props.Primary ? props.theme.main.textColor : props.theme.main.scbg)};
        border: ${(props) => (props.Primary ? props.theme.main.bgAccent : props.theme.main.scbg)} 0.01em solid;
        padding: 0.25em 1em;
        border-radius: 0.25em;
        background-color: ${(props) => (props.Primary ? props.theme.main.bg : "none")};
        &:hover {
            color: ${(props) => (props.Primary ? props.theme.main.scbg : props.theme.main.scbg)};
            border-color: ${(props) => (props.Primary ? props.theme.main.scbg : props.theme.main.scbg)};
            filter: brightness(50%);
        }
    }
`;

const Icon = styled.span<{ isIcon: any }>`
    margin-right: ${(props) => (props.isIcon ? "0.5em" : "")};
`;

const Button: FC<Buttoninterface> = ({ children, onClick, link, fontSize, Primary, icon }) => {
    return (
        <>
            {link ? (
                <LinkStyle Primary={Primary} fontSize={fontSize}>
                    <Link className="link-page" to={link}>
                        <Icon isIcon={children}>{icon}</Icon>
                        {children}
                    </Link>
                </LinkStyle>
            ) : (
                <LinkStyle Primary={Primary} fontSize={fontSize} onClick={onClick}>
                    <span className="link-page">
                        <Icon isIcon={children}>{icon}</Icon>
                        {children}
                    </span>
                </LinkStyle>
            )}
        </>
    );
};

export default Button;
