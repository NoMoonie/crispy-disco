import styled from "styled-components";
import { FaRegCopyright } from "react-icons/fa";

const FooterStyle = styled.div`
    background-color: ${(props) => props.theme.main.bg};
    color: ${(props) => props.theme.main.textColor};
    display: grid;
    place-content: center;
    grid-template-columns: 1fr 1fr 1fr;
    height: 100px;
    text-align: center;
    border-top: ${(props) => props.theme.main.border};
    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
    align-self: end;
`;

const Div = styled.div`
    color: ${(props) => props.theme.main.textColor};
    display: flex;
    justify-content: space-evenly;
    padding: 1em;
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
