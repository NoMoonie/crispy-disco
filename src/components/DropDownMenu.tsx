import { FC, useState } from "react";
import styled from "styled-components";

import { FaCode, FaCog, FaHome, FaUser, FaAngleLeft, FaAngleRight, FaBrush } from 'react-icons/fa';


interface NavitemInterface{
    leftIcon?: any;
    rightIcon?: any;
    goToMenu?: any;
}
/*
const left = keyframes`
  to {
    transform: translateX(-110%);
    
  }
`;
const right = keyframes`
  to {
    transform: translateX(110%);
  }
`;
*/
const DropDownStyle = styled.div`
    position: absolute;
    top: 58px; 
    width: 300px;
    transform: translateX(-45%);
    background-color: ${props => props.theme.navbar.bg};
    border: ${props => props.theme.navbar.border};
    border-radius: ${props => props.theme.navbar.borderRadius};
    padding: 1rem; 
    overflow: hidden;
    .menu-item{
        height: 50px; 
        display: flex; 
        align-items: center; 
        border-radius: ${props => props.theme.navbar.borderRadius};
        transition: background ${props => props.theme.navbar.speed};
        padding: 0.5rem;
        &:hover{
            background-color: #525357;
        }
        .icon-right{
            margin-left: auto;
        }
    }
`


const DropDownMenu = () => {

    const [activeMenu, setActiveMenu] = useState("main");


    const DropDownItem:FC<NavitemInterface> = (props) =>{
        return (
            <>
                {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                <a onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)} className="menu-item">
                    <span className="icon-button">{props.leftIcon}</span>

                    {props.children}

                    <span className="icon-right">{props.rightIcon}</span>
                </a>
            </>
        );
    }

    const Menu:FC<any> = (props) =>{
        return(
            <div hidden={activeMenu !== props.menu}>
                {props.children}
            </div>
        );
    }


    return (
        <DropDownStyle>
            <Menu menu="main" >
                <DropDownItem leftIcon={<FaHome/>}>Home</DropDownItem>
                <DropDownItem goToMenu="projekts" leftIcon={<FaCode/>} rightIcon={<FaAngleRight/>}>Projekts {activeMenu}</DropDownItem>
                <DropDownItem leftIcon={<FaUser />}>About</DropDownItem>
                <DropDownItem goToMenu="settings" leftIcon={<FaCog />} rightIcon={<FaAngleRight/>}>Setting</DropDownItem>
            </Menu>
           
            <Menu menu="projekts" >
                <DropDownItem goToMenu="main" leftIcon={<FaAngleLeft/>}></DropDownItem>
                <DropDownItem leftIcon={<FaCode/>}>Games</DropDownItem>
                <DropDownItem leftIcon={<FaCode/>}>Webb Dev</DropDownItem>
            </Menu>

            <Menu menu="settings" >
                <DropDownItem goToMenu="main" leftIcon={<FaAngleLeft/>}></DropDownItem>
                <DropDownItem leftIcon={<FaBrush/>}>Dark mode</DropDownItem>
            </Menu>
        </DropDownStyle>
    );
}

export default DropDownMenu;
