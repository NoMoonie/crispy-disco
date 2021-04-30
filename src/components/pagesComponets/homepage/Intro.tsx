import ButtonWrapper from "components/pagesComponets/homepage/ButtonWrapper";
import { FC } from "react";
import styled, { keyframes } from "styled-components";

interface Homepage {
    open: boolean;
    setOpen: Function;
}

const top = keyframes`
    from{
        transform: translateY(-300%);
    }
`;

const Box1 = styled.div`
    border-radius: 10px;
    grid-row: 2/2;
    display: grid;
    place-content: center;
    cursor: default;
`;

const Box1inner = styled.span`
    font-size: 25pt;
    p {
        font-size: 12pt;
        color: ${(props) => props.theme.main.bgAccent};
        margin-top: 1em;
    }
    .one {
        animation: ${top} 700ms ease;
    }
    .two {
        color: ${(props) => props.theme.main.scbg};
        animation: ${top} 900ms ease;
    }
    .three {
        animation: ${top} 1100ms ease;
        border-bottom: 1px solid ${(props) => props.theme.main.scbg};
    }
`;

const Intro: FC<Homepage> = ({ open, setOpen }) => {
    return (
        <Box1>
            <Box1inner>
                <h1 className="one">Hi,</h1>
                <h1 className="two">I´m Emil,</h1>
                <h1 className="three">web developer.</h1>
                <p>Back end Debeloper / Front end Developer / React / Electronjs / Wordpress </p>
            </Box1inner>
            <ButtonWrapper open={open} setOpen={setOpen} />
        </Box1>
    );
};

export default Intro;
