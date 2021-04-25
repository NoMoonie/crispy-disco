import styled from "styled-components";
import { Box1, Box2, ProfilePic } from "styled/aboutPageStyle";
import { MdWork } from "react-icons/md";
import { FaCertificate } from "react-icons/fa";
import Skills from "components/pagesComponets/aboutPage/Skills";
import Details from "components/pagesComponets/aboutPage/Details";
import List from "components/pagesComponets/aboutPage/List";
import ListItem from "components/pagesComponets/aboutPage/ListItem";

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
                <List>
                    <ListItem title="Lorem ipsum" startdate="jun 2014" enddate="mar 2016">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequuntur repellat eos nisi
                        ratione ab impedit iusto labore quas cumque reprehenderit exercitationem,
                    </ListItem>
                    <ListItem title="Lorem ipsum" startdate="jun 2014" enddate="mar 2016">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequuntur repellat eos nisi
                        ratione ab impedit iusto labore quas cumque reprehenderit exercitationem,
                    </ListItem>
                    <ListItem title="Lorem ipsum" startdate="jun 2014" enddate="mar 2016">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequuntur repellat eos nisi
                        ratione ab impedit iusto labore quas cumque reprehenderit exercitationem,
                    </ListItem>
                </List>
            </Box2>
            <Box2>
                <h1>
                    <FaCertificate /> <p>Education</p>
                </h1>
                <List>
                    <ListItem title="Lorem ipsum" startdate="jun 2014" enddate="mar 2016">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequuntur repellat eos nisi
                        ratione ab impedit iusto labore quas cumque reprehenderit exercitationem,
                    </ListItem>
                    <ListItem title="Lorem ipsum" startdate="jun 2014" enddate="mar 2016">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequuntur repellat eos nisi
                        ratione ab impedit iusto labore quas cumque reprehenderit exercitationem,
                    </ListItem>
                    <ListItem title="Lorem ipsum" startdate="jun 2014" enddate="mar 2016">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequuntur repellat eos nisi
                        ratione ab impedit iusto labore quas cumque reprehenderit exercitationem,
                    </ListItem>
                </List>
            </Box2>
        </AboutStyle>
    );
};

export default Home;
