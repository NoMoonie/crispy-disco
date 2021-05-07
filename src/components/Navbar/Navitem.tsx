import { motion } from "framer-motion";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface NavitemInterface {
    icon?: any;
    link?: any;
}

const NavitemStyle = styled(motion.li)`
    user-select: none;
    width: ${(props) => props.theme.navbar.navitem.width};
    display: flex;
    justify-content: center;
    align-items: center;
    .icon-button {
        color: ${(props) => props.theme.navbar.textColor};
        width: ${(props) => props.theme.navbar.navitem.buttonSize};
        height: ${(props) => props.theme.navbar.navitem.buttonSize};
        background-color: ${(props) => props.theme.navbar.bg};
        border: 1px solid ${(props) => props.theme.navbar.bgAccent};
        border-radius: 10px;
        padding: 5px;
        margin: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
            width: 25px;
            height: 25px;
        }
        :hover {
            border-color: ${(props) => props.theme.navbar.scbg};
            color: ${(props) => props.theme.navbar.scbg};
            filter: brightness(50%);
        }
    }
`;

const Navitem: FC<NavitemInterface> = ({ link, icon, children }) => {
    const [open, setopen] = useState(false);
    return (
        <NavitemStyle whileHover={{ y: 5 }} whileTap={{ scale: 0.9 }}>
            <Link to={link} className="icon-button" onClick={() => setopen(!open)}>
                {icon}
            </Link>
            {open && children}
        </NavitemStyle>
    );
};

export default Navitem;
