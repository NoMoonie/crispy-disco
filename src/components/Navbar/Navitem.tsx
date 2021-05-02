import { motion } from "framer-motion";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface NavitemInterface {
    icon?: any;
    link?: any;
}

const NavitemStyle = styled(motion.li)`
    width: ${(props) => props.theme.navbar.navitem.width};
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        color: ${(props) => props.theme.navbar.textColor};
    }
    .icon-button {
        color: ${(props) => props.theme.navbar.textColor};
        width: ${(props) => props.theme.navbar.navitem.buttonSize};
        height: ${(props) => props.theme.navbar.navitem.buttonSize};
        background-color: ${(props) => props.theme.navbar.bg};
        border: ${(props) => props.theme.navbar.border};
        border-radius: 10px;
        padding: 5px;
        margin: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
            fill: ${(props) => props.theme.navbar.textColor};
            width: 20px;
            height: 20px;
        }
    }
`;

const Navitem: FC<NavitemInterface> = ({ link, icon, children }) => {
    const [open, setopen] = useState(false);
    return (
        <NavitemStyle whileHover={{ y: 10 }} whileTap={{ scale: 0.9 }}>
            {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
            <Link to={link} className="icon-button" onClick={() => setopen(!open)}>
                {icon}
            </Link>
            {open && children}
        </NavitemStyle>
    );
};

export default Navitem;
