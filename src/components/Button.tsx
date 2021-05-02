import { motion } from "framer-motion";
import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Buttoninterface {
    onClick?: any;
    link?: string;
    fontSize?: string;
}

const LinkStyle = styled.div<{ fontSize?: string }>`
    .link-page {
        user-select: none;
        font-size: ${(props) => (props.fontSize ? props.fontSize : "1.4rem")};
        display: inline-block;
        cursor: pointer;
        color: ${(props) => props.theme.main.scbg};
        border: currentColor 0.125em solid;
        padding: 0.25em 1em;
        border-radius: 0.25em;
        display: inline-block;
        color: ${(props) => props.theme.main.scbg};
        &:hover {
            background-color: ${(props) => props.theme.main.scAccent};
        }
        transition: background ${(props) => props.theme.navbar.speed} ease-out;
        transition-duration: 200ms;
    }
`;

const Button: FC<Buttoninterface> = ({ children, onClick, link, fontSize }) => {
    return (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            {link ? (
                <LinkStyle fontSize={fontSize}>
                    <Link className="link-page" to={link}>
                        {children}
                    </Link>
                </LinkStyle>
            ) : (
                <LinkStyle fontSize={fontSize} onClick={onClick}>
                    <div className="link-page"> {children}</div>
                </LinkStyle>
            )}
        </motion.div>
    );
};

export default Button;
