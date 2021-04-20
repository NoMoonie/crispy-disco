import styled from "styled-components";
import {FC} from "react";


const NavbarStyle = styled.nav`
    height: ${props => props.theme.navbar.navSize};
    background-color: ${props => props.theme.navbar.bg};
    padding: 0 1rem;
    border-bottom: ${props => props.theme.navbar.border};
    .navbar-nav{
        max-width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
    }
`

const Navbar:FC = (props) => {
    return (
        <NavbarStyle>
            <ul className="navbar-nav">{props.children}</ul>
        </NavbarStyle>
    );
}

export default Navbar;
