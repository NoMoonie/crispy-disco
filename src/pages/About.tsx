import styled from "styled-components";

const AboutStyle = styled.div`
    color: ${(props) => props.theme.main.textColor};
`;

const Home = () => {
    return (
        <AboutStyle>
            <h1>About</h1>
        </AboutStyle>
    );
};

export default Home;
