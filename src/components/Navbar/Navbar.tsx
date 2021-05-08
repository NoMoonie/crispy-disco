import styled from "styled-components";
import { FC } from "react";

const NavbarStyle = styled.nav`
    z-index: 1;
    height: ${(props) => props.theme.navbar.navSize};
    width: 100%;
    .navbar-nav {
        max-width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
    }
`;

const Navbar: FC = ({ children }) => {
    return (
        <NavbarStyle>
            <ul className="navbar-nav">{children}</ul>
        </NavbarStyle>
    );
};

export default Navbar;
