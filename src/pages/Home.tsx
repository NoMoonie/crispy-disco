import styled from "styled-components";
import img from "img/worldinGlassBottle.jpg";
import FlipBox from "components/pagesComponets/homepage/FlipBox";

const HomeStyle = styled.div`
    background-image: url(${img});
    background-position: center;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr 2fr 1fr;
    height: 100vh;
    overflow: hidden;
    @media (max-width: 414px) {
        grid-template-columns: 0.1fr 8fr 0.1fr;
        grid-template-rows: 0.3fr 2fr 0.1fr;
    }
`;

const Home = () => {
    return (
        <HomeStyle>
            <FlipBox />
        </HomeStyle>
    );
};

export default Home;
