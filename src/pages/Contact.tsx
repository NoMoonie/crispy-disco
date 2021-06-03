import { Pagetransiton, transition } from "components/Pageroutes";
import Button from "components/util/Button";
import { motion } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";
import { container, stagerdItems, transitions } from "styled/anim";
import emailjs from "emailjs-com";

const ContactStyle = styled(motion.div)`
    color: ${(props) => props.theme.main.textColor};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    min-height: 100vh;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
    @media (max-width: 400px) {
        min-height: 150vh;
    }
    place-content: center;
`;

const Div = styled(motion.div)`
    grid-column: 2/3;
    form {
        background-color: ${(props) => props.theme.main.bg};
        display: grid;
        place-content: center;
        padding: 2em;
        gap: 1em;
        grid-column: 2/3;
        h1 {
            color: ${(props) => props.theme.main.scbg};
            text-align: center;
        }
        border-radius: 10px;
        margin-bottom: 10em;
        position: relative;
        overflow: hidden;
    }
    .sub-button {
        justify-self: center;
        background: none;
        border-radius: 0.25em;
        border: 1px solid ${(props) => props.theme.main.scbg};
        color: ${(props) => props.theme.main.scbg};
        font-size: 1.5rem;
        width: 100px;
        height: 2em;
        cursor: pointer;
        :hover {
            border-color: ${(props) => props.theme.button.hover};
            color: ${(props) => props.theme.button.hover};
            filter: brightness(30%);
        }
    }
`;

const Input = styled(motion.input)`
    background-color: ${(props) => props.theme.main.bgAccent};
    color: ${(props) => props.theme.main.textColor};
    border: none;
    font-size: 14pt;
    padding: 0.5em;
    border-radius: 10px;
    width: 500px;
    height: 30px;
`;
const TextArea = styled(motion.textarea)`
    background-color: ${(props) => props.theme.main.bgAccent};
    color: ${(props) => props.theme.main.textColor};
    border: none;
    font-size: 14pt;
    padding: 0.5em;
    border-radius: 10px;
    max-height: 550px;
    min-height: 300px;
    max-width: 500px;
    min-width: 500px;
`;

const Overlay = styled.div`
    position: absolute;
    background-color: hsl(0, 0%, 0%, 0.9);
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
    div {
        background-color: ${(props) => props.theme.main.bg};
        padding: 2em;
        border-radius: 10px;
    }
`;

const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm("service_zyb2dqc", "template_33mmbib", e.target, "user_0kTCc6gGv0FGJgHwseMtL").then(
        (result) => {
            alert(result.text);
        },
        (error) => {
            alert(error.text);
        }
    );
    e.target.reset();
};

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <ContactStyle variants={Pagetransiton} initial="init" animate="show" exit="hidden" transition={transition}>
            <Div variants={container} initial="hidden" animate="show">
                <form onSubmit={sendEmail}>
                    <h1>Get in touch</h1>
                    <Input transition={transitions} variants={stagerdItems} placeholder="Name" name="name" />
                    <Input
                        required
                        transition={transitions}
                        variants={stagerdItems}
                        placeholder="Email*"
                        name="email"
                    />
                    <Input
                        required
                        transition={transitions}
                        variants={stagerdItems}
                        placeholder="Subject*"
                        name="subject"
                    />
                    <TextArea
                        required
                        transition={transitions}
                        variants={stagerdItems}
                        placeholder="Message*"
                        name="message"
                    />
                    <input className="sub-button" type="submit" value="send" />
                </form>
            </Div>
        </ContactStyle>
    );
};

export default Contact;
