import { FC, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface NavitemInterface {
    icon?: any;
    link?: any;
}

const NavitemStyle = styled.li`
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
        border-radius: 25%;
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

const Navitem: FC<NavitemInterface> = ({ link, ...props }) => {
    const [open, setopen] = useState(false);
    return (
        <NavitemStyle>
            {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
            <Link to={link} className="icon-button" onClick={() => setopen(!open)}>
                {props.icon}
            </Link>
            {open && props.children}
        </NavitemStyle>
    );
};

export default Navitem;
