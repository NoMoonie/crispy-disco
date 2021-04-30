import styled from "styled-components";
import { Link } from "react-router-dom";
import { Box1, Box1inner, Box2, Box2inner, LinkStyle, ButtonWrapper } from "styled/homepageStyle";
import { ReactComponent as Logo } from "img/logo.svg";
import { useState } from "react";
import { FaItchIo, FaGithub } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

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
                <ButtonWrapper>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <LinkStyle>
                            <Link className="link-page" to="/about">
                                About / CV
                            </Link>
                        </LinkStyle>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <LinkStyle onClick={() => setOpen(!open)}>Who am i</LinkStyle>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <FaItchIo
                            className="links"
                            onClick={() => window.open("https://nomoon404.itch.io/", "_blank")}
                        />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <FaGithub
                            className="links"
                            onClick={() => window.open("https://github.com/NoMoonie", "_blank")}
                        />
                    </motion.div>
                </ButtonWrapper>
            </Box1>
            <Box2>
                <Logo />
                <AnimatePresence>
                    {open && (
                        <motion.div
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    x: -50,
                                },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                },
                                removed: {
                                    opacity: 0,
                                    x: 50,
                                },
                            }}
                            initial="hidden"
                            animate="visible"
                            exit="removed"
                        >
                            <Box2inner>
                                <h1>About me!</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto illo ad quos animi
                                    eos, quaerat odit illum. Quidem incidunt, reiciendis delectus nisi corrupti
                                    molestias. Nobis, quaerat ut asperiores perferendis veniam officiis ea ducimus quasi
                                    dolorem tenetur eaque eligendi exercitationem quas porro. Consequatur odit tempora
                                    quod, corrupti nihil eligendi distinctio quia nesciunt architecto, dolor ipsum
                                    magnam ratione. Beatae quaerat recusandae hic ut possimus rem assumenda nostrum
                                    officia eligendi voluptas, porro blanditiis doloremque quos tenetur illum voluptatem
                                    fugit reprehenderit voluptatum similique velit. Inventore, similique beatae
                                    quibusdam quos error suscipit facere provident natus quasi consequatur neque eum
                                    itaque dolor! Atque numquam eligendi harum nostrum blanditiis, error voluptas
                                    perspiciatis. Praesentium amet impedit vel? Sequi, fugiat ducimus optio labore
                                    necessitatibus consequuntur voluptatibus eius iure deleniti quidem commodi quae
                                    mollitia. Earum error porro voluptas doloremque iste exercitationem, nisi facere
                                    illo facilis recusandae placeat ducimus consequuntur ea voluptate delectus, quo sunt
                                    libero esse in iusto saepe tempora?
                                </p>
                            </Box2inner>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Box2>
        </HomeStyle>
    );
};

export default Home;
