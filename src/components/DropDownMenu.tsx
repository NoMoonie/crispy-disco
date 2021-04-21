import { FC, useState } from "react";
import styled from "styled-components";

import { FaCode, FaHome, FaUser, FaAngleLeft, FaAngleRight, FaEnvelope, FaImage } from 'react-icons/fa';


interface NavitemInterface{
    leftIcon?: any;
    rightIcon?: any;
    goToMenu?: any;
}

const DropDownStyle = styled.div`
    position: absolute;
    top: 58px; 
    width: 300px;
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
    p, h1{
        margin-left: 0.5rem; 
    }
`

const Div = styled.div<{ selected?: boolean }>`
    display: ${props => props.selected ? "" : "none"};
    
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

    return (
        <DropDownStyle>

            <Div selected={activeMenu ===  "main"} >
                <DropDownItem leftIcon={<FaHome/>}><p>Home</p></DropDownItem>
                <DropDownItem goToMenu="projekts" leftIcon={<FaCode/>} rightIcon={<FaAngleRight/>} ><p>Projekts</p></DropDownItem>
                <DropDownItem leftIcon={<FaImage />}><p>Gallery</p></DropDownItem>
                <DropDownItem leftIcon={<FaUser />}><p>About</p></DropDownItem>
                <DropDownItem leftIcon={<FaEnvelope />}><p>Contact</p></DropDownItem>
            </Div>
           
            <Div selected={activeMenu === "projekts"}>
                <DropDownItem goToMenu="main" leftIcon={<FaAngleLeft/>}><h1>Projekts</h1></DropDownItem>
                <DropDownItem leftIcon={<FaCode/>}><p>Games</p></DropDownItem>
                <DropDownItem leftIcon={<FaCode/>}><p>WebbDev</p></DropDownItem>
            </Div>
            
        </DropDownStyle>
    );
}

export default DropDownMenu;
