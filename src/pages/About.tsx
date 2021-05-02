import styled from "styled-components";
import { Box1, ProfilePic } from "styled/aboutPageStyle";
import Skills from "components/pagesComponets/aboutPage/Skills";
import Details from "components/pagesComponets/aboutPage/Details";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { ReactComponent as Logo } from "img/logo.svg";
import { FaCode, FaGamepad, FaPencilAlt } from "react-icons/fa";
import { GiCookingPot } from "react-icons/gi";

import firebase from "firebase/app";
import "firebase/firestore";
import Education from "components/pagesComponets/aboutPage/Education";
import Work from "components/pagesComponets/aboutPage/Work";
import { useEffect } from "react";

const AboutStyle = styled.div`
    color: ${(props) => props.theme.main.textColor};
    display: grid;
    grid-template-columns: 0.7fr 1fr 1fr;
    grid-template-rows: 0.5fr 0.5fr 1fr;
    height: 130vh;
    gap: 0.5em;
    margin-top: 4em;
    margin-bottom: 1em;
    overflow: hidden;
    margin-left: 10em;
    margin-right: 10em;
`;

const P = styled.div`
    background-color: ${(porps) => porps.theme.main.bg};
    /*  border: 1px solid ${(porps) => porps.theme.main.scAccent}; */
    border-radius: 10px;
    padding: 1em;
    h1 {
        color: ${(porps) => porps.theme.main.scbg};
    }
    p {
        line-height: 1.5em;
        margin-top: 1em;
    }
`;

const Intresst = styled.div`
    background-color: ${(porps) => porps.theme.main.bg};
    /* border: 1px solid ${(porps) => porps.theme.main.scAccent}; */
    border-radius: 10px;
    padding: 1em;
    grid-column: 2/4;
    display: grid;
    grid-template-columns: repeat(4, 0.5fr);
    grid-template-rows: repeat(2, 0.5fr);
    gap: 1em;
`;

const Div = styled.div`
    border: 0.125em solid ${(porps) => porps.theme.main.bgAccent};
    color: ${(porps) => porps.theme.main.scbg};
    border-radius: 10px;
    padding: 1em;
    display: grid;
    place-items: center;
    svg {
        width: 50px;
        height: 50px;
    }
`;

const Home = () => {
    const [snapshot, loading, error] = useDocumentOnce(firebase.firestore().doc("about/work-doc"));
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
            <P>
                <h1>Who am i?!</h1>
                <p>Yes! whom am i. I'm a 22 year old guy from sweden i'm kind and creative.</p>
                <p>
                    Things i'm most passionate about is web develepment In terms of the work. Love to code it's fun to
                    make things that have funktionality, or figureout how stuff works/funktions.
                </p>
                <p>
                    I'm currently looking for work/intership as a junior web developer to get myself more professional
                    experience.
                </p>
            </P>
            <P>
                <h1>Hobbies!</h1>
                <p>Programming, playing games and making games, cooking food and drawing.</p>
            </P>
            <Intresst>
                <Div>
                    <FaGamepad /> <h1>Games</h1>
                </Div>
                <Div>
                    <FaCode /> <h1>Coding</h1>
                </Div>
                <Div>
                    <GiCookingPot /> <h1>Cooking</h1>
                </Div>
                <Div>
                    <FaPencilAlt /> <h1>Drawing</h1>
                </Div>
            </Intresst>
            <Education error={error} loading={loading} snapshot={snapshot} />
            <Work error={error} loading={loading} snapshot={snapshot} />
        </AboutStyle>
    );
};

export default Home;
