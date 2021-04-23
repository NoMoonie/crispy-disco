import styled from "styled-components";
import { FaCopyright } from "react-icons/fa";

const FooterStyle = styled.div`
    height: 150px;
    background-color: ${(props) => props.theme.main.bg};
    color: ${(props) => props.theme.main.textColor};
    display: grid;
    place-content: center;
    text-align: center;
    border-top: ${(props) => props.theme.main.border};
`;

const Div = styled.div`
    height: 100%;
    width: 500px;
    color: ${(props) => props.theme.main.textColor};
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
`;

const Footer = () => {
    return (
        <FooterStyle>
            <Div>
                <p>contact</p>
                <p>contact</p>
            </Div>
            <Div>
                <p>
                    <FaCopyright /> Emil Strömdahl
                </p>
            </Div>
        </FooterStyle>
    );
};

export default Footer;
