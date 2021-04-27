import styled from "styled-components";
import { Box1, Box2, ProfilePic } from "styled/aboutPageStyle";
import { MdWork } from "react-icons/md";
import { FaCertificate } from "react-icons/fa";
import Skills from "components/pagesComponets/aboutPage/Skills";
import Details from "components/pagesComponets/aboutPage/Details";
import List from "components/pagesComponets/aboutPage/List";
import ListItem from "components/pagesComponets/aboutPage/ListItem";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import firebase from "firebase/app";
import "firebase/firestore";

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
    const [snapshot, loading, error] = useDocumentOnce(firebase.firestore().doc("about/work-doc"));

    return (
        <AboutStyle>
            <Box1>
                <ProfilePic>
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
            <Box2>
                <h1>
                    <FaCertificate /> <p>Education</p>
                </h1>
                <List>
                    {error && <strong>Error: {JSON.stringify(error)}</strong>}
                    {loading && <span>Loading...</span>}
                    {snapshot?.data()?.education.map((item: any) => {
                        return (
                            <ListItem
                                key={item.title}
                                title={item.title}
                                startdate={item.startdate}
                                enddate={item.enddate}
                            >
                                {item.body}
                            </ListItem>
                        );
                    })}
                </List>
            </Box2>
            <Box2>
                <h1>
                    <MdWork /> <p>Work Experience</p>
                </h1>
                <List>
                    {error && <strong>Error: {JSON.stringify(error)}</strong>}
                    {loading && <span>Loading...</span>}
                    {snapshot?.data()?.work.map((item: any) => {
                        return (
                            <ListItem
                                key={item.title}
                                title={item.title}
                                startdate={item.startdate}
                                enddate={item.enddate}
                            >
                                {item.body}
                            </ListItem>
                        );
                    })}
                </List>
            </Box2>
        </AboutStyle>
    );
};

export default Home;
