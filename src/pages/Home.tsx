import styled, {keyframes} from "styled-components";
import img from "img/worldinGlassBottle.png";

const fadein = keyframes`
from{
    opacity: 0%;
}
to{
    opacity: 100%;
}
`

const HomeStyle = styled.div`
    background-image: url(${img});
    background-position: center;
    display: grid;
    height: 100vh;
    overflow: auto;
    place-content: center;
`

const FlipBox = styled.div`
    
    background-color: transparent;
    width: 60em;
    height: 30em;
    perspective: 1000px;
`
const FlipBoxInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
`

const BoxFront = styled.div`
    color: ${props => props.theme.page.textColor};
    background-color: hsl(282.7722772277228, 100%, 80.19607843137256%, .5); 
    display: grid; 
    place-content: center;
    h1,h2{
        font-size: 60pt;
    }
`

const BoxBack = styled.div`
    background-color: ${props => props.theme.page.bg};
    color: ${props => props.theme.page.textColor};
    transform: rotateY(180deg);
`

const Home = () => {
    return (
        <HomeStyle>
           <FlipBox className="flip-box">
                <FlipBoxInner className="flip-box-inner">
                    <BoxFront className="flip-box-front">
                        <h2>Hello!</h2><br/><hr/><br/>
                        <h1>I'm Emil</h1>
                    </BoxFront>
                    <BoxBack className="flip-box-back">
                        <h2>Back Side</h2>
                    </BoxBack>
                </FlipBoxInner>
           </FlipBox>
        </HomeStyle>
    );
}

export default Home;
