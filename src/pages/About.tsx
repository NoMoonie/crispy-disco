import styled from "styled-components";
import { Box1, Box2, ProfilePic } from "styled/aboutPageStyle";
import { MdWork } from "react-icons/md";
import Skills from "components/pagesComponets/aboutPage/Skills";
import Details from "components/pagesComponets/aboutPage/Details";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { ReactComponent as Logo } from "img/logo.svg";

import firebase from "firebase/app";
import "firebase/firestore";
import Education from "components/pagesComponets/aboutPage/Education";
import Work from "components/pagesComponets/aboutPage/Work";

const AboutStyle = styled.div`
    color: ${(props) => props.theme.main.textColor};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    height: 130vh;
    gap: 1em;
    padding: 4em;
    overflow: hidden;
`;

const Home = () => {
    const [snapshot, loading, error] = useDocumentOnce(firebase.firestore().doc("about/work-doc"));

    return (
        <AboutStyle>
            <Box1>
                <ProfilePic>
                    <Logo />
                    <h1 className="name">Emil Strömdahl</h1>
                </ProfilePic>
                <Details
                    professtion={snapshot?.data()?.details.professtion}
                    location={snapshot?.data()?.details.location}
                    email={snapshot?.data()?.details.email}
                    number={snapshot?.data()?.details.number}
                    loading={loading}
                />
                <Skills />
            </Box1>
            <Education error={error} loading={loading} snapshot={snapshot} />
            <Work error={error} loading={loading} snapshot={snapshot} />
        </AboutStyle>
    );
};

export default Home;
