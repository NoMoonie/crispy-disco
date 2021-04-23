import { FC, useState } from "react";
import styled from "styled-components";

import { FaItchIo, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

interface NavitemInterface {
    leftIcon?: any;
    rightIcon?: any;
    goToMenu?: any;
    link?: any;
}

const DropDownStyle = styled.div`
    position: absolute;
    top: 58px;
    width: 300px;
    background-color: ${(props) => props.theme.navbar.bg};
    border: ${(props) => props.theme.navbar.border};
    border-radius: ${(props) => props.theme.navbar.borderRadius};
    padding: 1rem;
    overflow: hidden;
    .menu-item {
        height: 50px;
        display: flex;
        align-items: center;
        border-radius: ${(props) => props.theme.navbar.borderRadius};
        transition: background ${(props) => props.theme.navbar.speed} ease-out;
        padding: 0.5rem;
        &:hover {
            background-color: ${(props) => props.theme.navbar.navitem.hover};
        }
        .icon-right {
            margin-left: auto;
        }
    }
    p,
    h1 {
        margin-left: 0.5rem;
    }
`;

const Div = styled.div<{ selected?: boolean }>`
    display: ${(props) => (props.selected ? "" : "none")};
`;

const DropDownMenu = () => {
    const [activeMenu, setActiveMenu] = useState("main");

    const DropDownItem: FC<NavitemInterface> = ({ link, ...props }) => {
        return (
            <>
                {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                <Link to={link} onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)} className="menu-item">
                    <span className="icon-button">{props.leftIcon}</span>

                    {props.children}

                    <span className="icon-right">{props.rightIcon}</span>
                </Link>
            </>
        );
    };

    return (
        <DropDownStyle>
            <Div selected={activeMenu === "main"}>
                <DropDownItem leftIcon={<FaItchIo />}>
                    <p>Itch.io</p>
                </DropDownItem>
                <DropDownItem leftIcon={<FaGithub />}>
                    <p>Github</p>
                </DropDownItem>
            </Div>
        </DropDownStyle>
    );
};

export default DropDownMenu;
