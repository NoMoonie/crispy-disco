import { Pagetransiton, transition } from "components/Pageroutes";
import Button from "components/util/Button";
import { motion } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";
import { container, stagerdItems, transitions } from "styled/anim";

const ContactStyle = styled(motion.div)`
    color: ${(props) => props.theme.main.textColor};
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
`;

const Div = styled(motion.div)`
    background-color: ${(props) => props.theme.main.bg};
    display: grid;
    place-content: center;
    gap: 1em;
    h1 {
        color: ${(props) => props.theme.main.scbg};
        text-align: center;
    }
`;

const Input = styled(motion.input)`
    background-color: ${(props) => props.theme.main.bgAccent};
    color: ${(props) => props.theme.main.textColor};
    border: none;
    font-size: 18pt;
    padding: 0.5em;
    border-radius: 10px;
    width: 400px;
`;
const TextArea = styled(motion.textarea)`
    background-color: ${(props) => props.theme.main.bgAccent};
    color: ${(props) => props.theme.main.textColor};
    border: none;
    font-size: 18pt;
    padding: 0.5em;
    border-radius: 10px;
    height: 150px;
    max-height: 200px;
    max-width: 400px;
`;

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <ContactStyle variants={Pagetransiton} initial="init" animate="show" exit="hidden" transition={transition}>
            <Div variants={container} initial="hidden" animate="show">
                <h1>Get in touch</h1>
                <Input transition={transitions} variants={stagerdItems} placeholder="Name" />
                <Input transition={transitions} variants={stagerdItems} placeholder="Email" />
                <Input transition={transitions} variants={stagerdItems} placeholder="Subject" />
                <TextArea transition={transitions} variants={stagerdItems} placeholder="Message" />
                <Button>Send</Button>
            </Div>
        </ContactStyle>
    );
};

export default Contact;
