import styled from "styled-components";
import img from "img/worldinGlassBottle.png";
import FlipBox from "components/FlipBox";

const HomeStyle = styled.div`
    background-image: url(${img});
    background-position: center;
    display: grid;
    height: 100vh;
    overflow: auto;
    place-content: center;
    overflow: hidden;
`;

const Home = () => {
    return (
        <HomeStyle>
            <FlipBox />
        </HomeStyle>
    );
};

export default Home;
