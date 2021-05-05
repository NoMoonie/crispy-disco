import { AnimatePresence, motion } from "framer-motion";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AnimFix } from "styled/globalStyle";

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
            color: ${(props) => props.theme.main.scAccent};
        }
    }
`;

const Button: FC<Buttoninterface> = ({ children, onClick, link, fontSize }) => {
    return (
        <AnimFix>
            <AnimatePresence>
                {link ? (
                    <LinkStyle whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} fontSize={fontSize}>
                        <Link className="link-page" to={link}>
                            {children}
                        </Link>
                    </LinkStyle>
                ) : (
                    <LinkStyle
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        fontSize={fontSize}
                        onClick={onClick}
                    >
                        <span className="link-page">{children}</span>
                    </LinkStyle>
                )}
            </AnimatePresence>
        </AnimFix>
    );
};

export default Button;
