import { motion } from "framer-motion";
import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Buttoninterface {
    onClick?: any;
    link?: string;
    fontSize?: string;
}

const LinkStyle = styled(motion.div)<{ fontSize?: string }>`
    .link-page {
        user-select: none;
        font-size: ${(props) => (props.fontSize ? props.fontSize : "1.5rem")};
        display: inline-block;
        cursor: pointer;
        color: ${(props) => props.theme.main.scbg};
        border: currentColor 0.01em solid;
        padding: 0.25em 1em;
        border-radius: 0.25em;
        display: inline-block;
        color: ${(props) => props.theme.main.scbg};
        &:hover {
            background-color: ${(props) => props.theme.main.scAccent};
        }
    }
`;

const Button: FC<Buttoninterface> = ({ children, onClick, link, fontSize }) => {
    return (
        <>
            {link ? (
                <LinkStyle whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }} fontSize={fontSize}>
                    <Link className="link-page" to={link}>
                        {children}
                    </Link>
                </LinkStyle>
            ) : (
                <LinkStyle whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }} fontSize={fontSize} onClick={onClick}>
                    <div className="link-page"> {children}</div>
                </LinkStyle>
            )}
        </>
    );
};

export default Button;
