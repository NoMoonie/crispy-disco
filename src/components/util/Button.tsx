import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Buttoninterface {
    onClick?: any;
    Primary?: boolean;
    icon?: any;
    fontSize?: string;
}

interface LinkButtoninterface {
    link: string;
    Primary?: boolean;
    icon?: any;
    fontSize?: string;
}

const LinkStyle = styled.div<{ Primary?: boolean; isIcon?: boolean; isContent: any; fontSize?: string }>`
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .link {
        color: ${(props) => (props.Primary ? props.theme.main.textColor : props.theme.main.scbg)};
        border: ${(props) => (props.Primary ? props.theme.main.bgAccent : props.theme.main.scbg)} 0.01em solid;
        background-color: ${(props) => (props.Primary ? props.theme.main.bg : "none")};
        font-size: ${(props) => (props.fontSize ? props.fontSize : "1.5em")};
        padding: ${(props) => (props.isContent ? "0.25em 1em" : "0.25em")};
        border-radius: 0.25em;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
            width: ${(props) => (props.isContent ? "25px" : "31px")};
            height: ${(props) => (props.isContent ? "25px" : "31px")};
        }
        :hover {
            border-color: ${(props) => (props.Primary ? props.theme.main.scbg : props.theme.main.scbg)};
            color: ${(props) => (props.Primary ? props.theme.main.scbg : props.theme.main.scbg)};
            filter: brightness(50%);
        }
        span {
            margin-left: ${(props) => (props.isIcon ? "0.25em" : "")};
        }
    }
`;

const Button: FC<Buttoninterface> = ({ children, onClick, Primary, icon, fontSize }) => {
    return (
        <LinkStyle Primary={Primary} onClick={onClick} isIcon={icon} isContent={children} fontSize={fontSize}>
            <div className="link">
                {icon}
                {children && <span>{children}</span>}
            </div>
        </LinkStyle>
    );
};

export const LinkButton: FC<LinkButtoninterface> = ({ children, link, Primary, icon, fontSize }) => {
    return (
        <LinkStyle Primary={Primary} isIcon={icon} isContent={children} fontSize={fontSize}>
            <Link className="link" to={link}>
                {icon}
                {children && <span>{children}</span>}
            </Link>
        </LinkStyle>
    );
};

export default Button;
