import styled from "styled-components";
import { FaRegCopyright } from "react-icons/fa";

const FooterStyle = styled.div`
    height: 100px;
    background-color: ${(props) => props.theme.main.bg};
    color: ${(props) => props.theme.main.textColor};
    display: grid;
    place-content: center;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    border-top: ${(props) => props.theme.main.border};
`;

const Div = styled.div`
    height: 100%;
    color: ${(props) => props.theme.main.textColor};
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
`;

const Footer = () => {
    return (
        <FooterStyle>
            <Div></Div>
            <Div>
                <p>
                    <FaRegCopyright /> 2021 Emil Strömdahl
                </p>
            </Div>
            <Div></Div>
        </FooterStyle>
    );
};

export default Footer;
