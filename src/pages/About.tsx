import styled from "styled-components";
import Skills from "components/pagesComponets/aboutPage/Skills";
import Details from "components/pagesComponets/aboutPage/Details";
import Education from "components/pagesComponets/aboutPage/Education";
import Work from "components/pagesComponets/aboutPage/Work";
import { Box1, ProfilePic } from "styled/aboutPageStyle";
import { ReactComponent as Logo } from "img/logo.svg";
import { FaCode, FaGamepad, FaPencilAlt } from "react-icons/fa";
import { GiCookingPot } from "react-icons/gi";

import { useEffect } from "react";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import firebase from "firebase/app";
import "firebase/firestore";
import { motion } from "framer-motion";
import { Pagetransiton, transition } from "components/Pageroutes";

const AboutStyle = styled(motion.div)`
    color: ${(props) => props.theme.main.textColor};
    display: grid;
    grid-template-columns: 0.7fr 1fr 1fr;
    grid-template-rows: 0.5fr 0.2fr 1fr;
    min-height: 130vh;
    gap: 0.5em;
    margin-top: 0.5em;
    margin-bottom: 1em;
    overflow: auto;
    margin-left: 10em;
    margin-right: 10em;
    @media (max-width: 1100px) {
        grid-template-columns: auto;
        margin-left: 1em;
        margin-right: 1em;
        /*  display: block; */
        overflow-x: hidden;
    }
`;

const Main = styled.div`
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

    @media (max-width: 870px) {
        &.int {
            display: none;
        }
    }
    @media (min-width: 870px) {
        &.int {
            grid-column: 2/4;
        }
    }
`;

const Intresst = styled.div`
    background-color: ${(porps) => porps.theme.main.bg};
    /* border: 1px solid ${(porps) => porps.theme.main.scAccent}; */
    border-radius: 10px;
    padding: 1em;
    display: grid;
    grid-template-columns: repeat(4, 0.5fr);
    gap: 1em;
`;

const Div = styled.div`
    border: 1px solid ${(porps) => porps.theme.main.bgAccent};
    color: ${(porps) => porps.theme.main.scbg};
    border-radius: 10px;
    padding: 1em;
    display: grid;
    place-items: center;
    svg {
        width: 40px;
        height: 40px;
    }
`;

const Home = () => {
    const [snapshot, loading, error] = useDocumentOnce(firebase.firestore().doc("about/work-doc"));
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <AboutStyle variants={Pagetransiton} initial="init" animate="show" exit="hidden" transition={transition}>
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
            <Main>
                <h1>About Me!</h1>
                <p>I'm a 22 year old guy from sweden i'm kind and creative.</p>
                <p>
                    Things i'm most passionate about is web develepment In terms of the work. Love to code it's fun to
                    make things that have funktionality, or figureout how stuff works/funktions.
                </p>
                <p>
                    I'm currently looking for work/intership as a junior web developer to get myself more professional
                    experience.
                </p>
            </Main>
            <Main>
                <h1>Hobbies!</h1>
                <p>Programming, playing games and making games, cooking food and drawing.</p>
            </Main>
            <Main className="int">
                <h1>Intresst</h1>
                <Intresst>
                    <Div>
                        <FaGamepad /> <h2>Games</h2>
                    </Div>
                    <Div>
                        <FaCode /> <h2>Coding</h2>
                    </Div>
                    <Div>
                        <GiCookingPot /> <h2>Cooking</h2>
                    </Div>
                    <Div>
                        <FaPencilAlt /> <h2>Drawing</h2>
                    </Div>
                </Intresst>
            </Main>
            <Education error={error} loading={loading} snapshot={snapshot} />
            <Work error={error} loading={loading} snapshot={snapshot} />
        </AboutStyle>
    );
};

export default Home;
