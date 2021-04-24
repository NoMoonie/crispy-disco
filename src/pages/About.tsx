import styled from "styled-components";
import { MdWork } from "react-icons/md";
import { FaCertificate } from "react-icons/fa";

const AboutStyle = styled.div`
    color: ${(props) => props.theme.main.textColor};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    height: 130vh;
    gap: 1em;
    padding: 4em;
    div {
        border: ${(props) => props.theme.main.border};
        border-radius: 10px;
        h1 {
            font-weight: normal;
        }
        svg {
            height: 40px;
            width: 40px;
        }
    }
`;

const Box1 = styled.div`
    grid-row: 1/3;
    background-color: ${(props) => props.theme.main.bg};
    margin-left: 10em;
`;

const Box2 = styled.div`
    grid-column: 2/4;
    background-color: ${(props) => props.theme.main.bg};
    margin-right: 10em;
`;

const Box3 = styled.div`
    grid-column: 2/4;
    background-color: ${(props) => props.theme.main.bg};
    margin-right: 10em;
`;

const Home = () => {
    return (
        <AboutStyle>
            <Box1>
                <h1>me</h1>
            </Box1>
            <Box2>
                <h1>
                    <MdWork /> Work Experience
                </h1>
            </Box2>
            <Box3>
                <h1>
                    <FaCertificate /> Education
                </h1>
            </Box3>
        </AboutStyle>
    );
};

export default Home;
