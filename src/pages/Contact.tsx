import styled from "styled-components";

const ContactStyle = styled.div`
    color: ${(props) => props.theme.main.textColor};
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    grid-template-rows: 1fr 5fr 1fr;
    height: 100vh;
    @media (max-width: 414px) {
        grid-template-columns: 0.1fr 8fr 0.1fr;
        grid-template-rows: 0.3fr 2fr 0.1fr;
    }
`;

const Box1 = styled.div`
    grid-column: 2/2;
    grid-row: 2/2;
    background-color: ${(props) => props.theme.main.bg};
    display: grid;
    place-items: center;
    text-align: center;
`;

const Contact = () => {
    return (
        <ContactStyle>
            <Box1>
                <h1>
                    Contact <br /> Comming soon!
                </h1>
            </Box1>
        </ContactStyle>
    );
};

export default Contact;
