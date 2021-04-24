import styled from "styled-components";
import ListItem from "./ListItem";

const Box2Inner = styled.div`
    border-top: ${(props) => props.theme.main.border};
    padding: 2em;
    display: grid;
    gap: 2em;
`;

const Work = () => {
    return (
        <Box2Inner>
            <ListItem title="Lorem ipsum dolor" startdate="jun 2015" enddate="mar 2016">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore ex necessitatibus quam perspiciatis
                eaque aliquid impedit illo dolores voluptatem rem autem odit,
            </ListItem>
            <ListItem title="Lorem ipsum dolor" startdate="jun 2015" enddate="mar 2016">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore ex necessitatibus quam perspiciatis
                eaque aliquid impedit illo dolores voluptatem rem autem odit,
            </ListItem>
            <ListItem title="Lorem ipsum dolor" startdate="jun 2015" enddate="mar 2016">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore ex necessitatibus quam perspiciatis
                eaque aliquid impedit illo dolores voluptatem rem autem odit,
            </ListItem>
        </Box2Inner>
    );
};

export default Work;
