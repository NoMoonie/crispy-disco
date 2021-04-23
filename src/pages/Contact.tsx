import styled from "styled-components";

const ContactStyle = styled.div`
    color: ${(props) => props.theme.main.textColor};
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr 2fr 1fr;
    height: 100vh;
    @media (max-width: 414px) {
        grid-template-columns: 0.1fr 8fr 0.1fr;
        grid-template-rows: 0.3fr 2fr 0.1fr;
    }
`;

const Contact = () => {
    return <ContactStyle>Contact</ContactStyle>;
};

export default Contact;
