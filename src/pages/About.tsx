import styled from "styled-components";
import { Box1, Box2, ProfilePic } from "styled/aboutPageStyle";
import { MdWork } from "react-icons/md";
import { FaCertificate } from "react-icons/fa";
import Skills from "components/aboutPageComponents/Skills";
import Details from "components/aboutPageComponents/Details";
import List from "components/aboutPageComponents/List";

const AboutStyle = styled.div`
    color: ${(props) => props.theme.main.textColor};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    height: 130vh;
    gap: 1em;
    padding: 4em;
`;

const Home = () => {
    return (
        <AboutStyle>
            <Box1>
                <ProfilePic>
                    <h1 className="name">Emil Strömdahl</h1>
                </ProfilePic>
                <Details />
                <Skills />
            </Box1>
            <Box2>
                <h1>
                    <MdWork /> <p>Work Experience</p>
                </h1>
                <List />
            </Box2>
            <Box2>
                <h1>
                    <FaCertificate /> <p>Education</p>
                </h1>
                <List />
            </Box2>
        </AboutStyle>
    );
};

export default Home;
