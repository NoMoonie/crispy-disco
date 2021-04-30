import styled from "styled-components";
import { Box1, Box1inner, Box2 } from "styled/homepageStyle";
import AboutMe from "components/pagesComponets/homepage/AboutMe";
import { ReactComponent as Logo } from "img/logo.svg";
import { useState } from "react";
import ButtonWrapper from "components/pagesComponets/homepage/ButtonWrapper";

const HomeStyle = styled.div`
    color: ${(props) => props.theme.main.textColor};
    background-position: center;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    grid-template-rows: 1fr 2fr 1fr;
    height: 100vh;
    overflow: hidden;
    margin: 1em;
    gap: 1em;
`;

const Home = () => {
    const [open, setOpen] = useState(false);
    return (
        <HomeStyle>
            <Box1>
                <Box1inner>
                    <h1 className="one">Hi,</h1>
                    <h1 className="two">I´m Emil,</h1>
                    <h1 className="three">web developer.</h1>
                    <p>Back end Debeloper / Front end Developer / React / Electronjs / Wordpress </p>
                </Box1inner>
                <ButtonWrapper open={open} setOpen={setOpen} />
            </Box1>
            <Box2>
                <Logo />
                <AboutMe open={open} />
            </Box2>
        </HomeStyle>
    );
};

export default Home;
