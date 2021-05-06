import { FaItchIo, FaGithub, FaUserAlt, FaEnvelope } from "react-icons/fa";
import styled from "styled-components";
import { FC } from "react";
import Button from "components/Button";

interface Wrapperinterface {
    open: boolean;
    setOpen: Function;
}

const Wrapper = styled.section`
    padding-top: 1em;
    display: flex;
    gap: 1em;
    .links {
        width: 40px;
        height: 40px;
        cursor: pointer;
        color: ${(props) => props.theme.main.scbg};
        &:hover {
            color: ${(props) => props.theme.main.scAccent};
        }
    }
`;

const ButtonWrapper: FC<Wrapperinterface> = ({ open, setOpen }) => {
    return (
        <Wrapper>
            <Button icon={<FaUserAlt />} link="/about">
                About
            </Button>
            <Button icon={<FaEnvelope />} link="/contact">
                Contact
            </Button>
            <Button Primary icon={<FaItchIo />} onClick={() => window.open("https://nomoon404.itch.io/", "_blank")}>
                Itch
            </Button>
            <Button Primary icon={<FaGithub />} onClick={() => window.open("https://github.com/NoMoonie", "_blank")}>
                Github
            </Button>
        </Wrapper>
    );
};

export default ButtonWrapper;
