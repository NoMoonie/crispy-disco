import { FaItchIo, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FC } from "react";

interface Wrapperinterface {
    open: boolean;
    setOpen: Function;
}

const LinkStyle = styled.div`
    user-select: none;
    width: 200px;
    height: 50px;
    font-size: 20pt;
    border: ${(props) => props.theme.button.border};
    color: ${(porps) => porps.theme.button.bg};
    cursor: pointer;
    background: none;
    border-radius: 5px;
    display: grid;
    place-items: center;
    .link-page {
        display: grid;
        place-items: center;
        height: 100%;
        width: 100%;
        color: ${(porps) => porps.theme.button.bg};
        &:hover {
            color: ${(props) => props.theme.main.scAccent};
        }
    }
    &:hover {
        color: ${(props) => props.theme.main.scAccent};
        border-color: ${(props) => props.theme.main.scAccent};
    }
`;

const Wrapper = styled.section`
    padding-top: 1em;
    display: flex;
    gap: 1em;
    .links {
        width: 50px;
        height: 50px;
        cursor: pointer;
        color: ${(props) => props.theme.main.scbg};
        &:hover {
            color: ${(props) => props.theme.main.scAccent};
        }
    }
`;

const ButtonWrapper: FC<Wrapperinterface> = ({ open, setOpen }) => {
    return (
        <Wrapper>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <LinkStyle>
                    <Link className="link-page" to="/about">
                        About / CV
                    </Link>
                </LinkStyle>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <LinkStyle onClick={() => setOpen(!open)}>Who am i</LinkStyle>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <FaItchIo className="links" onClick={() => window.open("https://nomoon404.itch.io/", "_blank")} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <FaGithub className="links" onClick={() => window.open("https://github.com/NoMoonie", "_blank")} />
            </motion.div>
        </Wrapper>
    );
};

export default ButtonWrapper;
